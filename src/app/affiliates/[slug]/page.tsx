import Image from "next/image";
import { notFound } from "next/navigation";

import { affiliates, projects } from "@/lib/content";

export function generateStaticParams() {
  return affiliates.map((affiliate) => ({ slug: affiliate.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const affiliate = affiliates.find((item) => item.slug === params.slug);
  if (!affiliate) return {};
  return {
    title: `${affiliate.name} | MOS Affiliates`,
    description: affiliate.bio,
  };
}

export default function AffiliateDetail({ params }: { params: { slug: string } }) {
  const affiliate = affiliates.find((item) => item.slug === params.slug);
  if (!affiliate) notFound();

  const related = projects.filter((project) => affiliate.projectSlugs.includes(project.slug));

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">
            <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
              <Image src={affiliate.headshot} alt={affiliate.name} fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Affiliate Profile</p>
              <h1 className="text-4xl">{affiliate.name}</h1>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                {affiliate.role} {affiliate.roleModifier ? `· ${affiliate.roleModifier}` : ""}
              </p>
              <p className="text-white/70">{affiliate.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider mt-12">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <h2 className="text-2xl">Active Projects</h2>
          <div className="mt-6 space-y-4">
            {related.map((project) => (
              <div key={project.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {project.tags.join(" · ")} · {project.status}
                </p>
                <h3 className="mt-3 text-xl">{project.title}</h3>
                <p className="mt-2 text-white/70">{project.summary}</p>
              </div>
            ))}
            {related.length === 0 && <p className="text-white/60">Projects are in development.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

