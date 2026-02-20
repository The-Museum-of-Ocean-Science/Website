"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setOffset(window.scrollY);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <section className="relative min-h-[85vh] w-full overflow-visible">
        <div
          className="absolute inset-x-0 top-0 -bottom-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/stars-bg.jpg')",
            transform: `translateY(${-offset * 0.2}px)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 -bottom-96 bg-cover"
          style={{
            backgroundImage: "url('/assets/jellyfish-hero.png')",
            backgroundPosition: "center -170px",
            transform: `translateY(${offset * 0.01}px)`,
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.9) 62%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.9) 62%, rgba(0,0,0,0.65) 78%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 -bottom-96 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "url('/assets/stars-bg.jpg')",
            backgroundSize: "cover",
            transform: `translateY(${-offset * 0.25}px)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 -bottom-96 bg-black/10" />
        <div
          className="absolute inset-x-0 top-[32%] -bottom-96"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.52) 68%, rgba(0,0,0,0.82) 86%, rgba(0,0,0,1) 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-[85vh] items-center pt-72 sm:pt-80">
          <div
            className="mx-auto w-full max-w-4xl px-6 text-center"
            style={{ transform: `translateY(${-offset * 0.6}px)` }}
          >
            <h1 className="mt-6 text-4xl leading-tight text-white sm:text-6xl">
              We study the living,
              <br />
              the lost, and the luminous.
            </h1>
            <p
              className="font-accent mt-10 text-[2.2rem] tracking-[0.12em] text-[color:var(--mos-seafoam)] sm:text-[2.8rem]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Data. Depth. Discovery.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/research"
                className="rounded-full border border-white/25 bg-black/25 px-8 py-3 text-sm uppercase tracking-[0.4em] text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] transition hover:border-white hover:text-white"
              >
                Explore Research
              </Link>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="h-2 w-2 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-divider relative z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 22%, rgba(0,0,0,0.38) 46%, rgba(0,0,0,0.7) 68%, rgba(0,0,0,0.9) 84%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 pt-[8.25rem] pb-20">
          <div className="space-y-14">
            <div className="space-y-6">
              <p
                className="font-display text-base text-[color:var(--mos-seafoam)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About MOS
              </p>
              <h2 className="text-3xl text-white">Open Source Research & Creative Ocean Data Lab</h2>
              <p className="text-white/70">
                The Museum of Ocean Science (MOS) is an independent ocean and climate research
                organization focused on open-data analysis, coastal intelligence, and public-facing
                scientific work.
              </p>
              <p className="text-white/70">
                We design and execute structured research projects using satellite and
                environmental datasets, produce clear climate risk briefings for coastal
                communities and businesses, and develop visually compelling reports that translate
                complex ocean data into accessible knowledge.
              </p>
              <p className="text-white/70">
                MOS brings together scientists, analysts, and designers to collaborate on
                rigorous, well-documented projects with defined standards and measurable outputs.
              </p>
              <p className="text-white/70">
                Our work emphasizes clarity, transparency, and reproducibility.
              </p>
            </div>
            <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,520px)] md:items-start">
                                          <div className="hidden md:block md:mt-2">
                <div className="relative h-[500px] w-full max-w-lg overflow-hidden rounded-xl">
                  <Image
                    src="/assets/focus-areas-jellyfish.png"
                    alt="Jellyfish visual for Focus Areas"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 520px, 0px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 14%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.55) 86%, rgba(0,0,0,0.95) 100%), linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 12%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.95) 100%)",
                    }}
                  />
                </div>
              </div><div
                className="relative z-10 ml-auto mt-12 w-full max-w-xl space-y-8 md:mt-16"
                style={{ transform: `translateY(${-offset * 0.03}px)` }}
              >
                <p
                  className="font-display text-base text-[color:var(--mos-seafoam)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Focus Areas
                </p>
                <div className="space-y-6 text-white/70">
                  <div>
                    <p className="font-display text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>
                      Ocean Data Analysis
                    </p>
                    <p className="mt-2 text-base text-white/65">
                      Applied analysis of open source datasets to quantify marine heat stress,
                      coastal change, and ecosystem trends.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>
                      Data-Driven Visual Communication
                    </p>
                    <p className="mt-2 text-base text-white/65">
                      Reproducible research translated into visual exhibits, data-driven
                      illustrations, and structured public-facing design.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>
                      Public Research Artifacts
                    </p>
                    <p className="mt-2 text-base text-white/65">
                      Standards-driven reports and visualizations built with documented methods, transparent sourcing, and accessible presentation..
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>
                      Collaborative Guided Research Development
                    </p>
                    <p className="mt-2 text-base text-white/65">
                      Structured, mentorship-based collaborations which allow early-career scientists to gain experience while contributing to meaningfully to the field. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-black" style={{ backgroundImage: "none" }}>
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p
                className="font-display text-base text-[color:var(--mos-seafoam)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ocean Risk Snapshot
              </p>
              <h2 className="text-3xl text-white">Decision-ready risk intelligence.</h2>
              <p className="text-white/70">
                A rapid consulting product translating complex ocean data into an executive-ready
                snapshot for coastal assets.
              </p>
              <button
                type="button"
                className="inline-flex cursor-default rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/70"
              >
                Coming Soon
              </button>
            </div>
            <div className="space-y-4">
              <p
                className="font-display text-base text-[color:var(--mos-seafoam)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Involved
              </p>
              <h3 className="text-2xl text-white">Collaborate with MOS</h3>
              <p className="text-white/70">
                Join as an affiliate or partner on open research and exhibit initiatives.
              </p>
              <Link
                href="/affiliates"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              >
                View Affiliates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




