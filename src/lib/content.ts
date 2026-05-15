export const faqs = [
  {
    question: "What is ALPHAXXXX?",
    answer:
      "ALPHAXXXX is a Generative Engine Optimization and AI search visibility infrastructure brand. It helps businesses evaluate and improve how AI search engines, LLMs, RAG systems, and retrieval-based search systems understand, retrieve, cite, and recommend their web content.",
  },
  {
    question: "What is Generative Engine Optimization?",
    answer:
      "Generative Engine Optimization, or GEO, is the practice of making web content easier for AI search engines and LLM-powered answer engines to understand, retrieve, cite, and recommend. GEO focuses on AI readability, retrieval readiness, entity clarity, and citation readiness.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO focuses on ranking pages in traditional search results. GEO focuses on being selected, summarized, cited, and recommended inside AI-generated answers from systems such as ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Copilot.",
  },
  {
    question: "Which AI platforms does ALPHAXXXX optimize for?",
    answer:
      "ALPHAXXXX focuses on visibility signals used by ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, Microsoft Copilot, Bing, and retrieval-based search systems that rely on crawlable, structured, trustworthy web content.",
  },
  {
    question: "Why does AI search visibility matter?",
    answer:
      "AI search visibility matters because users increasingly receive answers from AI assistants before they visit a traditional search results page. If a website is not retrievable, understandable, or citable, it may be absent from AI-generated answers even when it has useful information.",
  },
  {
    question: "How can a website become more AI-readable?",
    answer:
      "A website becomes more AI-readable by using server-rendered text, clear headings, direct answer paragraphs, consistent entity names, accurate metadata, crawlable internal links, and structured data that matches visible page content.",
  },
  {
    question: "How does citation readiness work?",
    answer:
      "Citation readiness measures whether an AI system can quote or reference a page with confidence. A citation-ready page states claims clearly, provides supporting context, shows update signals, identifies the source entity, and avoids hiding key information behind client-only interfaces.",
  },
  {
    question: "What signals help AI systems understand a brand?",
    answer:
      "AI systems understand a brand more reliably when the same entity name, service category, location, topic coverage, schema markup, author identity, and source URLs appear consistently across visible content, metadata, JSON-LD, sitemap entries, and internal links.",
  },
  {
    question: "What makes a page AI-citable?",
    answer:
      "An AI-citable page gives direct answers, identifies entities clearly, supports claims with visible evidence, uses descriptive headings, includes current metadata, and publishes structured data that matches the visible page content.",
  },
  {
    question: "Can ALPHAXXXX guarantee that an AI model will recommend a brand?",
    answer:
      "No provider can guarantee a specific AI-generated answer. ALPHAXXXX improves the underlying signals that increase the probability of being retrieved, represented, cited, and recommended by AI search systems.",
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
