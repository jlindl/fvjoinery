import { Reveal, Stagger, StaggerItem } from "./motion";
import { REVIEW_LINKS, REVIEWS } from "./site";
import { ArrowGlyph, SectionHeading, Stars } from "./ui";

/**
 * Reviews, rendered from whatever is actually in REVIEWS.
 *
 * The layout switches on the count rather than assuming a grid: with a single
 * review a three-column grid reads as two missing cards, so one review is set
 * as a full-width feature quote instead. Add real reviews to the array and the
 * section becomes a grid on its own.
 */
export default function Testimonials({
  tone = "light",
  eyebrow = "What customers say",
  title = "In their",
  accent = "own words.",
  limit,
}: {
  tone?: "light" | "dark";
  eyebrow?: string;
  title?: string;
  accent?: string;
  /* Cap the number shown. The home page takes a handful; the Work page, where
     someone is already weighing us up, shows the lot. */
  limit?: number;
}) {
  if (REVIEWS.length === 0) return null;

  const shown = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  const dark = tone === "dark";
  const solo = shown.length === 1;

  return (
    <section
      className={dark ? "bg-ink py-24 text-white sm:py-32" : "bg-surface py-24 sm:py-32"}
      aria-label="Customer reviews"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tone={dark ? "light" : "dark"}
          eyebrow={eyebrow}
          title={title}
          accent={accent}
          align={solo ? "center" : "left"}
        />

        {solo ? (
          <Reveal delay={0.08}>
            <figure className="mx-auto mt-14 max-w-3xl text-center">
              <Review review={shown[0]} dark={dark} feature />
            </figure>
          </Reveal>
        ) : (
          <Stagger className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((r) => (
              <StaggerItem key={r.quote}>
                <figure
                  className={[
                    "flex h-full flex-col border-t pt-6",
                    dark ? "border-white/15" : "border-hairline",
                  ].join(" ")}
                >
                  <Review review={r} dark={dark} />
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        )}

        <Reveal delay={0.12}>
          <div
            className={[
              "mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-7",
              dark ? "border-white/15" : "border-hairline",
              solo ? "justify-center" : "",
            ].join(" ")}
          >
            <a
              href={REVIEW_LINKS.Google}
              target="_blank"
              rel="noreferrer noopener"
              className={dark ? "btn btn-ghost-light btn-sm group" : "btn btn-ghost btn-sm group"}
            >
              Read reviews on Google
              <ArrowGlyph />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Review({
  review,
  dark,
  feature = false,
}: {
  review: (typeof REVIEWS)[number];
  dark: boolean;
  feature?: boolean;
}) {
  return (
    <>
      {review.rating ? (
        <div className={feature ? "flex justify-center" : ""}>
          <Stars rating={review.rating} className={feature ? "h-5 w-5" : "h-4 w-4"} />
        </div>
      ) : null}

      <blockquote
        className={[
          "text-pretty font-display tracking-[-0.02em]",
          review.rating ? "mt-5" : "",
          feature
            ? "text-[1.5rem] font-medium leading-[1.4] sm:text-[1.9rem]"
            : "flex-1 text-[1.05rem] font-medium leading-[1.55]",
          dark ? "text-white" : "text-ink",
        ].join(" ")}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption
        className={[
          "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm",
          feature ? "mt-7 justify-center" : "mt-5",
        ].join(" ")}
      >
        <span className={dark ? "font-semibold text-white" : "font-semibold text-ink"}>
          {review.name}
        </span>
        <span aria-hidden="true" className={dark ? "text-white/45" : "text-muted"}>
          /
        </span>
        <span className={dark ? "text-white/70" : "text-muted"}>{review.place}</span>
        <a
          href={REVIEW_LINKS[review.source]}
          target="_blank"
          rel="noreferrer noopener"
          className={[
            "underline decoration-1 underline-offset-4 transition-colors",
            dark
              ? "text-white/70 decoration-white/30 hover:text-white"
              : "text-muted decoration-hairline hover:text-ink",
          ].join(" ")}
        >
          via {review.source}
        </a>
      </figcaption>
    </>
  );
}
