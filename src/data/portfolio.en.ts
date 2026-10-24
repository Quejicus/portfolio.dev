import { SITE_CONTENT } from "./portfolio";

export const EN_SITE_CONTENT: typeof SITE_CONTENT = {
  ...SITE_CONTENT,
  metaTitle: "Jesús Muñoz González | AI-Assisted Web Development, Automation & Data",
  metaDescription: "I help small and medium-sized businesses turn ideas and manual processes into custom web applications, Python/API automations and business dashboards.",
  lastUpdated: { ...SITE_CONTENT.lastUpdated, display: "October 2026" },
  navItems: [
    { label: "Projects", section: "work" }, { label: "Services", section: "services" },
    { label: "Experience", section: "experience" }, { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ],
  metrics: [
    { value: "1 month", label: "To design, build and launch Mi Calculadora Financiera", href: "/work/financial-calculator/" },
    { value: "~60%", label: "Reduction in runtime for optimised ETL pipelines", href: "/work/pyspark-optimisation/" },
    { value: "150–180", label: "ETL workflows migrated from Pentaho to Apache Airflow", href: "/work/airflow-migration/" },
  ],
  capabilities: [
    { title: "Custom Web Applications with AI-Assisted Development", description: "I design and build web applications, customer calculators, internal portals and MVPs. I use AI to support development, with technical review and testing before release." },
    { title: "Process Automation & Integrations", description: "I connect your business tools through REST APIs and automate repetitive tasks with Python, FastAPI, AWS Lambda and Apache Airflow." },
    { title: "Business Dashboards & Analytics", description: "I organise your data and spreadsheets with SQL, dbt and BigQuery, then build dashboards in Power BI, Looker or Superset so you can track sales, operations and business KPIs." },
  ],
  experience: [
    {
      start: "2026-10", startLabel: "October 2026", end: null, endLabel: "Present",
      role: "AI-Assisted Web Application Developer & Automation Consultant",
      company: "Independent Products & Client Projects (Remote, Spain)",
      summary: "Web applications, digital products and automation for small and medium-sized businesses.",
      highlights: [
        "Design, development and deployment of custom web applications and independent digital products, combining modern web architectures (JavaScript, Astro, Python) with AI-assisted engineering workflows (Copilot, AI agents and LLMs).",
        "Development of process automations, REST API integrations, serverless microservices and analytics dashboards for small and medium-sized businesses.",
      ],
      additional: [],
    },
    {
      start: "2023-05", startLabel: "May 2023", end: "2026-10", endLabel: "October 2026",
      role: "Data Engineer (Remote, Spain)", company: "NTT DATA Europe & LATAM",
      summary: "Data engineering, microservice development, automation and cloud analytics for major clients in insurance, healthcare, energy, banking and the public sector:",
      highlights: [
        "AXA Seguros: Developed enterprise solutions with Azure, Databricks and PySpark, using automated testing, CI/CD and AI-assisted development (Copilot skills and AI workers).",
        "Servicio Canario de Salud: Designed and implemented 80–100 production ETL pipelines with Apache Airflow, PySpark and Stratio, processing up to hundreds of GB daily.",
        "Moeve (CEPSA): Built 6–8 serverless microservices with Python and AWS Lambda for an internal data portal, integrating DynamoDB, Athena, CloudWatch and REST APIs.",
        "CaixaBank: Created 4–5 data models and dashboards with BigQuery, dbt and Looker to monitor operational and business KPIs.",
        "Junta de Andalucía: Optimised 5–6 large-scale PySpark and HBase pipelines, reducing processing times by approximately 60%.",
        "Cabildo de Tenerife: Technically led the migration of 150–180 ETL workflows from Pentaho to Apache Airflow, improving performance and maintainability by approximately 80%, alongside Power BI reporting.",
      ],
      additional: [],
    },
    {
      start: "2022-06", startLabel: "June 2022", end: "2022-12", endLabel: "December 2022",
      role: "Business Intelligence Developer (Remote, Spain)", company: "cdmon",
      summary: "Internal analytics and reporting automation.",
      highlights: [
        "Designed and maintained automated Apache Airflow workflows for internal reporting.",
        "Created interactive Apache Superset dashboards to track operational and business KPIs.",
        "Refactored legacy APIs and optimised backend code, reducing response times by approximately 40%.",
      ],
      additional: [],
    },
  ],
  credentials: SITE_CONTENT.credentials.map((credential) => ({
    ...credential,
    label: new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${credential.date}-01T00:00:00Z`)),
  })),
};
