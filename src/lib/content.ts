export const faqs = [
  {
    question: "What is ALPHAXX?",
    answer:
      "ALPHAXX is an AI search visibility platform for Australian brands. It helps websites become easier for AI search systems to crawl, retrieve, understand, cite, and recommend inside generated answers.",
  },
  {
    question: "What is Generative Engine Optimization?",
    answer:
      "Generative Engine Optimization, or GEO, is the practice of structuring a website so AI search systems can understand the entity behind the page, retrieve relevant passages, and cite those passages accurately in generated answers.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO focuses on ranking pages in traditional search results. GEO focuses on being selected, summarized, cited, and recommended inside AI-generated answers from systems such as ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Copilot.",
  },
  {
    question: "Which AI platforms does ALPHAXX optimize for?",
    answer:
      "ALPHAXX focuses on visibility signals used by ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Microsoft Copilot, Bing, and other answer engines that rely on crawlable, structured, trustworthy web content.",
  },
  {
    question: "What makes a page AI-citable?",
    answer:
      "An AI-citable page gives direct answers, identifies entities clearly, supports claims with visible evidence, uses descriptive headings, includes current metadata, and publishes structured data that matches the visible page content.",
  },
  {
    question: "Can ALPHAXX guarantee that an AI model will recommend a brand?",
    answer:
      "No provider can guarantee a specific AI-generated answer. ALPHAXX improves the underlying signals that increase the probability of being retrieved, represented, cited, and recommended by AI search systems.",
  },
  {
    question: "Does AI search visibility require structured data?",
    answer:
      "Structured data is not the only requirement, but it gives search engines and AI systems explicit clues about the page, brand, service, article, FAQ, and breadcrumb relationships. It should reinforce visible content, not replace it.",
  },
  {
    question: "Why does crawl access matter for AI search?",
    answer:
      "AI search systems cannot reliably cite pages they cannot access. Robots.txt, CDN rules, firewall policies, sitemap coverage, and server-rendered HTML all affect whether crawlers can discover and use a page.",
  },
] as const;

export const externalSources = [
  {
    label: "OpenAI crawler documentation",
    href: "https://platform.openai.com/docs/bots/overview-of-openai-crawlers",
  },
  {
    label: "Google structured data documentation",
    href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
  },
  {
    label: "Google robots meta documentation",
    href: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag",
  },
  {
    label: "Perplexity crawler documentation",
    href: "https://docs.perplexity.ai/guides/bots",
  },
  {
    label: "Anthropic crawler documentation",
    href: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
  },
] as const;
