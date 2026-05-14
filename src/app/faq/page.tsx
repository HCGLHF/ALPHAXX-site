import { StructuredData } from "@/components/StructuredData";
import { PageShell } from "@/components/PageChrome";
import { faqs } from "@/lib/content";
import { breadcrumbSchema, getRoute, pageMetadata } from "@/lib/site";

const route = getRoute("/faq");

export const metadata = pageMetadata(route);

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <PageShell>
      <StructuredData
        data={[
          faqPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              FAQ
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              ALPHAXX frequently asked questions
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Direct answers about Generative Engine Optimization, AI search
              visibility, citation readiness, crawler access, and structured
              content.
            </p>
          </div>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-6"
              >
                <h2 className="flex gap-3 text-lg font-semibold text-zinc-950">
                  <span className="font-mono text-sm text-teal-700">
                    Q{String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </h2>
                <p className="mt-3 text-base leading-7 text-zinc-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
