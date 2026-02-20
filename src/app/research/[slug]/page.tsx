import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { affiliates, projects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/research/${project.slug}`,
    image: project.featuredImage,
    type: "article",
  });
}

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const lead = affiliates.find((person) => person.slug === project.leadAffiliateSlug);
  const team = affiliates.filter((person) => project.teamAffiliateSlugs.includes(person.slug));

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {project.tags.join(" · ")} · {project.status}
          </p>
          <h1 className="mt-4 text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-white/70">{project.summary}</p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl">Overview</h2>
              <p className="text-white/70">{project.description}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl">Methods</h3>
              <ul className="space-y-2 text-white/70">
                {project.methods.map((method) => (
                  <li key={method}>• {method}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl">Datasets Used</h3>
              <ul className="space-y-2 text-white/70">
                {project.datasets.map((dataset) => (
                  <li key={dataset}>• {dataset}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Project Lead</p>
              <p className="mt-4 text-lg text-white">{lead?.name ?? "TBD"}</p>
              <p className="text-sm text-white/60">{lead?.role}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Team Members</p>
              <div className="mt-4 space-y-3 text-white/70">
                {team.map((person) => (
                  <p key={person.slug}>{person.name}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Outputs</p>
              <div className="mt-4 space-y-3 text-sm">
                {project.outputs.map((output) => (
                  <a key={output.label} href={output.href} className="block text-white/70 hover:text-white">
                    {output.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
