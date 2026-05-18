import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/StructuredData";
import { IntentPage } from "@/components/IntentPage";
import { getIntentPage, intentPages } from "@/lib/intent-pages";
import {
  CONTENT_PUBLISHED_DATE,
  CONTENT_UPDATED_DATE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
} from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return intentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIntentPage(slug);

  if (!page) {
    return {};
  }

  const url = absoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} Generative Engine Optimization infrastructure`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getIntentPage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = absoluteUrl(page.path);
  const primarySchema =
    page.schemaType === "Service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: page.title,
          serviceType: "Generative Engine Optimization",
          provider: {
            "@id": `${SITE_URL}/#organization`,
          },
          areaServed: {
            "@type": "Country",
            name: "Australia",
          },
          description: page.description,
          url: pageUrl,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${pageUrl}#article`,
          headline: page.title,
          description: page.description,
          datePublished: CONTENT_PUBLISHED_DATE,
          dateModified: CONTENT_UPDATED_DATE,
          author: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
          mainEntityOfPage: pageUrl,
          inLanguage: "en-AU",
        };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData
        data={[
          primarySchema,
          faqSchema,
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: page.h1, path: page.path },
          ]),
        ]}
      />
      <IntentPage page={page} />
    </>
  );
}
