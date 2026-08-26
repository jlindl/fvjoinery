# Real work photos

Every image slot on the site is wired to a file in this folder, and **every slot
currently holds a real FV photo** — there are no drawings and no stock images
rendering anywhere on the site.

If a slot's `src` is ever removed it falls back to an original measured-drawing
illustration rather than to stock photography, so the site can never show work
that isn't FV's. That fallback is a safety net, not something on screen today.

## The nine photos and where each one appears

| File                    | Home            | Other pages                          |
| ----------------------- | --------------- | ------------------------------------ |
| `kitchen-green.jpg`     | hero            | Work gallery                         |
| `doors-black.jpg`       | services 01     | Services — Bespoke joinery           |
| `bathroom.jpg`          | services 02     | Services — Building and renovation   |
| `decking.jpg`           | services 03     | Services — Finishes and outdoor      |
| `garden-room-wide.jpg`  | full-bleed band | —                                    |
| `garden-room-cedar.jpg` | mosaic (wide)   | Work gallery                         |
| `kitchen-dark.jpg`      | mosaic          | Work gallery, About band             |
| `doors-oak.jpg`         | mosaic          | Work gallery                         |
| `garden-room-grey.jpg`  | mosaic (wide)   | Work gallery, About portrait         |

No photo appears twice on the home page. Reuse across different pages is
deliberate — there are nine photos and more than nine slots.

## Aspect ratios each slot crops to

Photos are `object-cover`, centre-cropped, with a slight parallax drift, so a
photo used in more than one slot has to survive every crop it lands in.

- Home hero, About portrait, home mosaic tile — **4:5**
- Home mosaic wide tile — **16:9**
- Services group head — 4:5 on mobile, **3:4** on desktop (both portrait: the
  joinery photo is a tall landing shot and a 4:3 crop of it is an unreadable
  slab of door)
- Work page rows — **3:2**
- Full-bleed bands — roughly **2.5:1**, varies with viewport height

`doors-black.jpg` is portrait-only for that reason: it is kept out of the Work
gallery, which lays every job out as a 3:2 row.

## How to swap or add photos

1. Drop the photo in here. JPG or WebP, ~1800px on the long edge, quality ~80.
   Overwrite an existing filename to replace that slot everywhere it appears.
2. To add a **new** gallery item, open `app/site.ts` and add an entry to the
   `WORK` array with `src`, real `alt` text, a `subject`, a `note` badge and a
   one-line `detail`. Set `onHome: true` to surface it in the home mosaic, and
   `wide: true` to make it a wide tile there. Check it survives a 3:2 crop
   first — the Work page renders every entry as a full-width row.
3. The Work page heading names the number of jobs ("Seven jobs, and what each
   one involved"), so update `app/work/page.tsx` if you change the count.

`app/site.ts` is the single source of truth for gallery content. Untouched
originals live in `source-photos/` at the app root, outside `public/`, so they
are never served to browsers.

## Still wanted

Photos of **alcove shelving** and **wall panelling**. Both are listed services
with no photo of their own, so the gallery covers neither. Landscape framing
that survives a 3:2 crop is what to aim for.

## Alt text

Write what the photo actually shows, not a keyword list. It's read aloud by
screen readers and shown if the image fails to load.
