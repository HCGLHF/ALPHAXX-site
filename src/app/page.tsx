import { StructuredData } from "@/components/StructuredData";
import { PageShell, SectionHeading, StatGrid } from "@/components/PageChrome";
import { faqs } from "@/lib/content";
import {
  aiEngines,
  aiSearchServiceSchema,
  breadcrumbSchema,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("");

export const metadata = pageMetadata(route);

const answerBlocks = [
  {
    title: "What ALPHAXXXX is",
    body: "ALPHAXXXX is a Generative Engine Optimization infrastructure brand for AI search visibility, Brand Mention Rate measurement, LLM visibility, and citation readiness.",
  },
  {
    title: "What ALPHAXXXX does",
    body: "ALPHAXXXX helps businesses structure, format, and position content so AI search platforms can retrieve, cite, quote, and recommend the brand inside generated answers.",
  },
  {
    title: "How ALPHAXXXX measures visibility",
    body: "ALPHAXXXX tracks Brand Mention Rate, Citation Share, retrieval readiness, entity stability, and structural retrievability across ChatGPT, Perplexity, and other AI answer systems.",
  },
];

const capabilities = [
  "Semantic Entity Engineering",
  "Brand Mention Rate tracking",
  "Citation Share auditing",
  "Structural Optimization",
  "RAG pipeline readiness",
  "AI citation readiness",
  "Schema and metadata implementation",
  "Entity-level authority mapping",
];

const stats = [
  {
    label: "Tracked systems",
    value: "6",
    detail: "ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Copilot.",
  },
  {
    label: "Core signals",
    value: "40+",
    detail: "Crawler readability, entity stability, retrieval, schema, evidence, and citation signals.",
  },
  {
    label: "Main outcome",
    value: "Mentioned",
    detail: "Pages and entities structured to improve citation and brand mention probability.",
  },
] as const;

export default function Home() {
  return (
    <PageShell>
      <StructuredData
        data={[
          aiSearchServiceSchema,
          breadcrumbSchema([{ name: "Home", path: "" }]),
        ]}
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Generative Engine Optimization infrastructure
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">
              ALPHAXXXX makes websites readable, retrievable, and citable by AI search.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              ALPHAXXXX helps businesses move beyond the blue-link era by
              improving semantic entity stability, structural retrievability,
              Brand Mention Rate, and citation readiness for LLM and RAG-based
              answer systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/audit"
                className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Start a GEO Audit
              </a>
              <a
                href="/guides/what-is-geo"
                className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:border-teal-700 hover:text-teal-800"
              >
                Read the GEO Guide
              </a>
            </div>
          </div>

          <aside
            aria-label="AI visibility scorecard"
            className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Visibility scorecard
            </p>
            <div className="mt-6 grid gap-4">
              {[
                ["AI crawler readability", "Auditable"],
                ["Retrieval readiness", "Measurable"],
                ["Citation readiness", "Evidence-led"],
                ["Entity clarity", "Structured"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-zinc-200 pb-4"
                >
                  <span className="text-sm text-zinc-600">{label}</span>
                  <span className="rounded-md bg-white px-3 py-1 text-sm font-medium text-zinc-950 ring-1 ring-zinc-200">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-zinc-600">
              The audit checks whether AI systems can fetch a page, identify
              the source entity, retrieve the right passage, and cite the brand
              in response to relevant user queries.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <StatGrid items={stats} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Answer blocks"
            title="Direct statements that AI answer engines can extract"
            description="AI search systems work best with pages that make claims explicit. ALPHAXXXX turns vague marketing content into structured, answerable, measurable information sources."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {answerBlocks.map((block) => (
              <article key={block.title} className="rounded-lg border border-zinc-200 p-6">
                <h2 className="text-xl font-semibold text-zinc-950">{block.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1fr]">
        <SectionHeading
          eyebrow="Coverage"
          title="Built for AI search, LLM answers, and retrieval-based systems"
          description="ALPHAXXXX treats AI search as a distribution layer. Each target system still needs crawlable pages, stable entities, durable facts, structured metadata, and visible evidence."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {aiEngines.map((engine) => (
            <div key={engine} className="rounded-lg border border-zinc-200 bg-white p-5">
              <h2 className="text-base font-semibold text-zinc-950">{engine}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Pages should expose direct answers, visible evidence, and
                consistent brand facts for {engine} to evaluate.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            eyebrow="GEO capabilities"
            title="The optimization layer between SEO, RAG, and AI answers"
            description="The work combines Semantic Entity Engineering, Visibility Analytics, Structural Optimization, crawl access, schema, evidence design, and RAG pipeline readiness."
            invert
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Direct answers AI systems can quote"
          description="These answers are visible on the page and mirrored in FAQPage structured data on the FAQ page."
          center
        />
        <div className="mt-10 grid gap-4">
          {faqs.slice(0, 5).map((faq) => (
            <article key={faq.question} className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-zinc-950">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a className="font-medium text-teal-800 underline-offset-4 hover:underline" href="/faq">
            Read all frequently asked questions
          </a>
        </div>
      </section>
    </PageShell>
  );
}
