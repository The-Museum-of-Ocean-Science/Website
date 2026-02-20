import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Support MOS",
  description: "Fund open ocean science and transparency at MOS.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Support MOS</p>
          <h1 className="mt-4 text-4xl">Fund the Gap</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Support transparent ocean science, data infrastructure, and public access to critical
            climate intelligence.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Sponsor a Dataset</h2>
            <p className="text-white/70">
              Help fund open-data releases that make coastal risk visible to the public and policy
              leaders.
            </p>
            <button className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black">
              Donate
            </button>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Transparency Dashboard</h2>
            <p className="text-white/70">
              Phase 1 transparency metrics are manually reported and updated quarterly.
            </p>
            <div className="grid gap-4 text-sm text-white/70">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Active Projects</span>
                <span>7</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Affiliates</span>
                <span>18</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>Funding Goal</span>
                <span>$2.4M</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Funding Secured</span>
                <span>$820K</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
