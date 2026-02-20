import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import AffiliatesGrid from "./affiliates-grid";

export const metadata: Metadata = buildPageMetadata({
  title: "Affiliates",
  description: "Research affiliates and project leads at MOS.",
  path: "/affiliates",
});

export default function AffiliatesPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Affiliates</p>
          <h1 className="mt-4 text-4xl">Research Affiliate Network</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Credentialed affiliates, project leads, and research partners advancing MOS initiatives.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <AffiliatesGrid />
        </div>
      </section>
    </div>
  );
}
