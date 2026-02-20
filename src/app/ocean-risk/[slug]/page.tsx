import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { oceanRiskSnapshots } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return oceanRiskSnapshots.map((snapshot) => ({ slug: snapshot.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const snapshot = oceanRiskSnapshots.find((item) => item.slug === params.slug);
  if (!snapshot) return {};

  return buildPageMetadata({
    title: snapshot.title,
    description: snapshot.summary,
    path: `/ocean-risk/${snapshot.slug}`,
    type: "article",
  });
}

export default function OceanRiskDetail({ params }: { params: { slug: string } }) {
  const snapshot = oceanRiskSnapshots.find((item) => item.slug === params.slug);
  if (!snapshot) notFound();

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Ocean Risk Snapshot</p>
          <h1 className="mt-4 text-4xl">{snapshot.title}</h1>
          <p className="mt-4 text-white/70">{snapshot.summary}</p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-2xl">Project Details</h2>
            <p className="text-white/70">Client Type: {snapshot.clientType}</p>
            <p className="text-white/70">Location: {snapshot.location}</p>
            <h3 className="text-xl">Data Sources</h3>
            <ul className="space-y-2 text-white/70">
              {snapshot.dataSources.map((source) => (
                <li key={source}>• {source}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Deliverables</h2>
            <ul className="space-y-2 text-white/70">
              {snapshot.deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <a
              href={snapshot.pdf}
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              Download PDF
            </a>
            {snapshot.testimonial && (
              <div className="text-sm text-white/60">“{snapshot.testimonial}”</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
