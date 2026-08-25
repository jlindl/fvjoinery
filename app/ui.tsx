import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BUSINESS, type IconName } from "./site";
import { Reveal } from "./motion";

/* ==========================================================================
   Shared UI primitives.

   Restraint is the rule here. Orange is the brand's *action* colour, not a
   decoration: it belongs on the primary call-to-action and on a single hairline
   that leads a section. Everything else is charcoal, warm grey and paper.
   Headings run in sentence case — wall-to-wall uppercase reads shouty rather
   than expensive, so caps are reserved for small labels (eyebrows, nav).
   ========================================================================== */

/* -------------------------------------------------------------------------- */
/*  Logo — the real FV artwork from /public/image.png.                         */
/*                                                                            */
/*  The logo is two-tone: orange (#ff6000) and a neutral dark (#303030). That  */
/*  dark sits at 1.25:1 against the charcoal header, so it would vanish there. */
/*  A pre-built variant with the dark parts swapped for paper is used on dark  */
/*  surfaces; the orange is identical in both. Variants are generated from the */
/*  source artwork, not recoloured with CSS filters.                          */
/* -------------------------------------------------------------------------- */
export function LogoMark({
  className = "h-9 w-auto",
  tone = "light",
  priority = false,
}: {
  className?: string;
  /* `tone` describes the BACKGROUND it sits on. */
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "dark" ? "/logo-mark-light.png" : "/logo-mark.png"}
      alt={`${BUSINESS.name} logo`}
      width={205}
      height={160}
      priority={priority}
      className={`w-auto shrink-0 ${className}`}
    />
  );
}

/* The full lockup, including the "Joinery and building solutions" line. Only
   worth using at a size where that line is actually legible. */
export function LogoFull({
  className = "h-16 w-auto",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Image
      src={tone === "dark" ? "/logo-full-light.png" : "/logo-full.png"}
      alt={`${BUSINESS.name} logo`}
      width={317}
      height={240}
      className={`w-auto ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Wordmark — mark + two-line lockup                                          */
/* -------------------------------------------------------------------------- */
export function Wordmark({
  tone = "dark",
  href = "/",
}: {
  tone?: "light" | "dark";
  href?: string | null;
}) {
  const onDark = tone === "dark";
  const inner = (
    <>
      <LogoMark
        tone={onDark ? "dark" : "light"}
        priority
        className="h-9 w-auto sm:h-10"
      />
      <span className="leading-tight">
        <span
          className={`block font-display text-[0.95rem] font-bold tracking-tight sm:text-base ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          {BUSINESS.shortName}
        </span>
        <span
          className={`block text-[0.62rem] font-medium uppercase tracking-[0.16em] ${
            onDark ? "text-white/55" : "text-muted"
          }`}
        >
          &amp; Building Solutions
        </span>
      </span>
    </>
  );

  if (!href) return <span className="flex items-center gap-3">{inner}</span>;
  return (
    <Link href={href} className="flex items-center gap-3 rounded-md">
      {inner}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow — a short orange hairline then small tracked caps in a neutral     */
/*  tone. The rule is the only orange on a light section besides the CTA.      */
/* -------------------------------------------------------------------------- */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const onDark = tone === "light";
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
        onDark ? "text-white/65" : "text-muted"
      }`}
    >
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-brass" />
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Glyphs                                                                     */
/* -------------------------------------------------------------------------- */
export function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowGlyph() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      →
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Service icons                                                              */
/* -------------------------------------------------------------------------- */
export function Ico({ name }: { name: IconName }) {
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
    cabin: (
      <>
        {/* flat-roof garden room: overhanging roof, clad wall, glazed front */}
        <path d="M2.5 8.5h19" />
        <path d="M4 8.5V20h16V8.5" />
        <path d="M9.5 20v-8h5v8" />
        <path d="M12 12v8" />
        <path d="M7 12h1M16 12h1" />
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
    wall: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 10h18M3 14.5h18" />
        <path d="M9 5v5M15 5v5M6 10v4.5M12 10v4.5M18 10v4.5M9 14.5V19M15 14.5V19" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {p[name]}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page hero — the charcoal banner every inner page opens with                */
/* -------------------------------------------------------------------------- */
export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  /* Trailing clause, set in a quieter tone so the line reads as one thought. */
  accent?: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <Reveal>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 max-w-3xl text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.6rem] lg:text-[4rem]">
            {title}
            {accent ? <span className="text-white/55"> {accent}</span> : null}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-[1.7] text-white/70">
            {intro}
          </p>
        </Reveal>
        {children ? <Reveal delay={0.18}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading — consistent across every page                            */
/* -------------------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  /* `tone` describes the BACKGROUND: "light" = on a dark band. */
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const onDark = tone === "light";
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <Reveal>
        <div className={centered ? "flex justify-center" : ""}>
          <Eyebrow tone={onDark ? "light" : "dark"}>{eyebrow}</Eyebrow>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={`mt-6 max-w-2xl text-balance font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.75rem] ${
            onDark ? "text-white" : "text-ink"
          } ${centered ? "mx-auto" : ""}`}
        >
          {title}
          {accent ? (
            <span className={onDark ? "text-white/55" : "text-muted"}>
              {" "}
              {accent}
            </span>
          ) : null}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 max-w-xl text-pretty text-[1.05rem] leading-[1.7] ${
              onDark ? "text-white/70" : "text-muted"
            } ${centered ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing call-to-action band — reused at the foot of every page             */
/* -------------------------------------------------------------------------- */
export function CtaBand({
  title = "Ready to talk about your project?",
  intro = "Tell us what you're planning. We'll come and take a proper look, then put a clear written quote in front of you — free, and with no obligation.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="mx-auto max-w-2xl text-balance font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[2.75rem]">
            {title}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[1.05rem] leading-[1.7] text-white/70">
            {intro}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="btn btn-accent">
              <PhoneGlyph className="h-[18px] w-[18px]" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-ghost-light group">
              Request a quote
              <ArrowGlyph />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
