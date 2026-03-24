import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "ClimateBase Fellows Start Here",
  description:
    "Orientation and next steps for ClimateBase Fellows collaborating with the Museum of Ocean Science.",
  path: "/climatebase-fellows-start-here",
});

type FaqBenefit = {
  label: string;
  href?: string;
  subitems?: string[];
};

type FaqStepOption = {
  label: string;
  href?: string;
  detail?: string;
  detailLinkLabel?: string;
  detailLinkHref?: string;
  detailClosing?: string;
  detailSecondaryLinkLabel?: string;
  detailSecondaryLinkHref?: string;
  detailSecondaryClosing?: string;
};

type FaqStep = {
  label: string;
  href?: string;
  linkLabel?: string;
  postLinkText?: string;
  options?: FaqStepOption[];
};

type FaqExpandable = {
  intro?: string;
  linkLeadText?: string;
  linkLabel?: string;
  linkHref?: string;
  secondaryLeadText?: string;
  secondaryLinkLabel?: string;
  secondaryLinkHref?: string;
  secondaryClosing?: string;
  benefits: FaqBenefit[];
  closing?: string;
  closingBeforeBenefits?: boolean;
  resourcesIntro?: string;
  resources?: FaqBenefit[];
  linkOnNewParagraph?: boolean;
};

type FaqQuestion = {
  question: string;
  href?: string;
  expandable?: FaqExpandable;
};

const gettingStartedSteps: FaqStep[] = [
  {
    label: "Join our Slack Channel to explore and ask questions.",
    href: "https://join.slack.com/t/museumofoceanscience/shared_invite/zt-3the54sjo-1REeVZSWBPW144io7oxJAg",
    linkLabel: "Join our Slack Channel",
    postLinkText: " to explore and ask questions. Anyone is welcome, even if you're just curious.",
  },
  {
    label: "Decide how you'd like to participate.",
    options: [
      {
        label: "Propose a project.",
        detailLinkLabel: "Use this form to tell us your idea.",
        detailLinkHref: "https://forms.gle/4xWM6W2MoMXWH2bZ7",
      },
      {
        label: "Join someone else's project.",
        detailLinkLabel: "Join our Slack Channel",
        detailLinkHref: "https://join.slack.com/t/museumofoceanscience/shared_invite/zt-3the54sjo-1REeVZSWBPW144io7oxJAg",
        detailClosing: " and let Janelle know you're interested.",
      },
      {
        label: "Join the leadership team or become a mentor",
        detail: "Sweet,",
        detailLinkLabel: "click here to see the leadership openings",
        detailLinkHref: "https://museumofoceanscience.com/affiliates",
        detailClosing: ", or message Janelle on ",
        detailSecondaryLinkLabel: "Slack",
        detailSecondaryLinkHref: "https://join.slack.com/t/museumofoceanscience/shared_invite/zt-3the54sjo-1REeVZSWBPW144io7oxJAg",
        detailSecondaryClosing: " if you don't see what you're looking for.",
      },
    ],
  },
  {
    label: "Set up a meeting so that we get to meet you.",
    href: "https://calendly.com/janelle-levine/30min",
  },
];

