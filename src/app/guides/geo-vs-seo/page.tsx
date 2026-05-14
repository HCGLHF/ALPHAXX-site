import { StructuredData } from "@/components/StructuredData";
import { EvidenceList, PageShell } from "@/components/PageChrome";
import { externalSources } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/guides/geo-vs-seo");
const published = "2026-05-14";

export const metadata = pageMetadata(route);

const comparisons = [
  ["Primary surface", "Search results pages", "AI-generated answers and citations"],
  ["Success signal", "Ranking, clicks, impressions", "Retrieval, mention, citation, recommendation"],
  ["Content shape", "Keyword-led pages", "Answer-first pages with explicit claims"],
  ["Technical focus", "Crawl, index, performance", "Crawl, schema, entity clarity, extractability"],
  ["Trust signal", "Authority and relevance", "Authority, evidence, freshness, and source clarity"],
] as const;

export default function GeoVsSeoPage() {
  return (
    <PageShell>
      <StructuredData
        data={[
          articleSchema({
            path: route.path,
            headline: route.title,
            description: route.description,
            datePublished: published,
            dateModified: published,
          }),
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Guides", path: "/guides/what-is-geo" },
            { name: "GEO vs SEO", path: "/guides/geo-vs-seo" },
          ]),
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Guide
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
            GEO vs SEO
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            SEO helps pages rank in search results. GEO helps pages become
            retrievable, quotable, and recommendable inside AI-generated
            answers. Strong brands need both.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXX on {published}. Updated {published}.
          </p>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Comparison table
            </h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-zinc-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-[#f7f6f1] text-zinc-950">
                  <tr>
                    <th className="p-4 font-semibold">Dimension</th>
                    <th className="p-4 font-semibold">SEO</th>
                    <th className="p-4 font-semibold">GEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {comparisons.map(([dimension, seo, geo]) => (
                    <tr key={dimension}>
                      <th className="p-4 font-semibold text-zinc-950">{dimension}</th>
                      <td className="p-4 text-zinc-700">{seo}</td>
                      <td className="p-4 text-zinc-700">{geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-12 space-y-10 text-base leading-8 text-zinc-700">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Where SEO and GEO overlap
              </h2>
              <p className="mt-4">
                GEO depends on many SEO fundamentals. A page still needs to be
                crawlable, indexable, fast, internally linked, useful, and
                technically sound. If a search crawler cannot reach the page,
                an AI search system is unlikely to use it reliably either.
              </p>
              <p className="mt-4">
                The overlap is strongest around technical hygiene and content
                quality. Canonical tags, sitemap coverage, descriptive titles,
                semantic headings, and helpful body content are useful for both
                traditional search and AI search.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Where GEO adds new work
              </h2>
              <p className="mt-4">
                GEO adds a stronger emphasis on extractability. An AI system
                needs compact passages that answer specific questions without
                relying on a human to infer the missing context. That means more
                direct definitions, question-led sections, comparison tables,
                evidence blocks, source lists, and schema that mirrors visible
                page content.
              </p>
              <p className="mt-4">
                GEO also cares about entity consistency. If a brand, product,
                service, or location is named differently across metadata,
                schema, navigation, and visible copy, the model has weaker
                signals. Consistency helps AI systems connect the right entity
                to the right query.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Practical recommendation
              </h2>
              <p className="mt-4">
                Keep SEO foundations in place, then add GEO layers to pages
                that should answer high-intent questions. Start with service
                pages, FAQs, comparison guides, definition pages, pricing pages,
                and pages that explain proprietary expertise. These are the
                pages AI systems are most likely to summarize when users ask
                commercial or educational questions.
              </p>
            </section>
          </div>

          <EvidenceList items={externalSources.slice(0, 3)} />
        </div>
      </article>
    </PageShell>
  );
}
