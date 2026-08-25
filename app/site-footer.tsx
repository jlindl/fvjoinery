import Link from "next/link";
import { AREAS, BUSINESS, NAV, SERVICE_GROUPS } from "./site";
import { InstagramGlyph, LogoFull, MailGlyph, PhoneGlyph } from "./ui";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-soft text-white/70">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 sm:pt-20 lg:pb-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-4">
            {/* Full lockup here: at this size the "Joinery and building
                solutions" line in the artwork is actually legible. */}
            <LogoFull tone="dark" className="h-24 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Fitted joinery, building and renovation across {BUSINESS.base}{" "}
              and the wider Midlands. We measure the room you have and build to
              those numbers.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`FV Joinery on Instagram (${BUSINESS.instagramHandle})`}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/45 hover:text-white"
              >
                <InstagramGlyph className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.checkatrade}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-lg border border-white/20 px-3.5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/45 hover:text-white"
              >
                Checkatrade
              </a>
            </div>
          </div>

          {/* sitemap */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Pages
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              What we do
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_GROUPS.map((g) => (
                <li key={g.id}>
                  <Link
                    href={`/services#${g.id}`}
                    className="transition-colors hover:text-white"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-brass-hi"
                >
                  <PhoneGlyph className="h-4 w-4 shrink-0 text-white/45" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-white"
                >
                  <MailGlyph className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li className="pt-1 text-white/75">
                Based in {BUSINESS.base}
                <br />
                Covering the East &amp; West Midlands
              </li>
            </ul>
          </div>
        </div>

        {/* areas */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Areas we cover
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {AREAS.join(" · ")}, and everywhere between them.
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.72rem] uppercase tracking-[0.12em] text-white/70">
            © {year} {BUSINESS.name} · {BUSINESS.base}, UK
          </p>
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-white/60">
            Built to the wall you have
          </p>
        </div>
      </div>
    </footer>
  );
}
