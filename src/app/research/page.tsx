import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import ResearchGrid from "./research-grid";

export const metadata: Metadata = buildPageMetadata({
  title: "Research",
  description: "Open research, contract work, and exhibits from MOS.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Research</p>
          <h1 className="mt-4 text-4xl">Open Research Portfolio</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Modular, transparent research projects spanning open science, client partnerships,
            and public exhibits.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <ResearchGrid />
        </div>
      </section>
    </div>
  );
}
