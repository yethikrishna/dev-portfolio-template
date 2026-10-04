import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import dynamic from "next/dynamic";

// Loaded after first paint: keeps the command palette (and its dialog code) off the critical path.
const CommandPalette = dynamic(
  () => import("@/components/command-palette").then((m) => m.CommandPalette),
  { ssr: false }
);
import { SoundProvider } from "@/components/sound-provider";
import { BackToTop } from "@/components/back-to-top";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Yethikrishna R | Founder & Design Engineer",
    template: `%s | Yethikrishna R`,
  },
  description: "Yethikrishna R — Founder of Mynd Labs. Building premium web experiences, developer tools, and design systems with React, Next.js, and TypeScript.",
  keywords: ["Yethikrishna R", "Mynd Labs", "Design Engineer", "Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Portfolio Template", "Developer Portfolio"],
  authors: [{ name: "Yethikrishna R", url: "https://myndlabs.tech" }],
  creator: "Yethikrishna R",
  publisher: "Mynd Labs",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: "Yethikrishna R | Founder & Design Engineer",
    description: "Founder of Mynd Labs. Building premium web experiences and developer tools with React, Next.js, and TypeScript.",
    url: DATA.url,
    siteName: "Yethikrishna R — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/api/og`,
        width: 1200,
        height: 630,
        alt: "Yethikrishna R — Founder & Design Engineer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yethikrishna R | Founder & Design Engineer',
    description: 'Founder of Mynd Labs. Building premium web experiences and developer tools.',
    images: [`${DATA.url}/api/og`],
    creator: '@yethikrishna',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicons/android-icon-192x192.png",
      },
      {
        rel: "manifest",
        url: "/favicons/manifest.json",
      },
    ],
  },
  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Yethikrishna R",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
    "generator": "dev-portfolio-template by Mynd Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontDisplay.variable, fontMono.variable, "font-sans antialiased")}>
        {/* Background container */}
        <div className="fixed inset-0 z-[-1]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto pt-20 sm:pt-24 pb-24 px-6">
          <JsonLd />
          <ScrollProgress />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <SoundProvider>
              <TooltipProvider delayDuration={0}>
                {children}
                <Navbar />
                <CommandPalette />
                <BackToTop />
              </TooltipProvider>
            </SoundProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
