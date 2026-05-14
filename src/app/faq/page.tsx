import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";

const SITE_URL = "https://alphaxxxx.com";

export const metadata: Metadata = {
  title: "FAQ | GEO-ALPHA",
  description:
    "Frequently asked questions about GEO-ALPHA, Generative Engine Optimization, AI search visibility, and how to improve citation readiness for AI-powered search engines.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is GEO-ALPHA?",
    answer:
      "GEO-ALPHA is an AI search visibility platform that helps businesses become discoverable, retrievable, citable, and recommended by AI-powered search engines such as ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing websites and content so that AI search engines can understand, retrieve, cite, and recommend them inside AI-generated answers. GEO focuses on retrieval readiness, citation readiness, entity clarity, and structured content.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO (Search Engine Optimization) focuses on ranking in traditional search engine result pages with blue links. GEO (Generative Engine Optimization) focuses on being selected, quoted, and recommended inside AI-generated answers. While SEO targets keyword rankings, GEO targets retrieval, reranking, and citation inside AI answer pipelines.",
  },
  {
    question: "Which AI platforms does GEO-ALPHA focus on?",
    answer:
      "GEO-ALPHA focuses on major AI-powered search and answer engines including ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and Microsoft Copilot. These platforms synthesize answers from web content and increasingly influence how users discover businesses and information.",
  },
  {
    question: "What services does GEO-ALPHA provide?",
    answer:
      "GEO-ALPHA provides GEO audits, AI search monitoring, content structure optimization, entity authority mapping, schema and metadata optimization, and FAQ/answer engine optimization. These services help brands improve their visibility and citation readiness across AI search systems.",
  },
  {
    question: "Why does AI search visibility matter?",
    answer:
      "AI search visibility matters because users increasingly ask AI assistants direct questions instead of browsing traditional search results. If your brand is not retrievable or citable by AI systems, you may lose visibility in the new discovery channels where customers are making decisions.",
  },
  {
    question: "How can businesses improve citation readiness?",
    answer:
      "Businesses can improve citation readiness by structuring pages with clear claims, direct answers, supporting evidence, and verifiable sources. Using semantic HTML, descriptive headings, FAQ patterns, accurate metadata, and JSON-LD schema markup also helps AI systems quote your brand with confidence.",
  },
  {
    question: "How does GEO-ALPHA measure AI visibility?",
    answer:
      "GEO-ALPHA measures AI visibility through multiple signals including retrieval coverage, citation readiness score, entity clarity assessment, rerank potential, and tracking how your brand surfaces inside AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini over time.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
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
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] text-zinc-100 antialiased selection:bg-blue-500/30 selection:text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(59,130,246,0.22) 0%, rgba(139,92,246,0.12) 35%, rgba(0,0,0,0) 75%)",
        }}
      />

      <StructuredData data={faqPageSchema} />

      <header className="relative z-10 border-b border-white/[0.06] backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        >
          <a
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-blue-400 to-violet-500 text-[11px] font-bold text-black shadow-[0_0_24px_-6px_rgba(96,165,250,0.7)]">
              AX
            </span>
            <span className="text-base">GEO-ALPHA</span>
          </a>

          <a
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to Home
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-4xl px-6 pb-20 pt-16 md:pt-24">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]" />
              Frequently Asked Questions
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              GEO-ALPHA FAQ
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              Answers to common questions about Generative Engine Optimization,
              AI search visibility, and how GEO-ALPHA helps brands become
              citable by AI systems.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
              >
                <h2 className="flex items-baseline gap-3 text-lg font-semibold text-zinc-100">
                  <span className="font-mono text-xs text-blue-300">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-zinc-400">
              Have more questions?{" "}
              <a
                href="/#contact"
                className="text-blue-300 underline-offset-4 hover:underline"
              >
                Contact us
              </a>{" "}
              or{" "}
              <a
                href="/guides/what-is-geo"
                className="text-blue-300 underline-offset-4 hover:underline"
              >
                read the full GEO guide
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-blue-400 to-violet-500 text-[11px] font-bold text-black">
                AX
              </span>
              GEO-ALPHA
            </div>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} GEO-ALPHA. Built for the answer
              engine era.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
