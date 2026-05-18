import type { Metadata } from "next";
import { hubPages } from "@/lib/hub-pages";
import { intentPages } from "@/lib/intent-pages";

export const SITE_URL = "https://alphaxxxx.com";
export const SITE_NAME = "ALPHAXXXX";
export const SITE_LOCALE = "en_AU";
export const SITE_LANGUAGE = "en-AU";
export const CONTENT_PUBLISHED_DATE = "2026-05-14";
export const CONTENT_UPDATED_DATE = "2026-05-18";

export const siteDescription =
  "ALPHAXXXX is a Generative Engine Optimization infrastructure brand that helps businesses improve AI search visibility, Brand Mention Rate, citation readiness, and retrieval performance across LLM and RAG-based answer systems.";

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
  "Semantic Entity Engineering",
  "Brand Mention Rate",
  "BMR",
  "Citation Share auditing",
  "RAG pipeline optimization",
] as const;

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const coreSiteRoutes: SiteRoute[] = [
  {
    path: "",
    title: "ALPHAXXXX | GEO and AI Search Visibility Infrastructure",
    description: siteDescription,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/platforms",
    title: "AI Search Platforms Hub",
    description:
      "A hub for ALPHAXXXX pages about ChatGPT recommendations, Perplexity visibility, Google AI Overviews citations, and AI platform visibility tracking.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/industries",
    title: "Industries Hub",
    description:
      "A hub for ALPHAXXXX industry pages covering SaaS, B2B, professional services, SEO agencies, local service businesses, and sales or retail-led companies.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/buyers",
    title: "Buyer Decision Hub",
    description:
      "A hub for ALPHAXXXX buyer decision pages about GEO pricing, small business value, agency comparison, hiring questions, and objection handling.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/locations",
    title: "Locations Hub",
    description:
      "A location hub for ALPHAXXXX pages focused on Australia, Sydney, local service visibility, and AI search optimization for sales-led and retail-demand businesses.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/resources",
    title: "GEO Resources Hub",
    description:
      "A resource hub for ALPHAXXXX guides, checklists, audits, FAQs, and explanatory pages about GEO, AI search visibility, and citation readiness.",
    priority: 0.9,
    changeFrequency: "monthly",
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
      "Improve Semantic Entity Engineering, Brand Mention Rate tracking, Citation Share auditing, structural optimization, and AI citation readiness.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/what-is-geo",
    title: "What Is GEO? Generative Engine Optimization Explained",
    description:
      "A practical guide to Generative Engine Optimization, AI search visibility, RAG pipelines, Brand Mention Rate, LLM visibility, and citation readiness.",
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

function intentPriority(family: (typeof intentPages)[number]["family"]) {
  if (family === "location" || family === "audit" || family === "pricing") {
    return 0.9;
  }

  if (family === "platform" || family === "industry") {
    return 0.85;
  }

  return 0.8;
}

export const intentPageRoutes: SiteRoute[] = intentPages.map((page) => ({
  path: page.path,
  title: page.title,
  description: page.description,
  priority: intentPriority(page.family),
  changeFrequency: "monthly",
}));

export const siteRoutes: SiteRoute[] = [...coreSiteRoutes, ...intentPageRoutes];

export const primaryNavLinks = [
  { label: "Platform", href: "" },
  { label: "Resources", href: "/resources" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "GEO Audit", href: "/audit" },
] as const;

const missingHubRoutes = hubPages
  .map((page) => page.path)
  .filter((path) => !coreSiteRoutes.some((route) => route.path === path));

if (missingHubRoutes.length > 0) {
  throw new Error(`Missing hub routes: ${missingHubRoutes.join(", ")}`);
}

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
    "ALPHAXXXX improves Semantic Entity Engineering, Brand Mention Rate measurement, Citation Share auditing, structural optimization, AI crawler readability, and citation readiness for AI-powered search engines, LLMs, and RAG systems.",
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
