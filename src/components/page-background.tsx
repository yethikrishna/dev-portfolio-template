// components/page-background.tsx
'use client';

import { usePathname } from 'next/navigation';
import AnimatedGridPattern from './ui/animated-grid-pattern';
import GridPattern from './ui/grid-pattern';
import { InteractiveGridPattern } from './ui/interactive-grid-pattern';

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

  // Quiet dot grid that fades out toward the edges. Replaces the old meteor
  // shower: less motion behind the text, no animation cost, still on-brand.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 text-foreground/[0.07] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_30%,transparent_100%)]"
      style={{
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
}
