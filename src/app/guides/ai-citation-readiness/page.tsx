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

const route = getRoute("/guides/ai-citation-readiness");

export const metadata = pageMetadata(route);

const readinessSteps = [
  {
    title: "Build semantic stability",
    body: "Use the same brand name, service categories, product terms, and topical relationships across visible copy, metadata, internal links, and JSON-LD.",
  },
  {
    title: "Improve structural retrievability",
    body: "Format important information as answer-first paragraphs, tables, lists, definitions, and schema-marked sections that RAG systems can parse and rank.",
  },
  {
    title: "Support claims visibly",
    body: "Add dates, source references, examples, definitions, data points, limitations, and supporting context near claims that a model may quote.",
  },
  {
    title: "Measure real citation",
    body: "Track Brand Mention Rate and Citation Share across a defined query set to confirm whether AI-generated answers are mentioning the brand more often.",
  },
  {
    title: "Build internal context",
    body: "Link short answer pages to deeper supporting guides and service pages so crawlers can follow the full knowledge path.",
  },
];

export default function CitationReadinessPage() {
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
            {
              name: "AI Citation Readiness",
              path: "/guides/ai-citation-readiness",
            },
          ]),
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Guide
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
            AI citation readiness
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            AI citation readiness is the state in which a brand&apos;s content,
            entity representation, and site structure are optimized enough for
            AI platforms to identify, retrieve, and cite the brand as an
            authoritative source.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXXXX on {CONTENT_PUBLISHED_DATE}. Updated{" "}
            {CONTENT_UPDATED_DATE}.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-zinc-700">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Citation readiness is a spectrum
              </h2>
              <p className="mt-4">
                Citation readiness is not binary. A brand may appear in some AI
                answers but not others, or it may be mentioned less often than
                competitors in the same query space. GEO work moves the brand
                along that spectrum by reducing ambiguity and making source
                material easier to retrieve.
              </p>
              <p className="mt-4">
                A citation-ready page helps the model understand what was said,
                who said it, when it was updated, what evidence supports it, and
                why the source entity is relevant to the user&apos;s query.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Five steps to improve citation readiness
              </h2>
              <div className="mt-6 grid gap-4">
                {readinessSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-5"
                  >
                    <h3 className="text-xl font-semibold text-zinc-950">
                      <span className="mr-3 font-mono text-sm text-teal-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Three components ALPHAXXXX evaluates
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  [
                    "Semantic stability",
                    "The brand name and associated concepts are represented consistently so AI models encode the brand as a clear entity rather than an ambiguous cluster of terms.",
                  ],
                  [
                    "Structural retrievability",
                    "The brand's content is formatted in ways RAG retrieval systems can parse, rank, and extract accurately, including tables, lists, schema markup, and clear information hierarchy.",
                  ],
                  [
                    "Measurable citation",
                    "The brand's actual appearance rate in AI-generated answers is tracked through Brand Mention Rate and Citation Share auditing.",
                  ],
                ].map(([title, body]) => (
                  <article
                    key={title}
                    className="rounded-lg border border-zinc-200 bg-white p-5"
                  >
                    <h3 className="text-xl font-semibold text-zinc-950">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">
                      {body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                What to avoid
              </h2>
              <p className="mt-4">
                Avoid marking up content that users cannot see. Avoid vague
                superlatives that have no supporting evidence. Avoid publishing
                FAQ schema for questions that are not actually answered on the
                page. Avoid hiding important definitions in images, scripts, or
                UI states that crawlers may not evaluate.
              </p>
              <p className="mt-4">
                The safest pattern is simple: put useful answers in server
                rendered HTML, make the structure obvious, and use JSON-LD to
                describe the same facts that a reader can verify on the page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Minimum page checklist
              </h2>
              <ul className="mt-4 grid gap-3">
                {[
                  "One clear H1 and descriptive H2 sections.",
                  "A direct answer within the first two paragraphs.",
                  "Visible author or brand attribution.",
                  "Published and updated dates for guide content.",
                  "Consistent brand and service entity names.",
                  "Tables, lists, or definitions for facts that should be extracted.",
                  "BMR or Citation Share tracking for important query sets.",
                  "Schema that matches the visible page.",
                  "Internal links to supporting pages.",
                  "External references for standards, crawler policies, or technical claims.",
                ].map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <EvidenceList items={externalSources} />
        </div>
      </article>
    </PageShell>
  );
}
