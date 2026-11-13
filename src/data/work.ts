export interface CaseSection { title: string; paragraphs: string[] }
export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  linkLabel: string;
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
  previewFlow?: [string, string];
}
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "realidad-multipolar",
    category: "Proyecto personal / Plataforma editorial",
    title: "Realidad Multipolar",
    shortTitle: "Realidad Multipolar",
    linkLabel: "Ver proyecto: Realidad Multipolar",
    summary: "Plataforma editorial en desarrollo que compara cómo distintas perspectivas geopolíticas cubren un mismo acontecimiento y enlaza las afirmaciones con sus fuentes.",
    metric: "WIP", metricLabel: "En desarrollo",
    role: "Proyecto personal en desarrollo",
    stack: ["TypeScript", "Cloudflare Workers", "Procesamiento asistido por IA"],
    diagram: ["Fuentes y perspectivas", "Recopilación y borradores con IA", "Cobertura con enlaces a fuentes"],
    diagramCaption: "Vista simplificada del enfoque editorial de la plataforma en desarrollo.",
    sections: [
      { title: "El proyecto", paragraphs: ["Realidad Multipolar es una plataforma editorial que organiza la cobertura de un mismo acontecimiento por perspectiva geopolítica y fuente. La propuesta permite comparar cómo se presenta un tema desde distintos enfoques."] },
      { title: "El enfoque técnico", paragraphs: ["La plataforma utiliza TypeScript y Cloudflare Workers, con recopilación y redacción de borradores asistidas por IA. Las afirmaciones se enlazan con sus fuentes para que el lector pueda consultar su procedencia."] },
      { title: "Estado actual", paragraphs: ["El proyecto está en desarrollo y se puede visitar en realidadmultipolar.com. Este caso describe su enfoque actual, no resultados de alcance, uso o impacto."] },
    ],
    evidence: "Proyecto personal en desarrollo. El caso recoge el enfoque editorial y técnico de la plataforma, sin presentar métricas de uso ni resultados medidos.",
    image: "/projects/realidad_multipolar_screenshot.webp", imageWidth: 1280, imageHeight: 800,
    liveUrl: "https://realidadmultipolar.com/",
  },
  {
    slug: "financial-calculator",
    category: "Producto digital / Desarrollo web con IA",
    title: "Mi Calculadora Financiera: de la idea al lanzamiento",
    shortTitle: "Mi Calculadora Financiera",
    linkLabel: "Ver proyecto: Mi Calculadora Financiera",
    summary: "Diseñé, desarrollé y publiqué esta plataforma de cálculo financiero en un mes, con desarrollo asistido por IA bajo supervisión técnica. Es un ejemplo de aplicación web a medida que permite a los usuarios hacer cálculos de forma sencilla.",
    metric: "1 mes", metricLabel: "De la idea al lanzamiento",
    role: "Diseño, desarrollo y lanzamiento de producto propio",
    stack: ["JavaScript", "HTML / CSS", "Desarrollo asistido por IA", "Web App"],
    diagram: ["Alcance y experiencia de uso", "Desarrollo y revisión", "Validación y publicación"],
    diagramCaption: "Resumen del flujo de desarrollo del producto.",
    sections: [
      { title: "El producto", paragraphs: ["Mi Calculadora Financiera es una plataforma pública de cálculo financiero. Su objetivo es hacer comprensibles los cálculos mediante una experiencia de uso clara e interactiva."] },
      { title: "Mi contribución", paragraphs: ["Llevé el producto desde la idea hasta su lanzamiento público en un mes. El trabajo incluyó la interfaz web, la experiencia de las calculadoras y la estructura de contenidos y SEO."] },
      { title: "Cómo trabajé", paragraphs: ["Definí el alcance y revisé el trabajo realizado con Claude Code, OpenCode y Codex. Dividí el desarrollo en tareas concretas, con puntos de revisión y validaciones antes de publicar.", "La IA me ayudó durante el desarrollo; las decisiones de producto, la revisión y la validación quedaron bajo mi responsabilidad."] },
      { title: "El resultado", paragraphs: ["La plataforma está disponible en micalculadorafinanciera.com. El plazo de un mes corresponde al desarrollo y lanzamiento; las métricas de uso y conversión quedan fuera de este caso."] },
    ],
    evidence: "Producto digital propio. El plazo de entrega y el flujo de trabajo corresponden al desarrollo de esta plataforma.",
    image: "/projects/micalculadora_screenshot.webp", imageWidth: 1200, imageHeight: 630,
    liveUrl: "https://micalculadorafinanciera.com/",
  },
  {
    slug: "pc-optimisation",
    category: "Automatización y datos aplicados",
    title: "Automatización de precios y optimizador de presupuestos",
    shortTitle: "Automatización de precios y optimizador de presupuestos",
    linkLabel: "Ver caso: Optimizador de presupuestos",
    summary: "Un proyecto en Python que combina web scraping, un algoritmo genético y una interfaz en Streamlit para elegir componentes de ordenador sin superar un presupuesto. El enfoque también se puede adaptar al seguimiento de precios y a la planificación de compras.",
    metric: "Python", metricLabel: "De la recogida de datos a la optimización",
    role: "Desarrollo de un proyecto de ciencia de datos aplicada",
    stack: ["Python", "Web scraping", "Algoritmos genéticos", "Streamlit"],
    diagram: ["Extracción de precios", "Preparación y restricciones", "Algoritmo genético"],
    diagramCaption: "Vista simplificada del enfoque del proyecto.",
    sections: [
      { title: "El problema", paragraphs: ["Elegir componentes de ordenador implica equilibrar distintas necesidades con un presupuesto fijo. Este proyecto, originalmente llamado A better build within budget, aborda esa elección mediante la recogida de precios y un algoritmo de optimización."] },
      { title: "La solución", paragraphs: ["El proyecto combina extracción automatizada de precios web, preparación de datos y un algoritmo genético para buscar combinaciones de componentes que cumplan las restricciones. Python sostiene el flujo de datos y Streamlit ofrece la interfaz."] },
      { title: "Aplicación al negocio", paragraphs: ["La misma idea se puede adaptar para seguir los precios de la competencia o planificar compras con un presupuesto limitado.", "El proyecto demuestra el flujo de principio a fin; no publica una comparativa de rendimiento del algoritmo ni precios actualizados en tiempo real."] },
    ],
    evidence: "Proyecto propio de automatización y optimización. Esta página recoge su planteamiento y alcance.",
    image: "/projects/optimizing_project.webp", imageWidth: 960, imageHeight: 540,
  },
  {
    slug: "airflow-migration",
    category: "Automatización a gran escala / Sector público",
    title: "De Pentaho a Airflow: 150–180 flujos automatizados migrados",
    shortTitle: "De Pentaho a Airflow",
    linkLabel: "Leer caso de estudio: De Pentaho a Airflow",
    summary: "Dirigí la parte técnica de la migración de 150–180 flujos ETL de Pentaho a Apache Airflow, con una mejora reportada de aproximadamente un 80% en rendimiento y mantenibilidad.",
    metric: "150–180", metricLabel: "Flujos de trabajo migrados",
    role: "Liderazgo técnico de la migración · NTT DATA",
    stack: ["Apache Airflow", "Pentaho Data Integration", "ETL"],
    previewFlow: ["PENTAHO", "AIRFLOW"],
    diagram: ["Pentaho Data Integration", "150–180 flujos ETL", "Apache Airflow"],
    diagramCaption: "Vista del alcance de la migración. El diagrama resume el trabajo sin reproducir la arquitectura de producción.",
    sections: [
      { title: "El contexto", paragraphs: ["La plataforma de datos del Cabildo de Tenerife utilizaba Pentaho Data Integration para sus procesos ETL. El proyecto consistió en modernizar entre 150 y 180 flujos de trabajo y trasladarlos a Apache Airflow."] },
      { title: "Mi contribución", paragraphs: ["En NTT DATA Europe & LATAM lideré técnicamente esta migración, combinando la modernización de la plataforma existente con la orquestación de procesos automatizados. El proyecto también incluyó informes en Power BI."] },
      { title: "El resultado", paragraphs: ["Se migraron 150–180 flujos ETL de Pentaho Data Integration a Apache Airflow, con una mejora reportada de aproximadamente un 80% en rendimiento y mantenibilidad, y una base más escalable para operar los procesos."] },
      { title: "Qué aportó al proyecto", paragraphs: ["El proyecto dejó los flujos organizados en Apache Airflow y facilitó su mantenimiento. Las cifras corresponden a esta migración concreta."] },
    ],
    evidence: "Resumen del trabajo profesional realizado en NTT DATA. El código, las configuraciones y las mediciones operativas del cliente no se publican.",
  },
  {
    slug: "pyspark-optimisation",
    category: "Optimización de procesos / Big Data",
    title: "Optimización ETL: aproximadamente un 60% menos de tiempo de ejecución",
    shortTitle: "Optimización ETL con PySpark y HBase",
    linkLabel: "Leer caso de estudio: Optimización ETL",
    summary: "Optimicé pipelines ETL con PySpark y HBase que procesaban cientos de GB en micro-batches. El tiempo total de ejecución se redujo aproximadamente un 60%.",
    metric: "~60%", metricLabel: "Reducción del tiempo de ejecución ETL",
    role: "Data Engineer · NTT DATA",
    stack: ["PySpark", "HBase", "Procesamiento en micro-batches"],
    previewFlow: ["PYSPARK", "HBASE"],
    diagram: ["Cientos de GB", "5–6 pipelines ETL con PySpark / HBase", "~60% menos tiempo de ejecución"],
    diagramCaption: "Volumen de datos, alcance de la implementación y resultado. Vista simplificada del proyecto.",
    sections: [
      { title: "El contexto", paragraphs: ["El proyecto para la Junta de Andalucía comprendía 5–6 pipelines ETL masivos con PySpark y HBase. Los procesos trataban cientos de GB en micro-batches, por lo que el tiempo total de procesamiento tenía un impacto directo en la operación."] },
      { title: "Mi contribución", paragraphs: ["Trabajé en la implementación y optimización de estos pipelines en NTT DATA Europe & LATAM, con el objetivo de reducir el tiempo de ejecución de principio a fin."] },
      { title: "El resultado", paragraphs: ["El resultado fue una reducción aproximada del 60% en el tiempo total de ejecución ETL. Como índice relativo, una duración inicial de 100 pasa a aproximadamente 40; esta comparación no representa minutos u horas concretos."] },
      { title: "Alcance de la medición", paragraphs: ["La cifra corresponde al resultado de este proyecto. Las duraciones originales y la configuración de infraestructura no se publican, por lo que no constituyen una comparativa reproducible para otras cargas de trabajo."] },
    ],
    evidence: "Resumen del trabajo profesional en NTT DATA. La reducción aproximada se refiere al tiempo de ejecución de los procesos ETL.",
  },
];
