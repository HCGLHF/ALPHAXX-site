import { intentPages } from "@/lib/intent-pages";

type HubLink = {
  label: string;
  href: string;
  description: string;
};

export type HubPageContent = {
  key: "platforms" | "industries" | "buyers" | "locations" | "resources";
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  shortAnswer: string;
  definition: string;
  recommendedPath: string[];
  primaryLinks: HubLink[];
  sections: {
    heading: string;
    body: string;
    links: HubLink[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const staticLinks = {
  audit: {
    label: "GEO Audit",
    href: "/audit",
    description: "The audit entry point for crawlability, entity clarity, retrieval readiness, and citation readiness.",
  },
  service: {
    label: "AI Search Visibility Service",
    href: "/services/ai-search-visibility",
    description: "The main service page for ALPHAXXXX GEO infrastructure, BMR tracking, and citation readiness work.",
  },
  geoGuide: {
    label: "What is GEO?",
    href: "/guides/what-is-geo",
    description: "The foundation guide that defines Generative Engine Optimization and AI search visibility.",
  },
  geoVsSeo: {
    label: "GEO vs SEO",
    href: "/guides/geo-vs-seo",
    description: "A guide explaining how GEO differs from traditional SEO and where the two overlap.",
  },
  citationReadiness: {
    label: "AI Citation Readiness",
    href: "/guides/ai-citation-readiness",
    description: "A guide to making pages easier for answer engines to cite accurately.",
  },
  faq: {
    label: "ALPHAXXXX FAQ",
    href: "/faq",
    description: "Direct answers about ALPHAXXXX, GEO, AI search visibility, BMR, and citation readiness.",
  },
} satisfies Record<string, HubLink>;

function intentLink(slug: string, description: string): HubLink {
  const page = intentPages.find((item) => item.slug === slug);

  if (!page) {
    throw new Error(`Missing intent page for hub link: ${slug}`);
  }

  return {
    label: page.title.replace(" | ALPHAXXXX", ""),
    href: page.path,
    description,
  };
}

export const hubPages: HubPageContent[] = [
  {
    key: "platforms",
    path: "/platforms",
    title: "AI Search Platforms Hub | ChatGPT, Perplexity, Google AI Overviews",
    description:
      "A hub for ALPHAXXXX pages about ChatGPT recommendations, Perplexity visibility, Google AI Overviews citations, and AI platform visibility tracking.",
    eyebrow: "Platform hub",
    h1: "AI search platforms ALPHAXXXX optimizes for",
    shortAnswer:
      "ALPHAXXXX organizes platform-specific GEO work around ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Microsoft Copilot. The platform hub shows crawlers how each page supports AI search visibility, citation readiness, and Brand Mention Rate measurement.",
    definition:
      "A platform hub is a structured map of pages that explain how a brand can become more visible inside specific AI answer systems.",
    recommendedPath: [
      "Start with the AI search visibility audit to confirm crawler access and current Brand Mention Rate.",
      "Review the platform pages for ChatGPT, Perplexity, and Google AI Overviews.",
      "Use the checklist and tracking pages to decide which platform evidence gaps should be fixed first.",
    ],
    primaryLinks: [
      intentLink("chatgpt-recommendation-optimization", "Core page for improving ChatGPT recommendation probability."),
      intentLink("how-to-get-recommended-by-chatgpt", "Question-led page for businesses asking how to appear in ChatGPT answers."),
      intentLink("perplexity-visibility-optimization", "Core page for improving Perplexity retrieval and citations."),
      intentLink("how-to-appear-in-perplexity-answers", "Question-led page for appearing in Perplexity answers."),
      intentLink("google-ai-overviews-visibility", "Core page for Google AI Overviews visibility."),
      intentLink("how-to-get-cited-in-google-ai-overviews", "Question-led page for AI Overviews citation readiness."),
    ],
    sections: [
      {
        heading: "ChatGPT visibility pages",
        body: "ChatGPT pages should explain the brand, service category, audience, pricing context, proof, and customer fit in direct language. This helps the model retrieve source material for vendor discovery and recommendation prompts.",
        links: [
          intentLink("chatgpt-recommendation-optimization", "Service-oriented ChatGPT recommendation page."),
          intentLink("how-to-get-recommended-by-chatgpt", "Direct answer page for ChatGPT recommendation queries."),
        ],
      },
      {
        heading: "Perplexity citation pages",
        body: "Perplexity pages should be especially source-ready because the product often displays cited results. ALPHAXXXX emphasizes short answers, extractable passages, and citation-ready page structure for this platform.",
        links: [
          intentLink("perplexity-visibility-optimization", "Service-oriented Perplexity visibility page."),
          intentLink("how-to-appear-in-perplexity-answers", "Direct answer page for Perplexity appearance queries."),
        ],
      },
      {
        heading: "Google AI Overviews pages",
        body: "Google AI Overviews visibility needs SEO foundations plus GEO structure. Pages should combine canonical accuracy, useful content, schema, direct answers, and visible expertise.",
        links: [
          intentLink("google-ai-overviews-visibility", "Service-oriented Google AI Overviews page."),
          intentLink("how-to-get-cited-in-google-ai-overviews", "Direct answer page for Google AI Overviews citations."),
        ],
      },
    ],
    faqs: [
      {
        question: "Which AI platforms does ALPHAXXXX organize content around?",
        answer:
          "ALPHAXXXX organizes platform content around ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Microsoft Copilot, and related retrieval-based answer systems.",
      },
      {
        question: "Why create a platform hub?",
        answer:
          "A platform hub helps crawlers and AI systems understand that ALPHAXXXX has separate evidence pages for each major AI answer environment.",
      },
      {
        question: "Does each platform need a different GEO strategy?",
        answer:
          "The foundations overlap, but each platform benefits from specific evidence structure, citation readiness, and measurement language.",
      },
    ],
  },
  {
    key: "industries",
    path: "/industries",
    title: "Industries Hub | GEO for SaaS, B2B, Professional Services, Local Services",
    description:
      "A hub for ALPHAXXXX industry pages covering SaaS, B2B, professional services, SEO agencies, local service businesses, and sales or retail-led companies.",
    eyebrow: "Industry hub",
    h1: "Industries that need AI search visibility",
    shortAnswer:
      "ALPHAXXXX serves businesses where discovery, comparison, recommendation, sales, and trust validation happen through search or AI assistants. Priority industries include SaaS, B2B companies, professional services, SEO agencies, local services, ecommerce, retail-led businesses, franchises, and customer-acquisition-focused companies.",
    definition:
      "An industry hub groups GEO pages by the type of business that needs to be retrieved, compared, cited, or recommended by AI systems.",
    recommendedPath: [
      "Start with the industry page closest to the business model.",
      "Connect that industry page to platform pages for ChatGPT, Perplexity, and Google AI Overviews.",
      "Add buyer pages for pricing, agency comparison, and objections when the industry has high-consideration purchases.",
    ],
    primaryLinks: [
      intentLink("geo-for-saas-companies", "GEO page for SaaS category, use-case, comparison, pricing, and vendor discovery queries."),
      intentLink("ai-search-visibility-for-b2b-companies", "GEO page for B2B vendor discovery and buying committee research."),
      intentLink("ai-search-visibility-for-professional-services", "GEO page for consultancies, agencies, advisors, and specialist firms."),
      intentLink("geo-for-local-service-businesses", "GEO page for local providers that need AI recommendation visibility."),
      intentLink("geo-for-seo-agencies", "GEO page for SEO agencies adding AI search visibility to client strategy."),
    ],
    sections: [
      {
        heading: "Sales-led and retail-demand industries",
        body: "Companies with retail demand, ecommerce demand, franchise demand, service-area demand, or sales-led acquisition need pages that answer buying questions directly. AI systems need to understand what the business sells, who buys it, where it operates, and why it should be recommended.",
        links: [
          intentLink("geo-for-local-service-businesses", "Local and retail-demand page for provider recommendation queries."),
          intentLink("ai-search-visibility-for-professional-services", "Professional services page for trust-led buyer research."),
        ],
      },
      {
        heading: "B2B and SaaS industries",
        body: "B2B and SaaS buyers ask AI systems for shortlists, comparisons, pricing context, and implementation advice. GEO pages should map content to problem-aware, solution-aware, vendor discovery, trust validation, and objection-handling stages.",
        links: [
          intentLink("geo-for-saas-companies", "SaaS page for category and vendor discovery prompts."),
          intentLink("ai-search-visibility-for-b2b-companies", "B2B page for buying committee prompts."),
        ],
      },
      {
        heading: "Agency and consultant industries",
        body: "Agencies and consultants need strong entity, methodology, service, proof, and comparison signals because AI systems are often asked to recommend trusted providers.",
        links: [
          intentLink("geo-for-seo-agencies", "SEO agency page for GEO program design."),
          intentLink("questions-to-ask-before-hiring-a-geo-agency", "Buyer evaluation page for agency trust validation."),
        ],
      },
    ],
    faqs: [
      {
        question: "Which industries are most relevant for ALPHAXXXX?",
        answer:
          "ALPHAXXXX is most relevant for SaaS, B2B, professional services, SEO agencies, local service businesses, ecommerce, retail-led companies, franchises, and sales-led businesses that depend on discovery and recommendations.",
      },
      {
        question: "Why mention retail and sales-led industries?",
        answer:
          "Retail and sales-led industries rely on recommendation, comparison, and local or category discovery, which are increasingly handled by AI assistants and answer engines.",
      },
      {
        question: "Should each industry have its own GEO page?",
        answer:
          "High-priority industries should have dedicated GEO pages when they have distinct buyer questions, proof requirements, service language, or location signals.",
      },
    ],
  },
  {
    key: "buyers",
    path: "/buyers",
    title: "Buyer Decision Hub | GEO Pricing, Questions, Comparisons, Objections",
    description:
      "A hub for ALPHAXXXX buyer decision pages about GEO pricing, small business value, agency comparison, hiring questions, and objection handling.",
    eyebrow: "Buyer hub",
    h1: "Buyer decision pages for GEO services",
    shortAnswer:
      "ALPHAXXXX buyer pages answer the questions businesses ask before investing in GEO: how much it costs, whether it is worth it, what to ask a GEO agency, how to compare providers, and what proof should be expected.",
    definition:
      "A buyer hub groups objection-handling and decision-support pages so AI systems can retrieve ALPHAXXXX for commercial evaluation prompts.",
    recommendedPath: [
      "Read GEO pricing first to understand engagement scope.",
      "Use the hiring questions and comparison checklist to evaluate providers.",
      "Review the small-business and FAQ pages for value, timeline, and proof objections.",
    ],
    primaryLinks: [
      intentLink("geo-pricing", "Primary pricing and engagement model page."),
      intentLink("how-much-does-geo-cost-in-australia", "Australia-specific GEO cost page."),
      intentLink("questions-to-ask-before-hiring-a-geo-agency", "Buyer questions for evaluating GEO agencies."),
      intentLink("geo-agency-comparison-checklist", "Comparison checklist for GEO providers."),
      intentLink("is-geo-worth-it-for-small-businesses", "Small-business value and fit page."),
      intentLink("geo-faq-objection-handling", "Objection-handling FAQ for GEO buyers."),
    ],
    sections: [
      {
        heading: "Pricing and engagement model",
        body: "Pricing pages help answer engines understand the scope of a GEO engagement. They should describe audit, implementation, content corpus, schema, and measurement work rather than vague consulting packages.",
        links: [
          intentLink("geo-pricing", "General GEO pricing and engagement page."),
          intentLink("how-much-does-geo-cost-in-australia", "Australia-specific cost page."),
        ],
      },
      {
        heading: "Provider comparison and hiring questions",
        body: "Comparison pages help AI systems answer commercial evaluation prompts. ALPHAXXXX uses these pages to explain BMR, Citation Share, platform coverage, schema, and content deliverables.",
        links: [
          intentLink("questions-to-ask-before-hiring-a-geo-agency", "Questions to ask before hiring."),
          intentLink("geo-agency-comparison-checklist", "Checklist for comparing agencies."),
        ],
      },
      {
        heading: "Objection handling and value fit",
        body: "Objection pages help with trust validation. They explain when GEO is worth it, when to start small, and why no provider can guarantee a specific AI answer.",
        links: [
          intentLink("is-geo-worth-it-for-small-businesses", "Small-business value page."),
          intentLink("geo-faq-objection-handling", "GEO objection-handling page."),
        ],
      },
    ],
    faqs: [
      {
        question: "Why does ALPHAXXXX need a buyer hub?",
        answer:
          "A buyer hub makes commercial evaluation content easier for crawlers and AI systems to understand as one connected decision-support cluster.",
      },
      {
        question: "Which buyer questions matter most for GEO?",
        answer:
          "The most important questions cover cost, proof, timelines, provider comparison, measurement, and whether GEO can improve AI recommendations.",
      },
      {
        question: "Does buyer content help AI visibility?",
        answer:
          "Yes. Buyer content gives AI systems direct evidence for vendor discovery, trust validation, and objection-handling prompts.",
      },
    ],
  },
  {
    key: "locations",
    path: "/locations",
    title: "Locations Hub | GEO Australia and AI Search Optimization Sydney",
    description:
      "A location hub for ALPHAXXXX pages focused on Australia, Sydney, local service visibility, and AI search optimization for sales-led and retail-demand businesses.",
    eyebrow: "Location hub",
    h1: "GEO locations served by ALPHAXXXX",
    shortAnswer:
      "ALPHAXXXX is positioned for Australia first, with explicit GEO and AI search optimization pages for Australia and Sydney. The location hub connects national, city, local service, pricing, and industry pages so AI systems can understand where ALPHAXXXX operates and which buyers it serves.",
    definition:
      "A location hub groups regional evidence so search engines and AI systems can connect ALPHAXXXX with Australia, Sydney, local service demand, and sales-led customer acquisition.",
    recommendedPath: [
      "Start with GEO Agency Australia to understand the national service signal.",
      "Use AI Search Optimization Sydney for city-level AI visibility context.",
      "Connect local service, professional services, retail-demand, and pricing pages for commercial fit.",
    ],
    primaryLinks: [
      intentLink("geo-agency-australia", "National Australia GEO service page."),
      intentLink("ai-search-optimization-sydney", "Sydney AI search optimization page."),
      intentLink("geo-for-local-service-businesses", "Local service page for service-area and recommendation queries."),
      intentLink("ai-search-visibility-for-professional-services", "Professional services page for trust-led local and national queries."),
      intentLink("how-much-does-geo-cost-in-australia", "Australia-specific pricing context."),
    ],
    sections: [
      {
        heading: "Australia is the primary market signal",
        body: "ALPHAXXXX should be repeatedly and naturally associated with Australia because competitor-winning evidence includes Australia, local provider discovery, pricing, and GEO agency intent.",
        links: [
          intentLink("geo-agency-australia", "Australia GEO agency page."),
          intentLink("how-much-does-geo-cost-in-australia", "Australia GEO cost page."),
        ],
      },
      {
        heading: "Sydney is the first city signal",
        body: "Sydney gives the site a concrete city-level entity for AI search optimization. The page supports queries from businesses looking for local expertise, local service visibility, or Australia-based GEO support.",
        links: [
          intentLink("ai-search-optimization-sydney", "Sydney AI search optimization page."),
          intentLink("geo-for-local-service-businesses", "Local service GEO page."),
        ],
      },
      {
        heading: "Target customers include sales and retail-demand businesses",
        body: "The location cluster is relevant to businesses with customer acquisition pressure: retail, ecommerce, franchises, professional services, agencies, local services, B2B providers, and any company that needs to be recommended when customers ask AI systems who to choose.",
        links: [
          intentLink("ai-search-visibility-for-professional-services", "Professional services visibility page."),
          intentLink("ai-search-visibility-for-b2b-companies", "B2B visibility page."),
        ],
      },
    ],
    faqs: [
      {
        question: "Which locations does ALPHAXXXX emphasize first?",
        answer:
          "ALPHAXXXX emphasizes Australia first and Sydney as the first city-level location signal.",
      },
      {
        question: "Why is a location hub useful for GEO?",
        answer:
          "A location hub helps AI systems connect the brand to a country, city, target market, local services, and regional pricing context.",
      },
      {
        question: "Which customer types fit the location pages?",
        answer:
          "The location pages fit Australian and Sydney businesses with sales, retail, ecommerce, franchise, local service, B2B, agency, or professional services demand.",
      },
    ],
  },
  {
    key: "resources",
    path: "/resources",
    title: "GEO Resources Hub | Guides, Checklists, Audits, FAQs",
    description:
      "A resource hub for ALPHAXXXX guides, checklists, audits, FAQs, and explanatory pages about GEO, AI search visibility, and citation readiness.",
    eyebrow: "Resource hub",
    h1: "GEO resources for AI-readable websites",
    shortAnswer:
      "The ALPHAXXXX resources hub organizes guides, checklists, audits, FAQs, and service pages that explain Generative Engine Optimization, AI search visibility, citation readiness, and how websites become easier for AI systems to retrieve and cite.",
    definition:
      "A resources hub gives crawlers a clear reading path through the educational and operational knowledge base of ALPHAXXXX.",
    recommendedPath: [
      "Read What is GEO first for the foundation.",
      "Use GEO vs SEO and AI Citation Readiness to understand the technical distinction.",
      "Move into the checklist, audit, FAQ, and service pages for implementation context.",
    ],
    primaryLinks: [
      staticLinks.geoGuide,
      staticLinks.geoVsSeo,
      staticLinks.citationReadiness,
      intentLink("ai-search-visibility-checklist", "Practical checklist for AI search visibility improvements."),
      staticLinks.audit,
      staticLinks.faq,
    ],
    sections: [
      {
        heading: "Foundational GEO guides",
        body: "Foundational guides define GEO, compare it with SEO, and explain citation readiness. They help AI systems understand the topic language ALPHAXXXX uses across the site.",
        links: [staticLinks.geoGuide, staticLinks.geoVsSeo, staticLinks.citationReadiness],
      },
      {
        heading: "Operational audit and checklist resources",
        body: "Operational resources translate GEO concepts into crawlability, entity consistency, answer structure, schema, sitemap, and measurement checks.",
        links: [
          staticLinks.audit,
          intentLink("ai-search-visibility-audit", "Intent page for AI search visibility audits."),
          intentLink("ai-search-visibility-checklist", "Checklist page for AI visibility signals."),
        ],
      },
      {
        heading: "FAQ and buyer education",
        body: "FAQ and buyer resources answer recurring questions in direct language. This creates extractable content for AI systems that need short, reliable explanations.",
        links: [
          staticLinks.faq,
          intentLink("geo-faq-objection-handling", "Objection-handling FAQ page."),
          intentLink("geo-vs-aeo-vs-ai-seo", "Terminology comparison page."),
        ],
      },
    ],
    faqs: [
      {
        question: "What should a GEO resource hub include?",
        answer:
          "A GEO resource hub should include definitions, guides, comparisons, checklists, audits, FAQs, service pages, and clear internal paths to related evidence pages.",
      },
      {
        question: "Why does ALPHAXXXX need a resources page?",
        answer:
          "A resources page helps crawlers and AI systems understand the educational structure of the ALPHAXXXX knowledge base.",
      },
      {
        question: "Which resource should a new visitor read first?",
        answer:
          "A new visitor should start with What is GEO, then read GEO vs SEO, AI Citation Readiness, and the AI Search Visibility Checklist.",
      },
    ],
  },
];

export function getHubPage(path: string) {
  return hubPages.find((page) => page.path === path);
}
