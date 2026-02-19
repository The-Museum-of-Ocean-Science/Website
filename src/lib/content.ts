export type ProjectTag = "Whitepaper" | "Publication" | "Educational Activity" | "Study";
export type ProjectStatus = "Coming Soon" | "Active" | "Published";

export type Project = {
  title: string;
  slug: string;
  tags: ProjectTag[];
  status: ProjectStatus;
  leadAffiliateSlug: string;
  teamAffiliateSlugs: string[];
  summary: string;
  description: string;
  methods: string[];
  datasets: string[];
  outputs: { label: string; href: string }[];
  featuredImage: string;
  publishedAt: string;
};

export type AffiliateRole =
  | "Provisional Research Associate"
  | "Research Affiliate"
  | "Senior Research Affiliate"
  | "Project Lead"
  | "Leadership Team";

export type Affiliate = {
  name: string;
  slug: string;
  role: AffiliateRole;
  roleModifier?: string;
  termStart: string;
  termEnd?: string;
  bio: string;
  headshot: string;
  projectSlugs: string[];
  artifacts: string[];
  emailVisible: boolean;
  email?: string;
  website?: string;
  fitPoints?: string[];
};

export type OceanRiskSnapshot = {
  title: string;
  slug: string;
  clientType: string;
  location: string;
  summary: string;
  dataSources: string[];
  visuals: string[];
  deliverables: string[];
  pdf: string;
  testimonial?: string;
};

export type Program = {
  title: string;
  slug: string;
  type: "Micro-Lab" | "Course" | "Cohort";
  description: string;
  status: "Upcoming" | "Active" | "Archived";
  duration: string;
  registrationLink?: string;
};

export type Exhibit = {
  title: string;
  slug: string;
  type: "Data Art" | "Virtual Exhibit" | "Lego" | "Gallery";
  description: string;
  visualAssets: string[];
  year: string;
};

