import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: `/${string}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const absoluteUrl = new URL(path, siteConfig.url).toString();
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
