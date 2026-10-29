import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(root, 'data/project4a-homographies.json');
const outputPath = resolve(root, 'src/data/project4a-derived.json');
const source = JSON.parse(await readFile(sourcePath, 'utf8'));

function buildSystem(src, dst) {
  if (src.length !== dst.length) throw new Error('Source and destination point counts differ.');
  const A = [];
  const b = [];
  for (let i = 0; i < src.length; i += 1) {
    const [x, y] = src[i].map(Number);
    const [xp, yp] = dst[i].map(Number);
    A.push([x, y, 1, 0, 0, 0, -x * xp, -y * xp]);
    A.push([0, 0, 0, x, y, 1, -x * yp, -y * yp]);
    b.push(xp, yp);
  }
  return { A, b };
}

function solveLeastSquares(A, b) {
  const n = 8;
  const augmented = Array.from({ length: n }, (_, row) => {
    const values = Array(n + 1).fill(0);
    for (let col = 0; col < n; col += 1) {
      for (let k = 0; k < A.length; k += 1) values[col] += A[k][row] * A[k][col];
    }
    for (let k = 0; k < A.length; k += 1) values[n] += A[k][row] * b[k];
    return values;
  });

  for (let col = 0; col < n; col += 1) {
    let pivot = col;
    for (let row = col + 1; row < n; row += 1) {
      if (Math.abs(augmented[row][col]) > Math.abs(augmented[pivot][col])) pivot = row;
    }
    if (Math.abs(augmented[pivot][col]) < 1e-12) throw new Error('Least-squares normal matrix is singular.');
    [augmented[col], augmented[pivot]] = [augmented[pivot], augmented[col]];
    const scale = augmented[col][col];
    for (let j = col; j <= n; j += 1) augmented[col][j] /= scale;
    for (let row = 0; row < n; row += 1) {
      if (row === col) continue;
      const factor = augmented[row][col];
      for (let j = col; j <= n; j += 1) augmented[row][j] -= factor * augmented[col][j];
    }
  }
  return augmented.map((row) => row[n]);
}

function homographyFromSystem(A, b) {
  const h = solveLeastSquares(A, b);
  return [h.slice(0, 3), h.slice(3, 6), [...h.slice(6, 8), 1]];
}

function formatMatrix(matrix) {
  const rows = matrix.map((row) => row.map(String));
  const widths = Array.from({ length: rows[0]?.length ?? 0 }, (_, col) =>
    Math.max(...rows.map((row) => row[col].length))
  );
  return `[[ ${rows[0].map((value, col) => value.padStart(widths[col])).join('  ')} ]\n${rows.slice(1).map((row) => ` [ ${row.map((value, col) => value.padStart(widths[col])).join('  ')} ]`).join('\n')}\n]`;
}

function withDisplayData(system) {
  const ellipsisRow = Array(system.A[0].length).fill('⋮');
  return {
    ...system,
    AText: formatMatrix(system.A),
    bText: formatMatrix(system.b.map((value) => [value])),
    previewAText: formatMatrix([...system.A.slice(0, 6), ellipsisRow]),
    previewBText: formatMatrix([...system.b.slice(0, 6).map((value) => [value]), ['⋮']])
  };
}

function verifyHomography(label, actual, expected) {
  const got = actual.flat().map((value) => Number(value).toFixed(6));
  const want = expected.flat().map((value) => Number(value).toFixed(6));
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    throw new Error(`${label}: computed H does not match the supplied six-decimal values.\nComputed: ${JSON.stringify(got)}\nSupplied: ${JSON.stringify(want)}`);
  }
}

const mosaics = source.mosaics.map((set) => {
  const { A, b } = buildSystem(set.src, set.dst);
  if (A.length !== set.matches * 2 || A.some((row) => row.length !== 8)) {
    throw new Error(`${set.title}: unexpected system dimensions.`);
  }
  verifyHomography(set.title, homographyFromSystem(A, b), set.H);
  return { ...set, ...withDisplayData({ A, b }) };
});

const rectifications = source.rectifications.map((rectification) => {
  const { A, b } = buildSystem(rectification.sourceCorners, rectification.targetCorners);
  if (JSON.stringify(A) !== JSON.stringify(rectification.A)) {
    throw new Error(`${rectification.title}: computed A does not exactly match the supplied A.`);
  }
  if (JSON.stringify(b) !== JSON.stringify(rectification.b)) {
    throw new Error(`${rectification.title}: computed b does not exactly match the supplied b.`);
  }
  verifyHomography(rectification.title, homographyFromSystem(A, b), rectification.H);
  return { ...rectification, ...withDisplayData({ A, b }) };
});

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify({ mosaics, rectifications }, null, 2)}\n`);
console.log('Project 4A systems verified; generated A and b data.');