export const affiliates: Affiliate[] = [
  {
    name: "Janelle Levine, M.Sc.",
    slug: "elara-reed",
    role: "Leadership Team",
    roleModifier: "CEO & Founder",
    termStart: "2024-01-10",
    bio: "Janelle is a marine scientist working at the intersection of ocean data analysis, climate risk intelligence, and public-facing scientific communication. Her research focuses on satellite-derived environmental datasets, and coastal system change.\n\nShe founded the Museum of Ocean Science as an independent ocean data lab dedicated to structured, reproducible research and clear environmental reporting.",
    headshot: "/assets/janelle-headshot.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
    email: "elara@mos.org",
    website: "https://example.com",
  },
  {
    name: "First & Last Name",
    slug: "maya-okafor",
    role: "Research Affiliate",
    termStart: "2024-05-01",
    bio: "Coming Soon",
    headshot: "/assets/research-2.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
  },
  {
    name: "First & Last Name",
    slug: "jonas-xu",
    role: "Senior Research Affiliate",
    termStart: "2023-09-12",
    bio: "Coming Soon",
    headshot: "/assets/research-2.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
  },
  {
    name: "Open Position",
    slug: "director-operations",
    role: "Leadership Team",
    roleModifier: "Director of Operations",
    termStart: "2024-01-10",
    bio: "The Director of Operations builds and maintains the systems that keep the organization functional and sustainable. This role designs workflows, documents SOPs, runs structured meetings, and ensures tasks and timelines are visible and tracked. They provide practical pushback on scope and pacing while protecting against dropped commitments. Their job is to turn vision into organized execution.",
    headshot: "/assets/research-3.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
    website: "https://www.notion.so/Volunteer-Director-of-Operations-30bedb40905780c69ad1f30d554c2849?source=copy_link",
    fitPoints: [
      "Enjoy building clean systems from scratch.",
      "Prefer structure over chaos.",
      "Are comfortable enforcing timelines calmly.",
      "Feel satisfied when nothing falls through the cracks.",
    ],
  },
  {
    name: "Open Position",
    slug: "director-partnerships",
    role: "Leadership Team",
    roleModifier: "Director of Partnerships",
    termStart: "2024-01-10",
    bio: "The Director of Partnerships develops creative, mission-aligned funding and collaboration pathways compatible with an LLC structure. This role explores sponsorship models, contract opportunities, and innovative revenue concepts while maintaining a realistic and ethical approach. They design partnership proposals and maintain an organized outreach pipeline, working closely with the Founder before any commitments are made. Their focus is sustainable growth without reputational risk.",
    headshot: "/assets/research-2.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
    website: "https://www.notion.so/Director-of-Partnerships-30bedb409057805f834dd9058a0dc453?source=copy_link",
    fitPoints: [
      "Enjoy experimenting with creative funding models.",
      "Think strategically about sustainability, not just outreach.",
      "Like balancing ambition with operational realism.",
      "Are comfortable representing a mission-driven organization thoughtfully.",
    ],
  },
  {
    name: "Open Position",
    slug: "content-research-lead",
    role: "Leadership Team",
    roleModifier: "Research & Content Lead",
    termStart: "2024-01-10",
    bio: "This role requires a published marine scientist/biologist/oceanographer (or other related field) who is confident mentoring others in rigorous, standards-based research.\n\nTheir focus is elevating volunteer work-not producing content independently. This person must be comfortable mentoring contributors through research synthesis, proper citation practices, and clear scientific communication, ensuring projects meet established quality standards.",
    headshot: "/assets/research-3.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
    website: "https://www.notion.so/Research-Content-Lead-30bedb409057801396daea310548f83c?source=copy_link",
    fitPoints: [
      "Have an education in marine science, marine biology, oceanography, or other related field.",
      "Enjoy mentoring and strengthening other people's scientific work.",
      "Care about rigor and clarity in equal measure.",
      "Like improving structure, argument, and evidence quality.",
      "Take pride in elevating others' thinking.",
    ],
  },
  {
    name: "Open Position",
    slug: "community-engagement-lead",
    role: "Leadership Team",
    roleModifier: "Community Engagement Lead",
    termStart: "2024-01-10",
    bio: "The Community Engagement Lead ensures volunteers are clearly onboarded, placed into functional teams, and supported throughout project development. This role maintains clear expectations, strong feedback loops, and consistent internal communication to help contributors produce work they are proud to showcase. They monitor engagement, celebrate milestones, and identify barriers to participation. Their focus is building a calm, high-standard culture centered on meaningful contribution.",
    headshot: "/assets/research-2.png",
    projectSlugs: ["luminous-reef"],
    artifacts: [],
    emailVisible: false,
    website: "https://www.notion.so/Volunteer-Community-Engagement-Lead-30bedb409057802b919de6cc73b09825?source=copy_link",
    fitPoints: [
      "Care about clear expectations and strong teams.",
      "Enjoy organizing people into functional groups.",
      "Notice disengagement early.",
      "Feel proud when others succeed.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Luminous Reef Systems",
    slug: "luminous-reef",
    tags: ["Study", "Publication"],
    status: "Active",
    leadAffiliateSlug: "elara-reed",
    teamAffiliateSlugs: ["maya-okafor", "jonas-xu"],
    summary:
      "An open-data synthesis mapping bioluminescent reef ecosystems and their climate vulnerability signals.",
    description:
      "MOS combines satellite radiometry, in-situ ecological surveys, and community observation logs to profile luminous reef health and rapid changes.",
    methods: [
      "Multi-spectral satellite analysis",
      "In-situ biodiversity sampling",
      "Community science observation",
    ],
    datasets: ["NOAA reef surveys", "Copernicus marine data", "Local diver logs"],
    outputs: [
      { label: "Public Methods Brief", href: "#" },
      { label: "Dataset Release", href: "#" },
    ],
    featuredImage: "/assets/research-1.png",
    publishedAt: "2025-09-30",
  },
];

export const oceanRiskSnapshots: OceanRiskSnapshot[] = [
  {
    title: "Coastal Marina Risk Snapshot",
    slug: "coastal-marina",
    clientType: "Marina",
    location: "Gulf Coast, USA",
    summary:
      "A rapid exposure profile highlighting storm surge risk, infrastructure fragility, and adaptive pathways.",
    dataSources: ["NOAA tides", "FEMA surge models", "Local elevation scans"],
    visuals: ["Risk heatmap", "Tide scenario chart", "Infrastructure timeline"],
    deliverables: ["PDF briefing", "Data appendix", "Priority actions"],
    pdf: "/assets/ocean-risk-sample.pdf",
    testimonial:
      "MOS delivered a clear, visually compelling snapshot that aligned our board quickly.",
  },
];

export const programs: Program[] = [
  {
    title: "Micro-Lab: Coastal Futures",
    slug: "coastal-futures",
    type: "Micro-Lab",
    description: "A six-week sprint exploring open ocean data and design-led adaptation tools.",
    status: "Upcoming",
    duration: "6 weeks",
  },
];

export const exhibits: Exhibit[] = [
  {
    title: "Signals in the Swell",
    slug: "signals-in-the-swell",
    type: "Data Art",
    description: "Immersive data-art installation translating ocean risk models into light.",
    visualAssets: ["/assets/research-2.png"],
    year: "2025",
  },
  {
    title: "Blue Carbon Atlas",
    slug: "blue-carbon-atlas",
    type: "Virtual Exhibit",
    description: "Interactive atlas of coastal carbon sinks and restoration futures.",
    visualAssets: ["/assets/research-3.png"],
    year: "2024",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Exhibits", href: "/exhibits" },
  { label: "Research Affiliates", href: "/affiliates" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  { label: "Ocean Risk Snapshot (Coming Soon)", href: "/ocean-risk", disabled: true },
];



