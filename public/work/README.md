# Real work photos go here

Every image slot on the site is wired to a file in this folder. If a slot has no
`src`, it falls back to an original measured-drawing illustration rather than
stock photography — so the site never shows work that isn't FV's.

## Files currently referenced

| File            | Where it appears                       |
| --------------- | -------------------------------------- |
| `hero.jpg`      | Home hero (portrait, ~4:5)             |
| `band.jpg`      | Home "Measured twice" band (wide)      |
| `about.jpg`     | About page portrait (~4:3)             |
| `shelving.jpg`  | Work gallery — fitted alcove shelving  |
| `kitchen.jpg`   | Work gallery — kitchen installation    |
| `bathroom.jpg`  | Work gallery — bathroom re-tile        |
| `panelling.jpg` | Work gallery — wood wall panelling     |
| `flooring.jpg`  | Work gallery — new flooring            |
| `painting.jpg`  | Work gallery — painting & decorating   |

## How to swap or add photos

1. Drop the photo into this folder (JPG or WebP, roughly 4:3, ~1600px on the
   long edge). Overwrite an existing filename to replace that slot.
2. To add a **new** gallery item, open `app/site.ts` and add an entry to the
   `WORK` array with `src`, real `alt` text, a `subject`, a `note` badge and a
   one-line `detail`.

`app/site.ts` is the single source of truth for gallery content — the home page
shows the first three entries, the Work page shows them all.

## Alt text

Write what the photo actually shows, not a keyword list. It's read aloud by
screen readers and shown if the image fails to load.
