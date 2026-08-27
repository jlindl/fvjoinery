# Before and after pairs

The six JPGs in this folder are **placeholders**. Each one has its own filename
printed on it, so you can see on the page exactly which file to replace.

## Replacing them

Overwrite the file, keep the name. No code change needed.

| File                    | Pair                            |
| ----------------------- | ------------------------------- |
| `kitchen-before.jpg`    | Kitchen strip-out to finished   |
| `kitchen-after.jpg`     |                                 |
| `bathroom-before.jpg`   | Bathroom, back to the joists    |
| `bathroom-after.jpg`    |                                 |
| `alcove-before.jpg`     | Alcoves boxed in and fitted out |
| `alcove-after.jpg`      |                                 |

Then open `app/site.ts`, find `BEFORE_AFTER`, and for each pair you have
replaced:

1. Delete the `placeholder: true` line. That removes the orange **Awaiting
   photos** badge from the page — while the badge is showing, nobody can
   mistake a placeholder for real work.
2. Rewrite `beforeAlt` and `afterAlt` to describe what the photos actually
   show. They currently say "Placeholder image".
3. Check `subject`, `note` and `detail` still match the job.

To add a fourth pair, copy an entry in `BEFORE_AFTER`. To drop one, delete it —
the section hides itself entirely if the array is empty.

## Shooting the pairs

The section puts the two frames **side by side at 4:3**, so:

- Stand in the same spot, at the same height, for both shots. If the framing
  drifts the comparison stops working.
- Landscape, roughly 4:3, about 1600px on the long edge.
- Take the "before" shot before anything comes out. It is the one that always
  gets forgotten, and it is the one that makes the pair worth looking at.
- Same lights on for both, if you can. A dark before and a bright after reads
  as a lighting trick rather than a change to the room.