const faqQuestions: FaqQuestion[] = [
  {
    question: "What kinds of projects can I work on?",
    expandable: {
      intro:
        "As a Research Affiliate, you have the option to work on an Exhibit or a Research Question.",
      benefits: [
        {
          label:
            "Exhibits focus on translating ocean science into visual, interactive, and accessible experiences.",
        },
        {
          label:
            "Research Projects focus on answering a clear question through data, methods, and reproducible analysis.",
        },
      ],
      resourcesIntro: "You can find a more comprehensive description of the standards here:",
      resources: [
        { label: "Exhibit Standards", href: "/exhibits/exhibit-standards" },
        { label: "Research Standards", href: "/research/research-project-standards" },
      ],
    },
  },
  {
    question: "What can I expect during the cohort?",
    expandable: {
      intro:
        "We're still actively working on this documentation, but you're welcome to see what we've put together so far.",
      linkLeadText: "Feel free to check out the",
      linkLabel: "planning documents",
      linkHref:
        "https://docs.google.com/document/d/18NrWtPUjs_SNdZr687aBT7UWqx31YO3S9-PdqKLm8pQ/edit?tab=t.0#heading=h.oaav9hopg4q6",
      benefits: [],
      closing: ", which will remain publicly at least through the end of the cohort.",
      secondaryLeadText:
        "However, if you can't find what you're looking for, we really encourage you to join the",
      secondaryLinkLabel: "Slack Channel",
      secondaryLinkHref: "https://join.slack.com/t/museumofoceanscience/shared_invite/zt-3the54sjo-1REeVZSWBPW144io7oxJAg",
      secondaryClosing: "and ask someone on the team!",
      linkOnNewParagraph: true,
    },
  },
  {
    question: "What are the benefits of participating in this capstone?",
    expandable: {
      intro: "Affiliates in good standing who complete qualifying artifacts may receive:",
      benefits: [
        {
          label: "Official Title for one year (can use on resume or Linkedin)",
          subitems: [
            "Research Affiliate",
            "Senior Research Affiliate",
            "Project Lead / Project Manager",
            "Functional designation or title",
          ],
        },
        {
          label: "Museum email address for duration of term",
          subitems: ["name@museumofoceanscience.com"],
        },
        { label: "Public profile listed on museumofoceanscience.com" },
        {
          label:
            "Letter of recommendation with MOS header, confirming affiliation and contribution",
        },
        { label: "Eligibility for consideration in contract-funded projects" },
        { label: "Educational and Mentorship opportunities" },
      ],
      closing:
        "These benefits are contingent upon artifact completion and adherence to standards.",
    },
  },
  {
    question: "What is your stance on using AI to complete projects?",
    expandable: {
      intro:
        "Transparency is a core value for our team, including when it comes to AI. This website was built with AI assistance, and AI tools are used throughout program operations. The bigger accountability questions sit with the companies developing these tools, but that doesn't make using AI uncomplicated.",
      benefits: [],
      closing:
        "In a nutshell, MOS is pro-AI but anti-slop. Rather than avoiding AI outright, we are choosing to maintain a clear-eyed sense of when it actually helps and when it undermines your credibility or craft. That question sits at the heart of good science communication, and it's one Research Affiliates are encouraged to bring into their own work and to MOS.",
    },
  },
];

