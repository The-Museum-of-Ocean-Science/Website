import type { MetadataRoute } from "next";

import { affiliates, oceanRiskSnapshots, projects } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/affiliates`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/exhibits`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ocean-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const researchRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/research/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const affiliateRoutes: MetadataRoute.Sitemap = affiliates.map((affiliate) => ({
    url: `${SITE_URL}/affiliates/${affiliate.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const oceanRiskRoutes: MetadataRoute.Sitemap = oceanRiskSnapshots.map((snapshot) => ({
    url: `${SITE_URL}/ocean-risk/${snapshot.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...researchRoutes, ...affiliateRoutes, ...oceanRiskRoutes];
}
