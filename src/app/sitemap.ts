import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/servicos", priority: 0.9 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/sobre", priority: 0.7 },
    { path: "/contato", priority: 0.8 },
  ] as const;

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
