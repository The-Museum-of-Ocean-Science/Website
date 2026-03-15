import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "ClimateBase Fellows Start Here",
  description:
    "Orientation and next steps for ClimateBase Fellows collaborating with the Museum of Ocean Science.",
  path: "/climatebase-fellows-start-here",
});

export default function ClimateBaseFellowsStartHerePage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">ClimateBase Fellows</p>
          <h1 className="mt-4 text-4xl">Start Here</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            Welcome. This page is your launch point for joining MOS projects, understanding
            expectations, and getting set up quickly.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Week 1 Checklist</h2>
            <ul className="space-y-2 text-white/70">
              <li>1. Review the current MOS research tracks and focus areas.</li>
              <li>2. Confirm your preferred contribution area with the team.</li>
              <li>3. Read the methods brief for your assigned project.</li>
              <li>4. Join your team channel and introduction thread.</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">How Fellows Contribute</h2>
            <ul className="space-y-2 text-white/70">
              <li>1. Open-data analysis and documentation support.</li>
              <li>2. Visual communication and exhibit development.</li>
              <li>3. Research synthesis and citation quality review.</li>
              <li>4. Structured feedback during project milestones.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Need Help?</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              If you are unsure where to begin, use the contact form and mention that you are a
              ClimateBase Fellow so we can route your message to the right lead.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              Contact MOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
