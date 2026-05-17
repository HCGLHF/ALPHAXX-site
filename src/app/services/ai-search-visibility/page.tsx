import { StructuredData } from "@/components/StructuredData";
import { PageShell, SectionHeading } from "@/components/PageChrome";
import {
  aiEngines,
  aiSearchServiceSchema,
  breadcrumbSchema,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/services/ai-search-visibility");

export const metadata = pageMetadata(route);

const servicePillars = [
  {
    title: "Semantic Entity Engineering",
    body: "Stabilize brand names, product terms, service categories, and industry concepts so AI models encode the brand as a clear, high-weight entity rather than a diffuse or ambiguous mention.",
  },
  {
    title: "Visibility Analytics and BMR",
    body: "Measure AI search visibility with Brand Mention Rate, Citation Share auditing, baseline query sets, competitive benchmarks, and ongoing tracking across ChatGPT, Perplexity, and related answer systems.",
  },
  {
    title: "Structural Optimization",
    body: "Re-engineer web content into AI-friendly tables, lists, answer blocks, schema markup, and page sections that RAG retrieval systems can parse, rank, and cite accurately.",
  },
  {
    title: "Citation Readiness Implementation",
    body: "Connect crawl access, metadata, canonical URLs, robots policies, internal links, update signals, and visible evidence so AI systems can cite the brand with confidence.",
  },
];

export default function ServicePage() {
  return (
    <PageShell>
      <StructuredData
        data={[
          aiSearchServiceSchema,
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Services", path: "/services/ai-search-visibility" },
          ]),
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            AI Search Visibility Service
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            Build the signals AI answer systems need before they mention you.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            ALPHAXXXX helps businesses move beyond blue-link SEO by improving
            the entity, content, measurement, and technical signals that answer
            engines, LLMs, and RAG systems use to retrieve, cite, and recommend
            brands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Service pillars"
          title="Three GEO pillars plus citation implementation"
          description="ALPHAXXXX works across the layers where AI citation decisions are made: entity encoding, retrieval and re-ranking, measurable visibility, and page-level citation readiness."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-zinc-950">{pillar.title}</h2>
              <p className="mt-3 text-base leading-7 text-zinc-600">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Target systems"
            title="Optimization for answer engines and AI search interfaces"
            description="No single schema tag guarantees inclusion. The service strengthens multiple entity, retrieval, measurement, and trust signals across the systems your customers use."
            invert
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiEngines.map((engine) => (
              <article key={engine} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-lg font-semibold">{engine}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  ALPHAXXXX prepares pages with clear answers, crawl access,
                  schema, stable entities, and evidence that {engine} can
                  evaluate.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
          What changes after implementation
        </h2>
        <div className="mt-8 grid gap-4">
          {[
            "Core pages have unique metadata, canonical URLs, structured data, and visible answer sections.",
            "Brand naming, service categories, and topic entities become consistent across visible copy, metadata, and JSON-LD.",
            "BMR and Citation Share reporting show whether AI-generated answers mention the brand more often over time.",
            "Guides, FAQs, and service pages use direct, extractable answers that match schema markup.",
            "Sitemap and robots policies expose every important page to search and AI crawlers.",
          ].map((item) => (
            <p key={item} className="rounded-lg border border-zinc-200 bg-white p-5 text-base leading-7 text-zinc-700">
              {item}
            </p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
