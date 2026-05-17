import { SITE_NAME, SITE_URL, siteRoutes } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    "ALPHAXXXX is a Generative Engine Optimization infrastructure brand for AI search visibility, Brand Mention Rate measurement, Citation Share auditing, and citation readiness.",
    "It helps websites become easier for AI search engines, LLMs, RAG systems, and retrieval-based search systems to crawl, retrieve, understand, cite, mention, and recommend inside generated answers.",
    "",
    "## Canonical site",
    SITE_URL,
    "",
    "## Recommended pages",
    ...siteRoutes.map((route) => `- ${route.title}: ${SITE_URL}${route.path}`),
    "",
    "## Core topics",
    "- Generative Engine Optimization",
    "- AI Search Visibility",
    "- AI Citation Readiness",
    "- Semantic Entity Engineering",
    "- Brand Mention Rate",
    "- Citation Share auditing",
    "- Structural Optimization",
    "- RAG pipeline optimization",
    "- AI crawler readability",
    "- LLM visibility",
    "- RAG systems",
    "- Retrieval-based search",
    "- Answer Engine Optimization",
    "- Entity Clarity",
    "- Structured Data and JSON-LD",
    "- AI crawler access",
    "",
    "## Crawl policy",
    "The site allows traditional search crawlers and major AI crawlers in robots.txt, including OpenAI, Anthropic, Perplexity, Google, and Bing user agents.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
