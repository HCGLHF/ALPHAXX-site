import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://alphaxxxx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ALPHAXX | AI Search Visibility & GEO Intelligence",
    template: "%s | ALPHAXX",
  },

  description:
    "ALPHAXX is an AI Search Visibility and Generative Engine Optimization platform that helps brands become discoverable, retrievable, citable, and recommended by AI search systems.",

  keywords: [
    "ALPHAXX",
    "Generative Engine Optimization",
    "GEO",
    "AI Search Visibility",
    "Answer Engine Optimization",
    "AI SEO",
    "ChatGPT Search Optimization",
    "Perplexity Optimization",
    "Google AI Overviews",
    "AI Search Ranking",
    "AI Citation Readiness",
    "Entity Authority",
    "Schema Markup",
    "Structured Content",
  ],

  authors: [{ name: "ALPHAXX" }],
  creator: "ALPHAXX",
  publisher: "ALPHAXX",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "ALPHAXX | AI Search Visibility & GEO Intelligence",
    description:
      "Prepare your brand for the answer engine era. ALPHAXX helps businesses improve visibility inside AI-generated answers.",
    url: siteUrl,
    siteName: "ALPHAXX",
    type: "website",
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "ALPHAXX | AI Search Visibility & GEO Intelligence",
    description:
      "AI Search Visibility and Generative Engine Optimization platform for brands preparing for the answer engine era.",
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
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
