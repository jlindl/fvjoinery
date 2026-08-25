"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BUSINESS, NAV } from "./site";
import { PhoneGlyph, Wordmark } from "./ui";

/**
 * Sticky slate header. Collapses to a full-screen sheet on mobile, marks the
 * current route, and always keeps the phone number one tap away.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  /* Close the sheet whenever the route changes. Adjusting state during render
     (rather than in an effect) avoids a cascading re-render, and still covers
     back/forward navigation as well as taps on the links themselves. */
  const [renderedAt, setRenderedAt] = useState(pathname);
  if (renderedAt !== pathname) {
    setRenderedAt(pathname);
    setOpen(false);
  }

  /* Lock body scroll while the sheet is open, and allow Escape to dismiss. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // Kept near-opaque: at bg-ink/75 the bar washed out over light sections and
    // dropped the nav links to 3.4:1. At /95 they sit comfortably above AA.
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white backdrop-blur supports-[backdrop-filter]:bg-ink/95">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <Wordmark tone="dark" href="/" />

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-md px-3.5 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      className="absolute inset-x-3.5 -bottom-px h-[2px] bg-brass"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={BUSINESS.phoneHref} className="btn btn-accent btn-sm">
            <PhoneGlyph className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:border-white/45 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-lg font-semibold  tracking-tight transition-colors ${
                        active ? "text-white" : "text-white/55"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-white/30">
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="pb-4 pt-5">
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="block break-all text-sm text-white/60"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
