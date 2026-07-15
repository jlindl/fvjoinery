"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export type PhotoItem = {
  subject: string;
  note?: string;
  src?: string;
  alt?: string;
  /* Original illustration shown until a real photo (`src`) is supplied. */
  art?: ReactNode;
};

/**
 * Fills its (relative, sized) parent. Renders a real next/image when `src` is
 * set, otherwise a clearly-marked placeholder slot. The image drifts vertically
 * with scroll for an editorial parallax feel (disabled under reduced motion).
 */
export function Photo({
  item,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  parallax = true,
}: {
  item: PhotoItem;
  sizes?: string;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const still = reduce || !parallax;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    still ? ["0%", "0%"] : ["-8%", "8%"]
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-8%] h-[116%] will-change-transform"
      >
        {item.src ? (
          <Image
            src={item.src}
            alt={item.alt ?? item.subject}
            fill
            sizes={sizes}
            className="object-cover"
          />
        ) : item.art ? (
          item.art
        ) : (
          <Placeholder subject={item.subject} />
        )}
      </motion.div>
    </div>
  );
}

function Placeholder({ subject }: { subject: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-paper to-hairline/60">
      <div className="absolute inset-4 rounded-lg border border-dashed border-brass/35" />
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 text-brass/55"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 8h3l1.5-2h7L18 8h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
        <circle cx="12" cy="13" r="3.2" />
      </svg>
      <div className="relative px-4 text-center">
        <p className="font-display text-base font-semibold text-ink">{subject}</p>
        <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brass-strong">
          Photo pending
        </p>
      </div>
    </div>
  );
}
