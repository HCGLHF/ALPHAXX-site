import { StructuredData } from "@/components/StructuredData";
import { EvidenceList, PageShell } from "@/components/PageChrome";
import { externalSources } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  CONTENT_PUBLISHED_DATE,
  CONTENT_UPDATED_DATE,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/guides/geo-vs-seo");

export const metadata = pageMetadata(route);

const comparisons = [
  ["Target system", "Traditional search engine algorithms", "LLM-based generative AI platforms"],
  ["Success metric", "Page rank in a results list", "Brand citation rate in AI-generated answers"],
  ["Core technique", "Keyword targeting, backlinks, page authority, and technical hygiene", "Semantic Entity Engineering, RAG pipeline optimization, and structured formatting"],
  ["Output for user", "A list of links to choose from", "A single synthesized answer with selected sources"],
  ["Visibility mechanism", "A user clicks through to a page", "An AI cites, quotes, mentions, or recommends the brand directly"],
  ["Primary platforms", "Google and Bing search results", "ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Copilot"],
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
            datePublished: CONTENT_PUBLISHED_DATE,
            dateModified: CONTENT_UPDATED_DATE,
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
            SEO helps pages rank in search result lists. GEO helps brands
            become retrievable, quotable, and recommendable inside
            AI-generated answers. Strong brands need both, but the disciplines
            use different signals and measurement frameworks.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXXXX on {CONTENT_PUBLISHED_DATE}. Updated{" "}
            {CONTENT_UPDATED_DATE}.
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
                GEO also adds measurement that SEO dashboards do not capture.
                ALPHAXXXX uses Brand Mention Rate to measure how often a brand
                appears in AI-generated answers and Citation Share auditing to
                compare that visibility against competitors in the same query
                space.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Why first-page rankings are not enough
              </h2>
              <p className="mt-4">
                A page can perform well in traditional search and still be
                absent from ChatGPT or Perplexity answers. Traditional ranking
                signals and AI citation signals overlap in some areas, but they
                are different in kind. AI systems need source passages that are
                easy to retrieve, entities that are stable, and claims that can
                be cited safely.
              </p>
              <p className="mt-4">
                This is why ALPHAXXXX treats GEO as a distinct discipline rather
                than a small extension of SEO. GEO work focuses on the retrieval
                and re-ranking stages where AI answer systems choose which
                content and brands are included in a generated response.
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
