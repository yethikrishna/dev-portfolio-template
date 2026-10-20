import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: { hidden: { y: number }; visible: { y: number } };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
  eager?: boolean;
}

// Content stays visible in server HTML. CSS handles the small entrance motion,
// without one JS animation/observer per card or opacity-gated text.
export default function BlurFade({ children, className, duration = 0.35, delay = 0 }: BlurFadeProps) {
  return (
    <div className={`hero-rise ${className ?? ""}`} style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
