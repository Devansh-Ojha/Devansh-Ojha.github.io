import { readFile, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { transform } from 'esbuild';

const root = process.cwd();
const sourcePath = resolve(root, 'src/pages/CVProjectDetail.jsx');
const temporaryModule = resolve(root, 'src/pages/.CVProjectDetail-prerender.mjs');
const dist = resolve(root, 'dist');
const output = resolve(dist, 'cvproj/proj4-part-a/index.html');

let markup;
try {
  const project4aJson = await readFile(resolve(root, 'src/data/project4a-derived.json'), 'utf8');
  const source = (await readFile(sourcePath, 'utf8')).replace(
    'import project4Data from "../data/project4a-derived.json";',
    `const project4Data = ${JSON.stringify(JSON.parse(project4aJson))};`
  );
  const { code } = await transform(source, { loader: 'jsx', format: 'esm', target: 'node20', jsx: 'automatic' });
  await writeFile(temporaryModule, code);
  const { default: CVProjectDetail } = await import(`${pathToFileURL(temporaryModule).href}?build=${Date.now()}`);
  const app = React.createElement(
    MemoryRouter,
    { initialEntries: ['/cvproj/proj4-part-a'] },
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: '/cvproj/:projectId',
        element: React.createElement(CVProjectDetail)
      })
    )
  );
  markup = renderToStaticMarkup(app);
} finally {
  await unlink(temporaryModule).catch(() => {});
}

let html = await readFile(resolve(dist, 'index.html'), 'utf8');
if (!html.match(/<link rel="stylesheet" crossorigin href="([^"]+\.css)">/)) {
  throw new Error('Could not locate the built site stylesheet for the static Project 4A page.');
}
html = html.replace(/\s*<script type="module" crossorigin src="[^"]+"><\/script>/, '');
html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
const { mkdir } = await import('node:fs/promises');
const { dirname } = await import('node:path');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, html);
console.log('Prerendered the Project 4A page for static delivery.');
