import type { Metadata } from "next";

export const SITE_URL = "https://alphaxxxx.com";
export const SITE_NAME = "ALPHAXXXX";
export const SITE_LOCALE = "en_AU";
export const SITE_LANGUAGE = "en-AU";

export const siteDescription =
  "ALPHAXXXX helps businesses evaluate and improve how AI search engines, LLMs, RAG systems, and retrieval-based search systems understand, retrieve, cite, and recommend their web content.";

export const aiEngines = [
  "ChatGPT",
  "Perplexity",
  "Google AI Overviews",
  "Claude",
  "Gemini",
  "Microsoft Copilot",
] as const;

export const coreConcepts = [
  "ALPHAXXXX",
  "Generative Engine Optimization",
  "GEO",
  "AI search visibility",
  "AI citation readiness",
  "AI crawler readability",
  "retrieval-based search",
  "RAG systems",
  "LLM visibility",
  "structured content",
  "answer engine optimization",
] as const;

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const siteRoutes: SiteRoute[] = [
  {
    path: "",
    title: "ALPHAXXXX | GEO and AI Search Visibility Infrastructure",
    description: siteDescription,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/audit",
    title: "GEO Audit for AI Search Visibility",
    description:
      "Audit how clearly AI search engines, LLMs, and RAG systems can crawl, retrieve, understand, cite, and recommend your brand.",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/services/ai-search-visibility",
    title: "AI Search Visibility and Citation Readiness Services",
    description:
      "Improve AI crawler readability, retrieval readiness, entity clarity, structured content, schema, and citation readiness for AI search.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/what-is-geo",
    title: "What Is GEO? Generative Engine Optimization Explained",
    description:
      "A practical guide to Generative Engine Optimization, AI search visibility, LLM visibility, and citation readiness.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/geo-vs-seo",
    title: "GEO vs SEO: How AI Search Changes Optimization",
    description:
      "Understand how Generative Engine Optimization differs from traditional SEO and where the two disciplines overlap.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/ai-citation-readiness",
    title: "AI Citation Readiness Guide",
    description:
      "Learn how to structure pages so AI search systems can cite your claims accurately and confidently.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/faq",
    title: "FAQ",
    description:
      "Frequently asked questions about ALPHAXXXX, Generative Engine Optimization, AI search visibility, AI crawler readability, RAG systems, LLM visibility, and citation readiness.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
];

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path}`;
}

export function pageMetadata(route: SiteRoute): Metadata {
  const url = absoluteUrl(route.path);

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} Generative Engine Optimization infrastructure`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: ["/opengraph-image"],
    },
  };
}

export function getRoute(path: string) {
  const route = siteRoutes.find((item) => item.path === path);

  if (!route) {
    throw new Error(`Missing site route for ${path}`);
  }

  return route;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: siteDescription,
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  knowsAbout: [...coreConcepts, "schema markup", "entity authority"],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: siteDescription,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: SITE_LANGUAGE,
};

export const aiSearchServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services/ai-search-visibility#service`,
  name: "AI Search Visibility and Generative Engine Optimization",
  serviceType: "Generative Engine Optimization",
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  description:
    "ALPHAXXXX improves AI crawler readability, retrieval readiness, citation readiness, entity clarity, structured content, schema, and authority signals for AI-powered search engines, LLMs, and RAG systems.",
};

export const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${SITE_URL}/#alphaxxxx-geo-glossary`,
  name: "ALPHAXXXX AI readability concepts",
  description:
    "Core concepts used by ALPHAXXXX to describe Generative Engine Optimization, AI search visibility, AI citation readiness, AI crawler readability, LLM visibility, and retrieval-based search.",
  hasDefinedTerm: coreConcepts.map((term) => ({
    "@type": "DefinedTerm",
    name: term,
  })),
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  path,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: SITE_LANGUAGE,
  };
}
