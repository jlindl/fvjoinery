"use client";

import { useState } from "react";

const labelClass =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted";
const fieldClass =
  "mt-2 w-full rounded-md border border-hairline bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/60 transition-colors focus-visible:border-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: wire to <provider> (e.g. Formspree, Resend, or a /api route).
    // UI-only for now — no submission endpoint is configured.
    console.log("F&V quote request (not yet sent anywhere):", data);
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
        <label htmlFor="message" className={labelClass}>
          What needs doing?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="e.g. Back door won't shut properly and needs re-hanging."
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

      {sent && (
        <p
          role="status"
          className="rounded-md border border-forest/30 bg-forest/10 px-4 py-3 text-sm text-ink"
        >
          Thanks — your details are ready to go. For anything urgent, call{" "}
          <a
            href="tel:+447447907472"
            className="font-semibold text-brass underline underline-offset-2"
          >
            07447 907472
          </a>{" "}
          — we&apos;re open 24/7.
        </p>
      )}
    </form>
  );
}
