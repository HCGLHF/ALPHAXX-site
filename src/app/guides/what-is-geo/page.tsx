import { StructuredData } from "@/components/StructuredData";
import { EvidenceList, PageShell } from "@/components/PageChrome";
import { externalSources } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/guides/what-is-geo");
const published = "2026-05-14";

export const metadata = pageMetadata(route);

export default function WhatIsGeoPage() {
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
            Generative Engine Optimization, or GEO, is the practice of making a
            website easier for AI search systems to understand, retrieve, cite,
            and recommend inside generated answers.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXXXX on {published}. Updated {published}.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-zinc-700">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO is optimization for the answer layer
              </h2>
              <p className="mt-4">
                Traditional search optimization asks whether a page can rank on
                a search result page. GEO asks a slightly different question:
                can an AI search system find the page, understand the entity it
                describes, extract the right answer, and cite that answer with
                confidence?
              </p>
              <p className="mt-4">
                This matters because many discovery journeys now start with a
                question to an assistant. The user may never scan a list of ten
                blue links. Instead, the assistant summarizes several sources,
                chooses which brands to mention, and often exposes only a small
                set of citations. GEO helps your site become a better source for
                that summary.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                The five signals behind AI visibility
              </h2>
              <p className="mt-4">
                A page is more likely to be useful to AI search when five signal
                groups line up. First, crawlers must be allowed to access the
                page. Second, the page must use clear semantic structure so
                important answers are easy to segment. Third, the brand and
                topic entities must be unambiguous. Fourth, claims need visible
                support through details, sources, dates, or examples. Fifth,
                structured data should reinforce what is visible on the page.
              </p>
              <p className="mt-4">
                None of these signals guarantees inclusion in an AI answer.
                Together, they reduce friction. They make the page easier to
                retrieve, easier to summarize, and safer to cite.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                GEO does not replace SEO
              </h2>
              <p className="mt-4">
                GEO builds on strong SEO foundations. Clean URLs, canonical
                tags, sitemap coverage, crawl access, useful content, internal
                links, and fast server-rendered pages still matter. The
                difference is the final format of discovery. SEO often optimizes
                for a click from a ranked listing. GEO optimizes for selection
                inside a synthesized answer where a user may read the answer
                before deciding whether to click.
              </p>
              <p className="mt-4">
                The practical implication is that content needs to be more
                explicit. A vague service page might persuade a human visitor,
                but it gives an answer engine very little to quote. A GEO-ready
                page gives direct definitions, concise claims, supporting
                context, and clear relationships between topics.
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
