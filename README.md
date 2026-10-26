# Nicolás J. Regueira G. — Portafolio Profesional
> **Desarrollador Full Stack | Especialista en Infraestructura TI & Cloud**  
> *Java 21 & Spring Boot 3 · React 19 & TypeScript · AWS Cloud Practitioner*  
> Santiago, Chile · [LinkedIn](https://www.linkedin.com/in/nregueira) · [GitHub](https://github.com/regueira2010) · [Email](mailto:regueira2010@gmail.com)

---

## 🧭 Visión General

Portafolio web interactivo de alto rendimiento desarrollado con **React 19**, **Vite** y **Tailwind CSS**. Integra una arquitectura desacoplada y orientada a componentes que refleja una propuesta de valor híbrida: más de 10 años de trayectoria sólida en continuidad operativa y redes corporativas, combinados con desarrollo de software backend y frontend moderno en ecosistemas Cloud.

---

## ⚡ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, React Icons |
| **Arquitectura de Datos** | Capa desacoplada centralizada en `src/data/portfolioData.js` |
| **Consumo de APIs** | GitHub REST API con caché en `sessionStorage` (TTL 15 min) |
| **Optimización de Assets** | Gzip & Brotli (`vite-plugin-compression`), `vite-plugin-image-optimizer` (Sharp, SVGO) |
| **Accesibilidad & UX** | Detección de `prefers-reduced-motion`, animaciones fluidas e interfaz responsiva |

---

## 🚀 Proyectos Destacados Integrados

### 1. [AWS Cloud Catalog Ecosystem](https://github.com/regueira2010/AWS-API-JAVA)
Ecosistema cloud desacoplado compuesto por:
- **Backend API:** [AWS-API-JAVA](https://github.com/regueira2010/AWS-API-JAVA) — API REST en Java 21 y Spring Boot 3 sobre el catálogo canónico de más de 280 servicios de AWS. Arquitectura Hexagonal, control de tráfico con Bucket4j (Rate Limiting), caché L1 con Caffeine, validación condicional ETag (HTTP 304), migraciones Flyway y Docker.
- **Frontend Client:** [aws-services-client](https://github.com/regueira2010/aws-services-client) — Cliente SPA en React 19 y Tailwind CSS v4, con búsqueda debounced en tiempo real, persistencia local y CI/CD con GitHub Actions.
- **Live Demo & Docs:** Desplegado en producción con [Swagger UI / OpenAPI](https://aws-services-api.onrender.com/swagger-ui/index.html).

### 2. [TaskPoints](https://github.com/regueira2010/taskpoints)
Gestor de productividad estratégica basado en la Matriz de Eisenhower y mecánicas RPG.
- 100% frontend autónomo construido con **React 19**, **Zustand** y la API nativa `BroadcastChannel` para sincronización de estado entre pestañas en tiempo real sin servidor backend.
- Empaquetado ligero en contenedor **Docker** con servidor web **Nginx**.

### 3. [Campus Virtual API & Frontend](https://github.com/regueira2010/campus-virtual-api)
Plataforma de gestión académica desarrollada a lo largo del programa intensivo **Globant Talento Ready**.
- Backend en **Java** y **Spring Boot** bajo **TDD estricto con JUnit 5**, Spring Data JPA y PostgreSQL.
- Frontend desacoplado e interactivo desarrollado en **TypeScript** y **React**.

### 4. [SoundWave API](https://github.com/regueira2010/proyect-SoundWave)
API RESTful modular para catalogación y gestión de catálogo musical con Node.js, Express y PostgreSQL (Sequelize ORM), desplegada en Render.

### 5. [Route Cost Engine](https://github.com/regueira2010/route-cost-engine)
Módulo backend para el cálculo automatizado de costos operativos de transporte y viáticos basados en consumo de combustible, desgaste de flota y API de mapas.

---

## 🎖️ Credenciales & Certificaciones Oficiales

- **AWS Certified Cloud Practitioner** — Amazon Web Services (AWS)
- **Google Project Management Professional Certificate** — Google (Agile & Scrum)
- **Google Cloud: Fundamentos de Infraestructura Core** — Google Cloud
- **Formación Intensiva Java Backend** — Globant Talento Ready
- **React Certified Junior** — Certificates.dev
- **Ciberseguridad & Conciencia Digital** — Cisco Networking Academy
- **Negociación Estratégica** — ESADE Business School

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo (http://localhost:3000)
npm run dev

# Compilar para producción (genera bundle minificado con Gzip y Brotli en dist/)
npm run build

# Previsualizar el build de producción localmente
npm run preview
```

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. © 2026 Nicolás Jesús Regueira González.
