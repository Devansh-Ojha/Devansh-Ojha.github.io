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
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-blue-600 mb-4">01 / Project 1</p>
              <h1 className="mt-2 text-[clamp(2.25rem,4vw,5rem)] font-light leading-[0.92] tracking-[-0.06em] text-slate-800">
                Project 1: Images of the Russian Empire: Colorizing the Prokudin-Gorskii photo collection
              </h1>
            </header>

            <section className="py-2">
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Background Context</h2>
              <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                The goal of this project was to understand the differences using image processing techniques and produce a color image with as few visual artifacts as possible. In the images provided, we had a few .jpg and .tif images. The main challenge was to come up with ways to find the right approach for smaller-sized images (JPG) and for larger images (TIF).  Sergie took pictures in R, G, and B filters to capture the exposure of the scene. Using these different exposures captured, we can recreate the colored image. My goal in this project was to align the colored glass plates with each other to minimize visual artifacts using image processing methodology, as doing it by brute force (just straight up stacking it) would result in to be hazy and not aligned.

              </p>
              <figure className="max-w-2xl mx-auto mt-6">
                <img src="/download.png" alt="Colorized image alignment result" className="w-full rounded-lg border border-slate-200" />
                <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Colorized alignment result</figcaption>
              </figure>
            </section>

            <div className="my-8 border-t border-slate-200" />

            <section>
              <h2 className="text-[clamp(1.5rem,2vw,2.5rem)] font-light tracking-[-0.04em] leading-[1.05] text-slate-900">Single Scale Alignment</h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Explanation</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    When the images were smaller, such as the .jpg images, Single Scale Alignment was the most straightforward approach because of the reason that it is not that computationally expensive to check the possible shift when the image is of less quality/pixel or of low resolution. The way I did this was using the Normalized Cross-Correlation (NCC). We use NCC because we need a way to check how good the match is at a shift. The higher the NCC, the better the alignment it will give .
                  </p>
                </div>

                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Approach</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    My align function would, for both images, take the mean of their pixel values and then subtract it from every pixel to center the image closer ot 0. Then I normalized it using the L2 norm. Then I took the dot product between these normalized values to get the score. The way my function would work is to take an image path from the dataset I inserted in the Colab folder. Then it would break it apart and separate it based on the height (BGR). Once that was done, I cropped them by 10% because the dark edges were affecting the later NCC  score and therefore not giving the best quality of results.  Now my align function would find the best NCC score by going through an up-and-down (vertical and horizontal)  shift range in the -15 to 15 range. Then, for each position, I used np.roll to compute the NCC between the shifted image and the reference channel. I kept doing this and kept updating the score based on higher NCC, which would represent the best match location/alignment. After checking the shift, it would return the best offsets, which are then used to align the image in the end. BORDERS: These were important to crop out as they were not part of actual stuff in the image and also affect the NCC score giving non-optimal points. This is because they are usually darker regions and on the edges of the images.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto mt-6">
                <figure>
                  <img src="/monastery.jpg" alt="Monastery alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Monastery<br />Green (dy, dx): (-3, 2) | Red (dy, dx): (3, 2)</figcaption>
                </figure>
                <figure>
                  <img src="/tobolsk.jpg" alt="Tobolsk alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Tobolsk<br />Green (dy, dx): (3, 3) | Red (dy, dx): (6, 3)</figcaption>
                </figure>
                <figure>
                  <img src="/cathedral.jpg" alt="Cathedral alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Cathedral<br />Green (dy, dx): (5, 2) | Red (dy, dx): (12, 3)</figcaption>
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
                   Explanation- Now the task was a bit different compared to before, the .tif images were way bigger compared to the .jpg counterparts. This means it gets super costly and slow to check every shift in the full-resolution image; also, the +-15 window may not even be the best one, and thus it would require a larger range, which in turn would make it even slower.  I tried doing it with larger window of +-100 but it not only took extra long with similar quality result compared to +-15. This is where we introduce the image pyramid, where we can repeatedly shrink the image ( this includes both blurring and then downsampling) and do alignment at a coarser resolution.  Then we can find the alignment faster at that coarse level, because of less pixel to search. Then we can use the best point of alignment in the smallest image as a starting point for the search in the next larger image after scaling it up, rinse and repeat until the larger image is reached. This is what image pyramids refer to. It is more like recursion, solving a smaller problem and then coming back up. We keep using the new scaled estimate as your starting point as you move up. Now, rather than scanning a super large range of pixels, we only have to do it over maybe a handful of pixels to find the best fit.
                  </p>
                </div>

                <div>
                  <h3 className="text-[clamp(1rem,1.3vw,1.3rem)] font-light tracking-[-0.02em] leading-[1.2] text-slate-900">Approach</h3>
                  <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                    I used my align function and created another function called pyramidAlign() which uses recursion to go from coarse to fine. To achieve this, I use sk.transform. rescale to keep on going lowe until the +15-15 range can be used to find the best alignment using the same NCC function as before. Since one pixel at the smaller size is equivalent to about 2 pixels at the bigger scale, it then goes back to the earlier, larger resolution and doubles the shift. I then in the end run a smaller search of -4 to 4 to get the best alignment for the finest image

                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto mt-6">
                <figure>
                  <img src="/monastery.jpg" alt="Monastery pyramid alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Monastery<br />Green (dy, dx): (-3, 2) | Red (dy, dx): (3, 2)</figcaption>
                </figure>
                <figure>
                  <img src="/tobolsk.jpg" alt="Tobolsk pyramid alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Tobolsk<br />Green (dy, dx): (3, 3) | Red (dy, dx): (6, 3)</figcaption>
                </figure>
                <figure>
                  <img src="/cathedral.jpg" alt="Cathedral pyramid alignment example" className="w-full aspect-[3/2] object-cover rounded-lg border border-slate-200" />
                  <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Cathedral<br />Green (dy, dx): (5, 2) | Red (dy, dx): (12, 3)</figcaption>
                </figure>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-6">
                {[
                  ["church.jpg", "Church", [25, 4], [58, -4]],
                  ["harvesters.jpg", "Harvesters", [59, 16], [123, 13]],
                  ["icon.jpg", "Icon", [41, 17], [89, 23]],
                  ["ilemselga.jpg", "Ilemselga", [40, 7], [130, 11]],
                  ["melons.jpg", "Melons", [81, 10], [178, 13]],
                  ["religous_painting.jpg", "Religious painting", [27, 3], [68, 7]],
                  ["self_portrait.jpg", "Self portrait", [78, 29], [176, 37]],
                  ["siren.jpg", "Siren", [49, -6], [95, -25]],
                  ["three_generations.jpg", "Three generations", [53, 14], [112, 11]],
                  ["wharf.jpg", "Wharf", [15, -7], [82, -16]],
                  ["new1.jpg", "Portrait of woman", [48, 38], [107, 55]],
                  ["new2.jpg", "Person", [38, 21], [76, 35]],
                  ["new3.jpg", "Rocks", [40, 33], [94, 59]],
                  ["new4.jpg", "Soldier", [39, 8], [93, -6]]
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
                    The one that failed was the infamous Emir image. The reason for this failure was, as said in the spec, “ the images to be matched have different brightness values as they are different color channels. The NCC relies on the similarity of the pixels' intensity between channels, but in our case the difference causes a wrong score and therefore selects the wrong coordinate or the alignment. I tried increasing the border cropping and also increasing the search window, but it didn't affect it; this is when I realised why it was behaving the way it was.
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
                <figcaption className="mt-2 text-center text-xs text-slate-500 italic">Emir<br />Green (dy, dx): (49, 24) | Red (dy, dx): (95, -249)</figcaption>
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
                      ["Cathedral", [5, 2], [12, 3]],
                      ["Monastery", [-3, 2], [3, 2]],
                      ["Tobolsk", [3, 3], [6, 3]],
                      ["Siren", [49, -6], [95, -25]],
                      ["Church", [25, 4], [58, -4]],
                      ["Harvesters", [59, 16], [123, 13]],
                      ["Melons", [81, 10], [178, 13]],
                      ["Religious painting", [27, 3], [68, 7]],
                      ["Self portrait", [78, 29], [176, 37]],
                      ["Three generations", [53, 14], [112, 11]],
                      ["Wharf", [15, -7], [82, -16]],
                      ["Ilemselga", [40, 7], [130, 11]],
                      ["Emir", [49, 24], [95, -249]],
                      ["Portrait of woman", [48, 38], [107, 55]],
                      ["Person", [38, 21], [76, 35]],
                      ["Rocks", [40, 33], [94, 59]],
                      ["Soldier", [39, 8], [93, -6]]
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