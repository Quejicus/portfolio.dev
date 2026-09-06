export interface CaseSection { title: string; paragraphs: string[] }
export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  metric: string;
  metricLabel: string;
  role: string;
  stack: string[];
  diagram: string[];
  diagramCaption: string;
  sections: CaseSection[];
  evidence: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  liveUrl?: string;
}
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "airflow-migration",
    category: "Professional work / Public sector",
    title: "Moving 150–180 ETL workflows to Apache Airflow",
    shortTitle: "From Pentaho to Airflow",
    summary: "Technical leadership on a large-scale migration from Pentaho Data Integration to Apache Airflow.",
    metric: "150–180", metricLabel: "ETL workflows migrated",
    role: "Technical lead for the migration · NTT DATA",
    stack: ["Apache Airflow", "Pentaho Data Integration", "ETL"],
    diagram: ["Pentaho Data Integration", "150–180 ETL workflows", "Apache Airflow"],
    diagramCaption: "Migration scope at a glance—not a detailed production architecture.",
    sections: [
      { title: "The context", paragraphs: ["A public-sector data platform used Pentaho Data Integration for its ETL workflows. The engagement involved moving a portfolio of 150–180 workflows to Apache Airflow."] },
      { title: "My contribution", paragraphs: ["At NTT DATA Europe & LATAM, I technically led this migration. The work sits at the intersection of legacy-platform modernisation and workflow orchestration."] },
      { title: "The outcome", paragraphs: ["150–180 ETL workflows migrated from Pentaho Data Integration to Apache Airflow. This is the reported delivery scope; it is not a count of users, jobs per day, or a benchmark of Airflow against Pentaho."] },
      { title: "What the numbers tell you", paragraphs: ["The workflow count shows the breadth of the migration. A comparable runtime baseline and a specific definition of scalability or maintainability would be needed to quantify those improvements separately. No composite improvement percentage is claimed here."] },
    ],
    evidence: "An anonymised summary of professional work reported in my CV. Client-specific code, configurations and operational measurements are not reproduced.",
  },
  {
    slug: "pyspark-optimisation",
    category: "Professional work / Public sector",
    title: "Reducing end-to-end ETL runtime by approximately 60%",
    shortTitle: "Less time in the ETL pipeline",
    summary: "Large-scale PySpark and HBase processing, with hundreds of GB handled in micro-batches.",
    metric: "~60%", metricLabel: "Reduction in ETL runtime",
    role: "Data Engineer · NTT DATA",
    stack: ["PySpark", "HBase", "Micro-batch processing"],
    diagram: ["Hundreds of GB", "5–6 PySpark / HBase ETL pipelines", "~60% lower end-to-end runtime"],
    diagramCaption: "Reported workload, implementation scope and outcome. Not a reconstruction of the data flow.",
    sections: [
      { title: "The context", paragraphs: ["This public-sector engagement involved 5–6 large-scale ETL pipelines using PySpark and HBase. The workloads processed hundreds of GB in micro-batches, making end-to-end processing time an important operational consideration."] },
      { title: "My contribution", paragraphs: ["I worked on the implementation and optimisation of these pipelines at NTT DATA Europe & LATAM, with an emphasis on reducing processing time at the full-pipeline level."] },
      { title: "The outcome", paragraphs: ["The reported result was an approximately 60% reduction in end-to-end ETL runtime. Expressed as a relative index, a baseline of 100 becomes approximately 40; that illustration is not a claim about the original duration in minutes or hours."] },
      { title: "Measurement boundaries", paragraphs: ["This is the result reported in my CV, not a published reproducible benchmark. The original run durations, infrastructure configuration and tuning changes are not included, so the result should not be read as a guaranteed improvement for other workloads."] },
    ],
    evidence: "An anonymised summary based on my CV. The approximate result is retained; no unverified tuning techniques, infrastructure details or financial savings have been added.",
  },
  {
    slug: "financial-calculator",
    category: "Independent product / Web engineering",
    title: "Mi Calculadora Financiera: from concept to public launch",
    shortTitle: "Mi Calculadora Financiera",
    summary: "A live financial calculator platform, built in one month with a human-led, AI-assisted development workflow.",
    metric: "1 month", metricLabel: "From concept to launch",
    role: "Independent product development",
    stack: ["JavaScript", "HTML / CSS", "AI-assisted development"],
    diagram: ["Scope & UX", "Implement & review", "Validate & publish"],
    diagramCaption: "The development workflow, rather than the application’s technical architecture.",
    sections: [
      { title: "The product", paragraphs: ["Mi Calculadora Financiera is a public financial calculator platform. The product focuses on making calculations understandable through a clear financial user experience."] },
      { title: "My contribution", paragraphs: ["I took the product from concept to a public launch in one month. Work included the web interface, calculator experience, and SEO and content structure."] },
      { title: "How I worked", paragraphs: ["Development combined human direction with Claude Code, OpenCode and Codex. Scoped implementation tasks, review checkpoints, reusable skills and validation hooks supported the delivery process.", "These tools describe the implementation workflow; the product’s value is the calculator experience itself."] },
      { title: "The outcome", paragraphs: ["The platform is publicly available at micalculadorafinanciera.com. The one-month figure describes delivery time, not adoption or conversion. No visitor, revenue or accuracy benchmark is claimed here."] },
    ],
    evidence: "Independent project. Delivery time and workflow are based on the project’s existing portfolio description.",
    image: "/projects/micalculadora_screenshot.webp", imageWidth: 1200, imageHeight: 630,
    liveUrl: "https://micalculadorafinanciera.com/",
  },
  {
    slug: "pc-optimisation",
    category: "Independent project / Applied data science",
    title: "Selecting PC components under a budget constraint",
    shortTitle: "A better build within budget",
    summary: "Scraped pricing data and a genetic algorithm applied to constrained PC component selection.",
    metric: "Python", metricLabel: "Data collection to optimisation",
    role: "Data science project",
    stack: ["Python", "Web scraping", "Genetic algorithms", "Streamlit"],
    diagram: ["Pricing data", "Preprocessing & constraints", "Genetic algorithm"],
    diagramCaption: "A simplified overview of the project’s approach.",
    sections: [
      { title: "The problem", paragraphs: ["Choosing computer components involves competing objectives and a fixed budget. This project explores that selection problem with data collection and an optimisation algorithm."] },
      { title: "The approach", paragraphs: ["The project combines scraped pricing data, preprocessing and a genetic algorithm to search for component combinations under constraints. Python supports the data workflow, with Streamlit used for the interface."] },
      { title: "What this demonstrates", paragraphs: ["An end-to-end applied data science exercise: collecting data, preparing it for analysis and framing a practical choice as a constrained search problem.", "A comparison against a simpler baseline would be needed to quantify algorithm quality. No performance advantage, guaranteed global optimum or current live pricing is claimed here."] },
    ],
    evidence: "Project overview based on the existing portfolio. A public repository or demo link has not been supplied.",
    image: "/projects/optimizing_project.webp", imageWidth: 960, imageHeight: 540,
  },
];