export default function ClimateBaseFellowsStartHerePage() {
  return (
    <div className="bg-black text-white">
      <section className="pt-48 sm:pt-56">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">ClimateBase Fellows</p>
          <h1 className="mt-4 text-4xl">Start Here</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            Welcome! We&apos;re so glad you&apos;d like to join us, and invite you to explore what has
            already been worked on. Please keep in mind that this is a work-in-progress, and that
            we hope to continue updating this page with questions and answers as they arise.
          </p>
          <div className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">How To Join</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              {gettingStartedSteps.map((step, stepIndex) => (
                <div key={step.label}>
                  <p>
                    <span className="font-semibold text-white">{`Step ${stepIndex + 1}: `}</span>
                    {step.href ? (
                      <>
                        <a
                          href={step.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                        >
                          {step.linkLabel ?? step.label}
                        </a>
                        {step.postLinkText ? <span>{step.postLinkText}</span> : null}
                      </>
                    ) : (
                      <span>{step.label}</span>
                    )}
                  </p>
                  {step.options?.length ? (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent shadow-[0_24px_40px_-32px_rgba(0,0,0,0.9)]">
                      <table className="min-w-full table-fixed text-left text-[13px] text-white/80">
                        <thead>
                          <tr className="border-b border-white/10 bg-black/35">
                            <th className="w-[43%] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                              I would like to...
                            </th>
                            <th className="w-10 px-1 py-2.5" aria-hidden="true"></th>
                            <th className="px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                              What to do next
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {step.options.map((option, optionIndex) => (
                            <tr
                              key={option.label}
                              className="align-top odd:bg-white/[0.015] even:bg-white/[0.04] transition-colors hover:bg-white/[0.08]"
                            >
                              <td className="px-4 py-2.5 text-white/90">
                                <div className="flex items-center gap-3">
                                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-medium text-white/70">
                                    {optionIndex + 1}
                                  </span>
                                  <span className="leading-snug text-[13px]">
                                    {option.href ? (
                                      <a
                                        href={option.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                      >
                                        {option.label}
                                      </a>
                                    ) : (
                                      <span>{option.label}</span>
                                    )}
                                  </span>
                                </div>
                              </td>
                              <td className="w-10 px-1 py-2.5 text-center align-middle text-sm text-white/35">
                                <span aria-hidden="true">{"\u2192"}</span>
                              </td>
                              <td className="px-4 py-2.5 leading-relaxed text-[13px] text-white/75">
                                {option.detail ? `${option.detail} ` : null}
                                {option.detailLinkLabel && option.detailLinkHref ? (
                                  <a
                                    href={option.detailLinkHref}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                  >
                                    {option.detailLinkLabel}
                                  </a>
                                ) : null}
                                {option.detailClosing ? option.detailClosing : null}
                                {option.detailSecondaryLinkLabel && option.detailSecondaryLinkHref ? (
                                  <a
                                    href={option.detailSecondaryLinkHref}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                  >
                                    {option.detailSecondaryLinkLabel}
                                  </a>
                                ) : null}
                                {option.detailSecondaryClosing ? option.detailSecondaryClosing : null}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider mt-10">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl">Frequently Asked Questions</h2>
            <ol className="mt-8 space-y-4 text-white/80">
              {faqQuestions.map((question, index) => (
                <li
                  key={question.question}
                  className="rounded-xl border border-white/10 bg-black/30 px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="pt-[1px] text-white/45">{String(index + 1).padStart(2, "0")}.</span>
                    {question.expandable ? (
                      <details className="flex-1">
                        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                          <span className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]">
                            {question.question}
                          </span>
                        </summary>
                        <div className="mt-4 space-y-4 text-sm text-white/75">
                          {question.expandable.linkHref ? (
                            question.expandable.linkOnNewParagraph ? (
                              <>
                                <p>
                                  {question.expandable.intro ? `${question.expandable.intro} ` : null}
                                  {question.expandable.linkLeadText
                                    ? `${question.expandable.linkLeadText} `
                                    : null}
                                  <a
                                    href={question.expandable.linkHref}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                  >
                                    {question.expandable.linkLabel}
                                  </a>
                                  {question.expandable.closing ? ` ${question.expandable.closing}` : null}
                                </p>
                                {question.expandable.secondaryLeadText &&
                                question.expandable.secondaryLinkHref &&
                                question.expandable.secondaryLinkLabel ? (
                                  <p>
                                    {question.expandable.secondaryLeadText}{" "}
                                    <a
                                      href={question.expandable.secondaryLinkHref}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                    >
                                      {question.expandable.secondaryLinkLabel}
                                    </a>
                                    {question.expandable.secondaryClosing
                                      ? ` ${question.expandable.secondaryClosing}`
                                      : null}
                                  </p>
                                ) : null}
                              </>
                            ) : (
                              <p>
                                {question.expandable.intro ? `${question.expandable.intro} ` : null}
                                <a
                                  href={question.expandable.linkHref}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                >
                                  {question.expandable.linkLabel}
                                </a>
                                {question.expandable.closing ? ` ${question.expandable.closing}` : null}
                                {question.expandable.secondaryLinkHref &&
                                question.expandable.secondaryLinkLabel ? (
                                  <>
                                    {" "}
                                    <a
                                      href={question.expandable.secondaryLinkHref}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                    >
                                      {question.expandable.secondaryLinkLabel}
                                    </a>
                                  </>
                                ) : null}
                                {question.expandable.secondaryClosing
                                  ? ` ${question.expandable.secondaryClosing}`
                                  : null}
                              </p>
                            )
                          ) : null}
                          {!question.expandable.linkHref && question.expandable.intro ? (
                            <p>{question.expandable.intro}</p>
                          ) : null}
                          {!question.expandable.linkHref &&
                          question.expandable.closingBeforeBenefits &&
                          question.expandable.closing ? (
                            <p>{question.expandable.closing}</p>
                          ) : null}
                          {question.expandable.benefits.length ? (
                            <ul className="list-disc space-y-2 pl-5">
                              {question.expandable.benefits.map((benefit) => (
                                <li key={benefit.label}>
                                  {benefit.href ? (
                                    <a
                                      href={benefit.href}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                    >
                                      {benefit.label}
                                    </a>
                                  ) : (
                                    benefit.label
                                  )}
                                  {benefit.subitems?.length ? (
                                    <ul className="mt-2 list-disc space-y-1 pl-5">
                                      {benefit.subitems.map((subitem) => (
                                        <li key={subitem}>{subitem}</li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {!question.expandable.linkHref &&
                          !question.expandable.closingBeforeBenefits &&
                          question.expandable.closing ? (
                            <p>{question.expandable.closing}</p>
                          ) : null}
                          {question.expandable.resourcesIntro ? (
                            <p>{question.expandable.resourcesIntro}</p>
                          ) : null}
                          {question.expandable.resources?.length ? (
                            <ul className="list-disc space-y-2 pl-5">
                              {question.expandable.resources.map((resource) => (
                                <li key={resource.label}>
                                  {resource.href ? (
                                    <a
                                      href={resource.href}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                                    >
                                      {resource.label}
                                    </a>
                                  ) : (
                                    resource.label
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </details>
                    ) : question.href ? (
                      <a
                        href={question.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline decoration-white/25 underline-offset-4 transition hover:text-[color:var(--mos-seafoam)] hover:decoration-[color:var(--mos-seafoam)]"
                      >
                        {question.question}
                      </a>
                    ) : (
                      <span>{question.question}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

