import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import {
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  definedTermSetSchema,
  organizationSchema,
  siteDescription,
  webSiteSchema,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | AI Search Visibility & GEO Intelligence`,
    template: `%s | ${SITE_NAME}`,
  },

  description: siteDescription,

  keywords: [
    "ALPHAXXXX",
    "Generative Engine Optimization",
    "GEO",
    "AI Search Visibility",
    "Answer Engine Optimization",
    "AI SEO",
    "AI crawler readability",
    "AI citation readiness",
    "Semantic Entity Engineering",
    "Brand Mention Rate",
    "BMR",
    "Citation Share auditing",
    "Structural Optimization",
    "RAG pipeline optimization",
    "LLM visibility",
    "RAG systems",
    "retrieval-based search",
    "structured content",
    "ChatGPT Search Optimization",
    "Perplexity Optimization",
    "Google AI Overviews",
    "AI Search Ranking",
    "Entity Authority",
    "Schema Markup",
  ],

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: `${SITE_NAME} | AI Search Visibility & GEO Intelligence`,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AU",
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
    title: `${SITE_NAME} | AI Search Visibility & GEO Intelligence`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_LANGUAGE}>
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={webSiteSchema} />
        <StructuredData data={definedTermSetSchema} />
      </head>
      <body>{children}</body>
    </html>
  );
}
