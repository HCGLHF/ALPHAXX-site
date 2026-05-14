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
    title: "What ALPHAXX does",
    body: "ALPHAXX improves the technical and editorial signals that help AI search systems retrieve, understand, cite, and recommend a brand inside generated answers.",
  },
  {
    title: "Who it is for",
    body: "The platform is built for Australian B2B, SaaS, professional services, education, finance, healthcare, legal, and technology brands competing on expertise.",
  },
  {
    title: "What changes on a website",
    body: "ALPHAXX strengthens crawl access, metadata, schema, semantic headings, answer-first content, entity clarity, evidence blocks, and internal knowledge paths.",
  },
];

const capabilities = [
  "AI crawler access review",
  "Entity and brand disambiguation",
  "Answer-first content restructuring",
  "FAQ and citation block design",
  "Schema and metadata implementation",
  "Sitemap and canonical hygiene",
  "AI search visibility monitoring",
  "Editorial evidence mapping",
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
    detail: "Crawl, retrieval, schema, content, evidence, and entity signals.",
  },
  {
    label: "Main outcome",
    value: "Citable",
    detail: "Pages structured so answer engines can cite them with confidence.",
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
              AI Search Visibility for Australia
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">
              Make your brand readable, retrievable, and citable by AI search.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              ALPHAXX helps brands prepare for answer engines by improving the
              way search crawlers, AI systems, and users understand the same
              public pages.
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
                ["Retrieval readiness", "High"],
                ["Citation readiness", "Needs evidence"],
                ["Entity clarity", "Improving"],
                ["Schema coverage", "Expandable"],
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
              The audit checks whether AI systems can fetch the page, identify
              the brand entity, extract direct answers, and connect claims to
              visible evidence.
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
            title="Content shaped for humans and AI retrieval"
            description="AI search systems work best with pages that make their claims explicit. ALPHAXX turns vague marketing pages into structured, answerable, evidence-backed pages."
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
          title="Built around the answer engines customers actually use"
          description="ALPHAXX treats AI search as a distribution layer. Each target system still needs crawlable pages, clear entities, durable facts, and structured metadata."
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
            title="The optimization layer between SEO and AI answers"
            description="The work combines technical crawl access, semantic structure, content quality, evidence design, and entity-level authority."
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
