"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A slim vertical measuring rule pinned in the left margin. The bronze fill and
 * travelling marker track scroll progress, so the whole page reads as a journey
 * down a tape measure. Only shown on very wide screens (clear gutter), and it's
 * decorative + non-interactive.
 */
export default function TapeRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.3,
  });
  const top = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-8 top-0 z-30 hidden h-screen w-5 2xl:block"
    >
      {/* ticks */}
      <div className="tape-v absolute inset-y-8 left-0 w-full opacity-50" />
      {/* baseline track */}
      <div className="absolute inset-y-8 left-0 w-px bg-hairline" />
      {/* filled portion */}
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-y-8 left-0 w-px origin-top bg-brass"
      />
      {/* travelling marker */}
      <motion.div
        style={{ top }}
        className="absolute left-0 mt-8 h-2.5 w-2.5 -translate-x-[3px] -translate-y-1/2 rounded-full border-2 border-brass bg-paper"
      />
    </div>
  );
}
