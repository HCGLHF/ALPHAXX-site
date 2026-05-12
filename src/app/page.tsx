import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALPHAXX | Make Your Brand Visible to AI Search",
  description:
    "ALPHAXX helps brands improve AI search visibility across ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and other AI-powered search engines.",
  alternates: {
    canonical: "https://alphaxxxx.com",
  },
};

type ToneKey = "good" | "warn" | "neutral";

const TONE_PILL: Record<ToneKey, string> = {
  good: "bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20",
  warn: "bg-amber-400/10 text-amber-200 ring-1 ring-inset ring-amber-400/20",
  neutral: "bg-zinc-300/10 text-zinc-200 ring-1 ring-inset ring-zinc-300/20",
};

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Platform", href: "#platform" },
  { label: "GEO Audit", href: "/audit" },
  { label: "Guides", href: "/guides/what-is-geo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SECONDARY_METRICS: { label: string; value: string; tone: ToneKey }[] = [
  { label: "Citation Readiness", value: "High", tone: "good" },
  { label: "Entity Clarity", value: "Strong", tone: "good" },
  { label: "Retrieval Coverage", value: "72%", tone: "warn" },
  { label: "Rerank Potential", value: "Improving", tone: "neutral" },
];

const TRACKED_ENGINES: string[] = [
  "ChatGPT",
  "Perplexity",
  "Google AI Overviews",
  "Claude",
  "Gemini",
];

const PROBLEM_POINTS: { title: string; body: string }[] = [
  {
    title: "Discovery is moving from links to answers",
    body: "Users increasingly ask AI assistants direct questions instead of browsing ten blue links. Answers are synthesized from a narrow set of sources, so visibility now depends on being inside the synthesized answer itself.",
  },
  {
    title: "Customers prefer AI assistants",
    body: "ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini already summarize the web on behalf of millions of users. Most never reach a traditional search results page before deciding.",
  },
  {
    title: "Invisible to AI means invisible to demand",
    body: "If a model cannot retrieve, parse, or cite your content with confidence, your brand is effectively absent from the new discovery surface — regardless of how well you rank in classical search.",
  },
  {
    title: "Classical SEO alone is not enough",
    body: "Traditional SEO targets blue-link rankings. It does not optimize for retrieval, reranking, citation readiness, or entity clarity inside AI answer pipelines.",
  },
];

const SOLUTION_POINTS: { title: string; body: string }[] = [
  {
    title: "Retrieval readiness",
    body: "Make your content easy for AI search engines to fetch, segment into chunks, and pull into context windows on demand.",
  },
  {
    title: "Citation readiness",
    body: "Structure pages with clear claims, sources, and definitions so models can quote your brand with confidence.",
  },
  {
    title: "Entity clarity",
    body: "Disambiguate your brand, products, and topics so AI systems associate the right entity with the right query.",
  },
  {
    title: "Content structure",
    body: "Use semantic HTML, descriptive headings, FAQ patterns, and answer-first paragraphs that AI engines can summarize.",
  },
  {
    title: "Authority signals",
    body: "Reinforce expertise, author identity, publication dates, and verifiable sources that strengthen trust in your content.",
  },
  {
    title: "Metadata and schema",
    body: "Apply JSON-LD schema, structured data, and metadata aligned with how AI search engines interpret pages.",
  },
];

const FEATURES: { tag: string; title: string; body: string }[] = [
  {
    tag: "Diagnostics",
    title: "GEO Audit",
    body: "Diagnose how AI search engines currently see, retrieve, and represent every important page on your website.",
  },
  {
    tag: "Observability",
    title: "AI Search Monitoring",
    body: "Track how your brand surfaces inside ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini over time.",
  },
  {
    tag: "Content",
    title: "Content Structure Optimization",
    body: "Rebuild pages around semantic hierarchy, answer-first writing, and chunk-friendly structure for retrieval.",
  },
  {
    tag: "Authority",
    title: "Entity Authority Mapping",
    body: "Map and reinforce your brand, product, and topical entities so AI systems consistently understand who you are.",
  },
  {
    tag: "Schema",
    title: "Schema & Metadata Optimization",
    body: "Implement and refine JSON-LD schema, OpenGraph tags, and structured metadata across the site.",
  },
  {
    tag: "Answers",
    title: "FAQ / Answer Engine Optimization",
    body: "Convert core topics into AI-citable FAQ and answer blocks designed for direct extraction by generative engines.",
  },
];

const STEPS: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Audit",
    body: "Analyze how clearly AI systems can crawl, retrieve, and understand your website today, page by page and entity by entity.",
  },
  {
    num: "02",
    title: "Optimize",
    body: "Improve structure, metadata, FAQ blocks, schema, and answer-ready content so each page becomes easy to chunk, cite, and recommend.",
  },
  {
    num: "03",
    title: "Monitor",
    body: "Track AI visibility, citations, and answer representation over time across the major answer engines and assistants.",
  },
];

