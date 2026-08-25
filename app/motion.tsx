"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.22, 0.7, 0.2, 1] as const;

/* A single element that rises + fades (and optionally settles from a slight
   scale) when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  scale = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: boolean;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y, scale: scale ? 0.965 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* Parent that staggers its <StaggerItem> children as the group enters view. */
export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* Scroll-linked parallax — translates its child as the element moves through
   the viewport. No-op under reduced motion. */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance * -0.5, distance * 0.5]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* Headline that lifts word by word as it enters view. The words sit in a
   clipped track so they rise out of nothing rather than fading in place.
   Spaces are preserved as real text nodes, so selection and screen readers
   read the heading normally.

   The trigger lives on the heading, NOT on the individual words: a word that
   starts translated below its own overflow-hidden track has an empty
   intersection rect (ancestor clipping counts), so a per-word whileInView
   never fires and the heading stays invisible forever. Variants propagate
   from the unclipped parent instead. */
export function RevealWords({
  text,
  className,
  /* Trailing words rendered in a quieter tone, as a second clause. */
  quiet,
  quietClassName = "",
  delay = 0,
  as = "h2",
}: {
  text: string;
  className?: string;
  quiet?: string;
  quietClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.h2;

  const words = [
    ...text.split(" ").map((w) => ({ w, quiet: false })),
    ...(quiet ? quiet.split(" ").map((w) => ({ w, quiet: true })) : []),
  ];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "108%" },
    show: { y: "0%", transition: { duration: 0.62, ease: EASE } },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
    >
      {words.map((item, i) => (
        <span
          key={`${item.w}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={reduce ? undefined : word}
            className={`inline-block ${item.quiet ? quietClassName : ""}`}
          >
            {item.w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </MotionTag>
  );
}

/* Wipes an image open from the bottom as it enters view. Pairs with <Photo>,
   which handles the parallax drift inside. */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(14% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
