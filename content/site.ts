export const site = {
  name: "Ali Haggag",
  role: "Software Engineer",
  location: "Cairo, Egypt",
  headline:
    "Software engineer building national-scale fintech systems and enterprise AI platforms.",
  thesis: "Spring Boot. Distributed systems. LLMs.",
  url: "https://alihaggag.com",
  email: "alhaggag@hotmail.com",
  linkedin: "https://www.linkedin.com/in/ali-haggag/",
  github: "https://github.com/AliHaggag11",
};

export const about = {
  lead: "I work at the intersection of mission-critical fintech, scalable platform engineering, and enterprise AI.",
  body: [
    "At Egyptian Banks Company I contribute to InstaPay, Egypt’s leading instant payment platform — helping build and evolve secure, highly available systems used by millions of customers. The work covers Spring Boot microservices, PostgreSQL performance, API design, caching, reliability, and scalable backend architecture.",
    "The interesting part is not only shipping features. It is understanding the larger system: how services interact, where bottlenecks appear, how technical decisions affect operations, and how business requirements become architecture that can be maintained.",
    "I am also focused on enterprise AI — the practical adoption of large language models inside organizations. That includes platform architecture, retrieval-augmented generation and document intelligence, AI-assisted engineering workflows, agentic systems and tool orchestration, local privacy-first LLM deployment, and the governance required to adopt AI safely.",
  ],
  direction:
    "The long-term direction is roles that combine software architecture, product thinking, technical leadership, and AI — systems with national and business impact.",
};

export const experience = [
  {
    slug: "egyptian-banks-company",
    role: "Software Engineer",
    company: "Egyptian Banks Company",
    type: "Full-time",
    dates: "Dec 2023 — Present",
    place: "Egypt · On-site",
    current: true,
    summary:
      "Contributing to InstaPay: Spring Boot microservices, PostgreSQL, APIs, caching, and reliability for Egypt’s instant payments platform.",
  },
  {
    slug: "upscale-da",
    role: "Frontend Developer",
    company: "Upscale DA",
    type: "Full-time",
    dates: "Jun 2021 — Aug 2023",
    place: "Cairo, Egypt",
    current: false,
    summary:
      "Frontend product work with JavaScript, Vite, and responsive interfaces — two years building and shipping web applications.",
  },
  {
    slug: "emaar",
    role: "Architect",
    company: "Emaar",
    type: "Part-time",
    dates: "Jun 2018 — Sep 2018",
    place: "",
    current: false,
    summary:
      "Part-time architecture practice before the move into software engineering.",
  },
] as const;

export const work = [
  {
    slug: "instapay",
    title: "InstaPay",
    client: "Egyptian Banks Company",
    years: "2023 — Present",
    role: "Software Engineer",
    excerpt:
      "National instant payments. Secure, highly available systems used by millions of customers.",
    problem:
      "Instant payments have to clear correctly, stay available, and remain secure under national-scale load. There is little room for architecture that only works on a happy path.",
    built: [
      "Spring Boot microservices for InstaPay, Egypt’s leading instant payment platform.",
      "PostgreSQL performance work, API design, and caching as part of the reliability surface.",
      "Backend architecture that has to stay maintainable as the platform evolves.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Microservices",
      "System design",
    ],
  },
  {
    slug: "upscale-da",
    title: "Upscale DA",
    client: "Upscale DA",
    years: "2021 — 2023",
    role: "Frontend Developer",
    excerpt:
      "Two years of full-time frontend engineering: interfaces, performance, and shipping product.",
    problem:
      "Product teams needed web interfaces that were fast, responsive, and maintainable — not demos that fell apart in production.",
    built: [
      "Frontend applications with JavaScript and Vite.",
      "Responsive layouts and interaction work across shipped product surfaces.",
      "A two-year stretch of full-time delivery before moving into backend and platform engineering.",
    ],
    stack: ["JavaScript", "Vite", "Responsive design", "Frontend"],
  },
] as const;

export const stack = {
  featured: [
    "Spring Boot",
    "Systems Design",
    "Artificial Intelligence",
    "Microservices",
    "Next.js",
  ],
  groups: [
    {
      label: "Backend & platforms",
      items: [
        "Java",
        "Spring Boot",
        "Spring Framework",
        "PostgreSQL",
        "Redis",
        "SQL",
        "Microservices",
        "Distributed systems",
        "System design",
      ],
    },
    {
      label: "Product & web",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Vite",
        "Responsive design",
      ],
    },
    {
      label: "Enterprise AI",
      items: [
        "LLM integration",
        "RAG",
        "Ollama",
        "MLX",
        "Agentic systems",
        "Document intelligence",
      ],
    },
  ],
};

export const certifications = [
  {
    title: "IAB Digital Marketing and Media Foundations",
    issuer: "Google Digital Garage",
    issued: "May 2022",
  },
  {
    title: "Udacity Frontend Development Nanodegree",
    issuer: "Udacity",
    issued: "Feb 2022",
  },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}
