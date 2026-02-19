import type { Metadata } from "next";
import { Manrope, Playfair_Display, Spectral } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

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
  title: "Museum of Ocean Science",
  description:
    "An open-data climate research lab bridging the gap in ocean science.",
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
        <SiteHeader />
        <main className="min-h-screen bg-black">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
