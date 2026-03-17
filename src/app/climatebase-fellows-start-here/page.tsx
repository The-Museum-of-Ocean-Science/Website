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
  subitems?: string[];
};

type FaqExpandable = {
  intro?: string;
  linkLeadText?: string;
  linkLabel?: string;
  linkHref?: string;
  secondaryLinkLabel?: string;
  secondaryLinkHref?: string;
  secondaryClosing?: string;
  benefits: FaqBenefit[];
  closing?: string;
  linkOnNewParagraph?: boolean;
};

type FaqQuestion = {
  question: string;
  href?: string;
  expandable?: FaqExpandable;
};

const faqQuestions: FaqQuestion[] = [
  {
    question: "What can I expect during the cohort?",
    expandable: {
      intro:
        "We aim to keep our documentation as transparent as possible, but this is a work in progress.",
      linkLeadText: "Feel free to check out the",
      linkLabel: "planning documents",
      linkHref:
        "https://docs.google.com/document/d/18NrWtPUjs_SNdZr687aBT7UWqx31YO3S9-PdqKLm8pQ/edit?tab=t.0#heading=h.oaav9hopg4q6",
      benefits: [],
      closing: "that our leadership team has put together so far.",
      linkOnNewParagraph: true,
    },
  },
  {
    question: "I'm interested! How can I get started?",
    expandable: {
      intro: "Join our",
      linkLabel: "Slack Channel",
      linkHref: "https://museumofoceanscience.slack.com",
      benefits: [],
      closing: "and send a message to Janelle letting her know you're interested!",
    },
  },
  {
    question: "What are the benefits of participating in this capstone?",
    expandable: {
      intro: "Affiliates in good standing who complete qualifying artifacts may receive:",
      benefits: [
        {
          label: "Official Title for the term (can use on resume or Linkedin)",
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
    question:
      "I'm more interested in a leadership position than helping with research or exhibit design. Where can I find more about that?",
    expandable: {
      intro: "Sweet! Check out the",
      linkLabel: "open positions.",
      linkHref: "https://museumofoceanscience.com/affiliates",
      closing:
        "If you see something that you're interested in, or would like to propose a role, please join our",
      secondaryLinkLabel: "Slack Channel",
      secondaryLinkHref: "https://museumofoceanscience.slack.com",
      secondaryClosing: "and message Janelle.",
      benefits: [],
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
                                {question.expandable.intro ? <p>{question.expandable.intro}</p> : null}
                                <p>
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
                          {question.expandable.benefits.length ? (
                            <ul className="list-disc space-y-2 pl-5">
                              {question.expandable.benefits.map((benefit) => (
                                <li key={benefit.label}>
                                  {benefit.label}
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
                          {!question.expandable.linkHref && question.expandable.closing ? (
                            <p>{question.expandable.closing}</p>
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
