"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SECTION_SPACING_CLASS = "py-20 md:py-24";
const CARD_PANEL_CLASS =
  "rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-[1px]";
const CARD_TITLE_CLASS = "text-xl font-semibold text-white";
const CARD_BODY_CLASS = "mt-3 text-sm leading-relaxed text-white/70";
const CTA_BASE_CLASS =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition duration-200";
const CTA_PRIMARY_CLASS = `${CTA_BASE_CLASS} border border-white/30 bg-black/40 text-white hover:-translate-y-0.5 hover:border-white hover:text-[color:var(--mos-seafoam)]`;
const CTA_SECONDARY_CLASS = `${CTA_BASE_CLASS} border border-white/25 text-white hover:-translate-y-0.5 hover:border-white hover:text-[color:var(--mos-seafoam)]`;
const HERO_CTA_CLASS =
  "rounded-full border border-white/30 bg-black/40 px-8 py-3 text-center leading-tight text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] transition duration-200 hover:-translate-y-0.5 hover:border-white hover:text-[color:var(--mos-seafoam)]";

type ContributorIcon = "users" | "document" | "beaker" | "book";

type ContributorHighlight = {
  icon: ContributorIcon;
  title: string;
  description: string;
};

function renderContributorIcon(icon: ContributorIcon) {
  const sharedProps = {
    "aria-hidden": true,
    className: "h-7 w-7 text-white/45",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  switch (icon) {
    case "users":
      return (
        <svg {...sharedProps}>
          <path d="M9 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M16.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
          <path d="M14.5 18a3.5 3.5 0 0 1 5 0" />
        </svg>
      );
    case "document":
      return (
        <svg {...sharedProps}>
          <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 20V5A1.5 1.5 0 0 1 8.5 3.5Z" />
          <path d="M14 3.5V8h4" />
          <path d="M10 12h4" />
          <path d="M10 15.5h4" />
        </svg>
      );
    case "beaker":
      return (
        <svg {...sharedProps}>
          <path d="M10 3.5h4" />
          <path d="M11 3.5v5.5l-4.8 8.3A2 2 0 0 0 8 20.5h8a2 2 0 0 0 1.8-3.2L13 9V3.5" />
          <path d="M8.8 16h6.4" />
          <path d="M9.8 13.2h4.4" />
        </svg>
      );
    case "book":
      return (
        <svg {...sharedProps}>
          <path d="M4.5 5.5h6a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 0-2.5-2.5h-6Z" />
          <path d="M19.5 5.5h-6A2.5 2.5 0 0 0 11 8v11a2.5 2.5 0 0 1 2.5-2.5h6Z" />
        </svg>
      );
    default:
      return null;
  }
}

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

  const contributorHighlights: ContributorHighlight[] = [
    {
      icon: "users",
      title: "Collaborative Network",
      description:
        "Join scientists, analysts, and designers working together on well-documented projects with defined standards.",
    },
    {
      icon: "document",
      title: "Visible Contributions",
      description:
        "Your analyses, visualizations, and research become documented and credited - not lost in informal channels.",
    },
    {
      icon: "beaker",
      title: "Structured Research",
      description:
        "Participate in projects with clear methodologies, measurable outputs, and rigorous documentation standards.",
    },
    {
      icon: "book",
      title: "Public Communication",
      description:
        "Learn to translate complex ocean data into accessible knowledge for broader public understanding.",
    },
  ];

  const idealApplicants = [
    {
      title: "Scientists & Researchers",
      description:
        "Oceanographers, marine biologists, climate scientists, and environmental researchers seeking to make their work more accessible.",
    },
    {
      title: "Data Analysts",
      description:
        "Those skilled in working with large datasets, statistical analysis, and data visualization who want to apply their skills to ocean data.",
    },
    {
      title: "Designers & Communicators",
      description:
        "Visual designers, science communicators, and writers who can translate complex information into compelling narratives.",
    },
    {
      title: "Educators & Advocates",
      description:
        "Those passionate about environmental education and making ocean science accessible to broader audiences.",
    },
  ];

  return (
    <div>
      <section className="relative min-h-[100svh] w-full overflow-visible">
        <div
          className="absolute inset-x-0 top-0 -bottom-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/stars-bg-opt.webp')",
            transform: `translateY(${-offset * 0.2}px)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 -bottom-96 bg-cover"
          style={{
            backgroundImage: "url('/assets/jellyfish-hero-opt.webp')",
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
            backgroundImage: "url('/assets/stars-bg-opt.webp')",
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
        <div className="relative z-10 flex min-h-[100svh] items-center pt-72 sm:pt-80">
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
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/climatebase-fellows-start-here"
                className={HERO_CTA_CLASS}
              >
                <span className="block text-[13px] uppercase tracking-[0.18em] text-white/70">
                  TURN YOUR OCEAN RESEARCH INTO A
                </span>
                <span className="font-display mt-0.5 block text-base tracking-[0.08em] text-[color:var(--mos-seafoam)] sm:text-lg">
                  Public Exhibit
                </span>
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
        <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-white sm:text-4xl">Join as a Research Affiliate</h2>
            <p className="mt-6 text-lg text-white/70">
              A structured pathway for scientists, analysts, designers, and communicators to
              collaborate on rigorous ocean research with real-world impact.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {contributorHighlights.map((highlight) => (
              <article key={highlight.title} className={CARD_PANEL_CLASS}>
                <div className="mb-4">{renderContributorIcon(highlight.icon)}</div>
                <h3 className={CARD_TITLE_CLASS}>{highlight.title}</h3>
                <p className={CARD_BODY_CLASS}>{highlight.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center md:mt-12">
            <Link href="/climatebase-fellows-start-here" className={CTA_PRIMARY_CLASS}>
              Accepting Proposals through 4/9
            </Link>
          </div>
        </div>
      </section>

      <section className="section-divider bg-black" style={{ backgroundImage: "none" }}>
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 pb-20 md:pt-16 md:pb-24">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6">
              <p
                className="font-display text-base text-[color:var(--mos-seafoam)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About MOS
              </p>
              <h2 className="text-3xl text-white">The Ocean Data Accessibility Problem</h2>
              <p className="text-white/70">
                The ocean is changing quickly, but most people cannot easily access or understand
                the science that explains what is happening.
              </p>
              <p className="text-white/70">
                Huge amounts of ocean and climate data are publicly available. Scientists collect
                satellite observations, field measurements, and ecological data every day. However,
                much of this information lives inside technical datasets, academic journals, or
                institutional research environments that are difficult for most people to access or
                interpret.
              </p>
              <p className="text-white/70">
                At the same time, much of the work people do while exploring science never becomes
                visible. Scientists, communicators, educators, artists, and other collaborators
                often spend months analyzing datasets, building visualizations, testing ideas, or
                writing explanations that never turn into a formal publication. When that happens,
                the work often disappears. Contributors receive little recognition, and there is
                often no clear way to document the work they have done.
              </p>
              <p className="text-white/70">
                As a result, valuable analyses, communication projects, and exploratory research
                often remain scattered, informal, or invisible.
              </p>
              <p className="text-white/70">
                There is a major gap between available ocean data, public curiosity about the
                ocean, and the people capable of turning scientific knowledge into accessible
                public understanding.
              </p>
            </div>
            <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,520px)] md:items-start">
                                          <div className="hidden md:block md:mt-2">
                <div className="relative h-[500px] w-full max-w-lg overflow-hidden rounded-xl">
                  <Image
                    src="/assets/focus-areas-jellyfish-opt.webp"
                    alt="Jellyfish visual for Focus Areas"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 520px, 0px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.22) 100%), linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.09) 8%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.09) 92%, rgba(0,0,0,0.2) 100%)",
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
                  The MOS Research Model
                </p>
                <h3 className="text-2xl text-white">A New Model for Ocean Science Communication</h3>
                <div className="space-y-6 text-white/70">
                  <p>
                    The Museum of Ocean Science (MOS) is an independent ocean and climate research
                    organization focused on open-data analysis, coastal intelligence, and
                    public-facing scientific work.
                  </p>
                  <p>
                    We design and execute structured research projects using satellite and
                    environmental datasets, produce clear climate risk briefings for coastal
                    communities and businesses, and develop visually compelling reports that
                    translate complex ocean data into accessible knowledge.
                  </p>
                  <p>
                    MOS brings together scientists, analysts, and designers to collaborate on
                    rigorous, well-documented projects with defined standards and measurable
                    outputs.
                  </p>
                  <p>
                    Our work emphasizes clarity, transparency, and reproducibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider bg-black" style={{ backgroundImage: "none" }}>
        <div className={`mx-auto w-full max-w-6xl px-6 ${SECTION_SPACING_CLASS}`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl text-white sm:text-4xl">Who Should Apply?</h2>
            <p className="mt-6 text-lg text-white/70">
              MOS welcomes diverse backgrounds and expertise.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {idealApplicants.map((applicant) => (
              <article key={applicant.title} className={CARD_PANEL_CLASS}>
                <h3 className={CARD_TITLE_CLASS}>{applicant.title}</h3>
                <p className={CARD_BODY_CLASS}>{applicant.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 md:mt-20 max-w-3xl text-center">
            <p
              className="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--mos-seafoam)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Involved
            </p>
            <h3 className="mt-4 text-3xl text-white sm:text-4xl">Collaborate with MOS</h3>
            <p className="mt-6 text-lg text-white/70">
              Join as an affiliate or partner on open research and exhibit initiatives. Your
              contributions will be documented, credited, and impactful.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/climatebase-fellows-start-here" className={CTA_PRIMARY_CLASS}>
                Apply for Capstone Project
                <span className="ml-2 text-xs" aria-hidden="true">
                  {"\u2192"}
                </span>
              </Link>
              <Link href="/affiliates" className={CTA_SECONDARY_CLASS}>
                View Affiliates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
