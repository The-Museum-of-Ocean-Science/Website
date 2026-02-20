import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact the Museum of Ocean Science.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contact</p>
          <h1 className="mt-4 text-4xl">Let's Talk</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Reach out about research collaborations, ocean risk consulting, or exhibitions.
          </p>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <form className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Email"
              type="email"
            />
            <input
              className="md:col-span-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Organization"
            />
            <textarea
              className="md:col-span-2 min-h-[140px] w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white"
              placeholder="Message"
            />
            <button
              type="button"
              className="md:col-span-2 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
