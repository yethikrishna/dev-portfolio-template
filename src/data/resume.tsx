import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderIcon, Settings, Wrench, PenTool } from "lucide-react";
import { faReact, faNodeJs, faGitAlt, faTypescript, faTailwindCss, faDocker, faFigma, faGithub, faPython, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faPlug, faBolt, faTerminal, faRocket, faServer, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

/**
 * Central data source for the portfolio template.
 * Every piece of content displayed across the site is driven by this object.
 *
 * Template by Mynd Labs — https://myndlabs.tech
 *
 * To customize this template for your own portfolio:
 * 1. Replace the personal information below with your own
 * 2. Update projects, work experience, and education arrays
 * 3. Swap social links with your own profiles
 * 4. Replace the author image at /assets/author-yethikrishna.png
 */
export const DATA = {
  name: "Yethikrishna R",
  initials: "YR",
  url: "https://myndlabs.tech",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Founder of Mynd Labs. Building premium web experiences and developer tools.",
  summary:
    "I'm the **founder of Mynd Labs**, where we build [premium developer templates](https://myndlabs.tech) and web products that help creators launch faster.\n\nCurrently focused on **design engineering** — the intersection of design, engineering, and product. I write about [building on the web](https://myndlabs.tech/blog/getting-started-with-nextjs) and share [open-source work](https://github.com/yethikrishna).\n\nPreviously built products used by thousands of developers. Passionate about minimal design, performance, and great developer experience.",

  avatarUrl: "/assets/author-yethikrishna.png",
  skills: [
    { name: "TypeScript", icon: faTypescript, category: "Languages" },
    { name: "JavaScript", icon: faJs, category: "Languages" },
    { name: "Python", icon: faPython, category: "Languages" },
    { name: "React", icon: faReact, category: "Frontend" },
    { name: "Next.js", customIcon: Icons.nextjs, category: "Frontend" },
    { name: "TailwindCSS", icon: faTailwindCss, category: "Frontend" },
    { name: "Framer Motion", icon: faBolt, category: "Frontend" },
    { name: "Node.js", icon: faNodeJs, category: "Backend" },
    { name: "PostgreSQL", icon: faDatabase, category: "Backend" },
    { name: "Redis", icon: faDatabase, category: "Backend" },
    { name: "Prisma", icon: faLeaf, category: "Backend" },
    { name: "Git", icon: faGitAlt, category: "Tools" },
    { name: "Docker", icon: faDocker, category: "Tools" },
    { name: "Figma", icon: faFigma, category: "Tools" },
    { name: "Cursor", customIcon: Icons.cursor, category: "Tools" },
  ],
  setup: [
    {
      title: "Gear I Use",
      description: "Hardware and gadgets in my daily workflow.",
      href: "/uses",
      icon: Settings,
    },
    {
      title: "Tools I Use",
      description: "Software and apps I build with every day.",
      href: "/uses#tools",
      icon: Wrench,
    },
  ],
  tools: [
    {
      name: "Cursor",
      description: "AI-powered code editor built on VS Code — my primary IDE for all projects.",
      href: "https://cursor.com",
      customIcon: Icons.cursor,
    },
    {
      name: "VS Code",
      description: "The classic. I still use it for quick edits and when I need specific extensions.",
      href: "https://code.visualstudio.com",
      customIcon: Icons.vscode,
    },
    {
      name: "Terminal",
      description: "My go-to terminal for git operations, build scripts, and CLI tools.",
      href: "https://git-scm.com",
      icon: faTerminal,
    },
    {
      name: "Postman",
      description: "API testing and documentation — essential for building and debugging REST APIs.",
      href: "https://www.postman.com",
      icon: faRocket,
    },
    {
      name: "Docker",
      description: "Containerization for consistent dev environments and easy deployments.",
      href: "https://www.docker.com",
      icon: faDocker,
    },
    {
      name: "Vercel",
      description: "One-click deploys for all my Next.js apps with instant previews.",
      href: "https://vercel.com",
      icon: faRocket,
    },
    {
      name: "Figma",
      description: "Design tool for UI mockups, prototyping, and collaborating on layouts.",
      href: "https://www.figma.com",
      icon: faFigma,
    },
    {
      name: "GitHub",
      description: "Where all my code lives — version control, CI/CD, and open source contributions.",
      href: "https://github.com",
      icon: faGithub,
    },
    {
      name: "Notion",
      description: "Notes, task management, and documentation — my second brain.",
      href: "https://www.notion.so",
      customIcon: Icons.notion,
    },
    {
      name: "Linear",
      description: "Issue tracking and project management for fast-moving teams.",
      href: "https://linear.app",
      icon: faCode,
    },
    {
      name: "Supabase",
      description: "Open-source Firebase alternative for auth, databases, and edge functions.",
      href: "https://supabase.com",
      icon: faDatabase,
    },
    {
      name: "Cloudflare",
      description: "Edge network for DNS, CDN, workers, and DDoS protection.",
      href: "https://cloudflare.com",
      icon: faServer,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/uses", icon: Icons.shop, label: "Uses" },
  ],
  contact: {
    email: "hello@myndlabs.tech",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yethikrishna",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yethikrishna",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yethikrishna",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/yethikrishnar",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@yethikrishna",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@myndlabs.tech",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mynd Labs",
      href: "https://myndlabs.tech",
      badges: ["Founder"],
      location: "Bengaluru, India",
      title: "Founder & Design Engineer",
      logoUrl: "/assets/logo.svg",
      start: "January 2025",
      end: "Present",
      description:
        "Building premium developer templates and web products. Founded Mynd Labs to help creators and founders launch beautiful, performant websites in minutes. Responsible for product design, full-stack engineering, and brand strategy.",
    },
    {
      company: "Streamline",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl: "/assets/logo.svg",
      start: "June 2023",
      end: "December 2024",
      description:
        "Led frontend architecture for a B2B SaaS platform serving 50k+ users. Built design systems with React and Tailwind, implemented CI/CD pipelines, and mentored junior developers. Reduced page load times by 40% through code splitting and image optimization.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/assets/logo.svg",
      start: "2022",
      end: "May 2023",
      description:
        "Delivered web solutions for startups and small businesses. Built responsive UIs with React/Next.js, integrated third-party APIs, and deployed production-ready applications. Worked with 15+ clients across e-commerce, fintech, and healthcare.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology",
      href: "#",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/assets/logo.svg",
      start: "2019",
      end: "2023",
    },
    {
      school: "Delhi Public School",
      href: "#",
      degree: "Higher Secondary — Science Stream",
      logoUrl: "/assets/logo.svg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "MyndUI",
      href: "https://myndlabs.tech",
      dates: "January 2026 - Present",
      active: true,
      description:
        "A premium component library built on top of Radix UI and Tailwind CSS. Over 60 accessible, animated components with full TypeScript support, dark mode, and copy-paste installation. Used by 2,000+ developers in production.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Radix UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://myndlabs.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pulse Analytics",
      href: "#",
      dates: "September 2025 - Present",
      active: true,
      description:
        "A real-time analytics dashboard for SaaS companies. Features live event streaming, custom funnels, cohort analysis, and automated insights powered by edge functions. Processes over 10M events per day with sub-100ms query times.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DevForge CLI",
      href: "#",
      dates: "June 2025",
      active: true,
      description:
        "A developer-first CLI tool for scaffolding full-stack applications in seconds. Supports 12+ templates, custom generators, and plugin architecture. Installed over 15,000 times via npm with a 4.9-star rating.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Commander",
        "Inquirer",
        "esbuild",
        "npm",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Lumen",
      href: "#",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "An AI-powered content generation platform for marketing teams. Features brand voice training, multi-channel content creation, and real-time collaboration. Built with streaming responses and edge AI inference for sub-second latency.",
      technologies: [
        "Next.js 15",
        "OpenAI",
        "Supabase",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Orbit Commerce",
      href: "#",
      dates: "November 2024 - February 2025",
      active: true,
      description:
        "A headless e-commerce starter built with Next.js and Stripe. Features server-side product rendering, instant search, cart persistence, and one-click checkout. Optimized for Core Web Vitals with perfect Lighthouse scores.",
      technologies: [
        "Next.js 15",
        "Stripe",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Synapse Chat",
      href: "#",
      dates: "August 2024 - October 2024",
      active: true,
      description:
        "A real-time collaboration platform with AI-powered code review. Features live cursors, shared code editors, voice channels, and automated PR feedback. Built on WebSockets with optimistic UI updates and offline support.",
      technologies: [
        "Next.js 15",
        "WebSocket",
        "Redis",
        "OpenAI",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yethikrishna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackIndia 2025",
      dates: "October 18th - 20th, 2025",
      location: "Bengaluru, India",
      description:
        "Won 1st place with 'EcoTrack' — a carbon footprint tracker using receipt scanning and ML. Built the frontend in 36 hours with real-time data visualization and offline-first architecture.",
      image: "/assets/logo.svg",
      mlh: "#",
      links: [],
    },
    {
      title: "Smart India Hackathon 2024",
      dates: "March 15th - 19th, 2024",
      location: "Remote, India",
      description:
        "Finalist with 'MediConnect' — a telemedicine platform connecting rural patients with specialists. Implemented video calls, appointment scheduling, and multi-language support.",
      image: "/assets/logo.svg",
      mlh: "#",
      links: [],
    },
  ],
} as const;
