# Real work photos

Every image slot on the site is wired to a file in this folder. If a slot has no
`src`, it falls back to an original measured-drawing illustration rather than
stock photography — so the site never shows work that isn't FV's.

## Files currently referenced

| File                    | Where it appears                                  |
| ----------------------- | ------------------------------------------------- |
| `kitchen-green.jpg`     | Home hero, and the Work gallery                   |
| `garden-room-wide.jpg`  | Home full-bleed band (the only true landscape)    |
| `kitchen-dark.jpg`      | Work gallery, Services "Building and renovation"  |
| `garden-room-cedar.jpg` | Work gallery, Services "Finishes and outdoor"     |
| `garden-room-grey.jpg`  | Work gallery, About page portrait                 |

Two Work entries — alcove shelving and wall panelling — have no photo yet and
show a measured drawing instead. Drop a real photo in and add `src` + `alt` to
that entry in `app/site.ts` to replace it.

## Slots that currently show a drawing

| Where                            | Drawing     | Wants                        |
| -------------------------------- | ----------- | ---------------------------- |
| Home services block, all three   | per group   | intentional, leave as-is     |
| About full-bleed band            | `panelling` | a setting-out / detail shot  |
| Services "Bespoke joinery" head  | `shelving`  | fitted joinery, portrait     |
| Work — "Alcove shelving"         | `shelving`  | alcove units, landscape      |
| Work — "Wall panelling"          | `panelling` | panelled wall, landscape     |

## How to swap or add photos

1. Drop the photo in here. JPG or WebP, ~1800px on the long edge, quality ~80.
   Overwrite an existing filename to replace that slot everywhere it appears.
2. To add a **new** gallery item, open `app/site.ts` and add an entry to the
   `WORK` array with `src`, real `alt` text, a `subject`, a `note` badge and a
   one-line `detail`. Set `onHome: true` to surface it in the home mosaic, and
   `wide: true` to make it a wide tile there.

`app/site.ts` is the single source of truth for gallery content. Untouched
originals of the supplied photos live in `source-photos/` at the app root,
outside `public/`, so they are not served to browsers.

## Aspect ratios each slot crops to

Photos are `object-cover`, centre-cropped, with a slight parallax drift. A photo
used in more than one slot needs to survive every crop below.

- Home hero, About portrait, home mosaic tile — **4:5**
- Home mosaic wide tile — **16:9**
- Services group head — 4:3 on mobile, **3:4** on desktop
- Work page rows — **3:2**
- Full-bleed bands — roughly **2.5:1**, varies with viewport height

## Alt text

Write what the photo actually shows, not a keyword list. It's read aloud by
screen readers and shown if the image fails to load.
