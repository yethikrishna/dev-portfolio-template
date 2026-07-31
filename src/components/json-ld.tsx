import { DATA } from "@/data/resume";

/**
 * Structured data (JSON-LD) for SEO.
 * Includes Person, WebSite, and ItemList schemas.
 *
 * Template by Mynd Labs — https://myndlabs.tech
 */
export function JsonLd() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${DATA.url}/#person`,
      name: "Yethikrishna R",
      givenName: "Yethikrishna",
      familyName: "R",
      url: DATA.url,
      image: `${DATA.url}/assets/author-yethikrishna.png`,
      jobTitle: "Founder & Design Engineer",
      nationality: {
        "@type": "Country",
        name: "India",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Technology",
      },
      worksFor: {
        "@type": "Organization",
        name: "Mynd Labs",
        url: "https://myndlabs.tech",
      },
      sameAs: [
        "https://github.com/yethikrishna",
        "https://linkedin.com/in/yethikrishna",
        "https://x.com/yethikrishna",
        "https://instagram.com/yethikrishnar",
        "https://youtube.com/@yethikrishna",
      ],
      knowsAbout: DATA.skills.map((s) => s.name),
      knowsLanguage: ["English", "Hindi", "Kannada"],
      description: DATA.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      name: "Yethikrishna R — Founder & Design Engineer",
      url: DATA.url,
      description: DATA.description,
      publisher: {
        "@id": `${DATA.url}/#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Site Sections",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Projects",
          description:
            "Web applications and open source projects built with React, Next.js, and TypeScript",
          url: `${DATA.url}/projects`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          description:
            "Technical articles about web development, React, and software engineering",
          url: `${DATA.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Uses",
          description: "Tech setup, hardware, and productivity tools used daily",
          url: `${DATA.url}/uses`,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
