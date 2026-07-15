# Real work photos go here

The homepage "Recent work" gallery and the About photo are wired for real
images but currently show **clearly-marked placeholder frames** (no stock, no
fakery — per the build brief).

## How to add the real photos

1. Drop your photos into this folder, e.g. `alcove-shelving.jpg`,
   `kitchen-fit.jpg`, etc. (JPG or WebP, roughly 4:3, ~1600px on the long edge).
2. Open `app/page.tsx` and find the `WORK` array (Recent work) and the About
   `WorkPhoto`.
3. Add a `src` (e.g. `src: "/work/alcove-shelving.jpg"`) and write real `alt`
   text describing what the photo actually shows.

That's it — each slot swaps from placeholder frame to a real `next/image`
automatically once it has a `src`. No layout changes needed.
