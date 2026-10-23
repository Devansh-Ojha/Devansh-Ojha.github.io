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
  },
  proj2: {
    label: "Project 2",
    title: "Project 2: Filters, Frequencies, and Blending",
    description: "Filters and Edges, Unsharp Masking, Hybrid Images, and Multiresolution Blending.",
    tech: "Computer Vision, Convolution, Frequency Domain, Image Blending"
  },
  proj3: {
    label: "Project 3",
    title: "Fun with Flow Models",
    description: ""
  }
};

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
                    My coloritup() function would, for both images, take the mean of their pixel values and then subtract it from every pixel to center the image closer ot 0. Then I normalized it using the L2 norm. Then I took the dot product between these normalized values to get the score. The way my function would work is to take an image path from the dataset I inserted in the Colab folder. Then it would break it apart and separate it based on the height (BGR). Once that was done, I cropped them by 10% because the dark edges were affecting the later NCC  score and therefore not giving the best quality of results. Now my coloritup() function would find the best NCC score by going through an up-and-down (vertical and horizontal) shift range in the -15 to 15 range. Then, for each position, I used np.roll to compute the NCC between the shifted image and the reference channel. I kept doing this and kept updating the score based on higher NCC, which would represent the best match location/alignment. After checking the shift, it would return the best offsets, which are then used to align the image in the end. BORDERS: These were important to crop out as they were not part of actual stuff in the image and also affect the NCC score giving non-optimal points. This is because they are usually darker regions and on the edges of the images.
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
                    I used my coloritup() function and created another function called Pyramidmulti() which uses recursion to go from coarse to fine. To achieve this, I use sk.transform.rescale to keep on going lower until the +-15 range can be used to find the best alignment using the same NCC function as before. Since one pixel at the smaller size is equivalent to about 2 pixels at the bigger scale, it then goes back to the earlier, larger resolution and doubles the shift. I then in the end run a smaller search of -4 to 4 to get the best alignment for the finest image

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
                  ["new4.jpg", "Soldier", [39, 8], [93, -6]],
                  ["emir.jpg", "Emir", [49, 24], [95, -249]]
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
                      ["Icon", [41, 17], [89, 23]],
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

  if (projectId === "proj2") {
    return (
      <main className="relative min-h-screen bg-[#f8f8f8] text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-blue-600 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Computer Vision projects
          </Link>

          <article className="max-w-5xl">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-blue-600 mb-4">02 / Project 2</p>
              <h1 className="mt-2 text-[clamp(2.25rem,4vw,4.5rem)] font-light leading-[1.0] tracking-[-0.05em] text-slate-800">
                Project 2: Fun with Filters and Frequencies!
              </h1>
              <p className="mt-4 text-slate-600 font-light text-lg">
                Exploring 2D convolutions, edge detection, unsharp masking, hybrid images, and multiresolution blending using Gaussian & Laplacian stacks.
              </p>
            </header>

            {/* PART 1 */}
            <section className="py-4">
              <h2 className="text-[clamp(1.75rem,2.5vw,3rem)] font-light tracking-[-0.04em] leading-[1.1] text-slate-900 mb-8 pb-3 border-b border-slate-200">
                Part 1: Filters and Edges
              </h2>

              {/* Part 1.1 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 1.1: Convolutions from Scratch!
                </h3>
                <ul className="ml-6 list-disc space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>In this task, I created the 2 convolution functions. One uses 4 for loops, and the other uses 2 for loops. Its goal is to multiply the kernel window by the flipped kernel and then sum it up. The implementation is shown in the code below!</li>
                  <li>I then tested the image with the 9*9 box filter, and looking at them visually, they both match!</li>
                  <li>In terms of padding, I implemented the full mode size. This means there were a few dark edges because the kernel went out of bounds. SciPy's <span className="font-mono text-slate-800">convolve2d</span> also defaults to full mode with zero padding, which is used for our comparison here.</li>
                  <li>In basic runtime, as expected, the 4-for-loop version was way inefficient, it was super slow. The 2-for-loop was comparatively faster because of the NumPy optimizations that vectorize the multiplication. The SciPy one was the fastest, as under the hood it is optimized for this specific task. The 2-for-loop implementation took 5.16 s, the 4-for-loop implementation took 50.61 s, and SciPy took 0.16 s.</li>
                </ul>

                <div className="mt-6 bg-slate-900 text-slate-100 rounded-xl p-5 overflow-x-auto shadow-sm border border-slate-800">
                  <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                    <code>{`def convol4(image, kernel):
  kernH, kernW = kernel.shape

  output = np.zeros((image.shape[0] + kernH - 1, image.shape[1] + kernW - 1))
  flip = np.flip(kernel)

  padding = np.pad(image, ((kernH - 1, kernH - 1), (kernW - 1, kernW - 1)), 'constant', constant_values=0)
  for i in range(image.shape[0] + kernH - 1):
    for j in range(image.shape[1] + kernW - 1):
      for k in range(kernH):
        for l in range(kernW):
          output[i, j] += (padding[i + k, j + l] * flip[k, l])
  return output

def convol2(image, kernel):
  kernH, kernW = kernel.shape

  flip = np.flip(kernel)

  output = np.zeros((image.shape[0] + kernH - 1, image.shape[1] + kernW - 1))
  padding = np.pad(image, ((kernH - 1, kernH - 1), (kernW - 1, kernW - 1)), 'constant', constant_values=0)

  for i in range(image.shape[0] + kernH - 1):
    for j in range(image.shape[1] + kernW - 1):
      output[i, j] = np.sum(np.multiply(padding[i:i + kernH, j:j + kernW], flip))

  return output

bFilter = np.ones((9, 9)) / 81

image = skio.imread("devansh.png", as_gray=True)

convuled4 = convol4(image, bFilter)
convuled2 = convol2(image, bFilter)

bultinstuff = convolve2d(image, bFilter, mode='full')`}</code>
                  </pre>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/convul2dResult.png" alt="Custom 2D Convolution Result" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Custom 2D Convolution Result</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/inBuiltFunc.png" alt="scipy.signal.convolve2d Result" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">scipy.signal.convolve2d (Built-in) Result</figcaption>
                  </figure>
                </div>
              </div>

              {/* Part 1.2 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 1.2: Finite Difference Operator
                </h3>
                <ul className="ml-6 list-disc space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>In this task, I convolved the Cameraman image given to us with Dx and Dy, which show vertical and horizontal edges, respectively. I also computed the gradient magnitude using the formula √(dx² + dy²).</li>
                  <li>Why is this the case? The reason is because Dx and Dy are just the difference between adjacent pixels, this mean whenever the brightness changes they show that. This explains why it detects the edges of our cameraman image but also the noise that comes with it.</li>
                  <li>This combines both of them into one image. I then binarized it, setting the threshold to 0.26. I did this because a lower threshold picks up noise such as grass and a lot of background, but if you set it too high, then the actual edges are broken. In my threshold, I tried to make sure I am balancing it somewhere in between for the best result, as this removes the grass noise and background noise a lot and doesn't lose too much of the edges of the Cameraman’s leg and tripod. </li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/dxCameraman.png" alt="Partial Derivative in X (dx)" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Partial Derivative in X (dx)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/dycameraman.png" alt="Partial Derivative in Y (dy)" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Partial Derivative in Y (dy)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/cameramanTheshold.png" alt="Binarized Edge Image with Threshold" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Binarized Edge Image (Threshold = 0.26)</figcaption>
                  </figure>
                </div>
              </div>

              {/* Part 1.3 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 1.3: Derivative of Gaussian (DoG) Filter
                </h3>
                <ul className="ml-6 list-disc space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>In this task, we were supposed to investigate the Derivative of Gaussian effect on the cameraman image. From what I noticed, compared to finite difference, smoothing reduced the high-frequency noise we saw from grass and background objects. This also makes the edges much cleaner than before without breaking.</li>
                  <li>I also saw that I was able to achieve much better results from a lower threshold of 0.11 compared to 0.26 from the previous part.</li>

                </ul>

                {/* Gaussian Blurred + Finite Difference */}
                <h4 className="text-base font-medium text-slate-800 mt-8 mb-3">1. Gaussian Smoothing followed by Finite Difference</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/blured.png" alt="Blurred Cameraman" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Blurred Image (σ = 2)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/newDx.png" alt="Blurred dx" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Derivative in X (newDx)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/newDy.png" alt="Blurred dy" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Derivative in Y (newDy)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/graMag.png" alt="Gradient Magnitude" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Gradient Magnitude</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/graMagWithThreshold.png" alt="Binarized Edge Image" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-700 font-semibold">Binarized Edges (Threshold = 0.11)</figcaption>
                  </figure>
                </div>

                <p className="mt-8 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  For the DoG filters, I convolved the Gaussian with Dx and Dy and then applied them to the cameraman image in a single convolution. It gave me an identical looking result to blurring and then taking a derivative, as convolution has the associative property. The blurring helps as it reduces noise by removing the change at pixel level, so now the derivative only catches the actual edges. The edges are also thicker in comparison to the finite difference.
                </p>

                {/* DoG Filters and Single Convolution */}
                <h4 className="text-base font-medium text-slate-800 mt-8 mb-3">2. Derivative of Gaussian (DoG) Filters & Single Convolution</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/derivativedx.png" alt="DoG Filter X" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">DoG Filter X (myDogx)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/derivativedy.png" alt="DoG Filter Y" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">DoG Filter Y (myDogy)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/DOGdx.png" alt="DoG dx Result" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Image * DoG X (bigDog)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/DogDy.png" alt="DoG dy Result" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Image * DoG Y (bigDogy)</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/graMag2.png" alt="DoG Gradient Magnitude" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">Gradient Magnitude</figcaption>
                  </figure>
                  <figure className="bg-white p-3 rounded-lg border border-slate-200 text-center">
                    <img src="/graMag2WithThreshold.png" alt="DoG Binarized Edges" className="w-full aspect-square object-contain rounded" />
                    <figcaption className="mt-2 text-xs text-slate-700 font-semibold">Binarized Edges (Threshold = 0.11)</figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <div className="my-10 border-t border-slate-200" />

            {/* PART 2 */}
            <section className="py-4">
              <h2 className="text-[clamp(1.75rem,2.5vw,3rem)] font-light tracking-[-0.04em] leading-[1.1] text-slate-900 mb-8 pb-3 border-b border-slate-200">
                Part 2: Fun with Frequencies!
              </h2>

              {/* Part 2.1 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 2.1: Image &quot;Sharpening&quot;
                </h3>
                <ul className="ml-6 list-disc space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>In this task, we are using the ideas of frequency to blur and then sharpen the image. To do this, I subtracted the blurred version from the original picture, and isolated the high-frequency components. Afterwards, I scaled these details using an alpha parameter and added them back to enhance image sharpness. The formula for <span className="font-mono text-slate-800">f<sub>s</sub></span> is <span className="font-mono text-slate-800">f + α(f − f ∗ G) = f ∗ ((1 + α)δ − αG)</span>. Key thing here is that the second form gives result in single convolution, it is just combining everything in one kernel. For the Taj Mahal, I tried alpha values of 1, 1.35, 2, and 5. What I noticed was that the low values give a subtle crispness in the arch and the dome of the Taj Mahal, whereas when alpha was 5, it was over-sharpened and much more contrasted, with more noise. This happens because high alpha is adding back the high frequency, hence making the edges more pronounced and increasing noise.</li>
                  <li>The other images I used were of some pumpkins and some flowers with the same values of 1.35 for my alpha, 2 for sigma, and 9 * 9 kernel, as they gave me a satisfying result. One key thing to notice is that sharpening doesn't add back the details lost after blurring, but rather enhances the ones that are there.</li>
                </ul>

                {/* Taj Mahal Sharpening with varying alpha */}
                <h4 className="text-base font-medium text-slate-800 mt-8 mb-4">Taj Mahal: Original, Blurred, and Sharpened with Varying α</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajOrignal.png" alt="Original Taj Mahal" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-xs">Original Image</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/TajBlured.png" alt="Blurred Taj Mahal" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 font-medium text-xs border border-amber-200/60">Blurred</span>
                      <span className="font-mono text-xs text-slate-500">σ = 2 | k = 9×9</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajresharp1.png" alt="Taj Mahal Sharpened alpha 1" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-200/60">Sharpened</span>
                      <span className="font-mono text-xs font-semibold text-slate-700">α = 1.0</span>
                      <span className="font-mono text-xs text-slate-400">σ = 2</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajHighFrequency.png" alt="High-frequency details in the Taj Mahal image" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 font-medium text-xs border border-violet-200/60">High Frequency</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-blue-300 ring-2 ring-blue-500/10 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajResharp1point35.png" alt="Taj Mahal Sharpened alpha 1.35" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white font-medium text-xs">Default / Optimal</span>
                      <span className="font-mono text-xs font-bold text-blue-900">α = 1.35</span>
                      <span className="font-mono text-xs text-slate-500">σ = 2</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajresharp2.png" alt="Taj Mahal Sharpened alpha 2" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-200/60">Enhanced</span>
                      <span className="font-mono text-xs font-semibold text-slate-700">α = 2.0</span>
                      <span className="font-mono text-xs text-slate-400">σ = 2</span>
                    </div>
                  </figure>

                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/tajresharp5.png" alt="Taj Mahal Sharpened alpha 5" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-medium text-xs border border-purple-200/60">High Sharpening</span>
                      <span className="font-mono text-xs font-semibold text-slate-700">α = 5.0</span>
                      <span className="font-mono text-xs text-slate-400">σ = 2</span>
                    </div>
                  </figure>
                </div>

                {/* Additional Test Images: Flower and Pumpkin */}
                <h4 className="text-base font-medium text-slate-800 mt-12 mb-4">Additional Test Images (Flower & Pumpkin)</h4>
                
                {/* Flower */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4">
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/flowerorg.png" alt="Original Flower" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-xs">Original Flower</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/flowerBlurred.png" alt="Blurred Flower" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 font-medium text-xs border border-amber-200/60">Blurred</span>
                      <span className="font-mono text-xs text-slate-500">σ = 2 | k = 9×9</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-blue-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/flowerResharp.png" alt="Resharpened Flower" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-200/60">Resharpened</span>
                      <span className="font-mono text-xs font-semibold text-slate-800">α = 1.35 | σ = 2</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/flowerHighFrequency.png" alt="High-frequency details in the flower image" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 font-medium text-xs border border-violet-200/60">High Frequency</span>
                    </div>
                  </figure>
                </div>

                {/* Pumpkin */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/pumpkingOrg.png" alt="Original Pumpkin" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-xs">Original Pumpkin</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/pumpBlurred.png" alt="Blurred Pumpkin" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 font-medium text-xs border border-amber-200/60">Blurred</span>
                      <span className="font-mono text-xs text-slate-500">σ = 2 | k = 9×9</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-blue-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/pumpresharp.png" alt="Resharpened Pumpkin" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium text-xs border border-blue-200/60">Resharpened</span>
                      <span className="font-mono text-xs font-semibold text-slate-800">α = 1.35 | σ = 2</span>
                    </div>
                  </figure>
                  <figure className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-sm flex flex-col justify-between">
                    <img src="/pumpkinHighFrequency.png" alt="High-frequency details in the pumpkin image" className="w-full aspect-[4/3] object-cover rounded-lg" />
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 font-medium text-xs border border-violet-200/60">High Frequency</span>
                    </div>
                  </figure>
                </div>
              </div>

              {/* Part 2.2 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 2.2: Hybrid Images
                </h3>
                <ul className="ml-6 list-disc space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>For the hybrid images, the goal is to create one image where, when we look closely, we see different objects, but when seen from far away, it becomes something else. To achieve this, we extract the low frequency of one image and the high frequency of the other one. The high-frequency image is visible up close, and the low-frequency one can be seen from far away, giving this illusion.</li>
                  <li>To do this, the first step was aligning the two images based on their eye; this was done using the starter code that was provided to us for aligning them. These images were then converted to grayscale, and once that was done, a low-pass Gaussian blur filter of one image and a high-pass (the other image - its Gaussian blur) filter were calculated. And then the hybrid image was created by taking the clipped sum.</li>
                  <li>I chose sigma values of 8 and 5 because they gave the best results for my hybrid images of Derek and Nutmeg. Derek's image gets a larger sigma, which gives it more blur, this means his smooth shapes are left, whereas Nutmeg has a smaller sigma, so its blur is subtracted, and the fine details are left. This allows it to give the hybrid image illusion we see in the image, with Nutmeg being more visible when closer.</li>
                  <li>For my other two images, I used an image of Cristiano Ronaldo (he is low pass) and Messi (high pass), and for the other one I used an emoji and an elephant. I used 9 and 6 after some trial and error as sigma values for both of them. Cristiano appears when looked at from far away, whereas Messi appears when looked at from close. For the other, the emoji gets low pass so it appears from far away, and the elephant gets a high pass, so it appears when closer.</li>
                </ul>

                {/* Hybrid 1: Derek + Nutmeg */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">Hybrid 1 (Full Pipeline): Derek + Nutmeg</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Original input images, filtered low/high frequency bands, and the final hybrid composition with their corresponding Fourier transforms.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_1.png" alt="Derek Original" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">1. Derek (Low Freq)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_2.png" alt="Derek FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Derek FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_3.png" alt="Nutmeg Original" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">2. Nutmeg (High Freq)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_4.png" alt="Nutmeg FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Nutmeg FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_5.png" alt="High-pass Filtered Nutmeg" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">3. Filtered High-pass</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_6.png" alt="High-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">High-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_7.png" alt="Low-pass Filtered Derek" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">4. Filtered Low-pass</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_8.png" alt="Low-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Low-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_11.png" alt="Hybrid Breakdown" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">5. Hybrid Breakdown</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_10.png" alt="Final Hybrid FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Hybrid FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/derek_9.png" alt="Final Hybrid Image" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-700 font-semibold">6. Final Hybrid</figcaption>
                    </figure>
                  </div>
                </div>

                {/* Hybrid 2: Ronaldo */}
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">Hybrid 2: Custom Hybrid (Ronaldo)</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Spatial images and corresponding Fourier transforms across the filtering and hybrid process.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_1.png" alt="Image 1" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Source 1 (Low-pass)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_2.png" alt="Image 1 FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Source 1 FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_3.png" alt="Image 2" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Source 2 (High-pass)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_4.png" alt="Image 2 FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Source 2 FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_5.png" alt="High-pass Filtered Messi" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">High-pass Filtered</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_6.png" alt="High-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">High-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_7.png" alt="Low-pass Filtered Ronaldo" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Low-pass Filtered</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_8.png" alt="Low-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Low-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_9.png" alt="Final Hybrid" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-700 font-semibold">Final Hybrid Result</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/ronaldo_10.png" alt="Hybrid FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Final Hybrid FFT</figcaption>
                    </figure>
                  </div>
                </div>

                {/* Hybrid 3: Elephant */}
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">Hybrid 3: Custom Hybrid (Elephant)</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Spatial images and corresponding Fourier transforms across the filtering and hybrid process.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_1.png" alt="Image 1" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Source 1 (Low-pass)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_2.png" alt="Image 1 FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Source 1 FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_3.png" alt="Image 2" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Source 2 (High-pass)</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_4.png" alt="Image 2 FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Source 2 FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_5.png" alt="High-pass Filtered Elephant" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">High-pass Filtered</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_6.png" alt="High-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">High-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_7.png" alt="Low-pass Filtered Emoji" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-600 font-medium">Low-pass Filtered</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_8.png" alt="Low-pass FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Low-pass FFT</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_9.png" alt="Final Hybrid" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-700 font-semibold">Final Hybrid Result</figcaption>
                    </figure>
                    <figure className="bg-white p-2 rounded-lg border border-slate-200 text-center shadow-sm">
                      <img src="/elephant_10.png" alt="Hybrid FFT" className="w-full aspect-square object-contain rounded" />
                      <figcaption className="mt-1 text-[11px] text-slate-500 italic">Final Hybrid FFT</figcaption>
                    </figure>
                  </div>
                </div>
              </div>

              {/* Part 2.3 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 2.3: Gaussian and Laplacian Stacks
                </h3>
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  In this task, I built the Gaussian and Laplacian stack for the orange and apple, which would be used for the multiresolution blend later on. I built a 5-level Gaussian stack by blurring the image with sigma values of 1, 2, 4, 8, 16 and a kernel size of 33 without downsampling. Once that was done, the Laplacian stack is just the difference between consecutive Gaussian levels: Li = Gi - G(i+1). One thing to notice is that it is super blurred on the last level because its the most blurred gaussian. Also to show the results, I had to normalize the Laplacian from levels 0 to 3. This is because the values can be negative, which comes out as black.
                </p>

                <div className="space-y-8 mt-8">
                  {/* Apple Gaussian */}
                  <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-800">Orange Gaussian Stack</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">k = 33</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                      <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                      <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                      <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                      <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                      <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                    </div>
                    <img src="/gausApple.png" alt="Orange Gaussian Stack" className="w-full object-contain rounded" />
                  </figure>

                  {/* Orange Gaussian */}
                  <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-800">Apple Gaussian Stack</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">k = 33</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                      <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                      <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                      <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                      <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                      <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                    </div>
                    <img src="/gausOrange.png" alt="Apple Gaussian Stack" className="w-full object-contain rounded" />
                  </figure>

                  {/* Apple Laplacian */}
                  <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-800">Apple Laplacian Stack</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">k = 33</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                      <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                      <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                      <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                      <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                      <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                    </div>
                    <img src="/lapApple.png" alt="Apple Laplacian Stack" className="w-full object-contain rounded" />
                  </figure>

                  {/* Orange Laplacian */}
                  <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-800">Orange Laplacian Stack</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">k = 33</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                      <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                      <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                      <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                      <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                      <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                    </div>
                    <img src="/lapOrange.png" alt="Orange Laplacian Stack" className="w-full object-contain rounded" />
                  </figure>
                </div>
              </div>

              {/* Part 2.4 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 2.4: Multiresolution Blending
                </h3>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  For this task, our goal was to make the Oraple image. To create that smooth edge finish, I made the Gaussian stack of the mask, and as noticed on the last level, it gets blurry in the middle, which would be used to blend the 2 images. The next thing I did was to get the Laplacian stack for each image. Then, after this, each level was blended, and I summed all of them in the end.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  The other irregular masks that I created are:
                </p>
                <ol className="mt-2 ml-6 list-decimal space-y-3 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  <li>
                    LegoDev: For the LEGO and my face blend. I created a custom mask of a square to capture my eyes, lips, and nose and then used the same blending technique from before to get the end result.
                  </li>
                  <li>
                    GiantBirdMonster: For the giant bird on the beach ( dinosaurs re-incarnated), I took my bird image, mapped it, then cut out the outline of the bird and stitched them together to create the mask. It was then used to blend the bird onto the beach, making it look as if the giant dinosaur that once ruled the world came back!! (Scary)
                  </li>
                </ol>

                {/* 1. Oraple */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">1. The Oraple</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Recreation of the classic Oraple blend using 5-level Gaussian and Laplacian stacks with <span className="font-mono text-slate-800 font-medium">σ ∈ [1, 2, 4, 8, 16]</span> and <span className="font-mono text-slate-800 font-medium">k = 33</span>.
                  </p>

                  <figure className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm max-w-md mx-auto mb-8">
                    <img src="/oraple.png" alt="Final Oraple Result" className="w-full aspect-square object-cover rounded-xl" />
                    <figcaption className="mt-3 text-sm font-semibold text-slate-800">
                      Final Oraple Blended Result
                    </figcaption>
                    <p className="text-xs text-slate-500 mt-1">Multi-resolution blend across 5 levels (σ = 1, 2, 4, 8, 16, k = 33)</p>
                  </figure>

                  <div className="space-y-6">
                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Vertical Seam Mask Gaussian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">5 Levels</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/MaskORaple.png" alt="Mask Gaussian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Apple Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Blended Component</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/oraple_stack1.png" alt="Apple Stack Levels" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Orange Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Blended Component</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/oraple_stack2.png" alt="Orange Stack Levels" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Combined Oraple Blended Laplacian Stack</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/oraple_blended_stack.png" alt="Combined Blended Laplacian Stack" className="w-full object-contain rounded" />
                    </figure>
                  </div>
                </div>

                {/* 2. Lego Head Blend (Irregular Mask) */}
                <div className="mt-12 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">2. Custom Blend 1: Lego Face (Irregular Mask)</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Custom multiresolution blend with an irregular mask separating foreground facial features and Lego geometry across 5 levels (<span className="font-mono text-slate-800 font-medium">σ ∈ [1, 2, 4, 8, 16], k = 33</span>).
                  </p>

                  <figure className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm max-w-md mx-auto mb-8">
                    <img src="/lego_final.png" alt="Final Lego Blended Result" className="w-full aspect-square object-cover rounded-xl" />
                    <figcaption className="mt-3 text-sm font-semibold text-slate-800">
                      Final Lego Blend Output
                    </figcaption>
                    <p className="text-xs text-slate-500 mt-1">Multi-resolution blend with irregular mask (σ = 1, 2, 4, 8, 16, k = 33)</p>
                  </figure>

                  <div className="space-y-6">
                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Irregular Mask Gaussian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">5 Levels</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/MaskLegoMe.png" alt="Irregular Lego Mask Gaussian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Source 1 Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Lego Geometry</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/lego_stack1.png" alt="Lego Image Laplacian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Source 2 Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Portrait Features</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/lego_stack2.png" alt="Face Image Laplacian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Combined Lego Blended Laplacian Stack</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/lego_blended_stack.png" alt="Combined Lego Blended Stack" className="w-full object-contain rounded" />
                    </figure>
                  </div>
                </div>

                {/* 3. Giant Bird on Beach */}
                <div className="mt-12 pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-light text-slate-900 mb-3">3. Custom Blend 2: Giant Bird on Beach</h4>
                  <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600 mb-6">
                    Custom multiresolution blend seamlessly integrating a giant bird onto a beach background across 5 frequency bands (<span className="font-mono text-slate-800 font-medium">σ ∈ [1, 2, 4, 8, 16], k = 33</span>).
                  </p>

                  <figure className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm max-w-md mx-auto mb-8">
                    <img src="/bird_final.png" alt="Final Giant Bird on Beach Result" className="w-full aspect-square object-cover rounded-xl" />
                    <figcaption className="mt-3 text-sm font-semibold text-slate-800">
                      Final Bird on Beach Blend Output
                    </figcaption>
                    <p className="text-xs text-slate-500 mt-1">Multi-resolution blend (σ = 1, 2, 4, 8, 16, k = 33)</p>
                  </figure>

                  <div className="space-y-6">
                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Bird Mask Gaussian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">5 Levels</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/bird_mask_stack.png" alt="Bird Mask Gaussian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Source 1 Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Bird Subject</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/bird_stack1.png" alt="Bird Image Laplacian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Source 2 Laplacian Stack</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-mono text-xs text-slate-600">Beach Background</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/bird_stack2.png" alt="Beach Image Laplacian Stack" className="w-full object-contain rounded" />
                    </figure>

                    <figure className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-800">Combined Bird Blended Laplacian Stack</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center text-[11px] font-mono text-slate-600 bg-slate-50/80 rounded-t-lg py-2 border-b border-slate-100 mb-2">
                        <div>Level 0 <span className="text-slate-400">(σ=1)</span></div>
                        <div>Level 1 <span className="text-slate-400">(σ=2)</span></div>
                        <div>Level 2 <span className="text-slate-400">(σ=4)</span></div>
                        <div>Level 3 <span className="text-slate-400">(σ=8)</span></div>
                        <div>Level 4 <span className="text-slate-400">(σ=16)</span></div>
                      </div>
                      <img src="/bird_blended_stack.png" alt="Combined Bird Blended Stack" className="w-full object-contain rounded" />
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-10 border-t border-slate-200" />

            {/* WHAT I LEARNED */}
            <section className="py-4">
              <h2 className="text-[clamp(1.75rem,2.5vw,3rem)] font-light tracking-[-0.04em] leading-[1.1] text-slate-900 mb-6">
                What I learned from this project!
              </h2>
              <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                I learned that image processing is not just a black box or something you have to use ML to achieve. There are a lot of novel techniques based on exploiting frequency and other methods to achieve an effect that I used to see on the Internet or in mobile apps. For example, we use Gaussian-based ideas for blending the seams of two images, or sharpening and creating cool hybrid images.  It was also interesting to see how we can pick different kernel sizes, sigma values, alpha values, or different ways to write convolutions. It truly explains how we have to fine-tune these numbers to get the desired results, especially for the hybrid images. Another cool thing I learned was from reading the paper and the pyramid method of doing the multiresolution blending, it is always nice to learn about other potential solutions to a problem even if I didn't use them. I believe sometimes we forget how we can make a lot from these image ideas without bringing out the heavy guns. Frequency has been a really important topic in research, and this just goes to show the other fascinating things it can do that we don't necessarily learn in more math-focused classes.
              </p>
            </section>
          </article>
        </div>
      </main>
    );
  }

  if (projectId === "proj3") {
    const partASections = [
      { title: "1.1 Constructing Noisy Training Inputs", images: ["1_1.png", "p.png"] },
      { title: "1.2 Classical Denoising", images: ["1_2a.png", "1_2b.png", "1_2c.png"] },
      { title: "1.3 One-Step Denoising", images: ["1_3.png", "1_3b.png", "1_3c.png"] },
      { title: "1.4 Visualizing Velocity", images: ["1_4Original.png", "1_4a.png", "1_4b.png", "1_4c.png"] },
      { title: "1.5 Iterative Denoising with Euler Sampling", images: ["1_5a.png", "1_5b.png"] },
      { title: "1.6 Generating Images from Noise", images: ["1_6.png"] },
      { title: "2.1 Classifier-Free Guidance (CFG)", images: ["2_1.png"] },
      { title: "3.1 Image-to-Image Editing", images: ["3_1a.png", "3_1b.png", "3_1c.png", "3_1dHandDrawn1.png", "3_1d_web.png"] },
      { title: "3.2 Text-Guided Image Editing", images: ["3_2.png", "3_2a.png", "3_2b.png"] },
      { title: "3.3 Visual Anagrams", images: ["3_3a.png", "3_3b.png"] },
      { title: "3.4 Hybrid Images", images: [] },
      { title: "Reflection", images: [] }
    ];
    const partAImageLabels = {
      "1_1.png": "Figure 1.1",
      "1_2a.png": "Figure 1.2(a)",
      "1_2b.png": "Figure 1.2(b)",
      "1_2c.png": "Figure 1.2(c)",
      "1_3.png": "Figure 1.3",
      "1_3b.png": "Figure 1.3(b)",
      "1_3c.png": "Figure 1.3(c)",
      "1_4Original.png": "Figure 1.4: Original image",
      "1_4a.png": "Figure 1.4(a)",
      "1_4b.png": "Figure 1.4(b)",
      "1_4c.png": "Figure 1.4(c)",
      "1_5a.png": "Figure 1.5(a)",
      "1_5b.png": "Figure 1.5(b)",
      "1_6.png": "Figure 1.6",
      "2_1.png": "Figure 2.1",
      "3_1a.png": "Figure 3.1(a)",
      "3_1b.png": "Figure 3.1(b)",
      "3_1c.png": "Figure 3.1(c)",
      "3_1dHandDrawn1.png": "Figure 3.1(d): Hand-drawn result",
      "3_1d_web.png": "Figure 3.1(d): Web result",
      "3_2.png": "Figure 3.2",
      "3_2a.png": "Figure 3.2(a)",
      "3_2b.png": "Figure 3.2(b)",
      "3_3a.png": "Figure 3.3(a)",
      "3_3b.png": "Figure 3.3(b)"
    };
    const partAIntro = <p>For Part A of the project, I used the pretrained flow model provided to us. The goal is to learn how velocity can transform noise into an image on a natural manifold. We go from <i>t</i> = 0, which is pure noise, to <i>t</i> = 1, which is a clean image. In Part A, we use the pretrained model, so no training was needed. I wrote the code for the Euler step, interpolation, and CFG, which I then used to denoise and generate the images presented.</p>;
    const partAWriteups = {
      "1.1 Constructing Noisy Training Inputs": <p>For this part, we interpolate a clean image and noise using the formula <i>x</i><sub>t</sub> = (1 − <i>t</i>)<i>e</i> + <i>t x</i><sub>1</sub>. I observed that at <i>t</i> = 0.25, the noise is dominant in the image, making it hard to figure out what the image is. At 0.75, it gets a little grainy with noise and has a little less contrast. This makes sense according to the formula: the noise power would decrease as we increase <i>t</i>. The color looked washed out because there is “less of the real image” left after processing, so it looks bland.</p>,
      "1.2 Classical Denoising": <p>One thing to note from the result is that at <i>t</i> = 0.25 with σ = 8, we get almost nothing, and the image of the parrot is almost unrecognizable. It is better at <i>t</i> = 0.75 with σ = 2. At <i>t</i> = 0.50 and σ = 4, it is a transition, and the features and overall structure look soft. The more noise there is, the worse the blur makes the image look. You can’t see any proper details of the parrot when there is more noise; only when there is less noise does the blur still show any solid structure of the parrot.</p>,
      "1.3 One-Step Denoising": <p>One thing I saw was that at <i>t</i> = 0.75, the one-step result is clean and really close to the original. Looking at <i>t</i> = 0.25 and 0.50, though, the images look like they came from Pokémon and are super smooth and blurred. The fine details are gone. The reason they look smooth is that one prediction is trying to jump to a clean image, which makes it uncanny. At <i>t</i> = 0.25, it is the average of every possibility for the image, so the details are not picked. At a later stage, like 0.75, we don’t have this problem, and there is a velocity toward the actual cleaner image.</p>,
      "1.4 Visualizing Velocity": <p>The outlines in the RGB RMS were clearly visible at <i>t</i> = 0.25, faded a little at <i>t</i> = 0.50, and were much less visible at <i>t</i> = 0.75. What remained was primarily the railing, a few features, and the feet. This is what I expected because less noise would mean a better prediction by the model.</p>,
      "1.5 Iterative Denoising with Euler Sampling": <p>What I saw here was that at <i>t</i> = 0.50, the image was very noisy, but it slowly got better, and at <i>t</i> = 1.0, it was clean. The fine details started coming through around <i>t</i> = 0.9. Compared with the blur and one-step results, the Euler result is the sharpest and has better texture, I feel.</p>,
      "1.6 Generating Images from Noise": <p>The generic prompt primarily favors white race portraits of humans, showing only their upper bodies. Most of them look uncanny, and some even have distorted faces. Most are also facing away from the screen, and most wear plain T-shirts (such as white and black).</p>,
      "2.1 Classifier-Free Guidance (CFG)": <p>From this section, I noticed that the CFG images are better and cleaner. They look mostly natural, with small defects. The images are also facing us rather than away from us. The quality is better, but most of them look similar (like the morphism lecture we talked about).</p>,
      "3.1 Image-to-Image Editing": <div className="space-y-3">
        <p><strong>Image-to-image editing</strong></p>
        <p><strong>Campanile:</strong> At <i>t</i> = 0.02, only a pale white shape is left. From 0.04 to 0.10, there is a tower, but in a totally different landscape. From <i>t</i> = 0.14 on, it is close to the original, and by 0.25 to 0.50, the clock and arches are back in the result.</p>
        <p><strong>My image 1 (parrot):</strong> At <i>t</i> = 0.02, the parrot is gone completely, and it has turned into a smiling man (this was kind of funny, lol). From 0.04 to 0.10, there is a weird mix of distorted shapes. The parrot comes back around <i>t</i> = 0.14 and is almost identical to the original by 0.25 to 0.50. Also, at <i>t</i> = 0.25, it looks like a Pokémon (just wanted to mention this).</p>
        <p><strong>My image 2 (lighthouse/tower scene):</strong> At <i>t</i> = 0.02, it turned into a person holding something cubical, and from 0.04 to 0.06, it became a mountain landscape. Around <i>t</i> = 0.10, a tower shows up, like the one in Seattle, in the mountains, and from 0.14 on, it gets close to my original photo.</p>
        <p><strong>Web:</strong> For the web image, I picked an image of an emoji that looks as if it is whistling. In the result at <i>t</i> = 0.06, the eyes were distorted into some letters. Later, it seems the lines on the emoji were gone, and it was a smoother, lighter variation of blue compared with the starting point.</p>
        <p><strong>Hand-drawn image 1:</strong> I made an image of a sprouting plant. It was quite interesting to see that at iteration <i>t</i> = 0.02, it turned into some kind of iPad/tablet structure, and at <i>t</i> = 0.06, into a laptop with a charger. At <i>t</i> = 0.10, it looks just a bit realistic, though not completely, with weird symbols at the bottom.</p>
        <p><strong>Hand-drawn image 2:</strong> I made a blue drawing of a bowling ball. It was interesting to see that it was first transformed into a woman with an Afro-like hairstyle and, at <i>t</i> = 0.06, into something like carrom board pieces, which look a bit realistic. Again, at <i>t</i> = 0.10, it looks the best, according to me.</p>
      </div>,
      "3.2 Text-Guided Image Editing": <div className="space-y-4">
        <ul className="ml-6 list-disc space-y-3">
          <li>For the Campanile, at <i>t</i> = 0.02 to 0.04, it is a rocket on a launch pad. From <i>t</i> = 0.06 to 0.14, the tower turns into a white rocket but keeps the same framing. By 0.25 to 0.50, it is mostly just the tower again.</li>
          <li>For the parrots, at least you get a clear toucan. At <i>t</i> = 0.14, it is a toucan-parrot mix that keeps the original colors. At 0.25 to 0.50, it is the parrot with a less “painty” look, but at <i>t</i> = 0.50, it is a bit distorted at the beak. The prompt I used was “a painting of a toucan on a branch.”</li>
          <li>For the lighthouse image, at low <i>t</i>, it is a lighthouse in a desert. At mid <i>t</i>, it is a lighthouse with the original’s trees and layout. By 0.50, it is again almost the original scene.</li>
        </ul>
        <p className="mt-4">I noticed that when <i>t</i> is lower, the result follows the prompt. When <i>t</i> is higher, the original is more visible, and mid <i>t</i> (around 0.06 to 0.14) is where the best mix of both worlds is.</p>
      </div>,
      "3.3 Visual Anagrams": <div className="max-w-4xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-blue-600">For this part, my prompts were as follows:</p>
        <ol className="ml-6 list-decimal space-y-3">
          <li>For the first image, the upright prompt was “an oil painting of a vintage red pickup truck,” and the rotated prompt was “an oil painting of a red wooden barn.”</li>
          <li>For the second image, the upright prompt was “an oil painting of a stag with antlers,” and the rotated prompt was “an oil painting of an oak tree in winter.”</li>
        </ol>
        <p className="mt-4">The truck and barn one was a decent result, and I could easily see the barn and the vintage truck. The brown liquid at the bottom of the car acts as the roof when flipped, and the red color of the barn works well when flipped, creating the illusion. I think the only weird part was the entrance, as that didn’t translate that well. The stag and tree one worked beautifully: the antlers became branches, and the face became the trunk. I think this one was the best result, as the empty branches work well as antlers.</p>
      </div>,
      "3.4 Hybrid Images": <div className="space-y-4">
        <div className="space-y-2"><p className="font-semibold text-slate-800"><strong>Image 1</strong></p><p>Hybrid image prompts:</p><ul className="ml-6 list-disc space-y-1"><li>Close: “a lithograph of a wolf howling”</li><li>Far away: “a lithograph of a skull”</li></ul><p>When I looked at the image, the wolf was howling. When I looked at it from afar, it looked like a skull.</p></div>
        <div className="space-y-2"><p className="font-semibold text-slate-800"><strong>Image 2</strong></p><p>Hybrid image prompts:</p><ul className="ml-6 list-disc space-y-1"><li>Close up: “an oil painting of a pigeon”</li><li>Far away: “an oil painting of a mountain peak with snow”</li></ul><p>The image looks like a pigeon up close, and then it looks like a snowy mountain peak.</p></div>
        <p>What I noticed was that it was important to have similar shapes, because I tried doing a cow face and forest, but it didn’t come out so well. To create a hybrid, I kept the low frequencies of one prompt’s velocity and added the high frequencies of the other (its prediction minus its blur). I then used that combined velocity in the update. So the image looks like the low-frequency prompt from far away and the high-frequency prompt up close.</p>
      </div>,
      "Reflection": <p>For Part A the image editing stuff was super cool, it was interesting to see my images become the randomest object and how different it showed various different images. I also noticed that CFG made the portraits cleaner, but they all started looking the same though. The hybrids and anagrams took the most trial and error. They only worked when the two prompts had  possibly similar shapes.</p>
    };
    const partBScreenshotImages = (folder, labels) => labels.map(([fileName, label]) => ({
      src: `/proj3b/${folder}/${encodeURIComponent(fileName)}`,
      label
    }));
    const partBDiagram = (fileName, label) => ({
      src: `/proj3b/diagrams/${fileName}`,
      label
    });
    const partBIntro = <p>In this part our goal is to train our model on the handwritten dataset from MNIST. Specifically we are training a flow matching model here. We are making a Unet, then adding time conditioning to Unet and then class conditioning to our Unet.</p>;
    const partBWriteups = {
      "Part 1: Training a Single-Step Denoising UNet": <p>We first startup with a one step denoiser, this means given an image , we train denoiser so that it can map the image to clean image. To achieve this we use a L2 loss. Here D = Denoiser, z = given image and x is the clean image</p>,
      "1.1 Implementing the UNet": <p>In this task I implemented the denoiser as an unconditional U-Net. To do this we use downsample and upsample blocks with skip connections. We take the input and then keep on downsampling until we reaches a 7x7 resolution. This then flattened into a 1x1 tensor and then unflattened back to 7x7 using a transposed convolution, I then upsample it back to the original. Skip connections are used to preserve details that might be lost from before. The goal is to learn the patterns  when the image is shrinked and then expand to original.</p>,
      "1.2 Using the UNet to Train a Denoiser": <ul className="list-disc pl-6"><li>I added noise using sigma values of  0.0, 0.2, 0.4, 0.5, 0.6, 0.8, and 1.0. The digits stay readable up to 0.4, then it gets difficult around 0.5 to 0.6, and later are covered in noise.</li></ul>,
      "1.2.1 Training": <p> The loss drops fast in the first couple hundred steps and flattens at about 0.01. After epoch 1 the denoised digits are already clean, and epoch 5 is a little sharper. The batch size was 256, Adam learning rate was 1e-4, hidden dimension was 128 and noise sigma 0.5. I used MSE loss for output and clean image comparison for the plot.</p>,
      "1.2.2 Out-of-Distribution Testing": <p>It works well up to about sigma = 0.6. At sigma = 0.8 the strokes break and get distorted, and at the highest noise the digits are badly damaged. It was only trained at sigma  0.5, so it struggles with higher noise.</p>,
      "1.2.3 Denoising Pure Noise": <div className="space-y-4"><p>At epoch 1 and epoch 5, every output is the super blurry structure and it doesn't matter what the input noise is. Another thing was that the Loss plateaus at about 0.07. Pure noise tells the model nothing about which digit to draw, so under MSE the best it can do is output the center. This means the average of all the training images. This is why one-step denoising can't generate different digits.</p><p>The stats used here were Dimensions 128, 5 epochs, batch size 256 and learning rate 1e-4. Input here was gaussian noise and the target we were trying for was a clean image.</p></div>,
      "Part 2: Training a Flow Matching Model": <div className="space-y-3"><p>The main takeaway from the last part was tha single step denoise doesn't work that well for the generative task, this is because map the whole thing in ones step instead of doing it in small steps.</p><p>To fix this we we will be iteratively denoise the image using the Flow matching style</p></div>,
      "2.1 Adding Time Conditioning to UNet": <p>I added time conditioning with two FCBlocks that embed the normalized t. The output of the first multiplies the unflatten features, and the second multiplies the first upsampled features. That way the network knows how noisy its input is.</p>,
      "2.2 Training the UNet": <div className="space-y-4"><p>What I observed was that the loss starts very high and then drops, and then stays flat at a low value. One key thing to notice is that flow matching loss never gets near zero, the explanation for this is as the noise component of the target is unpredictable, it would never be perfect.</p><p>The stats used here were 10 epochs, batch size 64, dimensions 64 and learning rate 1e-2 (exponential decay) and sampling had 50 euler steps</p></div>,
      "2.3 Sampling from the UNet": <p>At epoch 1 the samples are just scribbles that don't look like digits, kind of like a kid drew them. By epoch 5 a lot of them are recognizable, and by epoch 10 they're cleaner with smoother strokes. A few are still ambiguous or malformed. I think that's because the model has no class label, so it has to decide which digit to draw and draw it at the same time.</p>,
      "2.4 Class Conditioning": <p>I added class conditioning to the time-conditioned UNet with two more FCBlocks that take a one-hot class vector. Then  their job is to modulate the unflatten features and the first upsampled features. This is similar to what time does. During sampling I run the model with and without the class and combine them with gamma = 5.</p>,
      "2.5 Training the UNet": <div className="space-y-4"><p>The loss drops super fast in the starting steps, then it stays flatter, almost the same as the time-only curve. One thing to notice here is that it never gets close to zero. This is because the target includes random noise the model can't predict to the exact degree.</p><p>The stats uses for this were: 10 epochs , with dimensions 64, batch size 64, learning rate at 1e-2 with the exponential decay schedule.</p></div>,
      "2.6 Sampling from the UNet": <div className="space-y-4"><p>When I looked at epoch 1 there were still weird digits present, but most were good. When we reach epoch 5 and 10 all ten classes, the results get clearer and easy to decipher. It gave us better result when comparing it to time-only UNet as the labels and CFG remove the guessing about the digit and makes it easier to predict</p><p>For the scenario with the scheduler removed. I trained a model for 10 epochs with a constant learning rate of 1e-3. I picked this because after some research about torch adam I found this is where the scheduler brings learning rate by the last epoch. Everything else was the same. If comparing both of them they both came out quite, with minor weird notches. If you were to ask me blindly which one is which, I couldn't have guessed. The loss curve for no-scheduler shows it starts way lower, around 1.25, and flattens out like with scheduler.</p></div>,
      "Reflection": <p>I think the important thing I observed was that the one-step denoiser works for cleaning up noisy digits, but when the input is pure noise it just outputs the average digit. In Flow matching though it  fixes this by predicting a small velocity at each step instead of the whole image at once, so that we get sharp and also varied digits. Class Conditioning was also super interesting as  the time-only model still made some weird digits, but adding class labels and CFG made it significantly better. I learned the key is to have enough iteration and not to make big jumps.</p>
    };
    const partBSections = [
      {
        title: "Part 1: Training a Single-Step Denoising UNet",
        images: [partBDiagram("1.png", "Training loss equation")]
      },
      {
        title: "1.1 Implementing the UNet",
        images: [
          partBDiagram("1_1.png", "UNet architecture"),
          partBDiagram("1_1_2.png", "UNet operations")
        ]
      },
      {
        title: "1.2 Using the UNet to Train a Denoiser",
        images: ["0.0", "0.2", "0.4", "0.5", "0.6", "0.8", "1.0"].map((sigma) => ({
          src: `/proj3b/part1_2/sigma-${sigma}.png`,
          label: `σ = ${sigma}`
        }))
      },
      {
        title: "1.2.1 Training",
        images: partBScreenshotImages("1_2_1", [
          ["epoch1.png", "Epoch 1"],
          ["epoch5.png", "Epoch 5"],
          ["curve.png", "Training curve"]
        ])
      },
      {
        title: "1.2.2 Out-of-Distribution Testing",
        images: partBScreenshotImages("1_2_2", [
          ["Screenshot 2026-10-22 at 4.16.00 PM.png", "Result 1"],
          ["Screenshot 2026-10-22 at 4.16.12 PM.png", "Result 2"],
          ["Screenshot 2026-10-22 at 4.16.43 PM.png", "Result 3"],
          ["Screenshot 2026-10-22 at 4.17.00 PM.png", "Result 4"],
          ["Screenshot 2026-10-22 at 4.17.20 PM.png", "Result 5"],
          ["Screenshot 2026-10-22 at 4.17.29 PM.png", "Result 6"],
          ["Screenshot 2026-10-22 at 4.17.37 PM.png", "Result 7"]
        ])
      },
      {
        title: "1.2.3 Denoising Pure Noise",
        images: partBScreenshotImages("1_2_3", [
          ["e1.png", "Epoch 1"],
          ["e5.png", "Epoch 5"],
          ["Screenshot 2026-10-22 at 4.33.25 PM.png", "Result"]
        ])
      },
      {
        title: "Part 2: Training a Flow Matching Model",
        images: []
      },
      {
        title: "2.1 Adding Time Conditioning to UNet",
        images: [
          partBDiagram("2_1.png", "Time-conditioned UNet"),
          partBDiagram("2_1_1.png", "Conditioning block")
        ]
      },
      {
        title: "2.2 Training the UNet",
        images: [
          partBDiagram("2_2.png", "Training algorithm"),
          ...partBScreenshotImages("2_2", [["Screenshot 2026-10-22 at 4.44.06 PM.png", "Result"]])
        ]
      },
      {
        title: "2.3 Sampling from the UNet",
        images: [
          partBDiagram("2_3.png", "Sampling algorithm"),
          ...["new1.png", "new2.png", "new3.png"].map((fileName, index) => ({
            src: `/proj3b/2_2/2_3/${fileName}`,
            label: `Epoch ${index + 1}`
          }))
        ]
      },
      {
        title: "2.4 Class Conditioning",
        images: [partBDiagram("2_4_class_conditional_training.png", "Class-conditional training algorithm")]
      },
      {
        title: "2.5 Training the UNet",
        images: partBScreenshotImages("2_5", [
          ["Screenshot 2026-10-22 at 5.04.51 PM.png", "Class-conditioned UNet loss"]
        ])
      },
      {
        title: "2.6 Sampling from the UNet",
        images: [
          partBDiagram("2_6.png", "Class-conditioned sampling algorithm"),
          ...partBScreenshotImages("2_5", [
            ["Screenshot 2026-10-22 at 5.05.12 PM.png", "Class no Scheduler loss rate"],
            ["Screenshot 2026-10-22 at 5.05.27 PM.png", "CUNet: Epoch 1"],
            ["Screenshot 2026-10-22 at 5.05.38 PM.png", "CUNet: Epoch 5"],
            ["Screenshot 2026-10-22 at 5.05.52 PM.png", "CUNet: Epoch 10"],
            ["Screenshot 2026-10-22 at 5.06.02 PM.png", "Final results: No Scheduler"]
          ])
        ]
      },
      {
        title: "Reflection",
        images: []
      }
    ];

    return (
      <main className="relative min-h-screen bg-[#f8f8f8] text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-blue-600 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Computer Vision projects
          </Link>
          <article className="max-w-5xl">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-blue-600 mb-4">03 / Project 3</p>
              <h1 className="mt-2 text-[clamp(2.25rem,4vw,4.5rem)] font-light leading-[1.0] tracking-[-0.05em] text-slate-800">Fun with Flow Models</h1>
            </header>
            <div className="space-y-10">
              {["A", "B"].map((part) => (
                <section key={part} className="py-4">
                  <h2 className="text-[clamp(1.75rem,2.5vw,3rem)] font-light tracking-[-0.04em] leading-[1.1] text-slate-900 mb-8 pb-3 border-b border-slate-200">Part {part}</h2>
              {part === "A" && <div className="mb-8 mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">{partAIntro}</div>}
              {part === "B" && <div className="mb-8 mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">{partBIntro}</div>}
              {part === "A" ? (
                <div className="space-y-10">
                  {partASections.map(({ title, images }, index) => (
                    <section key={title} className={index > 0 ? "border-t border-slate-200 pt-8" : ""}>
                      <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">{title}</h3>
                      <div className="mb-6 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">{partAWriteups[title]}</div>
                      <div className="space-y-8">
                        {title === "3.4 Hybrid Images" ? [
                          ["3_4a.png", "3_4a_64.png", "Figure 3.4(a)"],
                          ["3_4b.png", "3_4b_64.png", "Figure 3.4(b)"]
                        ].map(([original, small, label]) => (
                          <figure key={original} className="w-full max-w-5xl mx-auto bg-white p-4 rounded-lg border border-slate-300 text-center">
                            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                              <div className="min-w-0 rounded-md border border-slate-200 bg-slate-50 p-2">
                                <img src={`/project3a/${original}`} alt={`Project 3A: ${label} original image`} className="block w-full max-h-[32rem] object-contain rounded" loading="lazy" />
                              </div>
                              <div className="flex flex-col items-center gap-2 rounded-md border border-slate-200 bg-slate-50 p-2">
                                <img src={`/project3a/${small}`} alt={`Project 3A: ${label} 64 by 64 image`} className="block w-16 h-16 object-contain border border-slate-300 rounded bg-white" loading="lazy" />
                                <span className="text-[10px] text-slate-500">64 × 64</span>
                              </div>
                            </div>
                            <figcaption className="mt-2 text-xs text-slate-500 italic">{label}</figcaption>
                          </figure>
                        )) : images.map((fileName) => (
                          <figure key={fileName} className="w-full max-w-3xl mx-auto bg-white p-3 rounded-lg border border-slate-200 text-center">
                            <img src={`/project3a/${encodeURIComponent(fileName)}`} alt={`Project 3A: ${partAImageLabels[fileName] || "additional image"}`} className="block w-full max-h-[32rem] object-contain rounded" loading="lazy" />
                            {partAImageLabels[fileName] && <figcaption className="mt-2 text-xs text-slate-500 italic">{partAImageLabels[fileName]}</figcaption>}
                          </figure>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  {partBSections.map(({ title, images }, index) => (
                    <section key={title} className={index > 0 ? "border-t border-slate-200 pt-8" : ""}>
                      <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">{title}</h3>
                      <div className="mb-6 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">{partBWriteups[title]}</div>
                      <div className="space-y-8">
                        {images.map(({ src, label }) => (
                          <figure key={src} className="w-full max-w-3xl mx-auto bg-white p-3 rounded-lg border border-slate-200 text-center">
                            <img src={src} alt={`${title}: ${label}`} className="block w-full max-h-[32rem] object-contain rounded" loading="lazy" />
                          </figure>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
                </section>
              ))}
            </div>
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
