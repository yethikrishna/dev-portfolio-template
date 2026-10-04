import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const FEATURES = [
  {
    kicker: "Navigation",
    title: "Command palette",
    body: "Press ⌘K (or Ctrl K) to jump to any page, post or project. Keyboard first, no mouse needed.",
    className: "sm:col-span-2",
    stat: "⌘ K",
  },
  {
    kicker: "Writing",
    title: "MDX blog",
    body: "Drop an .mdx file in /content. RSS, sitemap and reading time are generated for you.",
    className: "",
    stat: "MDX",
  },
  {
    kicker: "Theming",
    title: "Light and dark",
    body: "Token-based colors in one CSS file. Retheme the whole site by editing a few variables.",
    className: "",
    stat: "2 modes",
  },
  {
    kicker: "Search and sharing",
    title: "SEO and OG images built in",
    body: "JSON-LD, canonical URLs, sitemap and dynamic Open Graph cards ship on day one.",
    className: "sm:col-span-2",
    stat: "/api/og",
  },
] as const;

export function FeatureBento() {
  return (
    <section id="features" aria-labelledby="features-title">
      <div className="flex flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="space-y-2">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              What is inside
            </span>
            <h2
              id="features-title"
              className="font-display text-4xl leading-none tracking-[-0.02em] sm:text-5xl"
            >
              Built like a product, not a starter.
            </h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <BlurFade
              key={f.title}
              delay={BLUR_FADE_DELAY * (8 + i)}
              className={f.className}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card/80 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {f.kicker}
                  </span>
                  <span className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {f.stat}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
