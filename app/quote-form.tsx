"use client";

import { useState } from "react";
import { BUSINESS, SERVICE_GROUPS } from "./site";

const labelClass =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted";
const fieldClass =
  "mt-2 w-full rounded-md border border-hairline bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/60 transition-colors focus-visible:border-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: wire to a provider (e.g. Formspree, Resend, or a route handler).
    // UI-only for now: no submission endpoint is configured.
    console.log("FV quote request (not yet sent anywhere):", data);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="07000 000000"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Type of work
        </label>
        <select id="service" name="service" className={fieldClass} defaultValue="">
          <option value="">Not sure yet / something else</option>
          {SERVICE_GROUPS.map((g) => (
            <optgroup key={g.id} label={g.title}>
              {g.items.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="e.g. Two alcoves either side of the chimney breast. Cupboards below, open shelves above. Roughly 900mm wide each."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn btn-primary group w-full">
        Send my request
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </button>

      <p className="text-[0.78rem] leading-relaxed text-muted">
        We only use your details to reply about this enquiry. They are not
        passed to anyone else.
      </p>

      {sent && (
        <p
          role="status"
          className="rounded-md border border-brass/40 bg-brass/10 px-4 py-3 text-sm text-ink"
        >
          Thanks. Your details are ready to go. For anything urgent, call{" "}
          <a
            href={BUSINESS.phoneHref}
            className="font-semibold text-brass-strong underline underline-offset-2"
          >
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
