import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { StructuredData } from "@/components/StructuredData";
import { getHubPage } from "@/lib/hub-pages";
import {
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
} from "@/lib/site";

export function hubMetadata(path: string): Metadata {
  const page = getHubPage(path);

  if (!page) {
    throw new Error(`Missing hub page for ${path}`);
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
      type: "website",
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

export function HubRoute({ path }: { path: string }) {
  const page = getHubPage(path);

  if (!page) {
    throw new Error(`Missing hub page for ${path}`);
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(page.path)}#itemlist`,
    name: page.title,
    description: page.description,
    itemListElement: page.primaryLinks.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: absoluteUrl(link.href),
    })),
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(page.path)}#collection`,
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
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
          collectionSchema,
          itemListSchema,
          faqSchema,
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: page.h1, path: page.path },
          ]),
        ]}
      />
      <HubPage page={page} />
    </>
  );
}
