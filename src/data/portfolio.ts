export const SECTION_ID = {
  HOME: "home",
  FOCUS: "focus",
  CASE_STUDY: "case-study",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  ABOUT: "about",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const CONTACT_CHANNEL = {
  EMAIL: "email",
  LINKEDIN: "linkedin",
  GITHUB: "github",
  PORTFOLIO: "portfolio",
} as const;

export type ContactChannel =
  (typeof CONTACT_CHANNEL)[keyof typeof CONTACT_CHANNEL];

export const PROJECT_LINK_KIND = {
  LIVE: "live",
  CODE: "code",
} as const;

export type ProjectLinkKind =
  (typeof PROJECT_LINK_KIND)[keyof typeof PROJECT_LINK_KIND];

export const PROJECT_VISUAL_STYLE = {
  DEFAULT: "default",
  TONED: "toned",
} as const;

export type ProjectVisualStyle =
  (typeof PROJECT_VISUAL_STYLE)[keyof typeof PROJECT_VISUAL_STYLE];

export interface NavItem {
  label: string;
  href: string;
  section: SectionId;
}

export interface ContactLink {
  label: string;
  href: string;
  channel: ContactChannel;
}

export interface ResumeLink {
  href: string;
  label: string;
  fileName: string;
}

export interface LastUpdated {
  display: string;
  isoDate: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
}

export interface HeroContent {
  badge: string;
  heading: string;
  summary: string;
  experienceLabel: string;
  location: string;
  currentRole: string;
  ctaPrimary: ContactLink;
  ctaSecondary: NavItem;
}

export interface FocusArea {
  title: string;
  description: string;
  bullets: string[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  note: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export interface CaseStudyEntry {
  title: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  metrics: CaseStudyMetric[];
  links: ProjectLink[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  domain: string;
}

export interface ExperienceEntry {
  dateRange: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
}

export interface ProjectEntry {
  title: string;
  summary: string;
  stack: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  visualStyle: ProjectVisualStyle;
  links: ProjectLink[];
}

export interface AboutContent {
  paragraphs: string[];
}

export interface SiteContent {
  metaTitle: string;
  metaDescription: string;
  lastUpdated: LastUpdated;
  navItems: NavItem[];
  socialLinks: ContactLink[];
  resume: ResumeLink;
  hero: HeroContent;
  impactMetrics: ImpactMetric[];
  focusAreas: FocusArea[];
  featuredCaseStudy: CaseStudyEntry;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  credentials: Credential[];
  about: AboutContent;
}

export const SITE_CONTENT: SiteContent = {
  metaTitle: "Jesús Muñoz González | Data & Agentic Engineer",
  metaDescription:
    "Data Engineer specialising in resilient cloud data platforms, PySpark, Apache Airflow, Azure, and Databricks.",
  lastUpdated: {
    display: "September 2026",
    isoDate: "2026-09-06",
  },
  navItems: [
    { label: "Home", href: "#home", section: SECTION_ID.HOME },
    { label: "Focus", href: "#focus", section: SECTION_ID.FOCUS },
    {
      label: "Case Study",
      href: "#case-study",
      section: SECTION_ID.CASE_STUDY,
    },
    {
      label: "Experience",
      href: "#experience",
      section: SECTION_ID.EXPERIENCE,
    },
    { label: "Projects", href: "#projects", section: SECTION_ID.PROJECTS },
    { label: "About", href: "#about", section: SECTION_ID.ABOUT },
    { label: "Contact", href: "#contact", section: SECTION_ID.CONTACT },
  ],
  socialLinks: [
    {
      label: "Email",
      href: "mailto:jesusmugo91@gmail.com",
      channel: CONTACT_CHANNEL.EMAIL,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jesus-data-engineer",
      channel: CONTACT_CHANNEL.LINKEDIN,
    },
    {
      label: "GitHub",
      href: "https://github.com/Quejicus",
      channel: CONTACT_CHANNEL.GITHUB,
    },
    {
      label: "Portfolio",
      href: "https://jesus-dataengineer-portfolio.netlify.app/",
      channel: CONTACT_CHANNEL.PORTFOLIO,
    },
  ],
  resume: {
    href: "/CV_Data_Engineer_2026.pdf",
    label: "Download CV",
    fileName: "Jesus_Munoz_Gonzalez_Data_Engineer_CV_2026.pdf",
  },
  hero: {
    badge: "Open to Data & AI Engineering Opportunities",
    heading:
      "Data Engineer building resilient cloud data platforms with PySpark & Airflow.",
    summary:
      "I modernize data platforms with Python, SQL, PySpark, Airflow, Azure, and Databricks—combining scalable delivery with testing, CI/CD, and pragmatic AI-assisted engineering.",
    experienceLabel:
      "4+ years of professional experience in Data Engineering (since June 2022)",
    location: "Based in Spain",
    currentRole: "Data Engineer at NTT DATA Europe & LATAM",
    ctaPrimary: {
      label: "Contact Me",
      href: "mailto:jesusmugo91@gmail.com",
      channel: CONTACT_CHANNEL.EMAIL,
    },
    ctaSecondary: {
      label: "View Projects",
      href: "#projects",
      section: SECTION_ID.PROJECTS,
    },
  },
  impactMetrics: [
    {
      value: "80–100",
      label: "Daily production pipelines",
    },
    {
      value: "150–180",
      label: "Workflows migrated to Airflow",
    },
    {
      value: "~60%",
      label: "Faster end-to-end ETL",
    },
  ],
  focusAreas: [
    {
      title: "Data Engineering",
      description:
        "Resilient ETL design, orchestration, and performance optimization across legacy and modern stacks.",
      bullets: [
        "Batch and near-real-time pipelines",
        "Airflow orchestration and migration",
        "PySpark and distributed data processing",
      ],
    },
    {
      title: "Agentic Engineering",
      description:
        "Production-ready software delivery using agentic engineering tools (Claude Code, OpenCode, Codex) with structured workflows, reusable skills, and quality hooks.",
      bullets: [
        "Tool-assisted implementation loops with explicit planning, execution, and review gates",
        "Reusable skills and command hooks to keep outputs consistent and maintainable",
        "Verification-first delivery with tests, build checks, and safe iteration patterns",
      ],
    },
    {
      title: "Platform & Delivery",
      description:
        "Cloud-native delivery practices that keep teams shipping faster without sacrificing observability.",
      bullets: [
        "Monitoring and operational guardrails",
        "CI/CD discipline and release confidence",
        "Documentation and maintainable standards",
      ],
    },
  ],
  featuredCaseStudy: {
    title: "Mi Calculadora Financiera",
    subtitle:
      "Production financial assistant experience built with agentic engineering workflows",
    summary:
      "A live financial calculator platform delivered in one month using an agentic engineering workflow. Development combined human direction with Claude Code, OpenCode, and Codex to accelerate delivery while keeping production standards.",
    challenge:
      "Build a trustworthy financial UX that explains calculations clearly, supports fast iteration, and remains maintainable as new calculators and assistant flows are added.",
    solution:
      "Defined scoped implementation loops, used tool-assisted coding sessions for feature delivery, and enforced quality hooks for validation before release. The workflow prioritized explicit tasks, review checkpoints, and reproducible changes.",
    outcomes: [
      "Shipped a public, production-ready product from concept to launch in one month.",
      "Improved delivery speed through agentic coding loops without sacrificing quality control.",
      "Established a reusable workflow pattern (skills, hooks, and validation steps) for future products.",
    ],
    stack: [
      "JavaScript",
      "HTML/CSS",
      "Claude Code",
      "OpenCode",
      "Codex",
      "Agentic workflow skills and hooks",
      "SEO and content strategy",
    ],
    metrics: [
      {
        label: "Delivery",
        value: "1 month",
        note: "From scoped requirements to public launch.",
      },
      {
        label: "Workflow",
        value: "Agentic-assisted",
        note: "Claude Code, OpenCode, and Codex used in structured implementation loops.",
      },
      {
        label: "Quality Controls",
        value: "Skills + hooks",
        note: "Reusable guidance and validation checks used before release.",
      },
    ],
    links: [
      {
        label: "Live Site",
        href: "https://micalculadorafinanciera.com/",
        kind: PROJECT_LINK_KIND.LIVE,
      },
    ],
    image: "/projects/micalculadora_screenshot.webp",
    imageWidth: 1200,
    imageHeight: 630,
    domain: "micalculadorafinanciera.com",
  },
  experience: [
    {
      dateRange: "May 2023 - Present",
      role: "Data Engineer",
      company: "NTT DATA Europe & LATAM",
      summary:
        "Designing cloud data platforms across insurance, healthcare, energy, and public-sector projects with a focus on reliable delivery and maintainable engineering.",
      highlights: [
        "Designed and implemented 80–100 production ETL pipelines with Apache Airflow, PySpark, and Stratio for daily workloads ranging from tens to hundreds of GB.",
        "Technically led the migration of 150–180 Pentaho Data Integration workflows to Apache Airflow, improving performance, scalability, and maintainability by approximately 80%.",
        "Optimized large-scale PySpark and HBase pipelines, reducing end-to-end ETL processing time by approximately 60%.",
        "Built 6–8 Python and AWS Lambda microservices for an internal data portal, integrating DynamoDB, Athena, CloudWatch, and REST APIs.",
        "Developed data models and Looker dashboards in BigQuery to support operational, performance, and business reporting teams.",
        "Built Azure and Databricks solutions with automated testing, CI/CD, and AI-assisted development practices.",
      ],
    },
    {
      dateRange: "June 2022 - December 2022",
      role: "Business Intelligence Developer",
      company: "cdmon",
      summary:
        "Delivered internal analytics and automation capabilities for business and engineering teams.",
      highlights: [
        "Designed, developed, and maintained Apache Airflow ETL workflows for more reliable, automated internal reporting.",
        "Built Apache Superset dashboards that helped internal teams monitor operational and business KPIs.",
        "Refactored legacy APIs and backend code, reducing response times by approximately 40%.",
      ],
    },
  ],
  projects: [
    {
      title: "Personal Web Portfolio",
      summary:
        "Portfolio website built with Astro and Tailwind CSS as a lightweight, performant front-end foundation.",
      stack: ["Astro", "Tailwind CSS"],
      image: "/projects/portfolio_current_screenshot.png",
      imageWidth: 1265,
      imageHeight: 712,
      visualStyle: PROJECT_VISUAL_STYLE.DEFAULT,
      links: [
        {
          label: "Code",
          href: "https://github.com/Quejicus/portfolio.dev",
          kind: PROJECT_LINK_KIND.CODE,
        },
      ],
    },
    {
      title: "PC Component Optimization Under Budget Constraints",
      summary:
        "Data science project that combines scraped pricing data, preprocessing, and a genetic algorithm to optimize computer component selection with constraints.",
      stack: ["Python", "Web Scraping", "Genetic Algorithms", "Streamlit"],
      image: "/projects/optimizing_project.webp",
      imageWidth: 960,
      imageHeight: 540,
      visualStyle: PROJECT_VISUAL_STYLE.TONED,
      links: [],
    },
  ],
  credentials: [
    {
      title: "dbt Analytics Engineering Certification",
      issuer: "dbt",
      date: "September 2026",
    },
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "December 2023",
    },
    {
      title: "Professional Data Engineer",
      issuer: "DataCamp",
      date: "September 2024",
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Coursera",
      date: "August 2024",
    },
  ],
  about: {
    paragraphs: [
      "I am a pragmatic Data Engineer who combines analytical rigor with clear communication and maintainable delivery practices.",
      "My current focus is reliable cloud data platforms, analytics engineering, and AI-assisted development workflows that keep quality high as teams move faster.",
      "Outside work, I keep learning through programming projects, chess, and challenges that push me beyond my comfort zone.",
    ],
  },
};
