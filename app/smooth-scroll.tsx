"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia-based smooth scrolling. Disabled entirely when the user prefers
 * reduced motion, and torn down cleanly on unmount. Anchor links are handled
 * by Lenis so in-page navigation stays smooth.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: { offset: -72 },
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
