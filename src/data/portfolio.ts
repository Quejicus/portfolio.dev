export const SITE_CONTENT = {
  name: "Jesús Muñoz González",
  metaTitle: "Jesús Muñoz González | Analytics & Data Engineer",
  metaDescription: "Analytics & Data Engineer in Spain with 4+ years of experience. dbt, SQL, cloud data platforms and reliable production ETL.",
  lastUpdated: { display: "September 2026", isoDate: "2026-09-06" },
  email: "jesusmugo91@gmail.com",
  linkedin: "https://linkedin.com/in/jesus-data-engineer",
  github: "https://github.com/Quejicus",
  repository: "https://github.com/Quejicus/portfolio.dev",
  resume: { href: "/CV_Data_Engineer_2026.pdf", fileName: "Jesus_Munoz_Gonzalez_Data_Engineer_CV_2026.pdf" },
  navItems: [
    { label: "Work", section: "work" }, { label: "Experience", section: "experience" },
    { label: "About", section: "about" }, { label: "Contact", section: "contact" },
  ],
  metrics: [
    { value: "150–180", label: "Workflows migrated to Airflow", href: "/work/airflow-migration/" },
    { value: "~60%", label: "Reduction in ETL runtime", href: "/work/pyspark-optimisation/" },
    { value: "80–100", label: "Production ETL pipelines built", href: "#experience" },
  ],
  capabilities: [
    { title: "Analytics engineering", description: "dbt and SQL for tested, documented data models that turn warehouse data into trusted reporting layers." },
    { title: "Data platforms", description: "Python, PySpark and Apache Airflow for reliable production ETL and workflow orchestration." },
    { title: "Cloud & delivery", description: "Azure, Databricks, AWS and GCP. Automated testing, CI/CD, APIs and data quality are part of the work." },
  ],
  experience: [
    {
      start: "2023-05", startLabel: "May 2023", end: null, endLabel: "Present",
      role: "Data Engineer", company: "NTT DATA Europe & LATAM",
      summary: "Analytics and cloud data engineering across insurance, healthcare, energy and the public sector. Remote, Spain.",
      highlights: [
        "Designed and implemented 80–100 production ETL pipelines with Airflow, PySpark and Stratio, handling tens to hundreds of GB daily.",
        "Technically led the migration of 150–180 Pentaho Data Integration workflows to Apache Airflow.",
        "Optimised PySpark and HBase ETL pipelines, reducing end-to-end processing time by approximately 60%.",
      ],
      additional: [
        "Built 6–8 Python and AWS Lambda microservices for an internal data portal, integrating DynamoDB, Athena, CloudWatch and REST APIs.",
        "Developed 4–5 data models and Looker dashboards in BigQuery for operational and business reporting.",
        "Built Azure and Databricks solutions with automated testing, CI/CD and AI-assisted development.",
      ],
    },
    {
      start: "2022-06", startLabel: "June 2022", end: "2022-12", endLabel: "December 2022",
      role: "Business Intelligence Developer", company: "cdmon",
      summary: "Internal analytics and reporting automation. Remote, Spain.",
      highlights: [
        "Developed and maintained Apache Airflow workflows for automated internal reporting.",
        "Built Apache Superset dashboards for operational and business KPIs.",
        "Refactored legacy APIs and backend code, reducing response times by approximately 40%.",
      ], additional: [],
    },
  ],
  credentials: [
    { title: "dbt Analytics Engineering Certification", issuer: "dbt", date: "2026-09", label: "September 2026" },
    { title: "Professional Data Engineer", issuer: "DataCamp", date: "2024-09", label: "September 2024" },
    { title: "Google IT Automation with Python", issuer: "Coursera", date: "2024-08", label: "August 2024" },
    { title: "Microsoft Certified: Azure Data Engineer Associate", issuer: "Microsoft", date: "2023-12", label: "December 2023" },
  ],
};
