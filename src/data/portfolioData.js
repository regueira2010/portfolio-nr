import { 
  FaAws, FaDocker, FaJava, FaReact, FaNodeJs, FaGithub, FaLinkedin, 
  FaEnvelope, FaExternalLinkAlt, FaServer, FaCode, FaCloud, FaCheckCircle, 
  FaGoogle, FaGraduationCap, FaCertificate, FaNetworkWired, FaWindows, 
  FaDatabase, FaLock, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCheckDouble
} from 'react-icons/fa';
import { 
  SiPostgresql, SiSpringboot, SiTypescript, SiJavascript, 
  SiTailwindcss, SiDocker, SiNginx, SiGooglecloud, SiCisco 
} from 'react-icons/si';

export const personalInfo = {
  name: "Nicolás Jesús Regueira González",
  shortName: "Nicolás Regueira",
  initials: "NR",
  role: "Desarrollador Full Stack | Infraestructura TI | Cloud",
  tagline: "Infraestructura · Desarrollo · Cloud",
  subtitle: "Java 21 & Spring Boot 3 · React 19 & TypeScript · AWS Cloud Practitioner",
  location: "Santiago, Chile",
  email: "regueira2010@gmail.com",
  linkedin: "https://www.linkedin.com/in/nregueira",
  github: "https://github.com/regueira2010",
  bio: "De mantener servidores Windows y redes corporativas a construir arquitecturas de software completas en Java, Spring Boot y React. Un perfil híbrido con visión integral: desde el hardware y la infraestructura física hasta la arquitectura de microservicios y la nube.",
  story: [
    "Durante más de 10 años forjé mi trayectoria profesional en soporte TI e infraestructura: administración de servidores Windows/Linux, redes corporativas y continuidad operativa de sistemas críticos. Aprendí en primera persona cómo opera la tecnología desde su base.",
    "Llevé mi pasión por crear soluciones al siguiente nivel profesionalizándome en desarrollo de software: completé formación intensiva en Java Backend (Globant Talento Ready) y especializaciones en React, construyendo proyectos con foco estricto en buenas prácticas, Arquitectura Hexagonal y TDD.",
    "Mi mayor valor diferencial es unir ambos mundos: entiendo la resiliencia de la red, la seguridad del servidor y el modelado de datos en PostgreSQL, al mismo tiempo que diseño APIs RESTful de alto rendimiento en Spring Boot y SPAs modernas con React 19."
  ]
};

export const journeyPillars = [
  {
    icon: FaServer,
    title: "Infraestructura",
    subtitle: "+10 años experiencia",
    description: "Soporte TI, redes corporativas, administración de servidores Windows/Linux y continuidad operativa."
  },
  {
    icon: FaCode,
    title: "Desarrollo Full Stack",
    subtitle: "Backend & Frontend",
    description: "Java 21, Spring Boot 3, Arquitectura Hexagonal, React 19, TypeScript, PostgreSQL y TDD (JUnit 5)."
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    subtitle: "AWS Certified",
    description: "AWS Cloud Practitioner, Google Cloud Core Infra, contenedores Docker, Nginx y entornos serverless."
  }
];

