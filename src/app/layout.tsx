import type { Metadata } from "next";
import { Manrope, Playfair_Display, Spectral } from "next/font/google";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Independent ocean and climate research lab focused on open data analysis, coastal intelligence, and public-facing scientific work.",
  keywords: [
    "museum of ocean science",
    "ocean science",
    "marine research",
    "climate research",
    "coastal risk",
    "ocean data",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Independent ocean and climate research lab focused on open data analysis, coastal intelligence, and public-facing scientific work.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${SITE_NAME} preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Independent ocean and climate research lab focused on open data analysis, coastal intelligence, and public-facing scientific work.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  description:
    "Independent ocean and climate research organization focused on open-data analysis, coastal intelligence, and public-facing scientific work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${spectral.variable} ${manrope.variable} bg-black text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        <main className="min-h-screen bg-black">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
