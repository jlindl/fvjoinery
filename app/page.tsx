import Link from "next/link";
import {
  ImageReveal,
  Reveal,
  RevealWords,
  Stagger,
  StaggerItem,
} from "./motion";
import { Photo } from "./photo";
import ProcessJourney from "./process-journey";
import { Illustration } from "./illustrations";
import {
  BUSINESS,
  MATERIALS,
  PRICE_FACTORS,
  PROCESS,
  REVIEWS,
  SERVICE_GROUPS,
  STATEMENT,
  TRUST,
  WORK,
} from "./site";
import {
  ArrowGlyph,
  CtaBand,
  Eyebrow,
  PhoneGlyph,
  SectionHeading,
} from "./ui";

export default function Home() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="light">
                {`Joiners and builders · ${BUSINESS.base}`}
              </Eyebrow>
            </Reveal>
            <RevealWords
              as="h1"
              delay={0.05}
              text="Fitted joinery and building work"
              quiet={`in ${BUSINESS.base}.`}
              quietClassName="text-white/50"
              className="mt-8 max-w-[15ch] font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[3.7rem] lg:text-[4.1rem]"
            />
            <Reveal delay={0.18}>
              <p className="mt-7 max-w-lg text-pretty text-lg leading-[1.65] text-white/70">
                Alcove units, panelling, kitchens and full renovations. Nothing
                here comes off a shelf, and nothing gets packed out and filled
                to hide a gap.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BUSINESS.phoneHref} className="btn btn-accent">
                  <PhoneGlyph className="h-[18px] w-[18px]" />
                  {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="btn btn-ghost-light group">
                  Get a price
                  <ArrowGlyph />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <ImageReveal
              delay={0.12}
              className="relative aspect-[4/5] overflow-hidden rounded-md"
            >
              <Photo
                item={{
                  subject: "Marking out on site",
                  src: "/work/hero.jpg",
                  alt: "A joiner marking a length of timber before cutting it",
                  art: (
                    <Illustration variant="kitchen" index="01" label="On site" />
                  ),
                }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ImageReveal>
          </div>
        </div>

        {/* Credentials sit on the hero rather than taking a band of their own. */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.k} className="py-6 sm:py-7">
                <p className="font-display text-base font-semibold tracking-tight text-white">
                  {t.k}
                </p>
                <p className="mt-1 text-[0.82rem] text-white/60">{t.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== STATEMENT ========================== */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Why it fits</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 text-pretty font-display text-[1.5rem] font-medium leading-[1.4] tracking-[-0.02em] text-ink sm:text-[2rem] sm:leading-[1.35]">
              {STATEMENT}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================= FULL-BLEED BAND ======================= */}
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden bg-ink">
        <Photo
          item={{
            subject: "Tools on the bench",
            src: "/work/band.jpg",
            alt: "Hand tools and wood shavings laid out on a workbench",
            art: <Illustration variant="band" />,
          }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 sm:pb-14">
            <Reveal>
              <p className="max-w-xl text-pretty font-display text-xl font-medium leading-[1.4] text-white sm:text-2xl">
                Cutting happens outside or under extraction. Floors get sheeted.
                The room is swept at the end of each day, not the end of the job.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== SERVICES =========================== */}
      {/* Sticky image column on desktop: the photo holds while its list of
          services scrolls past, so each group reads as one idea. */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Three sides to"
            accent="the same trade."
            intro="Joinery, the structural work behind it, and the finishes that decide how the whole thing reads. One team, so nothing falls between trades."
          />

          <div className="mt-16 space-y-16 lg:space-y-24">
            {SERVICE_GROUPS.map((group, gi) => (
              <div
                key={group.id}
                className="grid gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={`lg:col-span-5 ${gi % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="lg:sticky lg:top-28">
                    <ImageReveal className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-[3/4]">
                      <Photo
                        item={{
                          subject: group.title,
                          src: group.image,
                          alt: group.imageAlt,
                          art: (
                            <Illustration
                              variant={group.art}
                              index={String(gi + 1).padStart(2, "0")}
                              label={group.title}
                            />
                          ),
                        }}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </ImageReveal>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Reveal>
                    <p className="font-display text-sm font-semibold tracking-tight text-muted">
                      {String(gi + 1).padStart(2, "0")} / {group.caption}
                    </p>
                    <h3 className="mt-3 font-display text-[1.75rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
                      {group.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-pretty leading-[1.7] text-muted">
                      {group.summary}
                    </p>
                  </Reveal>

                  <Stagger className="mt-9 divide-y divide-hairline border-t border-hairline">
                    {group.items.map((s) => (
                      <StaggerItem key={s.name}>
                        <div className="py-5">
                          <h4 className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                            {s.name}
                          </h4>
                          <p className="mt-1.5 max-w-lg text-[0.95rem] leading-[1.65] text-muted">
                            {s.blurb}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <Reveal>
                    <Link
                      href={`/services#${group.id}`}
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                    >
                      <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-ink">
                        Read the detail
                      </span>
                      <ArrowGlyph />
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WORK ============================ */}
      {/* Mosaic: two tiles run wide so the grid does not read as a card wall. */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent work"
              title="Jobs we"
              accent="have finished."
            />
            <Reveal delay={0.12}>
              <Link href="/work" className="btn btn-ghost btn-sm group">
                All work
                <ArrowGlyph />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((item, i) => (
              <ImageReveal
                key={item.subject}
                delay={(i % 3) * 0.06}
                className={item.wide ? "sm:col-span-2" : ""}
              >
                <figure className="h-full">
                  <div
                    className={`relative overflow-hidden rounded-md ${
                      item.wide ? "aspect-[16/9]" : "aspect-[4/5]"
                    }`}
                  >
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
                      sizes={
                        item.wide
                          ? "(max-width: 640px) 100vw, 66vw"
                          : "(max-width: 640px) 100vw, 33vw"
                      }
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      {item.note}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-ink">
                      {item.subject}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[0.92rem] leading-[1.6] text-muted">
                      {item.detail}
                    </p>
                  </figcaption>
                </figure>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHAT IT COSTS ========================= */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  tone="light"
                  eyebrow="What moves a price"
                  title="Why two jobs that look"
                  accent="the same are not."
                  intro="We price per job rather than per metre, because the room decides most of it. These four things shift a number more than anything else."
                />
                <Reveal delay={0.2}>
                  <a href={BUSINESS.phoneHref} className="btn btn-accent mt-9">
                    <PhoneGlyph className="h-[18px] w-[18px]" />
                    Talk it through
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Stagger className="divide-y divide-white/10 border-y border-white/10">
                {PRICE_FACTORS.map((f, i) => (
                  <StaggerItem key={f.t}>
                    <div className="flex gap-6 py-7">
                      <span className="font-display text-sm font-semibold text-white/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-[1.15rem] font-semibold tracking-tight text-white">
                          {f.t}
                        </h3>
                        <p className="mt-2 max-w-lg text-[0.97rem] leading-[1.7] text-white/70">
                          {f.d}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== MATERIALS ========================== */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Materials"
            title="What we build"
            accent="things out of."
            intro="Worth knowing before you choose. The material sets both the price and how the piece will look in five years."
          />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-md bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {MATERIALS.map((m) => (
              <StaggerItem key={m.t}>
                <div className="flex h-full flex-col bg-surface p-7">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {m.use}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                    {m.t}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.65] text-muted">
                    {m.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* =========================== PROCESS =========================== */}
      <section className="bg-paper py-24 sm:py-32" aria-label="How a job runs">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="How a job runs"
                title="Five steps,"
                accent="no runaround."
                intro="However big the project, the shape of it is the same."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ProcessJourney steps={[...PROCESS]} />
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIAL ========================= */}
      <section
        className="bg-surface py-24 sm:py-28"
        aria-label="Customer review"
      >
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

      <CtaBand />
    </>
  );
}
