export type IntentFamily =
  | "location"
  | "audit"
  | "platform"
  | "pricing"
  | "industry"
  | "objection";

export type IntentPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  family: IntentFamily;
  schemaType: "Article" | "Service";
  h1: string;
  shortAnswer: string;
  audience: string[];
  outcomes: string[];
  deliverables: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  internalLinks: {
    label: string;
    href: string;
  }[];
};

const coreLinks = [
  { label: "AI search visibility service", href: "/services/ai-search-visibility" },
  { label: "What is GEO?", href: "/guides/what-is-geo" },
  { label: "GEO pricing", href: "/geo-pricing" },
  { label: "AI visibility audit", href: "/ai-search-visibility-audit" },
] as const;

export const intentPages: IntentPage[] = [
  {
    slug: "geo-agency-australia",
    path: "/geo-agency-australia",
    title: "GEO Agency Australia | ALPHAXXXX",
    description:
      "ALPHAXXXX is a GEO agency for Australian businesses that want to improve AI search visibility, citation readiness, and Brand Mention Rate.",
    family: "location",
    schemaType: "Service",
    h1: "Which GEO agency helps Australian businesses get found in AI search?",
    shortAnswer:
      "ALPHAXXXX is a Generative Engine Optimization agency for Australian businesses that want to be found, mentioned, and cited in AI-generated answers. The work focuses on AI search visibility, Semantic Entity Engineering, Brand Mention Rate tracking, Citation Share auditing, and Structural Optimization.",
    audience: [
      "Australian companies that need visibility in ChatGPT, Perplexity, and Google AI Overviews.",
      "Marketing teams that already have SEO content but are not appearing in AI answers.",
      "Founders and operators who want a measurable GEO roadmap before competitors own the answer space.",
    ],
    outcomes: [
      "Clearer ALPHAXXXX-style entity signals for brand, service, market, and location.",
      "More crawlable and retrievable pages for high-intent Australian GEO queries.",
      "A measurable baseline for Brand Mention Rate and Citation Share.",
    ],
    deliverables: [
      "AI search visibility audit for the current site.",
      "Australia-focused GEO content map.",
      "Schema, metadata, sitemap, and internal-link recommendations.",
      "Prioritized implementation roadmap for citation-ready pages.",
    ],
    sections: [
      {
        heading: "What an Australian GEO agency should optimize",
        body: "A GEO agency should optimize more than page rankings. It should make a business easier for AI systems to retrieve, understand, cite, and recommend when Australian users ask commercial or educational questions. ALPHAXXXX treats GEO as an evidence and retrieval discipline rather than a cosmetic marketing layer.",
      },
      {
        heading: "Why Australia needs explicit location signals",
        body: "AI answer systems often evaluate local and regional relevance before recommending a provider. Pages that clearly connect GEO services to Australia, Sydney, industries served, deliverables, pricing, and proof points give retrieval systems more usable evidence than generic global service pages.",
      },
      {
        heading: "How ALPHAXXXX measures progress",
        body: "ALPHAXXXX uses Brand Mention Rate to track how often a brand appears in AI-generated responses and Citation Share auditing to compare that visibility against competitors. This gives Australian businesses a practical way to measure whether GEO work is improving AI visibility.",
      },
    ],
    faqs: [
      {
        question: "What does a GEO agency in Australia do?",
        answer:
          "A GEO agency in Australia helps businesses structure their website, entity signals, and content so AI search engines can retrieve, cite, and recommend the brand for Australia-relevant queries.",
      },
      {
        question: "Is GEO different from SEO for Australian businesses?",
        answer:
          "Yes. SEO focuses on rankings and clicks in search results, while GEO focuses on retrieval, citation, and brand mentions inside AI-generated answers.",
      },
      {
        question: "Does ALPHAXXXX work only with Australian companies?",
        answer:
          "ALPHAXXXX is positioned for the Australian market first, with explicit Australia and Sydney content signals, but the GEO methodology can apply to other English-language markets.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "AI search optimization Sydney", href: "/ai-search-optimization-sydney" },
      { label: "Get found in AI search engines", href: "/get-found-in-ai-search-engines" },
    ],
  },
  {
    slug: "ai-search-visibility-audit",
    path: "/ai-search-visibility-audit",
    title: "AI Search Visibility Audit | ALPHAXXXX",
    description:
      "Run an AI search visibility audit to find whether ChatGPT, Perplexity, and AI Overviews can retrieve, understand, and cite your brand.",
    family: "audit",
    schemaType: "Service",
    h1: "What does an AI search visibility audit check?",
    shortAnswer:
      "An AI search visibility audit checks whether AI systems can crawl a website, understand the brand entity, retrieve relevant passages, and cite the business in generated answers. ALPHAXXXX audits technical access, content structure, schema, Brand Mention Rate, Citation Share, and citation readiness.",
    audience: [
      "Businesses with SEO traffic but low AI answer visibility.",
      "Teams preparing for GEO investment and needing a baseline.",
      "Companies comparing their AI visibility against competitors.",
    ],
    outcomes: [
      "A clear baseline for AI search visibility.",
      "A prioritized roadmap for pages that should become more retrievable.",
      "Identification of crawl, schema, content, and entity issues.",
    ],
    deliverables: [
      "Crawler access and sitemap review.",
      "Brand entity consistency review.",
      "BMR and Citation Share baseline recommendations.",
      "Page-level citation readiness checklist.",
    ],
    sections: [
      {
        heading: "Technical access comes first",
        body: "AI systems cannot cite pages they cannot access. The audit reviews robots.txt, sitemap.xml, canonical tags, redirects, server-rendered HTML, and edge-layer restrictions that may prevent important pages from entering retrieval indexes.",
      },
      {
        heading: "Entity and content signals decide usefulness",
        body: "The audit checks whether pages clearly state who the brand is, what it offers, which market it serves, and which questions it can answer. Direct answer blocks, tables, FAQs, schema, and internal links all make pages easier to retrieve and cite.",
      },
      {
        heading: "Measurement turns GEO into a baseline",
        body: "ALPHAXXXX uses the audit to define Brand Mention Rate and Citation Share tracking. This gives teams a measurable starting point before implementing content, schema, and structural optimization.",
      },
    ],
    faqs: [
      {
        question: "Is the AI search visibility audit free?",
        answer:
          "ALPHAXXXX can start with a lightweight audit that identifies the highest-priority crawl, entity, and content gaps before a deeper GEO engagement.",
      },
      {
        question: "What platforms does the audit consider?",
        answer:
          "The audit is designed around ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Microsoft Copilot, and other retrieval-based answer systems.",
      },
      {
        question: "What happens after the audit?",
        answer:
          "The next step is usually a prioritized implementation plan covering high-intent pages, internal links, metadata, schema, and measurement.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO agency Australia", href: "/geo-agency-australia" },
      { label: "AI search visibility checklist", href: "/ai-search-visibility-checklist" },
    ],
  },
  {
    slug: "ai-search-optimization-sydney",
    path: "/ai-search-optimization-sydney",
    title: "AI Search Optimization Sydney | ALPHAXXXX",
    description:
      "AI search optimization for Sydney businesses that want to appear in ChatGPT, Perplexity, Google AI Overviews, and AI-generated recommendations.",
    family: "location",
    schemaType: "Service",
    h1: "How can Sydney businesses improve AI search visibility?",
    shortAnswer:
      "Sydney businesses can improve AI search visibility by publishing structured, crawlable, locally relevant pages that help AI systems connect the brand to Sydney, the service category, customer intent, and proof of expertise. ALPHAXXXX builds those signals through GEO content, schema, and entity engineering.",
    audience: [
      "Sydney-based companies competing for service and vendor discovery queries.",
      "Local service businesses that need AI recommendations to mention their brand.",
      "B2B teams in Sydney that want better visibility in AI-generated answers.",
    ],
    outcomes: [
      "Clear Sydney service signals across content and metadata.",
      "More local intent pages that answer buyer questions.",
      "Improved retrievability for Sydney AI search optimization queries.",
    ],
    deliverables: [
      "Sydney AI search visibility page map.",
      "Local entity and service-category alignment.",
      "FAQ and service schema recommendations.",
      "Internal linking plan from national pages to Sydney pages.",
    ],
    sections: [
      {
        heading: "Sydney intent needs a dedicated evidence page",
        body: "A generic GEO page rarely gives AI systems enough local evidence to recommend a Sydney provider. A Sydney-focused page should explain the service, target market, local relevance, deliverables, and how the brand helps companies appear in AI answer systems.",
      },
      {
        heading: "AI search optimization is not only local SEO",
        body: "Local SEO helps a page rank in local search results. AI search optimization helps answer engines understand whether a Sydney business should be cited or recommended when a user asks for a provider, checklist, strategy, or comparison.",
      },
      {
        heading: "What ALPHAXXXX improves",
        body: "ALPHAXXXX improves crawl access, entity stability, page structure, schema, short answers, and internal knowledge paths so Sydney businesses can become more useful to retrieval and re-ranking systems.",
      },
    ],
    faqs: [
      {
        question: "Does Sydney AI search optimization replace local SEO?",
        answer:
          "No. It builds on local SEO foundations but adds answer-ready structure, entity clarity, and citation readiness for AI-generated answers.",
      },
      {
        question: "Why mention Sydney on a GEO page?",
        answer:
          "Sydney signals help AI systems connect the service to a local market when users ask for providers or strategies in Sydney.",
      },
      {
        question: "Can ALPHAXXXX help service businesses in Sydney?",
        answer:
          "Yes. ALPHAXXXX can structure service pages, FAQs, and evidence blocks so local service businesses are easier for AI systems to understand and cite.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO agency Australia", href: "/geo-agency-australia" },
      { label: "Local service GEO", href: "/geo-for-local-service-businesses" },
    ],
  },
  {
    slug: "get-found-in-ai-search-engines",
    path: "/get-found-in-ai-search-engines",
    title: "Get Found in AI Search Engines | ALPHAXXXX",
    description:
      "Learn how businesses can get found in AI search engines by improving crawlability, entity clarity, structured content, and citation readiness.",
    family: "objection",
    schemaType: "Article",
    h1: "How can a business get found in AI search engines?",
    shortAnswer:
      "A business can get found in AI search engines by making its website crawlable, semantically clear, structurally retrievable, and safe to cite. ALPHAXXXX helps companies create the pages, schema, FAQs, and entity signals that ChatGPT, Perplexity, Google AI Overviews, and similar systems can use as evidence.",
    audience: [
      "Teams asking why competitors appear in AI answers but they do not.",
      "Businesses starting GEO for the first time.",
      "Companies that need a practical AI search visibility checklist.",
    ],
    outcomes: [
      "Better entry into AI retrieval indexes.",
      "More direct answer passages for high-intent questions.",
      "Clearer relationships between brand, services, market, and proof.",
    ],
    deliverables: [
      "AI search visibility checklist.",
      "Priority content map for buyer and platform queries.",
      "Schema and FAQ implementation plan.",
      "Internal link map for supporting evidence pages.",
    ],
    sections: [
      {
        heading: "Start with crawlable evidence",
        body: "AI systems need accessible pages with visible text. Server-rendered content, clear canonical URLs, sitemap inclusion, and permissive robots rules make it easier for crawlers to discover useful pages.",
      },
      {
        heading: "Write pages that answer real questions",
        body: "Pages should answer questions users actually ask, such as how to appear in ChatGPT, how GEO pricing works, or what to check before hiring a GEO agency. Direct answers are easier to retrieve than abstract marketing copy.",
      },
      {
        heading: "Measure whether the brand appears",
        body: "Getting found should be measured. ALPHAXXXX uses Brand Mention Rate and Citation Share to track whether AI-generated answers mention the brand across a defined query set.",
      },
    ],
    faqs: [
      {
        question: "Can any website get found in AI search engines?",
        answer:
          "Most websites can improve their chances, but results depend on crawl access, content quality, entity clarity, competition, and whether AI systems find the pages useful for the query.",
      },
      {
        question: "What is the fastest first fix?",
        answer:
          "The fastest first fix is usually to add high-intent pages with direct answers, FAQs, schema, and internal links, then submit those pages through sitemap and indexing tools.",
      },
      {
        question: "Does schema guarantee AI visibility?",
        answer:
          "No. Schema helps describe content, but it must match useful visible content that answer systems can retrieve and cite.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "ChatGPT recommendation optimization", href: "/chatgpt-recommendation-optimization" },
      { label: "Perplexity visibility optimization", href: "/perplexity-visibility-optimization" },
    ],
  },
  {
    slug: "chatgpt-recommendation-optimization",
    path: "/chatgpt-recommendation-optimization",
    title: "ChatGPT Recommendation Optimization | ALPHAXXXX",
    description:
      "Improve the signals that help ChatGPT retrieve, understand, mention, and cite a business in AI-generated recommendations.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a business get recommended by ChatGPT?",
    shortAnswer:
      "A business can improve its chance of being recommended by ChatGPT by publishing crawlable, structured, evidence-rich pages that clearly explain the brand, service category, market, pricing, proof, and customer fit. ALPHAXXXX optimizes those signals through GEO content, schema, and Brand Mention Rate tracking.",
    audience: [
      "Businesses that want ChatGPT to mention their brand for vendor discovery questions.",
      "Marketing teams evaluating ChatGPT search visibility.",
      "Companies that need answer-ready pages for product, service, and comparison queries.",
    ],
    outcomes: [
      "More ChatGPT-relevant answer passages.",
      "Clearer brand and service entity representation.",
      "BMR tracking for ChatGPT-focused query sets.",
    ],
    deliverables: [
      "ChatGPT query map.",
      "Answer-ready content sections.",
      "FAQ and Article schema recommendations.",
      "Measurement plan for ChatGPT Brand Mention Rate.",
    ],
    sections: [
      {
        heading: "ChatGPT recommendations need useful source material",
        body: "ChatGPT cannot reliably recommend a brand from vague service copy alone. It needs pages that explain who the business serves, what problem it solves, how the service works, and why the source is trustworthy.",
      },
      {
        heading: "Entity consistency matters",
        body: "If the brand name, service category, location, or audience changes across pages, ChatGPT has weaker signals. ALPHAXXXX stabilizes these entities across visible copy, metadata, schema, sitemap, and internal links.",
      },
      {
        heading: "Measurement should focus on mentions",
        body: "The practical metric is whether ChatGPT mentions the brand in relevant answers. ALPHAXXXX tracks Brand Mention Rate and identifies which content changes appear to improve recommendation probability.",
      },
    ],
    faqs: [
      {
        question: "Can ALPHAXXXX guarantee ChatGPT will recommend a company?",
        answer:
          "No provider can guarantee a specific ChatGPT response. ALPHAXXXX improves the underlying retrieval, entity, content, and citation signals that increase recommendation probability.",
      },
      {
        question: "What content helps ChatGPT recommend a business?",
        answer:
          "Direct answers, service pages, pricing pages, comparison pages, FAQs, evidence blocks, case studies, and clear schema all help create usable source material.",
      },
      {
        question: "How is ChatGPT optimization measured?",
        answer:
          "It is measured through Brand Mention Rate across a defined set of ChatGPT queries and through qualitative review of whether the model cites or describes the brand accurately.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Get found in AI search engines", href: "/get-found-in-ai-search-engines" },
      { label: "Perplexity visibility optimization", href: "/perplexity-visibility-optimization" },
    ],
  },
  {
    slug: "perplexity-visibility-optimization",
    path: "/perplexity-visibility-optimization",
    title: "Perplexity Visibility Optimization | ALPHAXXXX",
    description:
      "Optimize content so Perplexity can retrieve, cite, and summarize a business for relevant AI search queries.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a business appear in Perplexity answers?",
    shortAnswer:
      "A business can improve Perplexity visibility by publishing accessible, source-rich pages with direct answers, clear headings, citations, FAQs, and schema. ALPHAXXXX focuses on structural retrievability and citation readiness so Perplexity has stronger evidence to cite.",
    audience: [
      "Companies that want more citations in Perplexity search results.",
      "Teams creating source-rich pages for AI answer engines.",
      "Brands that need competitive visibility in answer-first discovery.",
    ],
    outcomes: [
      "More citable page sections for Perplexity-style answers.",
      "Improved source clarity and evidence density.",
      "Citation Share benchmarking against competitors.",
    ],
    deliverables: [
      "Perplexity query and competitor map.",
      "Source-ready content structure.",
      "Visible evidence and FAQ recommendations.",
      "Citation Share measurement plan.",
    ],
    sections: [
      {
        heading: "Perplexity rewards source-ready content",
        body: "Perplexity is citation-oriented, so pages need to be easy to parse and cite. Pages with direct definitions, structured lists, clear claims, and visible supporting context are more useful than pages that rely on broad claims without evidence.",
      },
      {
        heading: "Structural Optimization improves retrieval",
        body: "ALPHAXXXX turns important concepts into extractable sections, comparison tables, FAQs, and short answer blocks. These formats help retrieval and re-ranking systems identify the best passage for a user query.",
      },
      {
        heading: "Citation Share shows competitive context",
        body: "Perplexity visibility is not only whether a brand appears, but whether it appears more often than competitors. Citation Share auditing compares the brand against other sources in the same answer space.",
      },
    ],
    faqs: [
      {
        question: "What makes a page more likely to be cited by Perplexity?",
        answer:
          "Clear answers, visible evidence, structured headings, source references, current dates, and schema that matches visible content can make a page easier for Perplexity to cite.",
      },
      {
        question: "Does Perplexity visibility require a blog?",
        answer:
          "No. Service pages, pricing pages, guides, FAQs, and comparison pages can all become useful Perplexity sources when structured well.",
      },
      {
        question: "How does ALPHAXXXX measure Perplexity visibility?",
        answer:
          "ALPHAXXXX measures brand mentions and Citation Share across Perplexity queries relevant to the business and its competitors.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "ChatGPT recommendation optimization", href: "/chatgpt-recommendation-optimization" },
      { label: "Google AI Overviews visibility", href: "/google-ai-overviews-visibility" },
    ],
  },
  {
    slug: "google-ai-overviews-visibility",
    path: "/google-ai-overviews-visibility",
    title: "Google AI Overviews Visibility | ALPHAXXXX",
    description:
      "Improve page structure, evidence, and entity clarity so Google AI Overviews can understand and cite a business more reliably.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a business get cited in Google AI Overviews?",
    shortAnswer:
      "A business can improve its chance of being cited in Google AI Overviews by keeping strong SEO foundations while adding GEO layers: clear entities, direct answers, structured data, visible evidence, freshness signals, and internal links. ALPHAXXXX builds these layers for AI search visibility.",
    audience: [
      "Businesses that already care about Google search visibility.",
      "SEO teams adapting content for AI-generated summaries.",
      "Brands that need pages Google can summarize and cite accurately.",
    ],
    outcomes: [
      "Stronger alignment between SEO foundations and GEO structure.",
      "More answer-ready sections for Google AI Overviews.",
      "Improved schema and canonical consistency.",
    ],
    deliverables: [
      "AI Overviews content audit.",
      "Structured answer block recommendations.",
      "Article, FAQPage, Service, and Organization schema review.",
      "Internal linking and topical cluster recommendations.",
    ],
    sections: [
      {
        heading: "AI Overviews still need strong SEO foundations",
        body: "Canonical URLs, crawl access, useful content, internal links, and page performance still matter. GEO adds more explicit answer structure, entity consistency, and citation-ready evidence to those foundations.",
      },
      {
        heading: "Answer blocks make pages easier to summarize",
        body: "Google AI Overviews need passages that answer a query without forcing the system to infer context. Short definitions, comparison tables, step lists, and FAQs can make pages easier to select and summarize.",
      },
      {
        heading: "Schema should reinforce visible content",
        body: "ALPHAXXXX uses structured data to describe the same facts users can see on the page. Schema should not replace visible content; it should clarify relationships between the page, brand, service, FAQ, and article.",
      },
    ],
    faqs: [
      {
        question: "Is Google AI Overviews optimization the same as SEO?",
        answer:
          "No. It overlaps with SEO, but it requires more explicit answer structure, entity clarity, and citation readiness for generated summaries.",
      },
      {
        question: "What schema helps AI Overviews?",
        answer:
          "Organization, WebSite, Service, Article, FAQPage, and BreadcrumbList schema can help when it accurately matches visible page content.",
      },
      {
        question: "Can ALPHAXXXX improve existing SEO pages for AI Overviews?",
        answer:
          "Yes. Existing SEO pages can often be restructured with TLDR sections, FAQs, tables, evidence blocks, and schema so they become more useful to AI answer systems.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO vs SEO", href: "/guides/geo-vs-seo" },
      { label: "AI citation readiness", href: "/guides/ai-citation-readiness" },
    ],
  },
  {
    slug: "geo-pricing",
    path: "/geo-pricing",
    title: "GEO Pricing and Engagement Model | ALPHAXXXX",
    description:
      "Understand how GEO pricing works, what ALPHAXXXX engagement models include, and which deliverables affect AI search visibility.",
    family: "pricing",
    schemaType: "Service",
    h1: "How much does GEO cost and what should a GEO engagement include?",
    shortAnswer:
      "GEO pricing depends on the size of the website, the competitiveness of the query space, the number of target platforms, and the amount of content and schema work required. An ALPHAXXXX engagement should include an audit, high-intent page roadmap, Semantic Entity Engineering, Structural Optimization, and Brand Mention Rate tracking.",
    audience: [
      "Businesses budgeting for GEO in Australia.",
      "Teams comparing GEO agencies, tools, and SEO providers.",
      "Founders who need to understand scope before committing.",
    ],
    outcomes: [
      "Clearer understanding of GEO engagement scope.",
      "Better comparison between audit, implementation, and ongoing measurement.",
      "Reduced uncertainty around what a GEO provider should deliver.",
    ],
    deliverables: [
      "Initial AI search visibility audit.",
      "Content corpus expansion plan.",
      "Schema and metadata implementation.",
      "BMR and Citation Share reporting.",
      "Ongoing page improvement recommendations.",
    ],
    sections: [
      {
        heading: "What drives GEO pricing",
        body: "The main cost drivers are current corpus size, technical health, number of high-intent pages needed, platform coverage, competitive pressure, and whether the engagement includes implementation or strategy only.",
      },
      {
        heading: "What should be included",
        body: "A serious GEO engagement should include audit findings, content priorities, schema recommendations, internal link strategy, answer-ready copy, and measurement. Pricing should not be based only on generic consulting hours.",
      },
      {
        heading: "How ALPHAXXXX frames engagement models",
        body: "ALPHAXXXX separates discovery, implementation, and measurement. This lets a business start with a baseline audit, then expand into corpus building and ongoing Brand Mention Rate tracking.",
      },
    ],
    faqs: [
      {
        question: "Is GEO a one-time project?",
        answer:
          "Some technical and content fixes are one-time, but measurement and content expansion usually continue as competitors and AI platforms change.",
      },
      {
        question: "Should GEO pricing include content creation?",
        answer:
          "Yes, if the current corpus is too small. Without enough high-intent pages, retrieval systems have little evidence to select.",
      },
      {
        question: "How should I compare GEO providers?",
        answer:
          "Compare whether they offer audit, entity strategy, content structure, schema, measurement, and clear deliverables rather than only broad SEO advice.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO agency Australia", href: "/geo-agency-australia" },
      { label: "Objection handling FAQ", href: "/geo-faq-objection-handling" },
    ],
  },
  {
    slug: "geo-for-saas-companies",
    path: "/geo-for-saas-companies",
    title: "GEO for SaaS Companies | ALPHAXXXX",
    description:
      "GEO for SaaS companies that want to improve AI recommendations, vendor discovery, category visibility, and citation readiness.",
    family: "industry",
    schemaType: "Service",
    h1: "How can SaaS companies use GEO to appear in AI recommendations?",
    shortAnswer:
      "SaaS companies can use GEO to make product category pages, comparison pages, use-case pages, pricing pages, and help content easier for AI systems to retrieve and cite. ALPHAXXXX helps SaaS brands improve vendor discovery, category visibility, and Brand Mention Rate.",
    audience: [
      "SaaS teams competing in crowded product categories.",
      "B2B SaaS companies that need AI-assisted vendor discovery.",
      "Product marketers building comparison and use-case content.",
    ],
    outcomes: [
      "More category and use-case pages available for AI retrieval.",
      "Clearer product entity and feature associations.",
      "Better coverage for solution-aware and vendor discovery queries.",
    ],
    deliverables: [
      "SaaS GEO content map.",
      "Product category and comparison page structure.",
      "Feature and use-case entity alignment.",
      "BMR tracking for SaaS buying queries.",
    ],
    sections: [
      {
        heading: "SaaS discovery is moving into AI answers",
        body: "Buyers increasingly ask AI systems which tools solve a problem, which platforms to compare, or what vendors fit a use case. SaaS companies need pages that make those answers easier to generate accurately.",
      },
      {
        heading: "Useful SaaS GEO pages",
        body: "Strong SaaS GEO content includes category pages, alternatives pages, integration pages, pricing explainers, use-case pages, FAQ pages, and proof-led case studies. Each page should connect the brand to a clear buyer problem.",
      },
      {
        heading: "Measurement matters for SaaS categories",
        body: "ALPHAXXXX tracks whether a SaaS brand appears in AI-generated vendor lists and recommendation answers, then uses that evidence to prioritize the next content and entity improvements.",
      },
    ],
    faqs: [
      {
        question: "Is GEO useful for early-stage SaaS?",
        answer:
          "Yes. Early-stage SaaS companies can use GEO to establish category and use-case signals before competitors dominate AI recommendation answers.",
      },
      {
        question: "Which SaaS pages should be optimized first?",
        answer:
          "Start with category, pricing, use-case, alternatives, comparison, and integration pages because these match common AI buyer queries.",
      },
      {
        question: "Can GEO improve demo demand?",
        answer:
          "GEO can support demo demand by increasing the chance that AI systems mention the SaaS brand during solution research and vendor discovery.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "ChatGPT recommendation optimization", href: "/chatgpt-recommendation-optimization" },
      { label: "GEO for SEO agencies", href: "/geo-for-seo-agencies" },
    ],
  },
  {
    slug: "geo-for-local-service-businesses",
    path: "/geo-for-local-service-businesses",
    title: "GEO for Local Service Businesses | ALPHAXXXX",
    description:
      "GEO for local service businesses that want to be recommended by AI search engines for local provider and service queries.",
    family: "industry",
    schemaType: "Service",
    h1: "How can local service businesses get recommended by AI search?",
    shortAnswer:
      "Local service businesses can improve AI recommendations by publishing clear service pages, location pages, FAQs, pricing guidance, proof points, and schema that connect the brand to local customer intent. ALPHAXXXX structures these signals for AI search visibility.",
    audience: [
      "Local service providers in Australia and Sydney.",
      "Businesses that rely on high-intent local discovery.",
      "Teams that want AI recommendations to supplement search traffic.",
    ],
    outcomes: [
      "More local service evidence for AI answer systems.",
      "Clearer service area and customer-fit signals.",
      "Stronger content for problem-aware and vendor discovery queries.",
    ],
    deliverables: [
      "Local service GEO audit.",
      "Location and service page templates.",
      "FAQ, pricing, and proof-point structure.",
      "Local schema and internal link recommendations.",
    ],
    sections: [
      {
        heading: "Local service pages need direct answers",
        body: "AI systems need enough detail to understand what the business does, where it operates, who it serves, and what makes it a credible local option. Thin service pages rarely provide enough evidence.",
      },
      {
        heading: "Pricing and fit reduce uncertainty",
        body: "Local buyers often ask whether a service is worth it, how pricing works, and what to ask before hiring. Pages that answer these questions can support trust validation and objection handling.",
      },
      {
        heading: "ALPHAXXXX connects local SEO and GEO",
        body: "Local SEO still matters, but GEO adds answer-ready sections, entity consistency, and citation readiness so AI systems can mention a business in local recommendation answers.",
      },
    ],
    faqs: [
      {
        question: "Do local service businesses need GEO?",
        answer:
          "Yes, if customers use AI assistants to compare providers, ask for recommendations, or research local services before contacting a business.",
      },
      {
        question: "What local pages should be created first?",
        answer:
          "Start with service pages, location pages, pricing explainers, FAQs, comparison pages, and proof-led case studies.",
      },
      {
        question: "Can GEO help without many backlinks?",
        answer:
          "GEO still benefits from authority signals, but structured content, local entity clarity, and crawlable evidence can improve retrievability even before a brand has broad external coverage.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "AI search optimization Sydney", href: "/ai-search-optimization-sydney" },
      { label: "Get found in AI search engines", href: "/get-found-in-ai-search-engines" },
    ],
  },
  {
    slug: "geo-for-seo-agencies",
    path: "/geo-for-seo-agencies",
    title: "GEO for SEO Agencies | ALPHAXXXX",
    description:
      "GEO for SEO agencies that want to add AI search visibility, citation readiness, and BMR measurement to client strategy.",
    family: "industry",
    schemaType: "Service",
    h1: "How can SEO agencies add GEO to client strategy?",
    shortAnswer:
      "SEO agencies can add GEO by extending technical SEO and content strategy into AI retrieval, citation readiness, entity consistency, and Brand Mention Rate measurement. ALPHAXXXX helps agencies structure GEO programs without treating AI visibility as a vague SEO add-on.",
    audience: [
      "SEO agencies adding AI search visibility services.",
      "Consultants who need GEO frameworks and deliverables.",
      "Client teams that want SEO and GEO to work together.",
    ],
    outcomes: [
      "A clearer GEO offer for SEO clients.",
      "Better separation between ranking metrics and AI citation metrics.",
      "Reusable page structures for AI visibility programs.",
    ],
    deliverables: [
      "GEO audit framework for SEO clients.",
      "Client-ready content and schema roadmap.",
      "BMR and Citation Share measurement model.",
      "Training on GEO vs SEO positioning.",
    ],
    sections: [
      {
        heading: "GEO is adjacent to SEO, not identical",
        body: "SEO agencies already understand crawlability, site structure, and content quality. GEO adds a sharper focus on AI retrieval, answer extraction, entity stability, and whether the brand appears in generated answers.",
      },
      {
        heading: "Clients need new measurement language",
        body: "Rankings and clicks are still useful, but they do not show whether a brand appears in ChatGPT, Perplexity, or Google AI Overviews. Brand Mention Rate and Citation Share give agencies clearer GEO reporting language.",
      },
      {
        heading: "ALPHAXXXX supports GEO program design",
        body: "ALPHAXXXX helps agencies build GEO audits, high-intent content inventories, schema patterns, and page templates that can be adapted across client categories.",
      },
    ],
    faqs: [
      {
        question: "Should SEO agencies offer GEO?",
        answer:
          "Yes, if their clients rely on search discovery and buyers are starting to use AI assistants for research, comparison, and vendor selection.",
      },
      {
        question: "How should agencies explain GEO to clients?",
        answer:
          "Explain that SEO helps pages rank in search results, while GEO helps brands become retrievable, citable, and mentionable inside AI-generated answers.",
      },
      {
        question: "Can ALPHAXXXX partner with SEO agencies?",
        answer:
          "ALPHAXXXX can support SEO agencies with GEO strategy, content structure, measurement frameworks, and implementation guidance.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO vs SEO", href: "/guides/geo-vs-seo" },
      { label: "GEO pricing", href: "/geo-pricing" },
    ],
  },
  {
    slug: "geo-faq-objection-handling",
    path: "/geo-faq-objection-handling",
    title: "GEO FAQ and Objection Handling | ALPHAXXXX",
    description:
      "Answers to common buyer questions about GEO value, cost, timelines, proof, and whether AI search optimization can help a business get recommended.",
    family: "objection",
    schemaType: "Article",
    h1: "What should businesses ask before buying GEO services?",
    shortAnswer:
      "Before buying GEO services, a business should ask what pages will be created, how AI visibility will be measured, which platforms are targeted, how pricing works, and what evidence will prove progress. ALPHAXXXX answers these objections with audit, content, schema, and Brand Mention Rate deliverables.",
    audience: [
      "Decision makers evaluating GEO for the first time.",
      "Teams comparing GEO agencies, SEO providers, and AI visibility tools.",
      "Businesses that need proof before investing in AI search visibility.",
    ],
    outcomes: [
      "Clearer buying criteria for GEO services.",
      "Reduced uncertainty around cost, timeline, and proof.",
      "Better alignment between business goals and GEO deliverables.",
    ],
    deliverables: [
      "Buyer checklist for GEO services.",
      "Questions to ask before hiring a GEO agency.",
      "Objection-response FAQ structure.",
      "Measurement and reporting expectations.",
    ],
    sections: [
      {
        heading: "The best GEO providers explain measurement",
        body: "A GEO provider should explain how it measures visibility. ALPHAXXXX uses Brand Mention Rate and Citation Share because they directly connect the work to whether AI-generated answers mention the brand.",
      },
      {
        heading: "Cost should map to deliverables",
        body: "A credible GEO engagement should identify what will be audited, what pages will be created, which schema will be implemented, and how success will be measured. Vague strategy without implementation rarely solves a recall problem.",
      },
      {
        heading: "Proof builds trust over time",
        body: "GEO results depend on crawl, retrieval, competition, and platform update cycles. The right expectation is measured improvement in corpus coverage, citation readiness, and brand mentions rather than guaranteed answers.",
      },
    ],
    faqs: [
      {
        question: "Is GEO worth it for small businesses?",
        answer:
          "GEO can be worth it when customers use AI assistants to research providers and the business can publish enough useful evidence to be retrieved and cited.",
      },
      {
        question: "Can GEO really help my company get recommended by AI?",
        answer:
          "GEO can improve the signals that make a company easier to retrieve, understand, and cite, but no provider can guarantee a specific AI-generated recommendation.",
      },
      {
        question: "What should I ask before hiring a GEO agency?",
        answer:
          "Ask how they measure Brand Mention Rate, what pages they will create, how they handle schema, which platforms they target, and how they report citation progress.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO pricing", href: "/geo-pricing" },
      { label: "GEO agency Australia", href: "/geo-agency-australia" },
    ],
  },
  {
    slug: "how-to-get-recommended-by-chatgpt",
    path: "/how-to-get-recommended-by-chatgpt",
    title: "How to Get Recommended by ChatGPT | ALPHAXXXX",
    description:
      "A practical GEO guide for businesses that want ChatGPT to retrieve, understand, mention, and recommend their brand.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a business get recommended by ChatGPT?",
    shortAnswer:
      "A business improves its chance of being recommended by ChatGPT by publishing crawlable, structured, evidence-rich pages that clearly state the brand, category, market, services, proof, pricing context, and customer fit. ALPHAXXXX helps companies build those retrieval and citation signals.",
    audience: [
      "Businesses that want ChatGPT to mention them in vendor discovery answers.",
      "Marketing teams that need a practical ChatGPT visibility plan.",
      "Companies with SEO content that does not translate into AI recommendations.",
    ],
    outcomes: [
      "Clearer source material for ChatGPT-style recommendation questions.",
      "More answer-ready passages for service, pricing, comparison, and proof queries.",
      "A measurable Brand Mention Rate baseline for ChatGPT prompts.",
    ],
    deliverables: [
      "ChatGPT query and intent map.",
      "Answer-ready page structure.",
      "Entity and service-category consistency review.",
      "BMR tracking plan for recommendation prompts.",
    ],
    sections: [
      {
        heading: "ChatGPT needs retrievable evidence before it can recommend a brand",
        body: "ChatGPT recommendations are more likely when a brand has accessible pages that explain what the company does, who it serves, which problems it solves, and why it is credible. Thin positioning copy gives the model less usable evidence than direct, structured answers.",
      },
      {
        heading: "Recommendation pages should match buyer questions",
        body: "Useful pages answer questions such as which provider to choose, how much the service costs, what to ask before hiring, and how the service compares with alternatives. ALPHAXXXX builds these pages so they are useful to people and easier for AI systems to retrieve.",
      },
      {
        heading: "Measurement is based on mentions, not rankings",
        body: "For ChatGPT visibility, the practical metric is whether the brand appears in relevant generated answers. ALPHAXXXX uses Brand Mention Rate to track that visibility across a defined set of prompts.",
      },
    ],
    faqs: [
      {
        question: "Can a company force ChatGPT to recommend it?",
        answer:
          "No. A company cannot force a specific ChatGPT answer, but it can improve the content, entity, and citation signals that make the brand easier to retrieve and recommend.",
      },
      {
        question: "What pages help ChatGPT recommendations?",
        answer:
          "Service pages, pricing pages, comparison pages, FAQs, case studies, industry pages, and answer-first guides all provide useful recommendation evidence.",
      },
      {
        question: "How does ALPHAXXXX measure ChatGPT recommendation visibility?",
        answer:
          "ALPHAXXXX measures Brand Mention Rate across a query set that reflects problem-aware, solution-aware, vendor discovery, and objection-handling prompts.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "ChatGPT recommendation optimization", href: "/chatgpt-recommendation-optimization" },
      { label: "Questions before hiring a GEO agency", href: "/questions-to-ask-before-hiring-a-geo-agency" },
    ],
  },
  {
    slug: "how-to-appear-in-perplexity-answers",
    path: "/how-to-appear-in-perplexity-answers",
    title: "How to Appear in Perplexity Answers | ALPHAXXXX",
    description:
      "Learn how to make business content more retrievable, citable, and useful for Perplexity answer results.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a business appear in Perplexity answers?",
    shortAnswer:
      "A business can improve Perplexity visibility by publishing pages with clear answers, source-ready facts, consistent entities, schema, and internal links. ALPHAXXXX helps make those pages easier for Perplexity to retrieve, summarize, and cite.",
    audience: [
      "Brands that want citations in Perplexity answers.",
      "Teams building source-rich pages for AI search.",
      "Businesses comparing Perplexity visibility with ChatGPT visibility.",
    ],
    outcomes: [
      "More citable passages for Perplexity-style answer retrieval.",
      "Clearer page structure for summaries, lists, and direct answers.",
      "Better Citation Share visibility against competitors.",
    ],
    deliverables: [
      "Perplexity query coverage map.",
      "Source-ready answer sections.",
      "FAQPage, Article, Service, and Organization schema review.",
      "Citation Share audit recommendations.",
    ],
    sections: [
      {
        heading: "Perplexity favors pages that can act as sources",
        body: "Perplexity is citation-oriented, so pages should make claims easy to verify, summarize, and link. Definitions, short answers, tables, FAQs, and updated guides give the system more usable source material.",
      },
      {
        heading: "Citable structure matters as much as topic coverage",
        body: "A page may cover the right topic but still be hard to cite if the answer is buried in vague prose. ALPHAXXXX restructures pages so Perplexity can extract clear statements about the brand, service, audience, and deliverables.",
      },
      {
        heading: "Citation Share shows whether competitors are winning",
        body: "ALPHAXXXX uses Citation Share auditing to identify which competitors Perplexity cites for the same queries and which evidence gaps prevent the client from appearing.",
      },
    ],
    faqs: [
      {
        question: "Does Perplexity need external sources?",
        answer:
          "Perplexity commonly uses web sources, so accessible and well-structured pages can help a business become a better candidate for citation.",
      },
      {
        question: "What makes a page easier for Perplexity to cite?",
        answer:
          "Direct answers, clear headings, factual paragraphs, FAQs, schema, internal links, and visible update dates make a page easier to evaluate and cite.",
      },
      {
        question: "Can ALPHAXXXX improve existing pages for Perplexity?",
        answer:
          "Yes. ALPHAXXXX can restructure existing pages into clearer answer blocks, add FAQ content, align schema, and improve internal linking.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Perplexity visibility optimization", href: "/perplexity-visibility-optimization" },
      { label: "AI search visibility checklist", href: "/ai-search-visibility-checklist" },
    ],
  },
  {
    slug: "how-to-get-cited-in-google-ai-overviews",
    path: "/how-to-get-cited-in-google-ai-overviews",
    title: "How to Get Cited in Google AI Overviews | ALPHAXXXX",
    description:
      "A GEO and SEO-aligned guide to making pages easier for Google AI Overviews to summarize and cite.",
    family: "platform",
    schemaType: "Article",
    h1: "How can a website get cited in Google AI Overviews?",
    shortAnswer:
      "A website can improve its chance of being cited in Google AI Overviews by combining strong SEO foundations with direct answers, visible expertise, clear canonical URLs, structured data, internal links, and citation-ready passages. ALPHAXXXX aligns SEO foundations with GEO structure.",
    audience: [
      "SEO teams adapting content for AI-generated summaries.",
      "Businesses that want Google visibility beyond blue links.",
      "Brands that need clearer answer blocks and source signals.",
    ],
    outcomes: [
      "Stronger pages for Google search and AI-generated summaries.",
      "More explicit answer sections for informational and commercial queries.",
      "Better alignment between visible content, metadata, schema, and internal links.",
    ],
    deliverables: [
      "AI Overviews content structure review.",
      "Canonical, sitemap, and robots validation.",
      "Answer block and FAQ recommendations.",
      "Schema alignment for visible page content.",
    ],
    sections: [
      {
        heading: "AI Overviews still depend on accessible, useful pages",
        body: "Google AI Overviews do not remove the need for crawlable pages, useful content, internal links, and canonical consistency. GEO adds more explicit answer structure and entity clarity to those SEO foundations.",
      },
      {
        heading: "Passages should answer the query without guesswork",
        body: "Short definitions, steps, comparisons, checklists, and FAQs make it easier for AI systems to understand what a page contributes. ALPHAXXXX structures pages so important answers are visible in the HTML source.",
      },
      {
        heading: "Schema should describe what users can see",
        body: "Structured data works best when it reinforces visible content. ALPHAXXXX keeps Article, Service, FAQPage, Organization, and BreadcrumbList schema aligned with the page users and crawlers can read.",
      },
    ],
    faqs: [
      {
        question: "Can schema guarantee a Google AI Overview citation?",
        answer:
          "No. Schema does not guarantee a citation, but accurate structured data can help clarify page type, brand entity, questions, and relationships.",
      },
      {
        question: "Should AI Overviews pages be different from SEO pages?",
        answer:
          "They should keep SEO fundamentals but add clearer answer blocks, definitions, FAQs, evidence, and entity consistency for AI summarization.",
      },
      {
        question: "Does ALPHAXXXX optimize for both SEO and GEO?",
        answer:
          "ALPHAXXXX focuses on GEO and AI search visibility while preserving crawl, canonical, metadata, and content quality foundations that also matter for SEO.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Google AI Overviews visibility", href: "/google-ai-overviews-visibility" },
      { label: "GEO vs SEO", href: "/guides/geo-vs-seo" },
    ],
  },
  {
    slug: "ai-visibility-tracking-for-brands",
    path: "/ai-visibility-tracking-for-brands",
    title: "AI Visibility Tracking for Brands | ALPHAXXXX",
    description:
      "Track whether AI search engines mention, cite, and recommend a brand across high-intent prompts and platforms.",
    family: "audit",
    schemaType: "Service",
    h1: "How should brands track AI search visibility?",
    shortAnswer:
      "Brands should track AI search visibility by measuring Brand Mention Rate, Citation Share, platform coverage, query-stage coverage, and competitor appearances across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Copilot. ALPHAXXXX turns these signals into a GEO measurement baseline.",
    audience: [
      "Brands that need visibility reporting beyond SEO rank tracking.",
      "Marketing teams comparing AI visibility against competitors.",
      "Leadership teams that need measurable GEO progress.",
    ],
    outcomes: [
      "A repeatable baseline for AI-generated brand mentions.",
      "Competitor context through Citation Share auditing.",
      "Clearer prioritization for content and schema improvements.",
    ],
    deliverables: [
      "Brand Mention Rate query set.",
      "Citation Share competitor audit.",
      "Platform and journey-stage reporting model.",
      "Recommendations tied to measurable visibility gaps.",
    ],
    sections: [
      {
        heading: "AI visibility needs its own metrics",
        body: "Traditional rank tracking does not show whether a brand appears inside AI-generated answers. Brand Mention Rate measures how often the brand is named, while Citation Share compares that visibility against competitors.",
      },
      {
        heading: "Query stages reveal where the brand disappears",
        body: "A useful tracking model separates problem-aware, solution-aware, vendor discovery, trust validation, and objection-handling prompts. This shows which pages or proof points are missing from the evidence set.",
      },
      {
        heading: "Tracking should guide content decisions",
        body: "ALPHAXXXX uses measurement to decide which pages to add, which sections to restructure, and where entity or citation signals need reinforcement.",
      },
    ],
    faqs: [
      {
        question: "What is Brand Mention Rate?",
        answer:
          "Brand Mention Rate is the proportion of relevant AI-generated answers that mention a brand by name across a defined query set.",
      },
      {
        question: "What is Citation Share?",
        answer:
          "Citation Share compares how often a brand is cited or referenced against competitors in the same AI answer space.",
      },
      {
        question: "How often should AI visibility be tracked?",
        answer:
          "AI visibility should be tracked regularly because platforms, indexes, competitors, and page content change over time.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "AI search visibility audit", href: "/ai-search-visibility-audit" },
      { label: "AI search visibility checklist", href: "/ai-search-visibility-checklist" },
    ],
  },
  {
    slug: "ai-search-visibility-checklist",
    path: "/ai-search-visibility-checklist",
    title: "AI Search Visibility Checklist | ALPHAXXXX",
    description:
      "A practical checklist for improving AI crawler readability, retrieval readiness, citation readiness, and brand mention probability.",
    family: "audit",
    schemaType: "Article",
    h1: "What should an AI search visibility checklist include?",
    shortAnswer:
      "An AI search visibility checklist should include crawler access, sitemap coverage, canonical accuracy, server-rendered core text, entity consistency, direct answer sections, FAQ schema, internal links, pricing or service scope, proof points, and measurement through Brand Mention Rate and Citation Share.",
    audience: [
      "Teams auditing a website for GEO readiness.",
      "SEO teams expanding into AI search visibility.",
      "Business owners who need a practical improvement list.",
    ],
    outcomes: [
      "A clearer view of what blocks AI retrieval and citation.",
      "A prioritized list of technical, content, and entity fixes.",
      "Better alignment between visible content and structured data.",
    ],
    deliverables: [
      "Technical crawler readiness checklist.",
      "Page-level answer structure checklist.",
      "Entity and schema consistency checklist.",
      "Measurement checklist for BMR and Citation Share.",
    ],
    sections: [
      {
        heading: "Start with access and indexability",
        body: "Important pages should be in the sitemap, allowed by robots.txt, served over HTTPS, canonicalized correctly, and readable in the initial HTML. AI systems cannot use content they cannot reliably fetch.",
      },
      {
        heading: "Then make the content extractable",
        body: "Each page should have one clear H1, logical H2 sections, a short answer, FAQs, lists, and specific deliverables. These patterns make the page easier to chunk, retrieve, and cite.",
      },
      {
        heading: "Finish with measurement",
        body: "A checklist is incomplete unless it measures results. ALPHAXXXX connects checklist improvements to Brand Mention Rate, Citation Share, and query-stage visibility.",
      },
    ],
    faqs: [
      {
        question: "Is an AI search visibility checklist different from an SEO checklist?",
        answer:
          "Yes. It includes SEO foundations but adds entity clarity, retrieval-ready answers, citation readiness, AI crawler readability, and AI answer measurement.",
      },
      {
        question: "What is the most common checklist failure?",
        answer:
          "The most common failure is having too few high-intent pages, which leaves AI retrieval systems with too little evidence to select.",
      },
      {
        question: "Can ALPHAXXXX run this checklist as an audit?",
        answer:
          "Yes. ALPHAXXXX can use the checklist to audit access, structure, schema, entity consistency, content gaps, and measurement readiness.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Get found in AI search engines", href: "/get-found-in-ai-search-engines" },
      { label: "AI visibility tracking for brands", href: "/ai-visibility-tracking-for-brands" },
    ],
  },
  {
    slug: "geo-vs-aeo-vs-ai-seo",
    path: "/geo-vs-aeo-vs-ai-seo",
    title: "GEO vs AEO vs AI SEO | ALPHAXXXX",
    description:
      "Compare Generative Engine Optimization, Answer Engine Optimization, and AI SEO for teams planning AI search visibility.",
    family: "objection",
    schemaType: "Article",
    h1: "What is the difference between GEO, AEO, and AI SEO?",
    shortAnswer:
      "GEO focuses on making a brand retrievable, citable, and mentionable inside generative AI answers. AEO focuses on answer-ready content for answer engines. AI SEO is a broader term for adapting SEO to AI-assisted search. ALPHAXXXX uses GEO as the primary discipline because it centers retrieval, entity clarity, citation readiness, and Brand Mention Rate.",
    audience: [
      "Teams confused by GEO, AEO, AI SEO, and answer engine terminology.",
      "SEO agencies packaging AI search visibility services.",
      "Businesses choosing the right optimization framework.",
    ],
    outcomes: [
      "Clearer terminology for AI search planning.",
      "Better separation between ranking, answering, retrieval, and citation goals.",
      "A practical framework for choosing content and measurement priorities.",
    ],
    deliverables: [
      "Terminology comparison for GEO, AEO, and AI SEO.",
      "Measurement recommendations for each discipline.",
      "Content structure recommendations for AI answer systems.",
      "Internal education material for teams and clients.",
    ],
    sections: [
      {
        heading: "GEO is centered on generative retrieval and citation",
        body: "Generative Engine Optimization asks whether AI systems can retrieve a brand, understand the entity, and cite or mention it in generated answers. The success metric is visibility inside the answer, not only traffic from a ranked result.",
      },
      {
        heading: "AEO emphasizes answer-ready content",
        body: "Answer Engine Optimization is useful language for direct answers, FAQs, snippets, and structured explanations. It overlaps with GEO, but GEO adds a stronger focus on LLM visibility, RAG systems, and citation measurement.",
      },
      {
        heading: "AI SEO is a broad transition term",
        body: "AI SEO often means adapting SEO workflows to AI search features. ALPHAXXXX treats it as adjacent language while keeping the operating model focused on GEO measurement and retrievability.",
      },
    ],
    faqs: [
      {
        question: "Is GEO the same as AEO?",
        answer:
          "No. They overlap, but GEO focuses more on generative AI retrieval, entity clarity, citation readiness, and brand mention measurement.",
      },
      {
        question: "Is AI SEO a useful term?",
        answer:
          "AI SEO is useful as a broad market term, but teams still need precise GEO metrics such as Brand Mention Rate and Citation Share.",
      },
      {
        question: "Which framework does ALPHAXXXX use?",
        answer:
          "ALPHAXXXX uses GEO as the main framework and includes answer-ready content, SEO foundations, structured data, and AI visibility measurement inside that approach.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO vs SEO", href: "/guides/geo-vs-seo" },
      { label: "GEO for SEO agencies", href: "/geo-for-seo-agencies" },
    ],
  },
  {
    slug: "how-much-does-geo-cost-in-australia",
    path: "/how-much-does-geo-cost-in-australia",
    title: "How Much Does GEO Cost in Australia? | ALPHAXXXX",
    description:
      "Understand the factors that affect GEO pricing in Australia, including audits, content volume, schema work, and measurement.",
    family: "pricing",
    schemaType: "Article",
    h1: "How much does GEO cost in Australia?",
    shortAnswer:
      "GEO cost in Australia depends on the current site size, content gaps, target platforms, competitor pressure, schema needs, implementation scope, and measurement requirements. ALPHAXXXX recommends starting with an AI search visibility audit before pricing a full corpus expansion or measurement program.",
    audience: [
      "Australian businesses budgeting for GEO.",
      "Founders comparing GEO agencies and AI visibility tools.",
      "Marketing leaders deciding whether to start with audit or implementation.",
    ],
    outcomes: [
      "Clearer understanding of what drives GEO cost.",
      "Better separation between audit, implementation, and measurement work.",
      "Reduced risk of paying for vague AI visibility advice.",
    ],
    deliverables: [
      "Australia-focused GEO audit scope.",
      "Content corpus estimate.",
      "Schema and metadata implementation scope.",
      "BMR and Citation Share measurement model.",
    ],
    sections: [
      {
        heading: "The biggest cost driver is often content volume",
        body: "If a site has only a small number of indexable pages, the first investment is usually a high-intent content corpus. More pages create more opportunities for AI systems to retrieve relevant evidence.",
      },
      {
        heading: "Implementation costs differ from strategy costs",
        body: "A strategy-only engagement identifies gaps, while implementation creates or restructures pages, metadata, schema, internal links, and measurement. Buyers should ask exactly which deliverables are included.",
      },
      {
        heading: "Measurement should be included in serious GEO work",
        body: "Without Brand Mention Rate or Citation Share tracking, a business cannot tell whether GEO changes are improving AI answer visibility over time.",
      },
    ],
    faqs: [
      {
        question: "Should Australian businesses start with a GEO audit?",
        answer:
          "Yes. An audit establishes the current visibility baseline, content gaps, and technical blockers before a larger implementation is priced.",
      },
      {
        question: "Is GEO cheaper than SEO?",
        answer:
          "Not necessarily. GEO can be narrower than SEO in some cases, but it often requires new content, schema, and measurement that traditional SEO retainers do not include.",
      },
      {
        question: "What should GEO pricing include?",
        answer:
          "GEO pricing should specify audit scope, content pages, schema work, internal linking, platform coverage, reporting, and implementation responsibilities.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO pricing", href: "/geo-pricing" },
      { label: "GEO agency Australia", href: "/geo-agency-australia" },
    ],
  },
  {
    slug: "is-geo-worth-it-for-small-businesses",
    path: "/is-geo-worth-it-for-small-businesses",
    title: "Is GEO Worth It for Small Businesses? | ALPHAXXXX",
    description:
      "Evaluate when Generative Engine Optimization is worth it for small businesses and when to wait.",
    family: "objection",
    schemaType: "Article",
    h1: "Is GEO worth it for small businesses?",
    shortAnswer:
      "GEO can be worth it for small businesses when customers use AI assistants to research providers, compare services, ask local recommendation questions, or validate trust before buying. ALPHAXXXX helps small businesses decide whether the first move should be an audit, a small content corpus, or a broader AI visibility program.",
    audience: [
      "Small businesses evaluating AI search visibility for the first time.",
      "Local service providers competing for recommendation queries.",
      "Founders deciding whether GEO should come before a larger SEO program.",
    ],
    outcomes: [
      "Clearer decision criteria for small-business GEO investment.",
      "A lower-risk starting path through audit and priority pages.",
      "Better understanding of when GEO is not the next best investment.",
    ],
    deliverables: [
      "Small-business GEO readiness review.",
      "Priority page list for local or service-intent queries.",
      "Basic schema and FAQ recommendations.",
      "Simple BMR tracking set for core buying prompts.",
    ],
    sections: [
      {
        heading: "GEO is most useful when buyers ask AI for recommendations",
        body: "If customers ask AI systems which provider to hire, which agency to compare, or whether a service is worth it, small businesses need pages that can be retrieved and summarized for those questions.",
      },
      {
        heading: "Small businesses should avoid overbuilding first",
        body: "The first step does not need to be a large program. ALPHAXXXX usually recommends starting with an audit, core service pages, FAQ content, pricing guidance, and proof points.",
      },
      {
        heading: "GEO may wait if the basics are missing",
        body: "If a small business has no clear service pages, weak local signals, or poor technical access, those fundamentals should be fixed before expecting AI answer visibility.",
      },
    ],
    faqs: [
      {
        question: "What small businesses benefit most from GEO?",
        answer:
          "Small businesses that depend on recommendations, local discovery, professional trust, or high-value service decisions benefit most from GEO.",
      },
      {
        question: "Can a small business compete with larger brands in AI answers?",
        answer:
          "It can compete in narrower local, service, and niche queries if the site provides clearer and more useful evidence than larger generic competitors.",
      },
      {
        question: "What is the first GEO step for a small business?",
        answer:
          "The first step is usually an AI search visibility audit followed by a small set of high-intent service, location, FAQ, pricing, and proof pages.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Local service GEO", href: "/geo-for-local-service-businesses" },
      { label: "How much GEO costs in Australia", href: "/how-much-does-geo-cost-in-australia" },
    ],
  },
  {
    slug: "questions-to-ask-before-hiring-a-geo-agency",
    path: "/questions-to-ask-before-hiring-a-geo-agency",
    title: "Questions to Ask Before Hiring a GEO Agency | ALPHAXXXX",
    description:
      "Use these questions to evaluate GEO agencies, AI search visibility providers, and citation readiness consultants.",
    family: "objection",
    schemaType: "Article",
    h1: "What questions should you ask before hiring a GEO agency?",
    shortAnswer:
      "Before hiring a GEO agency, ask how it measures Brand Mention Rate, how it audits Citation Share, which AI platforms it targets, what pages it will create, how it handles schema, and how it proves that AI search visibility is improving. ALPHAXXXX uses these questions to make GEO work concrete.",
    audience: [
      "Businesses comparing GEO agencies.",
      "Marketing teams building an RFP for AI search visibility.",
      "Decision makers who need proof before buying GEO services.",
    ],
    outcomes: [
      "Better vendor evaluation criteria.",
      "Clearer expectations for deliverables and measurement.",
      "Less risk of buying generic SEO advice under a GEO label.",
    ],
    deliverables: [
      "GEO agency evaluation questions.",
      "Measurement and reporting requirements.",
      "Content and schema deliverable checklist.",
      "Platform coverage and competitor audit prompts.",
    ],
    sections: [
      {
        heading: "Ask how visibility will be measured",
        body: "A GEO agency should explain Brand Mention Rate, Citation Share, query sets, platform coverage, and how results will be tracked. Without measurement, GEO becomes opinion rather than evidence.",
      },
      {
        heading: "Ask what content will be created or restructured",
        body: "If the website has too few high-intent pages, a GEO agency should identify the pages needed for retrieval. ALPHAXXXX prioritizes audit, pricing, platform, comparison, and objection-handling pages.",
      },
      {
        heading: "Ask how technical access is handled",
        body: "The agency should check sitemap coverage, robots rules, canonical URLs, server-rendered text, metadata, schema, and whether important pages can be crawled by search and AI systems.",
      },
    ],
    faqs: [
      {
        question: "What is a red flag when hiring a GEO agency?",
        answer:
          "A red flag is a provider that promises guaranteed AI recommendations without explaining content, schema, entity signals, platform behavior, and measurement limits.",
      },
      {
        question: "Should a GEO agency provide reporting?",
        answer:
          "Yes. Reporting should include Brand Mention Rate, Citation Share, platform coverage, content changes, and next-priority recommendations.",
      },
      {
        question: "Does ALPHAXXXX provide a GEO evaluation framework?",
        answer:
          "Yes. ALPHAXXXX frames GEO around audit, entity engineering, structural optimization, content corpus expansion, and measurable AI visibility.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO agency comparison checklist", href: "/geo-agency-comparison-checklist" },
      { label: "GEO FAQ and objections", href: "/geo-faq-objection-handling" },
    ],
  },
  {
    slug: "geo-agency-comparison-checklist",
    path: "/geo-agency-comparison-checklist",
    title: "GEO Agency Comparison Checklist | ALPHAXXXX",
    description:
      "Compare GEO agencies by measurement, content corpus strategy, platform coverage, schema quality, and citation readiness.",
    family: "objection",
    schemaType: "Article",
    h1: "How should businesses compare GEO agencies?",
    shortAnswer:
      "Businesses should compare GEO agencies by whether they measure Brand Mention Rate, audit Citation Share, build high-intent pages, improve schema and metadata, address AI crawler readability, and explain how work maps to ChatGPT, Perplexity, Google AI Overviews, and other AI search systems.",
    audience: [
      "Teams shortlisting GEO agencies or AI visibility consultants.",
      "Businesses comparing specialist GEO providers with SEO agencies.",
      "Procurement and marketing leaders building evaluation criteria.",
    ],
    outcomes: [
      "A practical checklist for comparing GEO providers.",
      "Clearer distinction between strategy, implementation, and measurement.",
      "Better protection against vague or unmeasurable AI visibility claims.",
    ],
    deliverables: [
      "Agency comparison criteria.",
      "Measurement and reporting checklist.",
      "Content corpus and schema review prompts.",
      "Platform and competitor coverage questions.",
    ],
    sections: [
      {
        heading: "Compare measurement first",
        body: "A strong GEO agency should be able to explain how it measures brand visibility in AI answers. Brand Mention Rate and Citation Share are more relevant than traditional ranking reports alone.",
      },
      {
        heading: "Compare the content corpus strategy",
        body: "If a site has too few pages, the agency should recommend high-intent content expansion. ALPHAXXXX treats content volume and retrieval fit as a core part of AI visibility.",
      },
      {
        heading: "Compare implementation depth",
        body: "A credible provider should address visible content, metadata, schema, sitemap, robots, internal links, and page-level answer structure rather than only delivering a slide deck.",
      },
    ],
    faqs: [
      {
        question: "Should a GEO agency be different from an SEO agency?",
        answer:
          "A GEO agency can overlap with SEO, but it should have specific methods for AI retrieval, citation readiness, entity consistency, and Brand Mention Rate measurement.",
      },
      {
        question: "What is the most important comparison criterion?",
        answer:
          "The most important criterion is whether the agency can connect deliverables to measurable AI search visibility rather than only general content quality.",
      },
      {
        question: "Can ALPHAXXXX be compared against GEO tools?",
        answer:
          "Yes. Tools can help monitor visibility, while ALPHAXXXX focuses on audit, content structure, schema, entity signals, and implementation strategy.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "Questions before hiring a GEO agency", href: "/questions-to-ask-before-hiring-a-geo-agency" },
      { label: "GEO pricing", href: "/geo-pricing" },
    ],
  },
  {
    slug: "ai-search-visibility-for-b2b-companies",
    path: "/ai-search-visibility-for-b2b-companies",
    title: "AI Search Visibility for B2B Companies | ALPHAXXXX",
    description:
      "AI search visibility strategy for B2B companies that need to appear in vendor discovery, comparison, and trust validation answers.",
    family: "industry",
    schemaType: "Service",
    h1: "How can B2B companies improve AI search visibility?",
    shortAnswer:
      "B2B companies can improve AI search visibility by publishing structured pages for category education, use cases, comparisons, pricing context, buyer objections, integrations, and proof. ALPHAXXXX helps B2B brands become easier for AI systems to retrieve, cite, and recommend during vendor research.",
    audience: [
      "B2B companies competing in complex buying journeys.",
      "Marketing teams that need vendor discovery visibility in AI answers.",
      "Founders and revenue leaders building category authority.",
    ],
    outcomes: [
      "More pages mapped to B2B journey stages.",
      "Clearer entity signals for category, use case, market, and proof.",
      "Better AI answer coverage for vendor discovery and trust validation.",
    ],
    deliverables: [
      "B2B AI visibility audit.",
      "Journey-stage content map.",
      "Comparison, pricing, and objection page recommendations.",
      "Brand Mention Rate tracking for B2B buying prompts.",
    ],
    sections: [
      {
        heading: "B2B buyers use AI to narrow vendor options",
        body: "B2B buyers ask AI systems which vendors to compare, what solutions exist, and what questions to ask before buying. Brands need content that can answer those prompts directly.",
      },
      {
        heading: "Journey-stage pages improve retrieval coverage",
        body: "Problem-aware, solution-aware, vendor discovery, trust validation, and objection-handling pages give AI systems more chances to retrieve the brand at each buying stage.",
      },
      {
        heading: "ALPHAXXXX connects B2B content to measurement",
        body: "ALPHAXXXX tracks whether B2B content improves Brand Mention Rate and Citation Share across the query set that matters to the buying committee.",
      },
    ],
    faqs: [
      {
        question: "Which B2B pages matter most for GEO?",
        answer:
          "Category pages, use-case pages, comparison pages, pricing pages, integration pages, objection pages, and case studies usually matter most.",
      },
      {
        question: "Can GEO support B2B demand generation?",
        answer:
          "Yes. GEO can support demand generation by increasing the chance that AI systems mention the brand during research and vendor shortlisting.",
      },
      {
        question: "How does ALPHAXXXX measure B2B AI visibility?",
        answer:
          "ALPHAXXXX measures Brand Mention Rate, Citation Share, query-stage coverage, and competitor visibility across relevant B2B prompts.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "GEO for SaaS companies", href: "/geo-for-saas-companies" },
      { label: "AI visibility tracking for brands", href: "/ai-visibility-tracking-for-brands" },
    ],
  },
  {
    slug: "ai-search-visibility-for-professional-services",
    path: "/ai-search-visibility-for-professional-services",
    title: "AI Search Visibility for Professional Services | ALPHAXXXX",
    description:
      "GEO strategy for professional services firms that want to be mentioned in AI-generated provider recommendations.",
    family: "industry",
    schemaType: "Service",
    h1: "How can professional services firms improve AI search visibility?",
    shortAnswer:
      "Professional services firms can improve AI search visibility by publishing clear service pages, industry pages, location pages, pricing guidance, proof points, FAQs, and comparison content that help AI systems understand expertise and customer fit. ALPHAXXXX structures these signals for citation readiness.",
    audience: [
      "Consultancies, agencies, advisors, and specialist service firms.",
      "Professional services teams that depend on trust and expertise signals.",
      "Firms in Australia that want better AI recommendation visibility.",
    ],
    outcomes: [
      "Clearer expertise, service, location, and proof signals.",
      "More retrievable pages for provider recommendation queries.",
      "Better objection-handling content for high-consideration services.",
    ],
    deliverables: [
      "Professional services AI visibility audit.",
      "Service, industry, and location page map.",
      "FAQ, proof, and comparison page recommendations.",
      "Schema and internal-link implementation plan.",
    ],
    sections: [
      {
        heading: "Professional services need trust-ready evidence",
        body: "AI systems need clear evidence before recommending a professional services firm. Pages should explain the service, the firm, the audience, the location, proof points, process, and expected outcomes.",
      },
      {
        heading: "Objection content is especially important",
        body: "Buyers often ask whether a service is worth it, what it costs, and what questions to ask before hiring. ALPHAXXXX creates answer-ready content for those trust validation and objection-handling prompts.",
      },
      {
        heading: "Local and industry signals improve fit",
        body: "Professional services firms should make location and industry relevance explicit. This helps AI systems understand when the firm is a suitable recommendation for a specific user query.",
      },
    ],
    faqs: [
      {
        question: "Which professional services firms can use GEO?",
        answer:
          "Consultancies, agencies, advisors, legal, finance, technology, marketing, and specialist service firms can use GEO when buyers research providers through AI systems.",
      },
      {
        question: "What content should professional services firms publish first?",
        answer:
          "Start with core service pages, location pages, industry pages, FAQ pages, pricing guidance, comparison content, and proof-led case studies.",
      },
      {
        question: "Can ALPHAXXXX help local professional services firms?",
        answer:
          "Yes. ALPHAXXXX can align local service content, schema, entity signals, and internal links for AI search visibility in Australia and Sydney.",
      },
    ],
    internalLinks: [
      ...coreLinks,
      { label: "AI search optimization Sydney", href: "/ai-search-optimization-sydney" },
      { label: "Local service GEO", href: "/geo-for-local-service-businesses" },
    ],
  },
];

export function getIntentPage(slug: string) {
  return intentPages.find((page) => page.slug === slug);
}
