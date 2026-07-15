"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

export type Step = { n: string; t: string; d: string };

const EASE = [0.22, 0.7, 0.2, 1] as const;

export default function ProcessJourney({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });

  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <ol ref={ref} className="relative mt-16 space-y-10 sm:space-y-12">
      {/* the tape line — track + scroll-linked bronze fill */}
      <div
        aria-hidden="true"
        className="absolute left-[27px] top-3 bottom-3 w-px bg-hairline"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : scaleY }}
        className="absolute left-[27px] top-3 bottom-3 w-px origin-top bg-brass"
      />

      {steps.map((step) => (
        <motion.li
          key={step.n}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          className="relative grid grid-cols-[3.5rem_1fr] items-start gap-x-5 sm:gap-x-7"
        >
          <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-hairline bg-surface font-display text-lg font-bold text-brass-strong shadow-sm">
            {step.n}
          </span>
          <div className="pt-1.5">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink sm:text-2xl">
              {step.t}
            </h3>
            <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-muted">
              {step.d}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
