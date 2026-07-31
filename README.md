# Dev Portfolio Template

A premium developer portfolio starter template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for developers, founders, and creatives who want a polished, production-ready personal website.

**Template by [Mynd Labs](https://myndlabs.tech)**

## Features

- **One-File Customization** — all content lives in `src/data/resume.tsx`
- **Blog with MDX** — syntax highlighting, reading time, and RSS feed
- **Projects Showcase** — animated project cards with tech stack badges
- **Uses Page** — hardware and software setup with filtering
- **Interactive CLI Mode** — terminal-style portfolio at `/cli`
- **Command Palette** — quick navigation with `Cmd+K` / `Ctrl+K`
- **Dark / Light / System Theme** — seamless theme switching
- **Sound Effects** — optional UI sounds (toggleable)
- **Smooth Cursor** — custom animated cursor with reduced-motion support
- **SEO Suite** — sitemap, robots.txt, OpenGraph, Twitter Cards, JSON-LD, RSS
- **Dynamic OG Images** — auto-generated OpenGraph images via edge runtime
- **Accessibility** — keyboard navigation, focus states, ARIA labels
- **Performance** — image optimization, code splitting, lazy loading
- **Responsive** — looks great on mobile, tablet, and desktop

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| [MDX](https://mdxjs.com/) | Markdown with components for blog |
| [Vercel](https://vercel.com/) | Deployment platform |

## Quick Start

1. Clone or fork the repository:

```bash
git clone https://github.com/myndlabs/dev-portfolio-template
cd dev-portfolio-template
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### One-File Setup

Edit `src/data/resume.tsx` to customize everything:

```typescript
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yoursite.com",
  location: "Your City, Country",
  description: "Your tagline here.",
  summary: "Your about text here. Supports **markdown**.",
  avatarUrl: "/assets/your-avatar.png",

  // Skills, projects, work experience, education,
  // social links, tools — all in this one file.
} as const;
```

### Blog Posts

Create MDX files in the `content/` directory:

```mdx
---
title: "Your Post Title"
publishedAt: "2026-01-15"
summary: "Brief description of your post."
tags: ["tag1", "tag2"]
---

Your content here. Markdown and code blocks supported.
```

### Uses Page

Edit `src/data/products.ts` to showcase your hardware and software.

### Theme Colors

Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: { ... },
    },
  },
},
```

### Favicon and Brand Assets

Replace files in `public/favicons/` and `public/assets/` with your own.

## Project Structure

```
├── content/              # Blog posts (MDX)
├── public/
│   ├── assets/           # Logo, avatar, OG images
│   └── favicons/         # Favicon variants and manifest
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes (OG images, revalidate)
│   │   ├── blog/         # Blog listing and post pages
│   │   ├── cli/          # Interactive CLI mode
│   │   ├── projects/     # Projects showcase
│   │   ├── uses/         # Hardware and software setup
│   │   ├── layout.tsx    # Root layout with providers
│   │   ├── page.tsx      # Homepage
│   │   ├── sitemap.ts    # Auto-generated sitemap
│   │   ├── robots.ts     # Robots.txt
│   │   └── rss.xml/      # RSS feed route
│   ├── components/       # React components
│   │   ├── magicui/      # Animation components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...
│   ├── data/             # Data files (resume, blog, products)
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## Deployment

### Deploy to Vercel

1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel will auto-detect Next.js — no configuration needed.
4. Click **Deploy**.

Your site will be live at `https://your-project.vercel.app`.

### Environment Variables

This template works without any environment variables. All features are available out of the box.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, skills, projects, work, and contact |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Individual blog post |
| `/projects` | Full projects showcase |
| `/uses` | Hardware and software setup |
| `/cli` | Interactive terminal mode |

## Accessibility

- Full keyboard navigation
- Focus-visible states on all interactive elements
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` support
- Semantic HTML structure
- Color contrast meets WCAG AA

## SEO

- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- RSS feed at `/rss.xml`
- OpenGraph and Twitter Card meta tags
- JSON-LD structured data (Person, WebSite, BlogPosting schemas)
- Dynamic OG image generation at `/api/og`
- Canonical URLs on all pages

## Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 15+)
- Chrome Android (latest)

## License

MIT License — see [LICENSE](LICENSE) for details.

## Credits

**Template by [Mynd Labs](https://myndlabs.tech)**

Built and maintained by [Yethikrishna R](https://github.com/yethikrishna).

### Acknowledgments

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Radix UI](https://www.radix-ui.com/) — Accessible primitives
- [shadcn/ui](https://ui.shadcn.com/) — Component patterns
- [Lucide Icons](https://lucide.dev/) — Icon library
- [Vercel](https://vercel.com/) — Hosting and deployment

---

<p align="center">
  <a href="https://myndlabs.tech">myndlabs.tech</a>
</p>

<p align="center">
  Built with care by Mynd Labs. Fork it, ship it, make it yours.
</p>