export const skillCategories = [
  {
    title: "Desarrollo Backend & Frontend",
    subtitle: "Java 21 · Spring Boot 3 · React 19 · TypeScript",
    icon: FaCode,
    color: "text-green-400",
    skills: [
      { name: "Java 21", icon: FaJava, level: "Avanzado" },
      { name: "Spring Boot 3", icon: SiSpringboot, level: "Avanzado" },
      { name: "React 19", icon: FaReact, level: "Avanzado" },
      { name: "TypeScript", icon: SiTypescript, level: "Avanzado" },
      { name: "JavaScript ES6+", icon: SiJavascript, level: "Avanzado" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Avanzado" },
      { name: "TDD / JUnit 5", icon: FaCheckDouble, level: "Avanzado" },
      { name: "Node.js & Express", icon: FaNodeJs, level: "Intermedio" },
      { name: "Arquitectura Hexagonal", icon: FaServer, level: "Avanzado" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Avanzado" }
    ]
  },
  {
    title: "Cloud, DevOps & Contenedores",
    subtitle: "AWS · Google Cloud · Docker · Nginx",
    icon: FaCloud,
    color: "text-aws",
    skills: [
      { name: "AWS Cloud Practitioner", icon: FaAws, level: "Certificado" },
      { name: "Google Cloud Core Infra", icon: SiGooglecloud, level: "Certificado" },
      { name: "Docker & Containers", icon: SiDocker, level: "Práctica" },
      { name: "Nginx Web Server", icon: SiNginx, level: "Práctica" },
      { name: "VPC, IAM & Security", icon: FaLock, level: "Práctica" },
      { name: "Git & Version Control", icon: FaGithub, level: "Avanzado" }
    ]
  },
  {
    title: "Infraestructura & Continuidad TI",
    subtitle: "10+ años de base sólida en soporte empresarial",
    icon: FaServer,
    color: "text-blue-400",
    skills: [
      { name: "Soporte TI Corporativo", icon: FaServer, level: "Experto" },
      { name: "Servidores Windows / Linux", icon: FaWindows, level: "Experto" },
      { name: "Redes LAN / WAN / TCP-IP", icon: FaNetworkWired, level: "Avanzado" },
      { name: "Active Directory & GPOs", icon: FaWindows, level: "Avanzado" },
      { name: "Backup & Disaster Recovery", icon: FaDatabase, level: "Avanzado" },
      { name: "Ciberseguridad (Cisco)", icon: SiCisco, level: "Práctica" }
    ]
  }
];

export const experiences = [
  {
    title: "Desarrollador Full Stack & Backend",
    period: "2023 - Actualidad",
    icon: FaCode,
    color: "text-green-400",
    responsibilities: [
      "Diseño y desarrollo de arquitecturas backend resilientes con Java 21 y Spring Boot 3 aplicando Arquitectura Hexagonal y TDD.",
      "Construcción de APIs de alto rendimiento con rate-limiting (Bucket4j), caché L1 en memoria (Caffeine) y persistencia relacional con PostgreSQL.",
      "Desarrollo de SPAs reactivas con React 19, Zustand y sincronización multi-pestaña en tiempo real mediante BroadcastChannel API.",
      "Egresado del programa intensivo Globant Talento Ready enfocado en Java, Spring Boot, Spring Data JPA y pruebas unitarias con JUnit 5."
    ]
  },
  {
    title: "Técnico en Soporte TI e Infraestructura",
    period: "2020 - Actualidad",
    icon: FaServer,
    color: "text-blue-400",
    responsibilities: [
      "Administración y soporte integral a plataformas cliente Windows/Linux, hardware y estaciones de trabajo críticas.",
      "Gestión y configuración de redes corporativas, direccionamiento IP, switching y administración de Active Directory.",
      "Implementación de directivas de seguridad corporativa, copias de seguridad redundantes y recuperación ante fallas.",
      "Garantía de continuidad operativa de la infraestructura que soporta las aplicaciones empresariales."
    ]
  },
  {
    title: "Desarrollador Web & Consultor TI Freelance",
    period: "2010 - Actualidad",
    icon: FaCode,
    color: "text-aws",
    responsibilities: [
      "Construcción y entrega de aplicaciones web personalizadas con React, Node.js y Firebase para clientes independientes.",
      "Gestión de despliegues, configuración de servidores web, certificados SSL y optimización de rendimiento.",
      "Atención directa a clientes para traducir necesidades operativas en soluciones tecnológicas estables."
    ]
  },
  {
    title: "Jefe de Sistemas",
    period: "2015 - 2020",
    icon: FaBriefcase,
    color: "text-purple-400",
    responsibilities: [
      "Liderazgo integral del departamento de tecnología, servidores institucionales y bases de datos.",
      "Supervisión y capacitación técnica de personal operativo y gestión de compras tecnológicas.",
      "Planificación y puesta en marcha de cableado estructurado, redes y normativas internas de seguridad informática."
    ]
  }
];

export const featuredProjects = [
  {
    title: "AWS Cloud Catalog Ecosystem",
    subtitle: "Ecosistema Full Stack: Java 21 Spring Boot + React 19 Client",
    description: "Ecosistema cloud desacoplado compuesto por un backend de alto rendimiento en Java 21 / Spring Boot 3 desplegado en Render con Swagger UI, y un cliente frontend moderno en React 19 con Tailwind CSS v4. Implementa Arquitectura Hexagonal, control de tráfico con Bucket4j (Rate Limiting), caché L1 con Caffeine, validación condicional ETag (HTTP 304), búsqueda debounced en tiempo real, persistencia local y soporte Docker.",
    type: "Full Stack Cloud / Decoupled",
    techStack: ["Java 21", "Spring Boot 3", "React 19", "AWS", "Tailwind CSS v4", "PostgreSQL 16", "Docker", "Render", "ETag / 304", "OpenAPI"],
    features: [
      "Backend en Spring Boot 3 con Arquitectura Hexagonal y rate-limiting (Bucket4j)",
      "Frontend cliente interactivo en React 19 con búsqueda debounced en tiempo real",
      "Validación condicional de caché ETag (HTTP 304) y persistencia en cliente",
      "Documentación OpenAPI interactiva con Swagger UI y despliegue activo en Render",
      "Despliegue continuo con GitHub Actions y contenedores Docker"
    ],
    links: [
      { label: "GitHub Backend", url: "https://github.com/regueira2010/AWS-API-JAVA", icon: FaGithub },
      { label: "GitHub Frontend", url: "https://github.com/regueira2010/aws-services-client", icon: FaGithub },
      { label: "Swagger UI / API", url: "https://aws-services-api.onrender.com/swagger-ui/index.html", icon: FaExternalLinkAlt }
    ],
    logo: FaCloud,
    logoColor: "text-aws"
  },
  {
    title: "TaskPoints",
    subtitle: "Tablero de priorización Eisenhower & Gamificación RPG",
    description: "Herramienta de productividad estratégica que opera de forma 100% autónoma en el navegador. Implementa sincronización bidireccional de datos en tiempo real entre múltiples pestañas mediante la API nativa BroadcastChannel. Gestión de estado reactivo y ultraliviano con Zustand, empaquetado en contenedor Docker con servidor web Nginx.",
    type: "Frontend SPA / Autonomous",
    techStack: ["React 19", "Zustand", "Vite", "BroadcastChannel API", "Docker", "Nginx", "Bootstrap 5"],
    features: [
      "Sincronización multi-pestaña en tiempo real con BroadcastChannel API",
      "Gestión de estado global reactivo sin sobrecargas mediante Zustand",
      "Flujo de trabajo basado en la Matriz de Eisenhower y mecánicas RPG",
      "Arquitectura offline-first empaquetada en contenedor Docker con Nginx"
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/regueira2010/taskpoints", icon: FaGithub }
    ],
    logo: FaReact,
    logoColor: "text-cyan-400"
  },
  {
    title: "Campus Virtual API & Frontend",
    subtitle: "Plataforma Educativa (Globant Talento Ready)",
    description: "Proyecto integral desarrollado a lo largo de las 24 sesiones del programa intensivo Globant Talento Ready. Cuenta con arquitectura limpia, inyección de dependencias en Spring Boot y cobertura exhaustiva de pruebas unitarias y de integración bajo TDD con JUnit 5, consumido por un frontend interactivo en React y TypeScript.",
    type: "Fullstack Decoupled",
    techStack: ["Java", "Spring Boot", "TypeScript", "React", "TDD / JUnit 5", "Spring Data JPA", "Maven"],
    features: [
      "Backend construido bajo desarrollo guiado por pruebas (TDD con JUnit 5)",
      "Arquitectura limpia desacoplada e inyección de dependencias",
      "Modelado relacional de entidades con Spring Data JPA y PostgreSQL",
      "Frontend interactivo con tipado estricto en React + TypeScript"
    ],
    links: [
      { label: "GitHub Backend", url: "https://github.com/regueira2010/campus-virtual-api", icon: FaGithub },
      { label: "GitHub Frontend", url: "https://github.com/regueira2010/campus-virtual-frontend", icon: FaGithub }
    ],
    logo: FaJava,
    logoColor: "text-red-400"
  },
  {
    title: "SoundWave API",
    subtitle: "API REST de Gestión Musical & Catálogo",
    description: "API backend modular diseñada para la gestión, catalogación y búsqueda de artistas, pistas y álbumes musicales. Implementa un modelo relacional en PostgreSQL mediante Sequelize ORM, sincronización automática de esquema y despliegue monitoreado en producción.",
    type: "Backend / REST API",
    techStack: ["Node.js", "Express", "PostgreSQL", "Sequelize ORM", "REST API", "Render"],
    features: [
      "Operaciones CRUD completas para gestión de catálogo musical",
      "Modelo de base de datos relacional y asociaciones con Sequelize",
      "Sincronización automatizada de base de datos y validaciones",
      "Desplegado y disponible en entorno de producción"
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/regueira2010/proyect-SoundWave", icon: FaGithub },
      { label: "Demo Online", url: "https://proyect-soundwave.onrender.com/", icon: FaExternalLinkAlt }
    ],
    logo: FaNodeJs,
    logoColor: "text-green-400"
  },
  {
    title: "Route Cost Engine",
    subtitle: "Motor de Cálculo de Costos de Desplazamiento & Viáticos",
    description: "Módulo backend para el cálculo automatizado de costos operativos de transporte y viáticos basados en consumo de combustible, desgaste vehicular y distancia métrica real calculada a través de API geoespacial.",
    type: "Backend Module / Maps API",
    techStack: ["Node.js", "Express", "REST API", "Maps API", "Algoritmos"],
    features: [
      "Cálculo volumétrico de consumo y desgaste de flota",
      "Integración de rutas de desplazamiento por API de mapas",
      "Lógica de negocio optimizada para cotización de viáticos"
    ],
    links: [
      { label: "GitHub Repo", url: "https://github.com/regueira2010/route-cost-engine", icon: FaGithub }
    ],
    logo: FaServer,
    logoColor: "text-blue-400"
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    icon: FaAws,
    color: "text-aws",
    badge: "aws",
    highlight: "Certificación Oficial Cloud"
  },
  {
    name: "Google Project Management",
    issuer: "Google (Certificado Profesional)",
    icon: FaGoogle,
    color: "text-blue-400",
    badge: "google",
    highlight: "Metodologías Ágiles & Scrum"
  },
  {
    name: "Google Cloud: Infraestructura Core",
    issuer: "Google Cloud Skills",
    icon: SiGooglecloud,
    color: "text-yellow-400",
    badge: "google-cloud",
    highlight: "Fundamentos de Cómputo & Redes"
  },
  {
    name: "Formación Intensiva Java Backend",
    issuer: "Globant Talento Ready",
    icon: FaGraduationCap,
    color: "text-green-400",
    badge: "globant",
    highlight: "Java 21, Spring Boot & TDD"
  },
  {
    name: "React Certified Junior",
    issuer: "Certificates.dev",
    icon: FaReact,
    color: "text-cyan-400",
    badge: "react",
    highlight: "React Moderno & Arquitectura"
  },
  {
    name: "Ciberseguridad & Conciencia Digital",
    issuer: "Cisco Networking Academy",
    icon: SiCisco,
    color: "text-teal-400",
    badge: "cisco",
    highlight: "Seguridad de Redes Corporativas"
  },
  {
    name: "Negociación Estratégica",
    issuer: "ESADE Business School",
    icon: FaCertificate,
    color: "text-purple-400",
    badge: "esade",
    highlight: "Estrategia & Toma de Decisiones"
  }
];

export const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "regueira2010@gmail.com",
    link: "mailto:regueira2010@gmail.com",
    color: "text-red-400"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/nregueira",
    link: "https://www.linkedin.com/in/nregueira",
    color: "text-blue-400"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "/regueira2010",
    link: "https://github.com/regueira2010",
    color: "text-gray-400"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Ubicación",
    value: "Santiago, Chile",
    link: "https://maps.google.com/?q=Santiago,Chile",
    color: "text-green-400"
  }
];
