import { CASE_STUDIES, type CaseStudy } from "./work";

type CaseTranslation = Omit<CaseStudy, "slug" | "image" | "imageWidth" | "imageHeight" | "liveUrl" | "previewFlow">;

const translations: Record<string, CaseTranslation> = {
  "realidad-multipolar": {
    category: "Personal Project / Editorial Platform",
    title: "Realidad Multipolar",
    shortTitle: "Realidad Multipolar",
    linkLabel: "View project: Realidad Multipolar",
    summary: "An editorial platform in development comparing how different geopolitical perspectives cover the same event, with claims linked to their sources.",
    metric: "WIP", metricLabel: "In development",
    role: "Personal project in development",
    stack: ["TypeScript", "Cloudflare Workers", "AI-assisted processing"],
    diagram: ["Sources and perspectives", "AI-assisted collection and drafting", "Coverage linked to sources"],
    diagramCaption: "A simplified overview of the editorial approach of the platform in development.",
    sections: [
      { title: "The project", paragraphs: ["Realidad Multipolar is an editorial platform organising coverage of the same event by geopolitical perspective and source. It lets readers compare how a topic is presented from different viewpoints."] },
      { title: "The technical approach", paragraphs: ["The platform uses TypeScript and Cloudflare Workers, with AI-assisted collection and drafting. Claims are linked to their sources so readers can consult the original material."] },
      { title: "Current status", paragraphs: ["The project is in development and can be visited at realidadmultipolar.com. This case study describes its current approach, not reach, usage or impact results."] },
    ],
    evidence: "Personal project in development. This case study outlines the platform's editorial and technical approach, without presenting usage metrics or measured outcomes.",
  },
  "financial-calculator": {
    category: "Digital Product / AI-Assisted Web Development",
    title: "Mi Calculadora Financiera: from idea to launch",
    shortTitle: "Mi Calculadora Financiera",
    linkLabel: "View project: Mi Calculadora Financiera",
    summary: "I designed, built and launched this financial calculator platform in one month, using AI-assisted development with technical oversight. It is an example of a custom web application that helps users make calculations easily.",
    metric: "1 month", metricLabel: "From idea to launch",
    role: "Independent product design, development and launch",
    stack: ["JavaScript", "HTML / CSS", "AI-assisted development", "Web App"],
    diagram: ["Scope and user experience", "Development and review", "Validation and launch"],
    diagramCaption: "An overview of the product development workflow.",
    sections: [
      { title: "The product", paragraphs: ["Mi Calculadora Financiera is a public financial calculator platform. It makes calculations easier to understand through a clear, interactive user experience."] },
      { title: "My contribution", paragraphs: ["I took the product from idea to public launch in one month. The work covered the web interface, calculator experience, content structure and SEO."] },
      { title: "How I worked", paragraphs: ["I defined the scope and reviewed work produced with Claude Code, OpenCode and Codex. I broke development into specific tasks, with review checkpoints and validation before launch.", "AI supported development; product decisions, review and validation remained my responsibility."] },
      { title: "The result", paragraphs: ["The platform is available at micalculadorafinanciera.com. The one-month timeframe covers development and launch; usage and conversion metrics are outside the scope of this case study."] },
    ],
    evidence: "Independent digital product. The delivery timeframe and workflow describe the development of this platform.",
  },
  "pc-optimisation": {
    category: "Automation & Applied Data",
    title: "Price Automation & Budget Optimiser",
    shortTitle: "Price Automation & Budget Optimiser",
    linkLabel: "View case study: Budget optimiser",
    summary: "A Python project combining web scraping, a genetic algorithm and a Streamlit interface to choose computer components within a budget. The approach can also be adapted to price monitoring and purchase planning.",
    metric: "Python", metricLabel: "From data collection to optimisation",
    role: "Applied data science project development",
    stack: ["Python", "Web Scraping", "Genetic Algorithms", "Streamlit"],
    diagram: ["Price collection", "Preparation and constraints", "Genetic algorithm"],
    diagramCaption: "A simplified overview of the project's approach.",
    sections: [
      { title: "The problem", paragraphs: ["Choosing computer components means balancing different needs within a fixed budget. Originally called A better build within budget, this project approaches that choice through price collection and an optimisation algorithm."] },
      { title: "The solution", paragraphs: ["The project combines automated web price collection, data preparation and a genetic algorithm to search for component combinations that meet the constraints. Python supports the data workflow, while Streamlit provides the interface."] },
      { title: "Business applications", paragraphs: ["The same approach could be adapted to track competitors’ prices or plan purchases within a fixed budget.", "The project demonstrates the complete workflow; it does not publish an algorithm performance benchmark or live, up-to-date prices."] },
    ],
    evidence: "Independent automation and optimisation project. This page outlines its approach and scope.",
  },
  "airflow-migration": {
    category: "Large-Scale Automation / Public Sector",
    title: "From Pentaho to Airflow: 150–180 automated workflows migrated",
    shortTitle: "From Pentaho to Airflow",
    linkLabel: "Read case study: From Pentaho to Airflow",
    summary: "I led the technical work to migrate 150–180 ETL workflows from Pentaho to Apache Airflow, with a reported improvement of approximately 80% in performance and maintainability.",
    metric: "150–180", metricLabel: "Workflows migrated",
    role: "Technical migration lead · NTT DATA",
    stack: ["Apache Airflow", "Pentaho Data Integration", "ETL"],
    diagram: ["Pentaho Data Integration", "150–180 ETL workflows", "Apache Airflow"],
    diagramCaption: "An overview of the migration scope, without reproducing the production architecture.",
    sections: [
      { title: "The context", paragraphs: ["The Cabildo de Tenerife data platform used Pentaho Data Integration for its ETL processes. The project involved modernising 150–180 workflows and moving them to Apache Airflow."] },
      { title: "My contribution", paragraphs: ["At NTT DATA Europe & LATAM, I led the technical side of the migration, updating the existing platform and moving workflow orchestration to Apache Airflow. The project also included Power BI reporting."] },
      { title: "The result", paragraphs: ["150–180 ETL workflows were migrated from Pentaho Data Integration to Apache Airflow, with a reported improvement of approximately 80% in performance and maintainability, and a more scalable foundation for operating the processes."] },
      { title: "Value to the project", paragraphs: ["The project brought the workflows together in Apache Airflow and made them easier to maintain. The figures describe this specific migration."] },
    ],
    evidence: "An overview of professional work at NTT DATA. Client code, configurations and operational measurements are not published.",
  },
  "pyspark-optimisation": {
    category: "Process Optimisation / Big Data",
    title: "ETL optimisation: reducing processing time by ~60%",
    shortTitle: "ETL Optimisation with PySpark & HBase",
    linkLabel: "Read case study: ETL optimisation",
    summary: "I optimised PySpark and HBase ETL pipelines processing hundreds of GB in micro-batches. Total runtime fell by approximately 60%.",
    metric: "~60%", metricLabel: "Reduction in ETL runtime",
    role: "Data Engineer · NTT DATA",
    stack: ["PySpark", "HBase", "Micro-batch processing"],
    diagram: ["Hundreds of GB", "5–6 PySpark / HBase ETL pipelines", "~60% less processing time"],
    diagramCaption: "Data volume, implementation scope and result. A simplified project overview.",
    sections: [
      { title: "The context", paragraphs: ["The project for Junta de Andalucía covered 5–6 large-scale ETL pipelines using PySpark and HBase. They processed hundreds of GB in micro-batches, making total processing time directly relevant to operations."] },
      { title: "My contribution", paragraphs: ["I worked on implementing and optimising these pipelines at NTT DATA Europe & LATAM, with the aim of reducing end-to-end runtime."] },
      { title: "The result", paragraphs: ["The result was an approximately 60% reduction in total ETL runtime. As a relative index, an initial duration of 100 becomes approximately 40; this comparison does not represent specific minutes or hours."] },
      { title: "Measurement scope", paragraphs: ["The figure describes this project's result. Original run durations and infrastructure configuration are not published, so this is not a reproducible benchmark for other workloads."] },
    ],
    evidence: "An overview of professional work at NTT DATA. The approximate reduction refers to ETL process runtime.",
  },
};

export const EN_CASE_STUDIES: CaseStudy[] = CASE_STUDIES.map((entry) => {
  const translation = translations[entry.slug];
  if (!translation) throw new Error(`Missing English case study: ${entry.slug}`);
  return { ...entry, ...translation };
});
