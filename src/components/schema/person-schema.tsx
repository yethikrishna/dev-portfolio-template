import { DATA } from "@/data/resume";

/**
 * Person schema for structured data (SEO).
 * Template by Mynd Labs — https://myndlabs.tech
 */
export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yethikrishna R",
          alternateName: ["Yethi", "YR"],
          description: DATA.description,
          image: `${DATA.url}/assets/author-yethikrishna.png`,
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.LinkedIn.url,
            DATA.contact.social.X.url,
            DATA.contact.social.Instagram.url,
            DATA.contact.social.Youtube.url,
          ],
          jobTitle: "Founder & Design Engineer",
          worksFor: {
            "@type": "Organization",
            name: "Mynd Labs",
            url: "https://myndlabs.tech",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Indian Institute of Technology",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressCountry: "India",
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills.map((s) => s.name),
        }),
      }}
    />
  );
}
