// Todo el contenido del sitio vive acá. Los textos traducibles están en
// `content.es` y `content.en`; el resto se comparte entre idiomas.

export type Lang = "es" | "en";

export const profile = {
  firstName: "Jeremías",
  lastName: "Arrieta",
  photo: "/images/jeremias.png",
  // Agregá tu email acá si querés mostrarlo; mientras tanto el contacto va a LinkedIn.
  email: null as string | null,
  socials: [
    { name: "GitHub", url: "https://github.com/jerearrieta" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jeremias-arrieta/" },
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "Django", "Supabase", "PostgreSQL", "Tailwind", "Git", "QA Testing",
  ],
  projects: [
    {
      id: "asistencia",
      name: "Asistencia QR",
      year: "2026",
      status: "wip" as const,
      stack: ["Next.js", "Supabase", "Vercel"],
      url: "https://asistencia-qr-sunr.vercel.app",
      repo: "https://github.com/jerearrieta/asistencia-qr",
      theme: "orange" as const,
    },
    {
      id: "itbank",
      name: "Guardian Bank",
      year: "2023",
      status: "done" as const,
      stack: ["Next.js", "Django", "Tailwind"],
      url: "https://itbank-beta.vercel.app",
      repo: "https://github.com/jerearrieta/ITBANK-2023",
      theme: "violet" as const,
    },
    {
      id: "refrimax",
      name: "Refrimax",
      year: "2024",
      status: "done" as const,
      stack: ["React", "Node.js"],
      url: null,
      repo: "https://github.com/jerearrieta/Refrimax",
      theme: "mix" as const,
    },
    {
      id: "northern",
      name: "Northern Lights",
      year: "2024",
      status: "done" as const,
      stack: ["React", "Node.js"],
      url: null,
      repo: "https://github.com/EzequielDiaz1/Northern-Lights",
      theme: "violet" as const,
    },
  ],
};

export type Project = (typeof profile.projects)[number];

const es = {
  nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", experience: "Experiencia", contact: "Contacto", menu: "Menú", close: "Cerrar" },
  loading: "Cargando",
  role: "Estudiante de Ciencia de Datos e IA",
  tagline: "Desarrollador full stack · Siempre aprendiendo",
  currentGoal: { label: "Ahora", value: "Construyendo Asistencia QR" },
  messageEyebrow: "Mensaje de Jeremías",
  message:
    "Soy programador *autodidacta* y estudiante de Ciencia de Datos e Inteligencia Artificial. Me apasiona crear *aplicaciones web* modernas, *analizar datos* y resolver problemas complejos.",
  messageClosing: "Siempre buscando optimizar procesos.",
  aboutEyebrow: "Sobre mí",
  educationTitle: "Estudios",
  stats: [
    { value: "2022", label: "Escribí mi primera línea de código" },
    { value: "4", label: "Proyectos publicados" },
    { value: "∞", label: "Ganas de seguir aprendiendo" },
    { value: "2", label: "Mundos: web y datos" },
  ],
  education: [
    { title: "Ciencia de Datos e Inteligencia Artificial", place: "IES", period: "Mar. 2026 – Actualidad", detail: "Carrera en curso: estadística, análisis de datos, machine learning e IA." },
    { title: "Bootcamp Full Stack Developer", place: "ITBA", period: "Ago. 2023 – Dic. 2023", detail: "Desarrollo full stack con Next.js, Django y bases de datos, trabajando en equipo por sprints." },
    { title: "Desarrollo Web", place: "Coderhouse", period: "Mar. 2022 – May. 2022", detail: "Primeros pasos: HTML, CSS, JavaScript y maquetación responsive." },
  ],
  projectsEyebrow: "Proyectos",
  projectsTitle: ["Hall of", "Fame"],
  projectsIntro: "Lo que hice y lo que estoy construyendo. Pasá el mouse por cada tarjeta.",
  wip: "En curso",
  demo: "Ver demo",
  code: "Código",
  projectText: {
    asistencia: "Sistema de asistencia universitaria con QR rotativo: el docente abre la clase, los alumnos escanean y se registra al instante. Incluye tablero de estadísticas y exportes a CSV.",
    itbank: "Home banking del bootcamp del ITBA: registro, transferencias, pago de servicios y tarjetas, con API REST en Django y frontend en Next.js.",
    refrimax: "Aplicación para que un negocio organice, controle y maneje sus productos y pedidos.",
    northern: "Aplicación de gestión de productos y pedidos para un negocio, desarrollada en equipo.",
  } as Record<string, string>,
  featured: {
    eyebrow: "Proyecto destacado",
    title: "Asistencia QR",
    description: "Reemplaza la lista en papel: el docente abre la clase, se genera un QR que rota, y cada alumno se registra desde su celular. Con roles, controles antifraude y un tablero con alumnos en riesgo.",
    cta: "Ver en vivo",
    points: ["QR rotativo antifraude", "Tablero de estadísticas", "Exportes a CSV", "Roles: director, docente y alumno"],
  },
  skillsEyebrow: "Stack & habilidades",
  experienceEyebrow: "Trayectoria",
  experienceTitle: "Experiencia",
  experience: [
    { title: "QA (Quality Assurance) & Soporte Técnico", place: "GearUp Booster", period: "2024 – Actualidad", detail: "Testing de producto, detección y reporte de bugs, y soporte técnico a usuarios." },
    { title: "Servicio de catering", place: "Hotel", period: "2022 – 2023", detail: "Atención al cliente y trabajo en equipo bajo presión." },
  ],
  footerTagline: ["Siempre", "aprendiendo."],
  contactCta: "Escribime",
  footerPages: "Páginas",
  footerFollow: "Seguime",
  footerContact: "Contacto",
  rights: "Todos los derechos reservados.",
  builtWith: "Hecho con Next.js",
};

export type Content = typeof es;

const en: Content = {
  nav: { home: "Home", about: "About", projects: "Projects", experience: "Experience", contact: "Contact", menu: "Menu", close: "Close" },
  loading: "Loading",
  role: "Data Science & AI student",
  tagline: "Full stack developer · Always learning",
  currentGoal: { label: "Now", value: "Building Asistencia QR" },
  messageEyebrow: "A message from Jeremías",
  message:
    "I'm a *self-taught* developer and a Data Science and Artificial Intelligence student. I love building modern *web apps*, *analyzing data* and solving complex problems.",
  messageClosing: "Always looking to optimize processes.",
  aboutEyebrow: "About me",
  educationTitle: "Education",
  stats: [
    { value: "2022", label: "Wrote my first line of code" },
    { value: "4", label: "Published projects" },
    { value: "∞", label: "Eagerness to keep learning" },
    { value: "2", label: "Worlds: web and data" },
  ],
  education: [
    { title: "Data Science & Artificial Intelligence", place: "IES", period: "Mar 2026 – Present", detail: "Ongoing degree: statistics, data analysis, machine learning and AI." },
    { title: "Full Stack Developer Bootcamp", place: "ITBA", period: "Aug 2023 – Dec 2023", detail: "Full stack development with Next.js, Django and databases, working in sprints as a team." },
    { title: "Web Development", place: "Coderhouse", period: "Mar 2022 – May 2022", detail: "First steps: HTML, CSS, JavaScript and responsive layouts." },
  ],
  projectsEyebrow: "Projects",
  projectsTitle: ["Hall of", "Fame"],
  projectsIntro: "What I've built and what I'm building now. Hover over each card.",
  wip: "In progress",
  demo: "Live demo",
  code: "Code",
  projectText: {
    asistencia: "University attendance system with a rotating QR: the teacher opens the class, students scan and check in instantly. Includes a stats dashboard and CSV exports.",
    itbank: "Home banking app from the ITBA bootcamp: sign-up, transfers, bill payments and cards, with a Django REST API and a Next.js frontend.",
    refrimax: "An app for a business to organize, track and manage its products and orders.",
    northern: "A product and order management app for a business, built as a team.",
  },
  featured: {
    eyebrow: "Featured project",
    title: "Asistencia QR",
    description: "It replaces the paper roll call: the teacher opens the class, a rotating QR is generated, and each student checks in from their phone. With roles, anti-fraud controls and a dashboard that flags at-risk students.",
    cta: "See it live",
    points: ["Anti-fraud rotating QR", "Stats dashboard", "CSV exports", "Roles: director, teacher and student"],
  },
  skillsEyebrow: "Stack & skills",
  experienceEyebrow: "Track record",
  experienceTitle: "Experience",
  experience: [
    { title: "QA (Quality Assurance) & Technical Support", place: "GearUp Booster", period: "2024 – Present", detail: "Product testing, finding and reporting bugs, and technical support for users." },
    { title: "Catering service", place: "Hotel", period: "2022 – 2023", detail: "Customer service and teamwork under pressure." },
  ],
  footerTagline: ["Always", "learning."],
  contactCta: "Get in touch",
  footerPages: "Pages",
  footerFollow: "Follow",
  footerContact: "Contact",
  rights: "All rights reserved.",
  builtWith: "Built with Next.js",
};

export const content: Record<Lang, Content> = { es, en };
