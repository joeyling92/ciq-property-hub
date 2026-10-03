import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/projects`, priority: 0.9 },
    { url: `${base}/locations/ciq`, priority: 0.9 },
    { url: `${base}/guides`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/privacy-policy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
    { url: `${base}/disclaimer`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const guidePages = guides
    .filter((g) => g.available)
    .map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: new Date(g.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...projectPages, ...guidePages];
}
