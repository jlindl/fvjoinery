import type { Metadata } from "next";
import { ImageReveal, Reveal } from "../motion";
import { Photo } from "../photo";
import { Illustration } from "../illustrations";
import { BUSINESS, REVIEWS, SERVICE_GROUPS, WORK } from "../site";
import {
  CtaBand,
  Eyebrow,
  InstagramGlyph,
  PageHero,
  SectionHeading,
} from "../ui";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent joinery and building projects across Leicestershire and the Midlands: alcove shelving, kitchen fits, bathroom re-tiles, wall panelling, flooring and decorating.",
  openGraph: {
    title: `Our Work | ${BUSINESS.shortName}`,
    description:
      "Recent joinery and building projects across Leicestershire and the Midlands.",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title="The finish is the part"
        accent="you live with."
        intro="A look at the kind of work we take on, from a single fitted unit to a room taken back to brick. New jobs go up on Instagram as they come off the tools."
      >
        <a
          href={BUSINESS.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost-light mt-10"
        >
          <InstagramGlyph className="h-[18px] w-[18px]" />
          {BUSINESS.instagramHandle}
        </a>
      </PageHero>

      {/* ========================= EDITORIAL LIST ========================= */}
      {/* Alternating full-width rows rather than a uniform card grid, so each
          job gets read on its own rather than scanned as a tile. */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Project gallery"
            title="Seven jobs, and what"
            accent="each one involved."
          />

          <div className="mt-16 space-y-20 sm:space-y-28">
            {WORK.map((item, i) => {
              const flipped = i % 2 === 1;
              return (
                <article
                  key={item.subject}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div
                    className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}
                  >
                    <ImageReveal className="relative aspect-[3/2] overflow-hidden rounded-md">
                      <Photo
                        item={{
                          ...item,
                          art: (
                            <Illustration
                              variant={item.art}
                              index={String(i + 1).padStart(2, "0")}
                              label={item.subject}
                            />
                          ),
                        }}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                    </ImageReveal>
                  </div>

                  <div className="lg:col-span-5">
                    <Reveal delay={0.08}>
                      <p className="font-display text-sm font-semibold tracking-tight text-muted">
                        {String(i + 1).padStart(2, "0")} / {item.note}
                      </p>
                      <h3 className="mt-3 font-display text-[1.6rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2rem]">
                        {item.subject}
                      </h3>
                      <p className="mt-4 max-w-md text-pretty leading-[1.75] text-muted">
                        {item.detail}
                      </p>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================== WHAT WE COVER ========================== */}
      <section className="bg-ink py-24 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            eyebrow="Beyond the gallery"
            title="Most of what we do"
            accent="never gets photographed."
            intro="Second-fix carpentry, a re-hung door, a floor levelled before the boards go down. Unglamorous, and the reason the visible part works."
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_GROUPS.map((g) => (
              <Reveal key={g.id} delay={0.06}>
                <div className="border-t border-white/15 pt-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                    {g.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {g.items.map((s) => (
                      <li key={s.name} className="text-[0.93rem] text-white/70">
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIAL ========================= */}
      <section className="bg-surface py-24 sm:py-28" aria-label="Customer review">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>From a customer</Eyebrow>
          </Reveal>
          {REVIEWS.map((r) => (
            <Reveal key={r.quote} delay={0.08}>
              <figure className="mt-8">
                <blockquote className="text-pretty font-display text-[1.5rem] font-medium leading-[1.4] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-semibold text-ink">{r.name}</span>
                  <span aria-hidden="true" className="text-muted">
                    /
                  </span>
                  <span className="text-muted">{r.place}</span>
                  <a
                    href={BUSINESS.checkatrade}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-ink"
                  >
                    via {r.source}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want something like this?"
        intro="Send a photo of the space and rough sizes. We will come and measure up, then price it in writing."
      />
    </>
  );
}
