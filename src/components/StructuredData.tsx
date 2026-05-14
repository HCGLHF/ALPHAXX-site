type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function StructuredData({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = "https://alphaxxxx.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GEO-ALPHA",
  url: SITE_URL,
  description:
    "GEO-ALPHA helps businesses improve visibility, credibility, and citation readiness across AI-generated answers from ChatGPT, Gemini, Claude, Perplexity, and Copilot.",
  areaServed: "Australia",
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Search Optimization",
    "Answer Engine Optimization",
    "AI Search Visibility",
    "AI Crawler Optimization",
    "Retrieval-Augmented Generation",
    "AI Citation Optimization",
    "Search Engine Optimization",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GEO-ALPHA",
  url: SITE_URL,
  description:
    "AI search visibility infrastructure for brands that want to be discovered, understood, and cited by generative AI systems.",
};
