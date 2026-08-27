"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export type Slide = { src: string; alt: string };

/**
 * Photo carousel for showing one job from several angles.
 *
 * Built on native scroll-snap rather than a transform slider, which buys touch
 * swipe, momentum, and keyboard arrow-key scrolling for free, and degrades to a
 * plain scroller if JS never runs.
 *
 * Two things it has to get right:
 *  - `data-lenis-prevent` on the track. Lenis drives page scroll from wheel
 *    events, and without this a trackpad swipe over the carousel gets eaten by
 *    the smooth-scroll layer instead of moving the slides.
 *  - Position comes from an IntersectionObserver on the slides, not from a
 *    scroll handler doing arithmetic. Snap points already decide where a slide
 *    lands; measuring instead of predicting keeps the dots honest during a
 *    fling, a resize, or a reduced-motion jump.
 */
export default function Carousel({
  slides,
  label,
  aspect = "aspect-[3/2]",
}: {
  slides: Slide[];
  label: string;
  aspect?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setIndex(items.indexOf(visible.target as HTMLElement));
      },
      { root: track, threshold: 0.6 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [slides.length]);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      const target = track.children[clamped] as HTMLElement | undefined;
      if (!target) return;
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [reduce, slides.length]
  );

  if (slides.length === 0) return null;

  return (
    <div
      className="group/car relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <ul
        ref={trackRef}
        data-lenis-prevent
        tabIndex={0}
        aria-label={`${label}: use the arrow keys to move between photos`}
        className={`no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-md outline-none ring-offset-2 ring-offset-paper focus-visible:ring-2 focus-visible:ring-accent-strong`}
      >
        {slides.map((s, i) => (
          <li
            key={s.src}
            className="w-full shrink-0 snap-center"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <div className={`relative ${aspect} overflow-hidden`}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>

      {slides.length > 1 ? (
        <>
          <Arrow
            dir="prev"
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
          />
          <Arrow
            dir="next"
            disabled={index === slides.length - 1}
            onClick={() => goTo(index + 1)}
          />

          {/* Count, not just dots: it survives being read at a glance on a
              phone where the dots are only a few pixels across. */}
          <div className="mt-3 flex items-center justify-between gap-4">
            <ul className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <li key={s.src}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show photo ${i + 1} of ${slides.length}`}
                    aria-current={i === index}
                    className={[
                      "block h-1.5 rounded-full transition-all duration-300",
                      i === index ? "w-6 bg-accent" : "w-1.5 bg-muted/45 hover:bg-muted",
                    ].join(" ")}
                  />
                </li>
              ))}
            </ul>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
              {index + 1} / {slides.length}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

function Arrow({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const prev = dir === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={prev ? "Previous photo" : "Next photo"}
      className={[
        "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full",
        "bg-ink/85 text-white backdrop-blur transition",
        "hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        "disabled:pointer-events-none disabled:opacity-0",
        /* Visible on touch, where there is no hover to reveal them. Fades in
           with the card on pointer devices. */
        "opacity-100 lg:opacity-0 lg:group-hover/car:opacity-100 lg:focus-visible:opacity-100",
        prev ? "left-3" : "right-3",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={prev ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
