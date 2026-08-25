import type { Metadata } from "next";
import Link from "next/link";
import { ImageReveal, Reveal, Stagger, StaggerItem } from "../motion";
import { Photo } from "../photo";
import { Illustration } from "../illustrations";
import { AREAS, BUSINESS, PRICE_FACTORS, SERVICE_GROUPS } from "../site";
import {
  ArrowGlyph,
  CtaBand,
  Eyebrow,
  InstagramGlyph,
  PageHero,
  SectionHeading,
} from "../ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FV Joinery and Building Solutions is a team of tradesmen based in Leicestershire, covering the East and West Midlands. Bespoke joinery, building and renovation.",
  openGraph: {
    title: `About Us | ${BUSINESS.shortName}`,
    description:
      "A team of joiners and builders based in Leicestershire, covering the East and West Midlands.",
  },
};

/* How we work. Four positions we actually hold, written as positions rather
   than as slogans. */
const VALUES = [
  {
    t: "The price comes before the work",
    d: "You get an itemised written quote after we have seen the job. It does not move unless you change what you are asking for, and if something unexpected turns up behind a wall we stop and talk to you before spending your money on it.",
  },
  {
    t: "One team for the whole job",
    d: "Joinery, building and finishing under one number. It means no gap between trades where a job sits for three weeks waiting on somebody, and nobody to point at when something does not line up.",
  },
  {
    t: "The last ten per cent is the job",
    d: "Anyone can get a room to nearly done. We walk the work with you at the end, list the snags ourselves, and sort them before the tools leave.",
  },
  {
    t: "You still live here",
    d: "Dust sheets down before we start, cutting done outside where possible, and the room swept at the end of each day. You should be able to use your house while we are in it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${BUSINESS.shortName}`}
        title="A trade team,"
        accent="not a call centre."
        intro={`We are a group of tradesmen based in ${BUSINESS.base}, working across the East and West Midlands. The person who prices your job is the person who turns up to do it.`}
      />

      {/* ============================ STORY ============================ */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-md text-balance font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
                You speak to someone who will be on your job.
              </h2>
            </Reveal>
            <div className="mt-7 max-w-lg space-y-5 text-[1.05rem] leading-[1.75] text-muted">
              <Reveal delay={0.1}>
                <p>
                  That sounds like a small thing. It is not. When the person
                  quoting is the person building, the price reflects the actual
                  room rather than a rate card, and the detail you talked about
                  on the doorstep does not get lost somewhere between the office
                  and the van.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  It also means we will tell you when something is a bad idea.
                  If a layout will not work, or a material will not last where
                  you want to put it, you hear that at quote stage rather than
                  after you have paid for it.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  Most of our work comes from people who have had us before, or
                  from someone they told. That is the whole marketing strategy.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/services" className="btn btn-primary btn-sm group">
                  What we do
                  <ArrowGlyph />
                </Link>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-ghost btn-sm"
                >
                  <InstagramGlyph className="h-4 w-4" />
                  {BUSINESS.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ImageReveal
              delay={0.1}
              className="relative aspect-[4/5] overflow-hidden rounded-md"
            >
              <Photo
                item={{
                  subject: "Garden room, anthracite",
                  src: "/work/garden-room-grey.jpg",
                  alt: "A dark grey clad garden room with French doors and side windows, set on a level base",
                  art: (
                    <Illustration
                      variant="gardenroom"
                      index="00"
                      label="Garden room"
                    />
                  ),
                }}
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* ============================ VALUES ============================ */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="How we work"
                  title="Four things we"
                  accent="do not bend on."
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <Stagger className="divide-y divide-hairline border-y border-hairline">
                {VALUES.map((v, i) => (
                  <StaggerItem key={v.t}>
                    <div className="flex gap-6 py-8">
                      <span className="font-display text-sm font-semibold text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-[1.2rem] font-semibold tracking-tight text-ink">
                          {v.t}
                        </h3>
                        <p className="mt-2.5 max-w-xl text-[0.97rem] leading-[1.75] text-muted">
                          {v.d}
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

      {/* ======================= FULL-BLEED BAND ======================= */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden bg-ink">
        <Photo
          item={{
            subject: "Timber grain",
            /* The measured-drawing sheets are drawn on a 400x300 viewBox and
               slice-crop badly into a band this wide. "band" is the variant
               built to be cropped, so it is the only one that belongs here. */
            art: <Illustration variant="band" />,
          }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
            <Reveal>
              <p className="max-w-xl text-pretty font-display text-xl font-medium leading-[1.4] text-white sm:text-2xl">
                Setting out is the part nobody sees and the part that decides
                whether the finished wall looks right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================= HOW WE PRICE ========================= */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Why we will not quote"
            accent="over the phone."
            intro="Two jobs that sound identical on a call can be days apart once you see the room. These are the things we are looking at on the visit."
          />
          <Stagger className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {PRICE_FACTORS.map((f) => (
              <StaggerItem key={f.t}>
                <div className="border-t border-hairline pt-6">
                  <h3 className="font-display text-[1.1rem] font-semibold tracking-tight text-ink">
                    {f.t}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.7] text-muted">
                    {f.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* =========================== CAPABILITY =========================== */}
      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            tone="light"
            eyebrow="Our range"
            title="Three disciplines,"
            accent="one crew."
            intro="Which is why a room can go from strip-out to finished without being handed over halfway."
          />
          <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <Link
                    href={`/services#${g.id}`}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-white">
                      Read more
                    </span>
                    <ArrowGlyph />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= AREAS ============================= */}
      <section className="bg-paper py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Where we work</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-6 max-w-xl text-balance font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">
              Based in {BUSINESS.base}, out across the Midlands.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-9 flex flex-wrap justify-center gap-2">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-7 max-w-md text-pretty leading-[1.7] text-muted">
              Further out than this? Ring anyway. If we cannot reach you we can
              usually point you at someone who can.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let us come and look at it."
        intro="A visit, a straight conversation, and a written price you can hold us to. That is how every job here starts."
      />
    </>
  );
}
