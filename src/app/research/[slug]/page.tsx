import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/research/${project.slug}`,
    image: project.featuredImage,
    type: "article",
  });
}

export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            {project.tags.join(" Â· ")} Â· {project.status}
          </p>
          <h1 className="mt-4 text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-white/70">{project.summary}</p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="space-y-8">
            {project.embedUrl ? (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl">Document Preview</h2>
                  <a
                    href={project.embedUrl.replace("/preview", "/edit")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/85 transition hover:border-[color:var(--mos-seafoam)] hover:text-[color:var(--mos-seafoam)]"
                  >
                    Open in Google Docs
                  </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <iframe
                    src={project.embedUrl}
                    title={`${project.title} document preview`}
                    className="h-[78vh] w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {project.description ? (
              <div className="space-y-4">
                <h2 className="text-2xl">Overview</h2>
                <p className="text-white/70">{project.description}</p>
              </div>
            ) : null}
            {project.methods.length ? (
              <div className="space-y-4">
                <h3 className="text-xl">Methods</h3>
                <ul className="space-y-2 text-white/70">
                  {project.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.datasets.length ? (
              <div className="space-y-4">
                <h3 className="text-xl">Datasets Used</h3>
                <ul className="space-y-2 text-white/70">
                  {project.datasets.map((dataset) => (
                    <li key={dataset}>{dataset}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

