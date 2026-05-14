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
    title: "Retrieval readiness",
    body: "Make important pages crawlable, indexable, internally linked, and structured so AI systems can find the right passage quickly.",
  },
  {
    title: "Citation readiness",
    body: "Create direct answers, claim support, source references, and update signals that make pages safer for AI systems to quote.",
  },
  {
    title: "Entity authority",
    body: "Clarify who the brand is, what it offers, where it operates, and which topics it should be associated with across the site.",
  },
  {
    title: "Schema and metadata",
    body: "Implement page-specific JSON-LD, canonical tags, OpenGraph metadata, sitemap coverage, and robots policies that match the intended entity graph.",
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
            Build the signals AI search systems need before they cite you.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            ALPHAXX helps Australian brands move beyond blue-link SEO by
            improving the content and technical signals that answer engines use
            to retrieve, summarize, and recommend web pages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Service pillars"
          title="Four workstreams that make a site AI-readable"
          description="Each workstream reinforces the same goal: make important pages easy to access, parse, trust, cite, and connect to the right brand entity."
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
            description="No single schema tag guarantees inclusion, so the service strengthens multiple crawl, content, and trust signals across the systems your customers use."
            invert
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiEngines.map((engine) => (
              <article key={engine} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-lg font-semibold">{engine}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  ALPHAXX prepares pages with clear answers, crawl access,
                  schema, and evidence that {engine} can evaluate.
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
            "Guides explain the topic with enough depth for search engines and AI systems to evaluate authority.",
            "FAQ and service content use direct, extractable answers that match schema markup.",
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
