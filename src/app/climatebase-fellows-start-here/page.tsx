import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "ClimateBase Fellows Start Here",
  description:
    "Orientation and next steps for ClimateBase Fellows collaborating with the Museum of Ocean Science.",
  path: "/climatebase-fellows-start-here",
});

const faqQuestions = [
  "What is the Museum of Ocean Science (MOS)?",
  "What is expected of ClimateBase Fellows during this fellowship?",
  "How many hours per week should I plan to contribute?",
  "What kinds of projects can I join at MOS?",
  "How are fellows matched to project teams?",
  "What tools and platforms does MOS use for collaboration?",
  "How should I document methods, sources, and decisions in my work?",
  "Who reviews fellow deliverables before publication or release?",
  "How often does the team meet, and are meetings required?",
  "What does successful completion of this fellowship look like?",
];

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
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Frequently Asked Questions</h2>
            <p className="mt-3 text-white/70">
              Start with these core questions as you onboard into ClimateBase fellowship work at
              MOS.
            </p>
            <ol className="mt-8 space-y-4 text-white/80">
              {faqQuestions.map((question, index) => (
                <li
                  key={question}
                  className="rounded-xl border border-white/10 bg-black/30 px-5 py-4"
                >
                  <span className="mr-3 text-white/45">{String(index + 1).padStart(2, "0")}.</span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
