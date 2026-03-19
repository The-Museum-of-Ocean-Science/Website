import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { exhibits } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return exhibits.map((exhibit) => ({ slug: exhibit.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exhibit = exhibits.find((item) => item.slug === slug);
  if (!exhibit) return {};

  return buildPageMetadata({
    title: exhibit.title,
    description: exhibit.description,
    path: `/exhibits/${exhibit.slug}`,
    image: exhibit.visualAssets[0],
    type: "article",
  });
}

export default async function ExhibitDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exhibit = exhibits.find((item) => item.slug === slug);
  if (!exhibit) notFound();

  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{`${exhibit.type} - ${exhibit.year}`}</p>
          <h1 className="mt-4 text-4xl">{exhibit.title}</h1>
          <p className="mt-4 max-w-3xl text-white/70">{exhibit.description}</p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          {exhibit.embedUrl ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl">Document Preview</h2>
                <a
                  href={exhibit.embedUrl.replace("/preview", "/edit")}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/85 transition hover:border-[color:var(--mos-seafoam)] hover:text-[color:var(--mos-seafoam)]"
                >
                  Open in Google Docs
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                <iframe
                  src={exhibit.embedUrl}
                  title={`${exhibit.title} document preview`}
                  className="h-[78vh] w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="relative h-[70vh] overflow-hidden rounded-2xl border border-white/10">
              <Image src={exhibit.visualAssets[0]} alt={exhibit.title} fill className="object-cover" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
