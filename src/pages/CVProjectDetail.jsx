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
  proj3: {
    label: "Project 3",
    title: "Project 3: Filters, Frequencies, and Blending",
    description: "Filters and Edges, Unsharp Masking, Hybrid Images, and Multiresolution Blending.",
    tech: "Computer Vision, Convolution, Frequency Domain, Image Blending"
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

  if (projectId === "proj3") {
    return (
      <main className="relative min-h-screen bg-[#f8f8f8] text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link to="/cvproj" className="inline-flex items-center gap-2 text-sm font-light text-slate-600 hover:text-blue-600 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Computer Vision projects
          </Link>

          <article className="max-w-5xl">
            <header className="mb-10 pb-6 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-blue-600 mb-4">02 / Project 3</p>
              <h1 className="mt-2 text-[clamp(2.25rem,4vw,4.5rem)] font-light leading-[1.0] tracking-[-0.05em] text-slate-800">
                Project 3: Fun with Filters and Frequencies!
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
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  I implemented 2D convolution in two ways: a four-loop version that multiplies each kernel window by the flipped kernel one element at a time, and a two-loop version that uses NumPy to vectorize the window multiplication and sum. Both implementations produced results that visually matched SciPy's <span className="font-mono text-slate-800">convolve2d</span> when tested with a 9 × 9 box filter.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  I used full-mode convolution with zero padding, so the output grows to include positions where the kernel extends beyond the image. This creates dark borders near the edges. In my runtime test, the four-loop implementation took about 50.61 seconds, the two-loop NumPy version took 5.16 seconds, and SciPy's optimized implementation took 0.16 seconds. The <span className="font-mono text-slate-800">convolve2d</span> function uses the same behavior, which is full mode with zero padding, and this is why my output matches it.
                </p>

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
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  I convolved the Cameraman image with the finite-difference filters Dx and Dy. Dx emphasizes vertical edges, while Dy emphasizes horizontal edges. I combined the two responses into a gradient-magnitude image using <span className="font-mono text-slate-800">√(dx² + dy²)</span>, then thresholded it to produce a binary edge map.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  I chose a threshold of 0.26 to balance edge detail against noise: a lower threshold picked up grass and background texture, while a higher one broke apart real edges. This setting suppresses much of the background noise while retaining important details, including the Cameraman's legs and tripod.
                </p>

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
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  Before computing image derivatives, I applied Gaussian smoothing to reduce high-frequency noise from grass and other background details. The resulting edges are cleaner and less fragmented than with the finite-difference filters alone. With the noise reduced, a lower threshold of 0.11 retained useful edges without picking up as much background texture.
                </p>

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
                  I also combined the Gaussian with Dx and Dy to form derivative-of-Gaussian (DoG) filters, then applied each filter to the image in a single convolution. The results look nearly identical to smoothing the image first and then taking its derivative, as expected from the associative property of convolution.
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
                Part 2: Applications
              </h2>

              {/* Part 2.1 */}
              <div className="mb-12">
                <h3 className="text-[clamp(1.25rem,1.8vw,1.75rem)] font-light tracking-[-0.03em] leading-[1.2] text-slate-900 mb-4">
                  Part 2.1: Image &quot;Sharpening&quot;
                </h3>
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  Unsharp masking separates fine detail from a blurred image, then adds a scaled amount of that detail back to the original. Subtracting the blurred image isolates high-frequency components; the scale factor α controls how strongly those details are emphasized.
                </p>

                <div className="my-6 p-4 bg-slate-100/90 rounded-xl text-center border border-slate-200 shadow-inner">
                  <span className="font-mono text-sm sm:text-base text-slate-800 font-medium tracking-wide">
                    f<sub>sharp</sub> = f + α(f − f ∗ G) = f ∗ ((1 + α)δ − αG)
                  </span>
                </div>

                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  On the Taj Mahal, α values of 1, 1.35, and 2 add increasing crispness to the dome and arches. At α = 5, the result is visibly over-sharpened, with stronger contrast and more noise. I also sharpened flower and pumpkin images from my desk using α = 1.35, σ = 2, and a 9 × 9 kernel; these settings gave a pleasing balance of detail and smoothness.
                </p>

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
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  A hybrid image combines the low frequencies of one image with the high frequencies of another. The high-frequency details are more noticeable up close, while the broad shapes in the low-frequency image become clearer from farther away. I aligned each pair around the eyes, converted the images to grayscale, blurred one image for its low-pass component, and subtracted a blur from the other to get its high-pass component. I then combined the components and adjusted the Gaussian scales by trial and error.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  For Derek and Nutmeg, I used σ = 8 for Derek's low-pass image and σ = 5 for Nutmeg's high-pass image. I also made custom hybrids of Cristiano Ronaldo with Lionel Messi, and of an emoji with an elephant, using σ values of 9 and 6. In these pairs, Ronaldo and the emoji form the low-frequency images, while Messi and the elephant contribute the high-frequency details.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  Each set displays the images paired alongside their 2D Fourier Transform (FFT) log magnitude spectra illustrating the frequency content at each step of the pipeline.
                </p>

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
                  I built five-level Gaussian stacks for the apple and orange by repeatedly blurring each image without downsampling. The levels use σ values of 1, 2, 4, 8, and 16 with a kernel size of 33. I formed each Laplacian level by subtracting the next Gaussian level, <span className="font-mono text-slate-800">Lᵢ = Gᵢ − Gᵢ₊₁</span>; as a result, the coarsest Gaussian level is heavily blurred.
                </p>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  Gaussian and Laplacian stacks for Apple and Orange computed across 5 levels with kernel size <span className="font-mono text-slate-800 font-medium">k = 33</span> and scale parameters <span className="font-mono text-slate-800 font-medium">σ ∈ [1, 2, 4, 8, 16]</span>. I normalized the Laplacian levels (levels 0 to 3 only) so the details are visible.
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
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                  For multiresolution blending, I created a Gaussian stack for each mask and used it to smoothly combine corresponding levels of the images' Laplacian stacks. Each level is blended with the matching mask level, and summing the blended levels reconstructs the result. The progressively blurred mask softens transitions across frequency bands and avoids a harsh seam.
                </p>

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
                What I learned from this project
              </h2>
              <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-light leading-[1.6] text-slate-600">
                This project showed me how much can be done with classical image-processing techniques, without treating image manipulation as a black box or reaching immediately for machine learning. Convolution, frequency filtering, and Gaussian and Laplacian stacks provide practical ways to detect edges, sharpen images, create hybrid illusions, and blend images smoothly. These experiments made the role of frequency in visual effects more intuitive and showed how foundational techniques can produce results often associated with modern apps.
              </p>
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