// src/components/scroll-progress.tsx
"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Reading-progress line. Uses the theme foreground so it stays
 * monochrome and follows light/dark automatically (ink on paper).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-foreground/90"
      style={{ scaleX }}
    />
  );
}
