import { programs } from "@/lib/content";

export const metadata = {
  title: "Programs | Museum of Ocean Science",
  description: "Future-facing programs and micro-labs from MOS.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Programs</p>
          <h1 className="mt-4 text-4xl">Educational Programs</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Structured learning experiences connecting ocean data, design, and public impact.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <div key={program.slug} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {program.type} · {program.status}
                </p>
                <h2 className="mt-3 text-2xl">{program.title}</h2>
                <p className="mt-3 text-white/70">{program.description}</p>
                <p className="mt-4 text-sm text-white/50">Duration: {program.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
