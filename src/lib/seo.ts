import type { Metadata } from "next";

export const SITE_URL = "https://museumofoceanscience.com";
export const SITE_NAME = "Museum of Ocean Science";
export const DEFAULT_OG_IMAGE = "/assets/focus-areas-jellyfish-opt.webp";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  image?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: image,
          alt: `${SITE_NAME} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
