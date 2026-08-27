import type { Metadata } from "next";
import QuoteForm from "../quote-form";
import { Reveal, Stagger, StaggerItem } from "../motion";
import ProcessJourney from "../process-journey";
import { AREAS, BUSINESS, FAQS, PROCESS, WHATSAPP_HREF } from "../site";
import {
  Eyebrow,
  InstagramGlyph,
  MailGlyph,
  PageHero,
  PhoneGlyph,
  SectionHeading,
  TikTokGlyph,
  WhatsAppGlyph,
} from "../ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from FV Joinery and Building Solutions. Call 07447 907472, email, or send the form. Covering Leicestershire and the East and West Midlands.",
  openGraph: {
    title: `Contact | ${BUSINESS.shortName}`,
    description:
      "Free quotes across Leicestershire and the Midlands. Call 07447 907472 or send us the details.",
  },
};

/* What actually helps us price a job. Practical, and it saves a phone call. */
const HELPFUL = [
  "Rough sizes of the space, even paced out",
  "A photo or two, including one from the doorway",
  "Anything you have saved that shows the look you want",
  "Whether you have a date you are working towards",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what"
        accent="needs doing."
        intro="Call, email or send the form. We will come and measure up, then put an itemised price in writing. The visit costs nothing either way."
      />

      {/* ========================= CONTACT GRID ========================= */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Direct"
                title="A call is"
                accent="quickest."
                intro="You get straight through to someone who works on the tools rather than a booking line."
              />

              <Reveal delay={0.16}>
                <a
                  href={BUSINESS.phoneHref}
                  className="card mt-8 flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ink text-white">
                    <PhoneGlyph className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Call us
                    </span>
                    <span className="block font-display text-2xl font-semibold tracking-tight text-ink">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.18}>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card mt-4 flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ink text-white">
                    <WhatsAppGlyph className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      WhatsApp
                    </span>
                    <span className="block font-display text-lg font-semibold tracking-tight text-ink">
                      Send photos and sizes
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="card flex items-start gap-3 p-5"
                  >
                    <MailGlyph className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        Email
                      </span>
                      <span className="mt-0.5 block break-all text-sm font-medium text-ink">
                        {BUSINESS.email}
                      </span>
                    </span>
                  </a>
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="card flex items-start gap-3 p-5"
                  >
                    <InstagramGlyph className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        Instagram
                      </span>
                      <span className="mt-0.5 block break-all text-sm font-medium text-ink">
                        {BUSINESS.instagramHandle}
                      </span>
                    </span>
                  </a>
                  <a
                    href={BUSINESS.tiktok}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="card flex items-start gap-3 p-5"
                  >
                    <TikTokGlyph className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        TikTok
                      </span>
                      <span className="mt-0.5 block break-all text-sm font-medium text-ink">
                        {BUSINESS.tiktokHandle}
                      </span>
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <dl className="mt-8 space-y-3.5 border-t border-hairline pt-7 text-[0.95rem]">
                  {[
                    ["Based", `${BUSINESS.base}, UK`],
                    ["Covering", "East and West Midlands"],
                    ["Quotes", "Free, itemised, in writing"],
                    ["Payment", "Cash, debit and credit cards"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4">
                      <dt className="w-24 shrink-0 font-semibold uppercase tracking-[0.1em] text-muted">
                        {k}
                      </dt>
                      <dd className="text-ink">{v}</dd>
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <dt className="w-24 shrink-0 font-semibold uppercase tracking-[0.1em] text-muted">
                      Reviews
                    </dt>
                    <dd>
                      <a
                        href={BUSINESS.checkatrade}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-muted"
                      >
                        Checkatrade profile
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div
                id="quote"
                className="scroll-mt-24 rounded-md border border-hairline bg-surface p-6 shadow-card sm:p-8"
              >
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                  Ask for a price
                </h2>
                <p className="mt-2 text-[0.95rem] leading-[1.65] text-muted">
                  The more you can tell us here, the closer the first number
                  will be.
                </p>
                <div className="mt-7">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 rounded-md border border-hairline bg-paper p-6 sm:p-7">
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  What helps us price it faster
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {HELPFUL.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-[0.94rem] leading-[1.6] text-muted"
                    >
                      <span aria-hidden="true" className="text-muted">
                        /
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== PROCESS =========================== */}
      <section
        className="bg-surface py-24 sm:py-32"
        aria-label="What happens next"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="What happens next"
                title="From your call"
                accent="to the finish."
                intro="No mystery and no pressure. This is exactly what follows once you get in touch."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ProcessJourney steps={[...PROCESS]} />
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title="Before you"
            accent="ring."
            align="center"
          />
          <Stagger className="mt-14 divide-y divide-hairline border-y border-hairline">
            {FAQS.map((f) => (
              <StaggerItem key={f.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-hairline text-muted transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[0.97rem] leading-[1.75] text-muted">
                    {f.a}
                  </p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ AREAS ============================ */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="light">Areas covered</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <a href={BUSINESS.phoneHref} className="btn btn-accent mt-10">
              <PhoneGlyph className="h-[18px] w-[18px]" />
              {BUSINESS.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
