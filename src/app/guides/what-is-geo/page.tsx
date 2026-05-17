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

const route = getRoute("/guides/what-is-geo");

export const metadata = pageMetadata(route);

const geoSeoDifferences = [
  ["Target system", "Traditional search engine algorithms", "LLM-based generative AI platforms"],
  ["Success metric", "Page rank, clicks, and impressions", "Brand citation rate, BMR, and Citation Share"],
  ["Core technique", "Keywords, links, page authority, and technical SEO", "Semantic Entity Engineering, RAG readiness, and structured formatting"],
  ["User output", "A list of links to choose from", "A synthesized answer with selected sources"],
  ["Visibility mechanism", "The user clicks through to a page", "The AI cites, quotes, or recommends the brand directly"],
] as const;

export default function WhatIsGeoPage() {
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
            { name: "What Is GEO?", path: "/guides/what-is-geo" },
          ]),
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Guide
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
            What is GEO?
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Generative Engine Optimization, or GEO, is the practice of
            structuring, formatting, and positioning content so large language
            models and AI-powered search platforms can select that content as a
            source when generating answers.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXXXX on {CONTENT_PUBLISHED_DATE}. Updated{" "}
            {CONTENT_UPDATED_DATE}.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-zinc-700">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO is optimization for the answer layer
              </h2>
              <p className="mt-4">
                In 2026, discovery is shifting from ranked lists of blue links
                to generative platforms that synthesize information and deliver
                direct answers. Traditional search optimization asks whether a
                page can rank on a search result page. GEO asks whether an AI
                search system can find the page, understand the entity it
                describes, retrieve the right passage, and cite that answer with
                confidence.
              </p>
              <p className="mt-4">
                For businesses, this means that ranking on page one is no
                longer sufficient. What matters is whether the brand appears
                inside the AI-generated answer at all. ALPHAXXXX focuses on
                that new visibility layer: the systems that retrieve sources,
                re-rank passages, and decide which brands are mentioned in
                synthesized responses.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO targets RAG pipelines
              </h2>
              <p className="mt-4">
                The technical backbone of many AI search systems is
                Retrieval-Augmented Generation, or RAG. In a RAG pipeline, the
                system retrieves candidate documents, re-ranks those documents
                for relevance and authority, and uses the highest-scoring
                passages to generate an answer. GEO improves the probability
                that a brand is present and useful at each stage of that
                pipeline.
              </p>
              <p className="mt-4">
                ALPHAXXXX treats crawl access, semantic entity stability,
                structural retrievability, schema consistency, and visible
                evidence as RAG pipeline inputs. The goal is not to manipulate a
                single ranking factor. The goal is to make a page easier to
                retrieve, easier to parse, easier to trust, and safer for an AI
                system to cite.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO vs SEO
              </h2>
              <p className="mt-4">
                GEO is distinct from SEO because the target system and success
                metric are different. SEO is designed for ranking algorithms
                that return lists of pages. GEO is designed for retrieval and
                re-ranking systems that feed generated answers.
              </p>
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
                    {geoSeoDifferences.map(([dimension, seo, geo]) => (
                      <tr key={dimension}>
                        <th className="p-4 font-semibold text-zinc-950">
                          {dimension}
                        </th>
                        <td className="p-4 text-zinc-700">{seo}</td>
                        <td className="p-4 text-zinc-700">{geo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Why AI search visibility matters
              </h2>
              <p className="mt-4">
                AI-generated answers compress the discovery funnel. In
                traditional search, a user might visit several websites before
                forming an opinion. In AI search, the model often performs that
                synthesis on the user&apos;s behalf and presents a conclusion.
                If a brand is not part of the retrieved and re-ranked source
                set, that brand may be absent from the answer regardless of its
                traditional SEO strength.
              </p>
              <p className="mt-4">
                This creates an independent dimension of digital authority. A
                brand with strong SEO but weak AI citation readiness can still
                lose visibility in ChatGPT, Perplexity, and other answer
                interfaces. A brand that invests early in GEO can build stronger
                entity signals, clearer source material, and measurable
                citation patterns before competitors dominate the answer space.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                The ALPHAXXXX GEO methodology
              </h2>
              <p className="mt-4">
                ALPHAXXXX organizes GEO work into three service pillars:
                Semantic Entity Engineering, Visibility Analytics, and
                Structural Optimization. Semantic Entity Engineering stabilizes
                the brand&apos;s representation across pages and schema.
                Visibility Analytics measures Brand Mention Rate and Citation
                Share. Structural Optimization turns prose into formats that
                RAG systems can retrieve, parse, and cite.
              </p>
              <p className="mt-4">
                The practical question behind the methodology is simple: when a
                user asks an AI platform about a given industry, does the brand
                appear in the answer? GEO work is useful only when it improves
                that measurable visibility.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO checklist
              </h2>
              <ul className="mt-4 grid gap-3">
                {[
                  "Allow important search and AI crawlers in robots.txt and at the CDN or firewall layer.",
                  "Give each page a unique title, description, canonical URL, and OpenGraph summary.",
                  "Use one visible H1, descriptive H2 sections, and direct answer paragraphs near the top.",
                  "Publish Organization, WebSite, Article, Service, FAQPage, and BreadcrumbList schema where relevant.",
                  "Make brand, service, location, audience, and topic relationships consistent across the site.",
                  "Track Brand Mention Rate and Citation Share across a defined query set.",
                  "Add visible evidence, dates, sources, examples, and limitations where claims need support.",
                  "Build internal links from summary pages to deeper guides and from guides back to services.",
                ].map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Common GEO mistakes
              </h2>
              <p className="mt-4">
                The first mistake is treating AI visibility as a single tag or
                file. Robots.txt, schema, and llms.txt can help, but they cannot
                compensate for thin, inconsistent, or unsupported page content.
                The second mistake is writing only for crawlers. AI systems
                evaluate public pages that real users also need to trust.
              </p>
              <p className="mt-4">
                The third mistake is entity drift. If one page says ALPHAXXXX, a
                second page says a different brand, and schema says a third
                name, an answer engine has to guess whether those entities are
                the same. GEO starts by removing that ambiguity.
              </p>
            </section>
          </div>

          <EvidenceList items={externalSources} />
        </div>
      </article>
    </PageShell>
  );
}
