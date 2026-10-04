// components/page-background.tsx
'use client';

import { usePathname } from 'next/navigation';
import GridPattern from './ui/grid-pattern';

export function PageBackground() {
  const pathname = usePathname();
  const isBlogPage = pathname?.includes('/blog');
  const isGadgetsPage = pathname?.includes('/gadgets');

  if (isGadgetsPage) {
    return <GridPattern className="w-full h-full" />;
  }

  if (isBlogPage) {
    return null;
  }

  // Quiet dot grid plus a few CSS-only meteors. Positions and timings are fixed
  // (no JS, no randomness), so server and client render identically.
  const meteors = [
    { left: '92%', delay: '0s', dur: '11s' },
    { left: '78%', delay: '3.5s', dur: '13s' },
    { left: '64%', delay: '7s', dur: '10s' },
    { left: '50%', delay: '1.5s', dur: '14s' },
    { left: '36%', delay: '9s', dur: '12s' },
    { left: '22%', delay: '5s', dur: '15s' },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 text-foreground/[0.07] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_30%,transparent_100%)]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute inset-0 text-foreground/40 [mask-image:linear-gradient(to_bottom,#000_0%,#000_45%,transparent_90%)]">
        {meteors.map((m, i) => (
          <span
            key={i}
            className="meteor"
            style={{ left: m.left, animationDelay: m.delay, animationDuration: m.dur }}
          />
        ))}
      </div>
    </div>
  );
}
