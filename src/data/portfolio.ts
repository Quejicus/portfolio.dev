export const SITE_CONTENT = {
  name: "Jesús Muñoz González",
  metaTitle: "Jesús Muñoz González | Desarrollo web con IA, automatización y datos",
  metaDescription: "Desarrollo aplicaciones web a medida, automatizo tareas con Python y APIs y convierto datos en cuadros de mando para negocios y pymes.",
  lastUpdated: { display: "octubre de 2026", isoDate: "2026-10-24" },
  email: "jesusmugo91@gmail.com",
  linkedin: "https://linkedin.com/in/jesus-data-engineer",
  github: "https://github.com/Quejicus",
  repository: "https://github.com/Quejicus/portfolio.dev",
  resume: { href: "/CV_Data_Engineer_2026.pdf", fileName: "Jesus_Munoz_Gonzalez_Data_Engineer_CV_2026.pdf" },
  navItems: [
    { label: "Proyectos", section: "work" }, { label: "Servicios", section: "services" },
    { label: "Experiencia", section: "experience" }, { label: "Sobre mí", section: "about" },
    { label: "Contacto", section: "contact" },
  ],
  metrics: [
    { value: "1 mes", label: "Para diseñar, desarrollar y publicar Mi Calculadora Financiera", href: "/work/financial-calculator/" },
    { value: "~60%", label: "Menos tiempo de ejecución en pipelines ETL optimizados", href: "/work/pyspark-optimisation/" },
    { value: "150–180", label: "Flujos ETL migrados de Pentaho a Apache Airflow", href: "/work/airflow-migration/" },
  ],
  capabilities: [
    { title: "Aplicaciones web a medida con IA", description: "Diseño y desarrollo aplicaciones web, calculadoras para clientes, portales internos y MVPs. Uso IA como apoyo al desarrollo, con revisión técnica y pruebas antes de la puesta en producción." },
    { title: "Automatización de procesos e integraciones", description: "Conecto las herramientas de tu negocio mediante APIs REST y automatizo tareas repetitivas con Python, FastAPI, AWS Lambda y Apache Airflow." },
    { title: "Cuadros de mando y analítica de negocio", description: "Organizo tus datos y hojas de cálculo con SQL, dbt y BigQuery. Creo cuadros de mando en Power BI, Looker o Superset para que puedas seguir tus ventas, operaciones e indicadores de negocio." },
  ],
  experience: [
    {
      start: "2026-10", startLabel: "octubre de 2026", end: null, endLabel: "Actualidad",
      role: "Desarrollador de aplicaciones web con IA y consultor de automatización",
      company: "Proyectos propios y servicios para empresas (España, en remoto)",
      summary: "Aplicaciones web, productos digitales y automatización para pequeños y medianos negocios.",
      highlights: [
        "Diseño, desarrollo y despliegue de aplicaciones web a medida y productos digitales propios combinando arquitecturas web modernas (JavaScript, Astro, Python) con flujos de ingeniería asistidos por IA (Copilot, agentes de IA y LLMs).",
        "Desarrollo de automatizaciones de procesos, integraciones mediante APIs REST, microservicios serverless y cuadros de mando analíticos para pequeños y medianos negocios.",
      ],
      additional: [],
    },
    {
      start: "2023-05", startLabel: "mayo de 2023", end: "2026-10", endLabel: "octubre de 2026",
      role: "Data Engineer (España, en remoto)", company: "NTT DATA Europe & LATAM",
      summary: "Ingeniería de datos, microservicios, automatización y analítica cloud para clientes de los sectores asegurador, sanitario, energético, bancario y público:",
      highlights: [
        "AXA Seguros: Desarrollo de soluciones empresariales con Azure, Databricks y PySpark aplicando testing automatizado, CI/CD y desarrollo asistido por IA (Copilot skills y AI workers).",
        "Servicio Canario de Salud: Diseño e implementación de 80–100 pipelines ETL en producción con Apache Airflow, PySpark y Stratio procesando hasta cientos de GB diarios.",
        "Moeve (CEPSA): Desarrollo de 6–8 microservicios serverless con Python y AWS Lambda para un portal interno de datos, integrando DynamoDB, Athena, CloudWatch y APIs REST.",
        "CaixaBank: Creación de 4–5 modelos de datos y dashboards en BigQuery, dbt y Looker para monitorización de KPIs operativos y de negocio.",
        "Junta de Andalucía: Optimización de 5–6 pipelines masivos con PySpark y HBase, reduciendo los tiempos de procesamiento en aproximadamente un 60%.",
        "Cabildo de Tenerife: Liderazgo técnico en la migración de 150–180 flujos ETL de Pentaho a Apache Airflow (con una mejora reportada de aproximadamente un 80% en rendimiento y mantenibilidad) e informes en Power BI.",
      ],
      additional: [],
    },
    {
      start: "2022-06", startLabel: "junio de 2022", end: "2022-12", endLabel: "diciembre de 2022",
      role: "Business Intelligence Developer (España, en remoto)", company: "cdmon",
      summary: "Analítica interna y automatización de informes.",
      highlights: [
        "Diseño y mantenimiento de flujos automatizados con Apache Airflow para el reporting interno.",
        "Creación de dashboards interactivos con Apache Superset para el seguimiento de KPIs operativos y de negocio.",
        "Refactorización de APIs legacy y optimización de código backend, reduciendo los tiempos de respuesta en aproximadamente un 40%.",
      ], additional: [],
    },
  ],
  credentials: [
    { title: "dbt Analytics Engineering Certification", issuer: "dbt", date: "2026-09", label: "septiembre de 2026" },
    { title: "Professional Data Engineer", issuer: "DataCamp", date: "2024-09", label: "septiembre de 2024" },
    { title: "Google IT Automation with Python", issuer: "Coursera", date: "2024-08", label: "agosto de 2024" },
    { title: "Microsoft Certified: Azure Data Engineer Associate", issuer: "Microsoft", date: "2023-12", label: "diciembre de 2023" },
  ],
};
