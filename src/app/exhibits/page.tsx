import Image from "next/image";

import { exhibits } from "@/lib/content";

export const metadata = {
  title: "Exhibits | Museum of Ocean Science",
  description: "Art-meets-science exhibits and data installations.",
};

export default function ExhibitsPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Exhibits</p>
          <h1 className="mt-4 text-4xl">Art Meets Science</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Data art, virtual galleries, and immersive exhibits translating ocean research into
            public experience.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {exhibits.map((exhibit) => (
              <div key={exhibit.slug} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative h-56">
                  <Image src={exhibit.visualAssets[0]} alt={exhibit.title} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {exhibit.type} · {exhibit.year}
                  </p>
                  <h2 className="text-2xl">{exhibit.title}</h2>
                  <p className="text-white/70">{exhibit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