const GEO_CONCEPTS: { q: string; a: string }[] = [
  {
    q: "What is GEO?",
    a: "Generative Engine Optimization is the practice of making a website easier for AI search engines to understand, retrieve, cite, and recommend inside generative answers.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO targets ranking on traditional search result pages. GEO targets being selected, quoted, and recommended inside AI-generated answers from systems like ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini.",
  },
  {
    q: "Why does AI search visibility matter?",
    a: "A growing share of high-intent discovery now happens inside AI assistants. Brands that are not retrievable or citable for relevant queries lose discovery opportunities before a click ever happens.",
  },
  {
    q: "What makes a page AI-citable?",
    a: "Clear direct answers, semantic structure, well-defined entities, supporting evidence, accurate metadata, and schema markup that align with the topic and intent of the page.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Generative Engine Optimization?",
    a: "Generative Engine Optimization (GEO) is the discipline of optimizing websites so that AI search engines can retrieve them, understand them, cite them, and recommend them inside generative answers.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO optimizes for ranking blue links in classical search. GEO optimizes for retrieval, reranking, citation, and recommendation inside AI-generated answers from systems like ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini.",
  },
  {
    q: "Can ALPHAXX guarantee that ChatGPT will recommend my brand?",
    a: "No serious provider can guarantee a specific model output. ALPHAXX improves the underlying signals — retrieval readiness, citation readiness, entity clarity, content structure, schema, and authority — that materially increase the probability of being represented in AI answers.",
  },
  {
    q: "What kind of websites benefit most from GEO?",
    a: "Brands competing on expertise, services, products, definitions, comparisons, pricing, or domain knowledge — especially in B2B, SaaS, finance, legal, healthcare, education, and developer tools — benefit the most from GEO.",
  },
  {
    q: "Why are FAQ pages important for AI search?",
    a: "Well-structured FAQ content matches how users phrase questions to AI assistants and provides direct, chunkable answers that models can easily retrieve and quote inside generated responses.",
  },
  {
    q: "Does GEO require structured data and schema markup?",
    a: "Schema is not strictly required, but structured data and clean metadata significantly improve how AI systems interpret entities, intent, and authority. ALPHAXX treats schema as a core GEO signal.",
  },
];

