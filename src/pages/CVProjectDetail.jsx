import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projectDetails = {
  proj0: {
    label: "Project 0",
    title: "Becoming Friends with Your Camera",
    description: "First Project",
    tech: ""
  },
  proj1: {
    label: "Project 1",
    title: "Project 1 Title",
    description: "Single-scale alignment, image pyramids, and failure analysis.",
    tech: "Computer Vision, Multi-scale Processing"
  }
};

const projectOneVisual = (src, alt, caption) => (
  <figure className="flex-1 min-w-0">
    <img src={src} alt={alt} className="w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm" style={{ borderRadius: "12px" }} />
    <figcaption className="mt-3 text-center text-xs text-slate-500 italic">{caption}</figcaption>
  </figure>
);

const CVProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <main className="relative min-h-screen max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-900">Project not found</h1>
        <Link to="/cvproj" className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold"><ArrowLeft size={16} /> Back to projects</Link>
      </main>
    );
  }

  if (projectId === "proj0") {
    return (
      <main className="relative min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Computer Vision projects
        </Link>

        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Project 0</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Camera perspective</h1>
          <p className="text-lg text-slate-600 leading-relaxed mt-5 max-w-3xl">
            An exploration of perspective, focal length, zoom, and the center of projection through three camera exercises.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/75 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 sm:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Part 1</p>
            <h2 className="text-2xl font-bold text-slate-900">Selfie: The Wrong Way vs. The Right Way</h2>
            <p className="text-slate-600 leading-relaxed mt-4">
             This is a picture of me. From what I noticed, the first picture looks distored while the other one looks way better. From my understand the reason for this is due the distance of object being super close to my camera lense, but when it is far away it more balanced the image appears more even.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <figure>
                <img src="/img-1783.jpg?v=part1" alt="Close-up selfie portrait" className="w-full rounded-lg" />
                <figcaption className="text-xs text-slate-500 mt-2">IMG_1783: close-up portrait</figcaption>
              </figure>
              <figure>
                <img src="/img-1798.jpg?v=part1" alt="Portrait taken from farther away with zoom" className="w-full rounded-lg" />
                <figcaption className="text-xs text-slate-500 mt-2">IMG_1798: farther away with zoom</figcaption>
              </figure>
            </div>
          </section>

          <section className="bg-white/75 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 sm:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Part 2</p>
            <h2 className="text-2xl font-bold text-slate-900">Architectural Perspective Compression</h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              For this part I pictured the building next to the new gateway building right after lecture on tuesday. I noticed when I am closer it was much more detailed and less flat. I believe this is the case due to the noise and camera algorithm smoothing out the photo which makes it look flatter and looses the details. When we are zooming from far it is introducing these noise elements and has to stretch the pixels to make it how we want it to appear and thus more flat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <figure>
                <img src="/img-1729.jpg" alt="Building photographed from farther away with zoom" className="w-full rounded-lg" />
                <figcaption className="text-xs text-slate-500 mt-2">IMG_1729: farther away with zoom</figcaption>
              </figure>
              <figure>
                <img src="/img-1732.jpg" alt="Building photographed closer without zoom" className="w-full rounded-lg" />
                <figcaption className="text-xs text-slate-500 mt-2">IMG_1732: closer without zoom</figcaption>
              </figure>
            </div>
          </section>

          <section className="bg-white/75 backdrop-blur-sm border border-slate-200/60 rounded-xl p-5 sm:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">Part 3</p>
            <h2 className="text-2xl font-bold text-slate-900">The Dolly Zoom</h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              For my dolly zoom I picked this Oat milk bottle, I used around 9 images to get this done, as you can see it appears like dolly zoom. To achieve this I kept the subject in same position and kept moving the camera back and zooming in to keep it the same size and position in the pictures i took.  The background appears to move forward and looks like it is changing distance. One thing I noticed is how my gif looses quality looks less sharp.
            </p>
            <img src="/dolly-zoom.gif" alt="Dolly zoom animation of an oat carton" className="w-full max-w-xl mx-auto rounded-lg mt-6" />
          </section>
        </div>

        <div className="mt-10 pt-5 border-t border-slate-200 text-sm text-slate-500"><span className="font-semibold text-slate-700">Tools:</span> Smartphone camera, zoom, still-image sequence, animated GIF</div>
      </main>
    );
  }

  if (projectId === "proj1") {
    const imageGrid = (leftSrc, leftAlt, leftCaption, rightSrc, rightAlt, rightCaption) => (
      <div align="center" style={{ marginTop: "1.5rem" }}>
        <table border="0" cellPadding="5" style={{ width: "100%", maxWidth: "860px", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ width: "50%", padding: "0.5rem", verticalAlign: "top", textAlign: "center" }}>
                <img src={leftSrc} width="400" alt={leftAlt} style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", border: "1px solid #e5e5e5", display: "block", margin: "0 auto" }} />
                <em style={{ display: "block", marginTop: "0.5rem", fontSize: "12px", color: "#666" }}>{leftCaption}</em>
              </td>
              <td style={{ width: "50%", padding: "0.5rem", verticalAlign: "top", textAlign: "center" }}>
                <img src={rightSrc} width="400" alt={rightAlt} style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", border: "1px solid #e5e5e5", display: "block", margin: "0 auto" }} />
                <em style={{ display: "block", marginTop: "0.5rem", fontSize: "12px", color: "#666" }}>{rightCaption}</em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <main className="relative min-h-screen bg-[#f8f8f8] text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-blue-600 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Computer Vision projects
          </Link>

          <article className="max-w-5xl">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-blue-600 mb-4">01 / Project 1 Title</p>
              <h1 className="mt-2 text-[clamp(2.25rem,4vw,5rem)] font-light leading-[0.92] tracking-[-0.06em] text-slate-800">
                Project 1 Title
              </h1>
            </header>

            <section className="py-2">
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Background Context</h2>
              <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                A short overview of the project goals, the problem being studied, and the reasoning behind the method.
              </p>
            </section>

            <div className="my-8 border-t border-slate-200" />

            <section>
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Single Scale Alignment</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Explanation</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    This section explains the theory behind single-scale alignment and how local correspondences are estimated before refinement.
                  </p>
                </div>

                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Approach</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    The implementation follows a direct alignment strategy: establish a consistent scale, select matching features, and evaluate the transformation before moving to more robust multi-scale refinement.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto mt-6">
                <figure>
                  <img src="/monastery.jpg" alt="Monastery alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Monastery<br />Green (dy, dx): (2, -3) | Red (dy, dx): (2, 3)</figcaption>
                </figure>
                <figure>
                  <img src="/tobolsk.jpg" alt="Tobolsk alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Tobolsk<br />Green (dy, dx): (3, 3) | Red (dy, dx): (3, 6)</figcaption>
                </figure>
                <figure>
                  <img src="/cathedral.jpg" alt="Cathedral alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Cathedral<br />Green (dy, dx): (2, 5) | Red (dy, dx): (3, 12)</figcaption>
                </figure>
              </div>
            </section>

            <div className="my-8 border-t border-slate-200" />

            <section>
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Image Pyramids</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Explanation</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    Multi-scale processing helps stabilize alignment when image content varies significantly across resolutions and detail levels.
                  </p>
                </div>

                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Approach</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    Image pyramids were used to iterate from coarse matches to fine-grained refinement, selecting the depth that best balances robustness and detail preservation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-6">
                {[
                  ["church.jpg", "Church", [4, 25], [-4, 58]],
                  ["harvesters.jpg", "Harvesters", [16, 59], [13, 123]],
                  ["icon.jpg", "Icon", [17, 41], [23, 89]],
                  ["ilemselga.jpg", "Ilemselga", [7, 40], [11, 130]],
                  ["melons.jpg", "Melons", [10, 81], [13, 178]],
                  ["religous_painting.jpg", "Religious painting", [3, 27], [7, 68]],
                  ["self_portrait.jpg", "Self portrait", [29, 78], [37, 176]],
                  ["siren.jpg", "Siren", [-6, 49], [-25, 95]],
                  ["three_generations.jpg", "Three generations", [14, 53], [11, 112]],
                  ["wharf.jpg", "Wharf", [-7, 15], [-16, 82]],
                  ["new1.jpg", "Portrait of woman", [38, 48], [55, 107]],
                  ["new2.jpg", "Person", [21, 38], [35, 76]],
                  ["new3.jpg", "Rocks", [33, 40], [59, 94]],
                  ["new4.jpg", "Soldier", [8, 39], [-6, 93]]
                ].map(([fileName, label, green, red]) => (
                  <figure key={fileName}>
                    <img src={`/${fileName}`} alt={`${label} alignment example`} className="w-full aspect-[4/3] object-cover rounded-lg border border-slate-200" />
                    <figcaption className="mt-2 text-center text-xs text-slate-500 italic">{label}<br />Green (dy, dx): ({green[0]}, {green[1]}) | Red (dy, dx): ({red[0]}, {red[1]})</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <div className="my-8 border-t border-slate-200" />

            <section>
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Failures</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Explanation</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    Failure cases arise when the alignment model encounters repeated structures, motion blur, or weak texture under large appearance changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Approach</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    These scenarios were analyzed to understand where the method diverges and which constraints or preprocessing steps could mitigate the breakdown.
                  </p>
                </div>
              </div>

              <figure className="max-w-sm mx-auto mt-6">
                <img src="/emir.jpg" alt="Emir failure case" className="w-full rounded-lg border border-slate-200" />
                <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Emir<br />Green (dy, dx): (24, 49) | Red (dy, dx): (-249, 95)</figcaption>
              </figure>
            </section>

            <section className="mt-10 max-w-4xl mx-auto">
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-center text-slate-900">Alignment Offsets</h2>
              <p className="mt-3 text-center text-sm text-slate-500">All offsets are listed in (dy, dx) format.</p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-sm text-center">
                  <thead>
                    <tr className="border-b border-slate-300 text-slate-700">
                      <th className="px-3 py-3 font-semibold">Image</th>
                      <th className="px-3 py-3 font-semibold">Green (dy, dx)</th>
                      <th className="px-3 py-3 font-semibold">Red (dy, dx)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    {[
                      ["Cathedral", [2, 5], [3, 12]],
                      ["Monastery", [2, -3], [2, 3]],
                      ["Tobolsk", [3, 3], [3, 6]],
                      ["Siren", [-6, 49], [-25, 95]],
                      ["Church", [4, 25], [-4, 58]],
                      ["Harvesters", [16, 59], [13, 123]],
                      ["Melons", [10, 81], [13, 178]],
                      ["Religious painting", [3, 27], [7, 68]],
                      ["Self portrait", [29, 78], [37, 176]],
                      ["Three generations", [14, 53], [11, 112]],
                      ["Wharf", [-7, 15], [-16, 82]],
                      ["Ilemselga", [7, 40], [11, 130]],
                      ["Emir", [24, 49], [-249, 95]],
                      ["Portrait of woman", [38, 48], [55, 107]],
                      ["Person", [21, 38], [35, 76]],
                      ["Rocks", [33, 40], [59, 94]],
                      ["Soldier", [8, 39], [-6, 93]]
                    ].map(([label, green, red]) => (
                      <tr key={label} className="border-b border-slate-200">
                        <td className="px-3 py-3 font-medium text-slate-800">{label}</td>
                        <td className="px-3 py-3">({green[0]}, {green[1]})</td>
                        <td className="px-3 py-3">({red[0]}, {red[1]})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-12"><ArrowLeft size={16} /> Back to Computer Vision projects</Link>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">{project.label}</p>
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{project.title}</h1>
      <p className="text-lg text-slate-600 leading-relaxed mt-6">{project.description}</p>
      <div className="mt-8 pt-5 border-t border-slate-200 text-sm text-slate-500"><span className="font-semibold text-slate-700">Stack:</span> {project.tech}</div>
    </main>
  );
};

export default CVProjectDetail;