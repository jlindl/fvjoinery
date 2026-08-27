import Image from "next/image";
import { ImageReveal, Reveal } from "./motion";
import { BEFORE_AFTER } from "./site";
import { SectionHeading } from "./ui";

/**
 * Before and after pairs, side by side.
 *
 * Deliberately not using `Photo`: that component drifts its image vertically
 * with scroll, which would slide the two frames out of step with each other
 * and wreck the comparison. A pair has to sit still to be read as a pair.
 *
 * The images in `BEFORE_AFTER` are placeholders until real pairs replace the
 * files in public/before-after/. Each placeholder entry renders a badge, so an
 * unreplaced pair is obvious on the page rather than quietly shipping.
 */
export default function BeforeAfter() {
  if (BEFORE_AFTER.length === 0) return null;

  return (
    <section className="bg-paper py-24 sm:py-32" aria-label="Before and after">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Before and after"
          title="The same room,"
          accent="twice."
          intro="Photographed from the same spot at the start and at the end. The second picture is the easy one to take."
        />

        <div className="mt-16 space-y-16 sm:space-y-20">
          {BEFORE_AFTER.map((item, i) => (
            <article key={item.subject}>
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <p className="font-display text-sm font-semibold tracking-tight text-muted">
                      {String(i + 1).padStart(2, "0")} / {item.note}
                    </p>
                    <h3 className="mt-2 font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-ink sm:text-[1.85rem]">
                      {item.subject}
                    </h3>
                  </div>
                  {item.placeholder ? (
                    <p className="rounded-full border border-accent/40 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-strong">
                      Awaiting photos
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 max-w-2xl text-pretty leading-[1.7] text-muted">
                  {item.detail}
                </p>
              </Reveal>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Frame
                  label="Before"
                  src={item.before}
                  alt={item.beforeAlt}
                  delay={0.06}
                />
                <Frame
                  label="After"
                  src={item.after}
                  alt={item.afterAlt}
                  delay={0.12}
                  highlight
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Frame({
  label,
  src,
  alt,
  delay,
  highlight = false,
}: {
  label: string;
  src: string;
  alt: string;
  delay: number;
  highlight?: boolean;
}) {
  return (
    <ImageReveal delay={delay}>
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 46vw" className="object-cover" />
        </div>
        <figcaption
          className={[
            "mt-3 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
            highlight ? "text-ink" : "text-muted",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className={[
              "h-px w-6",
              highlight ? "bg-accent" : "bg-hairline",
            ].join(" ")}
          />
          {label}
        </figcaption>
      </figure>
    </ImageReveal>
  );
}