const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Platform", href: "#platform" },
  { label: "GEO Audit", href: "/audit" },
  { label: "What is GEO?", href: "/guides/what-is-geo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const score = 87;
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-zinc-100 antialiased selection:bg-blue-500/30 selection:text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.22) 0%, rgba(139,92,246,0.12) 35%, rgba(0,0,0,0) 75%)",
        }}
      />

      <header className="relative z-10 border-b border-white/[0.06] backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        >
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-blue-400 to-violet-500 text-[11px] font-bold text-black shadow-[0_0_24px_-6px_rgba(96,165,250,0.7)]">
              AX
            </span>
            <span className="text-base">ALPHAXX</span>
          </a>

          <ul className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/audit"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(96,165,250,0.7)] transition-transform hover:-translate-y-px"
          >
            Get GEO Audit
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          id="platform"
          aria-labelledby="hero-heading"
          className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]" />
                AI Search Visibility Infrastructure
              </p>

              <h1
                id="hero-heading"
                className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
              >
                Make Your Brand
                <br />
                <span className="bg-gradient-to-r from-blue-200 via-violet-200 to-zinc-100 bg-clip-text text-transparent">
                  Visible to AI Search
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-zinc-400">
                ALPHAXX is the AI search visibility platform that helps brands become
                discoverable, retrievable, citable, and recommended inside AI-generated
                answers across ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/audit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(96,165,250,0.8)] transition-transform hover:-translate-y-px"
                >
                  Start GEO Audit
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/guides/what-is-geo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition-colors hover:bg-white/[0.06]"
                >
                  Read the GEO Guide
                </a>
              </div>

              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.06] pt-6 text-sm">
                <div>
                  <dt className="text-zinc-500">Tracked engines</dt>
                  <dd className="mt-1 font-medium text-zinc-100">5</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Signals analyzed</dt>
                  <dd className="mt-1 font-medium text-zinc-100">40+</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Optimization domains</dt>
                  <dd className="mt-1 font-medium text-zinc-100">6</dd>
                </div>
              </dl>
            </div>

            <aside aria-label="AI Visibility Console preview" className="relative">
              <div
                aria-hidden
                className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-[2px]"
              />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_60px_-20px_rgba(96,165,250,0.5)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live signal
                  </div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">
                    AI Visibility Console
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/30 p-5">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>AI Visibility Score</span>
                    <span className="rounded-full bg-blue-400/10 px-2 py-0.5 text-blue-300 ring-1 ring-inset ring-blue-400/20">
                      +6 this week
                    </span>
                  </div>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="bg-gradient-to-r from-blue-200 to-violet-200 bg-clip-text text-5xl font-semibold text-transparent">
                      {score}
                    </span>
                    <span className="pb-1 text-sm text-zinc-500">/ 100</span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400 shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>

                <ul className="mt-5 divide-y divide-white/[0.05] rounded-2xl border border-white/[0.06] bg-black/20">
                  {SECONDARY_METRICS.map((m) => (
                    <li
                      key={m.label}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <span className="text-sm text-zinc-400">{m.label}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TONE_PILL[m.tone]}`}
                      >
                        {m.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Tracked engines
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TRACKED_ENGINES.map((e) => (
                      <span
                        key={e}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-200"
                      >
                        <span aria-hidden className="h-1 w-1 rounded-full bg-blue-300/80" />
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          aria-labelledby="problem-heading"
          className="border-t border-white/[0.06] py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="The shift"
              id="problem-heading"
              title="AI search is replacing the link economy"
              subtitle="Generative engines decide which brands are mentioned, quoted, and recommended. The old playbook of ranking ten blue links is no longer enough."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {PROBLEM_POINTS.map((p) => (
                <article
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="solution-heading" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="The platform"
              id="solution-heading"
              title="A new optimization layer for AI search"
              subtitle="ALPHAXX strengthens the signals that AI search engines depend on when deciding what to retrieve, quote, and recommend."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SOLUTION_POINTS.map((s, i) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-black/40 font-mono text-xs text-blue-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="features-heading"
          className="border-t border-white/[0.06] py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Capabilities"
              id="features-heading"
              title="Built for the answer engine era"
              subtitle="Six core capabilities that turn an ordinary website into AI-citable infrastructure."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <article key={f.title} className="relative bg-[#06070b] p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300/80">
                    {f.tag}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-zinc-100">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="how-heading" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Workflow"
              id="how-heading"
              title="How ALPHAXX works"
              subtitle="A repeatable loop that moves your brand from invisible to consistently cited inside AI answers."
            />
            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {STEPS.map((s) => (
                <li
                  key={s.num}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6"
                >
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 bg-gradient-to-br from-blue-300/80 to-violet-300/40 bg-clip-text font-mono text-3xl font-bold text-transparent"
                  >
                    {s.num}
                  </span>
                  <h3 className="text-xl font-semibold text-zinc-100">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="geo-heading"
          className="border-t border-white/[0.06] py-20"
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Definitions"
              id="geo-heading"
              title="Understanding Generative Engine Optimization"
              subtitle="Direct, AI-citable definitions for the core concepts behind ALPHAXX."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {GEO_CONCEPTS.map((c) => (
                <article
                  key={c.q}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">{c.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{c.a}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-zinc-400">
              Want the long-form version?{" "}
              <a
                className="text-blue-300 underline-offset-4 hover:underline"
                href="/guides/what-is-geo"
              >
                Read the full GEO guide →
              </a>
            </p>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <SectionHeading
              eyebrow="FAQ"
              id="faq-heading"
              title="Answers to common questions"
              subtitle="Detailed, crawlable answers — written to be easy for both customers and AI engines to read."
              center
            />
            <div className="mt-12 space-y-4">
              {FAQS.map((f, i) => (
                <article
                  key={f.q}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <h3 className="flex items-baseline gap-3 text-base font-semibold text-zinc-100">
                    <span className="font-mono text-xs text-blue-300">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="cta-heading" className="px-6 py-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-10 text-center md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, rgba(96,165,250,0.22) 0%, rgba(139,92,246,0.12) 40%, rgba(0,0,0,0) 75%)",
              }}
            />
            <p className="relative inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
              The Answer Engine Era
            </p>
            <h2
              id="cta-heading"
              className="relative mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl"
            >
              Prepare your brand for the answer engine era.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-zinc-400">
              Start with a GEO audit and see how AI search engines understand, retrieve,
              and represent your brand today.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(96,165,250,0.8)] transition-transform hover:-translate-y-px"
              >
                Start GEO Audit
                <span aria-hidden>→</span>
              </a>
              <a
                href="/guides/what-is-geo"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition-colors hover:bg-white/[0.06]"
              >
                Learn What GEO Is
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-blue-400 to-violet-500 text-[11px] font-bold text-black">
                AX
              </span>
              ALPHAXX
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              AI search visibility and Generative Engine Optimization infrastructure for
              brands entering the answer engine era.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a className="transition-colors hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-white/[0.04]">
          <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500">
            © {year} ALPHAXX. Built for the answer engine era.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300`}
      >
        <span aria-hidden className="h-1 w-1 rounded-full bg-blue-400" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
