import type { ReactNode } from "react";
import QuoteForm from "./quote-form";
import { Reveal, Stagger, StaggerItem, Parallax } from "./motion";
import { Photo } from "./photo";
import ProcessJourney from "./process-journey";
import { Illustration, type IllustrationVariant } from "./illustrations";

/* -------------------------------------------------------------------------- */
/*  Business details — single source of truth (all real, no invented facts)   */
/* -------------------------------------------------------------------------- */
const PHONE_DISPLAY = "07447 907472";
const PHONE_HREF = "tel:+447447907472";
const EMAIL = "infofyvhandyman19@gmail.com";

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */
const TRUST = [
  { k: "24/7", v: "Open every day, all day" },
  { k: "Free", v: "No-obligation quotes" },
  { k: "Cards", v: "Cash, debit & credit" },
  { k: "UK-wide", v: "Nottingham & nationwide" },
];

type Svc = { name: string; icon: IconName; blurb: string };
const SERVICE_GROUPS: { title: string; caption: string; items: Svc[] }[] = [
  {
    title: "Interior & finishes",
    caption: "The everyday jobs that make a house feel right",
    items: [
      {
        name: "Door fitting",
        icon: "door",
        blurb:
          "Internal or external, sticking or hung wrong — fitted square so it opens and shuts like it should.",
      },
      {
        name: "Carpentry",
        icon: "square",
        blurb:
          "Skirting, architrave, stud walls and second-fix repairs — proper joinery, not a bodge.",
      },
      {
        name: "Painting & decorating",
        icon: "roller",
        blurb:
          "Walls, ceilings and woodwork, cut in clean with tidy prep and no mess left behind.",
      },
      {
        name: "Flooring",
        icon: "boards",
        blurb:
          "Laminate, engineered wood, LVT and vinyl — laid flat and finished with the right trims.",
      },
      {
        name: "Tiling",
        icon: "tile",
        blurb: "Walls and floors, set dead level with neat, lasting grout lines.",
      },
    ],
  },
  {
    title: "Kitchens, bathrooms & joinery",
    caption: "Bigger builds and made-to-measure work",
    items: [
      {
        name: "Kitchen & bathroom fitting",
        icon: "tap",
        blurb:
          "Full fit-outs or a single swap — units, worktops, splashbacks and tiling, start to finish.",
      },
      {
        name: "Bespoke joinery",
        icon: "shelf",
        blurb:
          "Made-to-measure shelving, alcove units and furniture, built to your wall and your millimetre.",
      },
      {
        name: "Wood wall panelling",
        icon: "panel",
        blurb:
          "Shaker, slat and traditional panelling that makes a room look finished and warm.",
      },
      {
        name: "Furniture restoration & reassembly",
        icon: "hexkey",
        blurb:
          "Bring tired pieces back to life, or flat-pack rebuilt properly when you move.",
      },
    ],
  },
  {
    title: "Home & garden",
    caption: "Outside space and moving day",
    items: [
      {
        name: "Gardening",
        icon: "leaf",
        blurb:
          "Clearance, fencing, decking and general tidy-ups to get the outside back under control.",
      },
      {
        name: "House removals",
        icon: "van",
        blurb:
          "Careful packing and moving, big or small — we treat your things like our own.",
      },
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    t: "Call or message",
    d: "Tell us what needs doing — day or night, we pick up.",
  },
  {
    n: "02",
    t: "Free consultation",
    d: "We take a look, in person or over the phone, and talk through your options.",
  },
  {
    n: "03",
    t: "A clear quote",
    d: "A straight, fair price agreed before any work starts — no surprises.",
  },
  {
    n: "04",
    t: "We get to work",
    d: "Tidy and careful, and we keep you posted at every stage.",
  },
  {
    n: "05",
    t: "Done & checked",
    d: "We finish properly, clear up, and make sure you're happy with it.",
  },
];

/* Intended photo subjects (the KIND of job) — swap for real photos, see
   /public/work/README.md. `src` intentionally omitted → renders a marked slot. */
type WorkItem = {
  subject: string;
  note: string;
  art: IllustrationVariant;
  src?: string;
  alt?: string;
};
const WORK: WorkItem[] = [
  {
    subject: "Fitted alcove shelving",
    note: "Bespoke joinery",
    art: "shelving",
    src: "/work/shelving.jpg",
    alt: "Built-in alcove shelving with oak shelves and painted cabinets",
  },
  {
    subject: "Kitchen installation",
    note: "Fitting & tiling",
    art: "kitchen",
    src: "/work/kitchen.jpg",
    alt: "A fitted kitchen with wood-effect units and a stone worktop",
  },
  {
    subject: "Bathroom re-tile",
    note: "Walls & floor",
    art: "bathroom",
    src: "/work/bathroom.jpg",
    alt: "A re-tiled bathroom with grey metro tiles and a walk-in shower",
  },
  {
    subject: "Wood wall panelling",
    note: "Feature wall",
    art: "panelling",
    src: "/work/panelling.jpg",
    alt: "Timber wall panelling fitted around a corner",
  },
  {
    subject: "New flooring",
    note: "Engineered wood",
    art: "flooring",
    src: "/work/flooring.jpg",
    alt: "Engineered wood flooring being laid plank by plank",
  },
  {
    subject: "Painting & decorating",
    note: "Prep & finish",
    art: "painting",
    src: "/work/painting.jpg",
    alt: "A wall being painted with a roller and cut-in edges",
  },
];

/* PLACEHOLDER reviews — deliberately NOT realistic fake quotes. Clearly marked
   on-screen and to be replaced by F&V with genuine customer words before launch. */
const REVIEWS = [
  {
    quote:
      "Your first real customer review will sit here. Replace this placeholder with their own words before the site goes live.",
    name: "Customer name",
    place: "Area · Nottingham",
  },
  {
    quote:
      "A second genuine review goes here — what the job was, and how it went. Keep it in the customer's voice.",
    name: "Customer name",
    place: "Area · Nottingham",
  },
  {
    quote:
      "One more real quote here rounds out the section. Three short, honest reviews read better than one long one.",
    name: "Customer name",
    place: "Area · Nottingham",
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */
function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-brass-hi" : "text-brass-strong";
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      <span className="tick-mark" aria-hidden="true" />
      {children}
    </p>
  );
}

function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

type IconName =
  | "door"
  | "square"
  | "roller"
  | "boards"
  | "tile"
  | "tap"
  | "shelf"
  | "panel"
  | "hexkey"
  | "leaf"
  | "van";

function Ico({ name }: { name: IconName }) {
  const p: Record<IconName, ReactNode> = {
    door: (
      <>
        <path d="M6 3h9v18H6z" />
        <path d="M15 21h3" />
        <circle cx="12.6" cy="12" r="0.9" />
      </>
    ),
    square: (
      <>
        <path d="M6 4v14h14" />
        <path d="M6 8h4M6 12h4M6 16h4" />
      </>
    ),
    roller: (
      <>
        <rect x="4" y="4" width="11" height="5" rx="1" />
        <path d="M15 6.5h4v4h-6" />
        <path d="M13 10.5v3a2 2 0 0 1-2 2h-.5v4.5" />
      </>
    ),
    boards: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
        <path d="M9 7v5M16 7v5M6 12v5M13 12v5M19 12v5" />
      </>
    ),
    tile: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 12h16M12 4v16" />
      </>
    ),
    tap: (
      <>
        <path d="M8 20h8" />
        <path d="M12 20v-4" />
        <path d="M12 16h4a4 4 0 0 0 0-8h-1" />
        <path d="M5 8h6v3H5z" />
      </>
    ),
    shelf: (
      <>
        <path d="M4 8h15" />
        <path d="M7 8v7" />
        <path d="M7 15l6-7" />
        <rect x="12" y="4.5" width="5" height="3.5" />
      </>
    ),
    panel: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M9.3 4v16M14.6 4v16" />
      </>
    ),
    hexkey: (
      <>
        <path d="M6.5 20V7.5h9" />
        <circle cx="6.5" cy="20" r="1.4" />
        <circle cx="15.5" cy="7.5" r="1.4" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
        <path d="M5 19 13 11" />
      </>
    ),
    van: (
      <>
        <path d="M3 7h10v9H3z" />
        <path d="M13 10h4l3 3v3h-2" />
        <path d="M9 16H6" />
        <circle cx="7" cy="17.5" r="1.6" />
        <circle cx="17" cy="17.5" r="1.6" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {p[name]}
    </svg>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "F&V Handyman Services",
  description:
    "Handyman and joinery services in Nottingham, working nationwide. Open 24/7, free consultation, no job too small.",
  telephone: "+447447907472",
  email: EMAIL,
  areaServed: ["Nottingham", "United Kingdom"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Cash, Debit Card, Credit Card",
  priceRange: "££",
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================ HEADER ============================ */}
      <header className="sticky top-0 z-40 border-b border-brass-hi/15 bg-ink/85 text-paper backdrop-blur supports-[backdrop-filter]:bg-ink/70">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border-2 border-brass-hi font-display text-lg font-bold tracking-tight text-brass-hi">
              F&amp;V
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-base font-bold uppercase tracking-wide text-paper">
                F&amp;V Handyman Services
              </span>
              <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-paper/55">
                Nottingham · Nationwide
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide lg:flex">
            <a href="#services" className="text-paper/70 transition-colors hover:text-brass-hi">
              Services
            </a>
            <a href="#work" className="text-paper/70 transition-colors hover:text-brass-hi">
              Work
            </a>
            <a href="#about" className="text-paper/70 transition-colors hover:text-brass-hi">
              About
            </a>
            <a href="#contact" className="text-paper/70 transition-colors hover:text-brass-hi">
              Contact
            </a>
          </div>

          <a href={PHONE_HREF} className="btn btn-accent btn-sm">
            <PhoneGlyph className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </header>

      <main id="main" className="flex-1">
        {/* ============================= HERO ============================= */}
        <section id="top" className="relative overflow-hidden bg-ink text-paper">
          <div className="grain absolute inset-0" aria-hidden="true" />
          <Parallax
            distance={90}
            className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] rounded-full opacity-70 blur-3xl"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(205,163,106,0.16), transparent 70%)",
              }}
            />
          </Parallax>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow tone="light">Nottingham handyman · working nationwide</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 font-display text-[3rem] font-bold uppercase leading-[0.9] tracking-tight text-paper sm:text-6xl xl:text-7xl">
                  Fix it. Fit it.{" "}
                  <span className="text-brass-hi">Build&nbsp;it.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
                  The Nottingham handyman who actually picks up. From a door that
                  won&apos;t shut to a full kitchen or a shelf built to your wall
                  — fair prices, real craftsmanship, and we keep you posted at
                  every step. No job too small.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={PHONE_HREF} className="btn btn-accent">
                    <PhoneGlyph className="h-5 w-5" />
                    {PHONE_DISPLAY}
                  </a>
                  <a href="#contact" className="btn btn-ghost-light group">
                    Get a free quote
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-paper/70">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass-hi" />
                    Open 24/7
                  </span>
                  <span aria-hidden="true" className="text-brass-hi/50">/</span>
                  <span>Free consultation</span>
                  <span aria-hidden="true" className="text-brass-hi/50">/</span>
                  <span>Cash &amp; cards</span>
                </p>
              </Reveal>
            </div>

            {/* hero image */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15} scale>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brass-hi/20 shadow-2xl shadow-black/40 sm:aspect-[3/4] lg:aspect-[4/5]">
                  <Photo
                    item={{
                      subject: "F&V at work",
                      src: "/work/hero.jpg",
                      alt: "An F&V tradesman marking up a length of timber before cutting",
                      art: (
                        <Illustration
                          variant="kitchen"
                          index="01"
                          label="Kitchen fit-out"
                        />
                      ),
                    }}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-brass-hi/30 bg-ink/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brass-hi backdrop-blur">
                    Est. Nottingham
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/60 to-transparent p-5 pt-20">
                    <p className="font-display text-2xl font-bold uppercase tracking-tight text-brass-hi">
                      Open 24/7
                    </p>
                    <p className="mt-1 text-sm text-paper/80">
                      We answer day or night — free consultation, cash &amp; cards.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="tick-rule tick-rule-hi" aria-hidden="true" />
        </section>

        {/* ========================= TRUST STRIP ========================= */}
        <section className="bg-paper" aria-label="Why choose F&V">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
            <Reveal>
              <p className="mb-8 text-center font-display text-lg font-semibold uppercase tracking-wide text-ink sm:text-xl">
                No job too small — and none we won&apos;t turn up for
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-2 divide-y divide-hairline border-y border-hairline md:grid-cols-4 md:divide-x md:divide-y-0">
              {TRUST.map((t) => (
                <StaggerItem key={t.k}>
                  <div className="flex flex-col items-center px-4 py-6 text-center">
                    <span className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
                      {t.k}
                    </span>
                    <span className="mt-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-brass-strong">
                      {t.v}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ===================== PROMISE IMAGE BAND ===================== */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <div className="relative h-[62vh] min-h-[440px]">
            <Photo
              item={{
                subject: "Craftsmanship, up close",
                src: "/work/band.jpg",
                alt: "A joiner's hand tools and wood shavings laid out on a workbench",
                art: <Illustration variant="band" />,
              }}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/25" />
            <div className="grain absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-8">
              <Reveal>
                <Eyebrow tone="light">Our promise</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl">
                  Measured twice.{" "}
                  <span className="text-brass-hi">Fixed once.</span>
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper/80">
                  Careful work, a fair price, and updates at every stage —
                  whether it&apos;s a squeaky door or a full refit.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <a href={PHONE_HREF} className="btn btn-accent">
                    <PhoneGlyph className="h-5 w-5" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ ABOUT ============================ */}
        <section id="about" className="scroll-mt-24 bg-surface py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow tone="dark">About F&amp;V</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-ink sm:text-5xl">
                The handyman who actually turns up.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  F&amp;V Handyman Services is a small, honest outfit based in
                  Nottingham and working right across the UK. We do the jobs most
                  people put off — and the big ones too.
                </p>
                <p>
                  You&apos;ll get a fair price, proper craftsmanship, and someone
                  who keeps you posted at every stage. No jargon, no vanishing
                  acts, no job too small.
                </p>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Fair, up-front pricing",
                  "Updates at every stage",
                  "Tidy, careful work",
                  "Free, no-obligation quotes",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-ink">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-forest"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4.5 4.5L19 7" />
                    </svg>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} scale>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline shadow-lg">
                  <Photo
                    item={{
                      subject: "F&V on the tools",
                      src: "/work/about.jpg",
                      alt: "An F&V craftsman working a length of timber in the workshop",
                      art: (
                        <Illustration variant="bench" index="00" label="The toolkit" />
                      ),
                    }}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-hairline bg-ink px-5 py-4 text-paper shadow-xl sm:block">
                  <p className="font-display text-2xl font-bold leading-none text-brass-hi">
                    24/7
                  </p>
                  <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-paper/70">
                    We answer, day or night
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================== SERVICES =========================== */}
        <section
          id="services"
          className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-paper sm:py-32"
        >
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow tone="light">What we do</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-paper sm:text-5xl">
                Everything on the list — done properly.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
                One trusted tradesman for the whole job, from a five-minute fix
                to a full fit-out.
              </p>
            </Reveal>

            <div className="mt-14 space-y-14">
              {SERVICE_GROUPS.map((group) => (
                <div key={group.title}>
                  <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-brass-hi/25 pb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brass-hi sm:text-3xl">
                          {group.title}
                        </h3>
                        <p className="mt-1 text-sm text-paper/60">
                          {group.caption}
                        </p>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">
                        {String(group.items.length).padStart(2, "0")} services
                      </span>
                    </div>
                  </Reveal>

                  <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((s) => (
                      <StaggerItem key={s.name}>
                        <div className="group flex h-full gap-4 rounded-xl border border-brass-hi/15 bg-ink-soft/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brass-hi/45 hover:bg-ink-soft hover:shadow-xl hover:shadow-black/30">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-brass-hi/25 text-brass-hi transition-colors group-hover:border-brass-hi/60 group-hover:bg-brass-hi/10">
                            <Ico name={s.icon} />
                          </span>
                          <div>
                            <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-paper">
                              {s.name}
                            </h4>
                            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-paper/65">
                              {s.blurb}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              ))}
            </div>

            <Reveal>
              <p className="mt-12 text-paper/70">
                Something not on the list?{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-brass-hi underline decoration-2 underline-offset-4 transition-colors hover:text-paper"
                >
                  Give us a call
                </a>{" "}
                — if it needs doing, chances are we do it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* =========================== PROCESS =========================== */}
        <section className="bg-paper py-24 sm:py-32" aria-label="How it works">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow tone="dark">How it works</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-ink sm:text-5xl">
                Simple, from first call to finished.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Five steps, no runaround — here&apos;s exactly how a job goes.
              </p>
            </Reveal>
            <ProcessJourney steps={PROCESS} />
          </div>
        </section>

        {/* ============================ WORK ============================ */}
        <section id="work" className="scroll-mt-24 bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Eyebrow tone="dark">Recent work</Eyebrow>
                  <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-ink sm:text-5xl">
                    A few of the jobs we take on.
                  </h2>
                </div>
                <p className="max-w-xs text-sm text-muted">
                  From a sticking door to a full refit — recent jobs across
                  Nottingham and beyond.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WORK.map((item, i) => (
                <StaggerItem key={item.subject}>
                  <figure className="group overflow-hidden rounded-2xl border border-hairline bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
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
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-3 border-t border-hairline px-4 py-3">
                      <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                        {item.subject}
                      </span>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-brass-strong">
                        {item.note}
                      </span>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ========================= TESTIMONIALS ========================= */}
        <section
          className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32"
          aria-label="Reviews"
        >
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Eyebrow tone="light">What customers say</Eyebrow>
                <span className="rounded-full border border-dashed border-brass-hi/50 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-brass-hi">
                  Placeholder · F&amp;V to replace with real reviews
                </span>
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-paper sm:text-5xl">
                Words from the people we work for.
              </h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <StaggerItem key={i}>
                  <figure className="flex h-full flex-col rounded-2xl border border-brass-hi/15 bg-ink-soft/50 p-6">
                    <div
                      className="font-display text-5xl leading-none text-brass-hi/50"
                      aria-hidden="true"
                    >
                      “
                    </div>
                    <blockquote className="mt-2 flex-1 text-[0.98rem] leading-relaxed text-paper/75">
                      {r.quote}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-brass-hi/15 pt-4">
                      <p className="font-display text-base font-semibold uppercase tracking-wide text-paper">
                        {r.name}
                      </p>
                      <p className="text-[0.78rem] uppercase tracking-[0.1em] text-brass-hi">
                        {r.place}
                      </p>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* =========================== CONTACT =========================== */}
        <section id="contact" className="scroll-mt-24 bg-paper py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow tone="dark">Get in touch</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.97] tracking-tight text-ink sm:text-5xl">
                Tell us what needs doing.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Send a message or just call — we&apos;re open 24/7 and the
                consultation&apos;s free. We&apos;ll take a look, give you a
                straight quote, and get it sorted.
              </p>

              <a
                href={PHONE_HREF}
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink text-brass-hi">
                  <PhoneGlyph className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    Call us, day or night
                  </span>
                  <span className="block font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <dl className="mt-6 space-y-3 text-[0.95rem]">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-brass-strong">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all font-medium text-ink underline decoration-brass/50 decoration-2 underline-offset-4 transition-colors hover:text-brass-strong"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-brass-strong">
                    Hours
                  </dt>
                  <dd className="text-ink">Open every day, all day — 24/7</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-brass-strong">
                    Payment
                  </dt>
                  <dd className="text-ink">Cash, debit &amp; credit cards</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-brass-strong">
                    Area
                  </dt>
                  <dd className="text-ink">Nottingham &amp; nationwide</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} scale>
              <div className="rounded-2xl border border-hairline bg-surface p-6 shadow-lg sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    Request a free quote
                  </h3>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-brass-strong">
                    No obligation
                  </span>
                </div>
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============================ FOOTER ============================ */}
      <footer className="bg-ink-soft text-paper/70">
        <div className="tick-rule tick-rule-hi" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 lg:pb-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md border-2 border-brass-hi font-display text-lg font-bold text-brass-hi">
                  F&amp;V
                </span>
                <span className="font-display text-base font-bold uppercase tracking-wide text-paper">
                  F&amp;V Handyman Services
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Honest handyman and joinery work in Nottingham and across the UK.
                Fair prices, real craftsmanship, no job too small.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hi">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href={PHONE_HREF} className="text-paper transition-colors hover:text-brass-hi">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-brass-hi">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hi">
                Hours
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-paper">Open 24/7</li>
                <li>Every day, all day</li>
                <li>Free consultation</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-hi">
                Where &amp; how
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Based in Nottingham, UK</li>
                <li>Covering nationwide</li>
                <li>Cash · debit · credit</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col-reverse items-start justify-between gap-3 border-t border-brass-hi/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-[0.72rem] uppercase tracking-[0.12em] text-paper/55">
              © 2026 F&amp;V Handyman Services · Nottingham, UK
            </p>
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-brass-hi">
              Measured twice · fixed once
            </p>
          </div>
        </div>
      </footer>

      {/* ==================== MOBILE STICKY CALL BAR ==================== */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper/95 px-3 py-2.5 backdrop-blur lg:hidden">
        <div className="flex items-center gap-2.5">
          <a href={PHONE_HREF} className="btn btn-primary h-12 flex-1">
            <PhoneGlyph className="h-5 w-5" />
            Call {PHONE_DISPLAY}
          </a>
          <a href="#contact" className="btn btn-ghost h-12 px-4">
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
