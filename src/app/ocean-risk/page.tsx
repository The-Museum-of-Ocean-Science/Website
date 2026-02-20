import type { Metadata } from "next";
import Link from "next/link";

import { oceanRiskSnapshots } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ocean Risk Snapshot",
  description: "Rapid consulting case studies and ocean risk intelligence.",
  path: "/ocean-risk",
});

export default function OceanRiskPage() {
  const sample = oceanRiskSnapshots[0];

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Consulting</p>
          <h1 className="mt-4 text-4xl">Ocean Risk Snapshot</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            A rapid, decision-ready assessment translating ocean data into clear risk intelligence.
            Built for coastal assets, development teams, and institutional stakeholders.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl">What It Is</h2>
            <p className="text-white/70">
              A concise, research-driven snapshot built from NOAA, FEMA, and local datasets to
              highlight exposure, scenario risk, and recommended actions.
            </p>
            <h2 className="text-2xl">Who It is For</h2>
            <ul className="space-y-2 text-white/70">
              <li>• Coastal real estate and hospitality</li>
              <li>• Marinas, ports, and working waterfronts</li>
              <li>• Cultural venues and public agencies</li>
            </ul>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Deliverables</h2>
            <ul className="space-y-2 text-white/70">
              <li>• Executive briefing PDF</li>
              <li>• Visual risk summary charts</li>
              <li>• Priority action roadmap</li>
            </ul>
            <h3 className="pt-4 text-xl">Pricing Tiers</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>Baseline Snapshot — $2,500</p>
              <p>Expanded Scenario Package — $5,000</p>
              <p>Custom Site Survey — $10,000+</p>
            </div>
            <Link
              href={sample.pdf}
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              Download Sample PDF
            </Link>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <h2 className="text-2xl">Sample Snapshot</h2>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{sample.clientType}</p>
            <h3 className="mt-2 text-2xl">{sample.title}</h3>
            <p className="mt-4 text-white/70">{sample.summary}</p>
            <Link
              href={`/ocean-risk/${sample.slug}`}
              className="mt-6 inline-flex rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <h2 className="text-2xl">Inquiry Form</h2>
          <form className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Organization"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Location"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="md:col-span-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Description of Site"
            />
            <button
              type="button"
              className="md:col-span-2 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
