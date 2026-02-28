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
  visualStyle: ProjectVisualStyle;
  links: ProjectLink[];
}

export interface AboutContent {
  paragraphs: string[];
}

export interface SiteContent {
  metaTitle: string;
  metaDescription: string;
  navItems: NavItem[];
  socialLinks: ContactLink[];
  hero: HeroContent;
  focusAreas: FocusArea[];
  featuredCaseStudy: CaseStudyEntry;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  about: AboutContent;
}

export const SITE_CONTENT: SiteContent = {
  metaTitle: "Jesús Muñoz González | Data & Agentic Engineer",
  metaDescription:
    "Data Engineer at NTT DATA building scalable ETL platforms and agentic AI workflows focused on reliability, observability, and delivery.",
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
  hero: {
    badge: "Open to Data & AI Engineering Opportunities",
    heading:
      "Data & Agentic Engineer focused on high-performance ETL, data platforms, and autonomous AI workflows.",
    summary:
      "I design and optimize data systems that scale. Today I build production ETL pipelines at NTT DATA and expand into agentic engineering with reliable tool-calling workflows.",
    experienceLabel:
      "3+ years of professional experience in Data Engineering (since June 2022)",
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
      title: "Agentic Systems",
      description:
        "Autonomous workflows with tool-calling agents designed for deterministic behavior and safe execution.",
      bullets: [
        "Structured prompts and tool contracts",
        "Multi-step agent workflow design",
        "Reliability and fallback strategies",
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
    subtitle: "Agentic financial assistant and calculator web experience",
    summary:
      "A production website built last month with agentic engineering practices. The goal was to create a financial calculator experience that is understandable, fast, and user-focused.",
    challenge:
      "Translate financial concepts into a frictionless UX while preserving technical trust, clarity, and extensibility for future calculators and assistant flows.",
    solution:
      "Implemented a modular calculator architecture, explicit calculation flows, and content framing designed to improve user confidence. Applied an agentic engineering approach to accelerate iteration with controlled quality.",
    outcomes: [
      "Shipped a polished public product with clear value proposition and call to action.",
      "Reduced ambiguity in user flows with straightforward input-output interactions.",
      "Established a reusable pattern for future decision-support tools.",
    ],
    stack: [
      "JavaScript",
      "HTML/CSS",
      "SEO and content strategy",
      "Agentic engineering workflow",
    ],
    metrics: [
      {
        label: "Delivery",
        value: "1 month",
        note: "From concept to live launch.",
      },
      {
        label: "Product Shape",
        value: "Live web app",
        note: "Publicly accessible and actively usable.",
      },
      {
        label: "Engineering Model",
        value: "Agentic-driven",
        note: "Iterative implementation with AI workflow support.",
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
    domain: "micalculadorafinanciera.com",
  },
  experience: [
    {
      dateRange: "May 2023 - Present",
      role: "Data Engineer",
      company: "NTT DATA Europe & LATAM",
      summary:
        "Designing and maintaining data pipelines across public-sector projects with strong reliability and delivery expectations.",
      highlights: [
        "Developed ETL pipelines using PySpark and HBase for environmental programs in Andalusia.",
        "Migrated legacy Pentaho Data Integration pipelines to Apache Airflow for Tenerife initiatives.",
        "Contributed to maintainability and operational quality across multi-project data workflows.",
      ],
    },
    {
      dateRange: "June 2022 - December 2022",
      role: "Business Intelligence Developer",
      company: "cdmon",
      summary:
        "Delivered internal analytics and automation capabilities for business and engineering teams.",
      highlights: [
        "Built and maintained ETL pipelines with Apache Airflow.",
        "Created insight dashboards and reporting flows using Apache Superset.",
        "Developed internal APIs and improved legacy code reliability.",
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
      visualStyle: PROJECT_VISUAL_STYLE.TONED,
      links: [],
    },
  ],
  about: {
    paragraphs: [
      "I am an adaptable and pragmatic engineer who enjoys combining analytical rigor with creative problem-solving.",
      "My current focus is building robust data systems and extending that mindset into agentic engineering patterns that are production-ready.",
      "Outside work, I keep learning through programming projects, chess, and challenges that push me beyond my comfort zone.",
    ],
  },
};
