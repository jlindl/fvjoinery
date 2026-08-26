import type { Metadata } from "next";
import Link from "next/link";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "../motion";
import { Photo } from "../photo";
import { Illustration } from "../illustrations";
import ProcessJourney from "../process-journey";
import { BUSINESS, MATERIALS, PROCESS, SERVICE_GROUPS } from "../site";
import {
  ArrowGlyph,
  CtaBand,
  Eyebrow,
  Ico,
  PageHero,
  PhoneGlyph,
  SectionHeading,
} from "../ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bespoke joinery, building and renovation across Leicestershire and the Midlands. Alcove units, wall panelling, kitchens, bathrooms, carpentry, plastering, flooring, decorating and outdoor work.",
  openGraph: {
    title: `Services | ${BUSINESS.shortName}`,
    description:
      "Bespoke joinery, building and renovation across Leicestershire and the Midlands.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Joinery, the building work behind it,"
        accent="and the finish on top."
        intro="Twelve things we get asked for most, and what each one actually involves on site. If what you want is not listed, it is still worth asking."
      >
        <nav aria-label="Service groups" className="mt-10 flex flex-wrap gap-2">
          {SERVICE_GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/60 hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* ====================== SERVICE GROUPS ====================== */}
      {SERVICE_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-24 sm:py-32 ${
            gi % 2 === 0 ? "bg-surface" : "bg-paper"
          }`}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Sticky image + summary; the detail list scrolls past it. */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Reveal>
                    <p className="font-display text-sm font-semibold tracking-tight text-muted">
                      {String(gi + 1).padStart(2, "0")} / {group.caption}
                    </p>
                    <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.6rem]">
                      {group.title}
                    </h2>
                    <p className="mt-4 max-w-md text-pretty leading-[1.7] text-muted">
                      {group.summary}
                    </p>
                  </Reveal>
                  <ImageReveal
                    delay={0.1}
                    className="relative mt-8 aspect-[4/5] overflow-hidden rounded-md sm:aspect-[3/4]"
                  >
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
                <Stagger className="divide-y divide-hairline border-t border-hairline">
                  {group.items.map((s) => (
                    <StaggerItem key={s.name}>
                      <article className="py-8">
                        <div className="flex items-center gap-3">
                          <span className="text-muted">
                            <Ico name={s.icon} />
                          </span>
                          <h3 className="font-display text-[1.2rem] font-semibold tracking-tight text-ink">
                            {s.name}
                          </h3>
                        </div>
                        <p className="mt-3 font-medium text-ink">{s.blurb}</p>
                        <p className="mt-3 max-w-xl text-[0.97rem] leading-[1.75] text-muted">
                          {s.detail}
                        </p>
                      </article>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ========================== MATERIALS ========================== */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            eyebrow="Materials"
            title="What it gets"
            accent="built from."
            intro="The material sets the price and decides how the piece ages. Here is what we reach for, and when."
          />
          <Stagger className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {MATERIALS.map((m) => (
              <StaggerItem key={m.t}>
                <div className="border-t border-white/15 pt-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {m.use}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                    {m.t}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-[1.7] text-white/70">
                    {m.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ======================= NOT ON THE LIST ======================= */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Anything else</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-6 max-w-xl text-balance font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
              This is what we get asked for, not the limit of it.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-lg text-pretty leading-[1.7] text-muted">
              If it is joinery, building or finishing work there is a good
              chance we do it. If we do not, we will usually know who does.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={BUSINESS.phoneHref} className="btn btn-accent">
                <PhoneGlyph className="h-[18px] w-[18px]" />
                {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn btn-ghost group">
                Send the details
                <ArrowGlyph />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================== PROCESS =========================== */}
      <section
        className="bg-surface py-24 sm:py-32"
        aria-label="How a job runs"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="How a job runs"
                title="Same five steps,"
                accent="whatever the size."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ProcessJourney steps={[...PROCESS]} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us what you are planning."
        intro="Send the details over and we will arrange a visit. You get an itemised price before anyone picks up a tool."
      />
    </>
  );
}
