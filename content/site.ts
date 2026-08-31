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
    "At Egyptian Banks Company I contribute to InstaPay, Egypt's leading instant payment platform — helping build and evolve secure, highly available systems used by millions of customers. The work covers Spring Boot microservices, PostgreSQL performance, API design, caching, reliability, and scalable backend architecture.",
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
      "Contributing to InstaPay: Spring Boot microservices, PostgreSQL, APIs, caching, and reliability for Egypt's instant payments platform.",
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
      "Spring Boot microservices for InstaPay, Egypt's leading instant payment platform.",
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

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  problem: string;
  built: string[];
  architecture: string;
  stack: string[];
  github: string | null;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "daleeli",
    title: "Daleeli",
    tagline: "Your business, in one clear system.",
    excerpt:
      "Commerce OS for Egyptian merchants: storefront, bookings, Paymob, shipping, and ops in one workspace.",
    problem:
      "Egyptian businesses still split selling, bookings, payments, and shipping across tools that were not built for local rails (Paymob, Bosta, ShipBlu) or Arabic-first storefronts.",
    built: [
      "Merchant dashboard and public storefront renderer with workspace archetypes (seller, service, creator, F&B).",
      "Paymob checkout with idempotent transactions and webhook verification.",
      "Bosta and ShipBlu shipping adapters with carrier-agnostic interface.",
      "Transactional outbox and immutable publish model for reliable state sync.",
      "Multi-tenant architecture with Postgres row-level security.",
    ],
    architecture:
      "Next.js app (dashboard + renderer) on Postgres tenancy with RLS, Redis and BullMQ workers, typed REST under /api/v1, payment and carrier adapter boundaries, transactional outbox for reliable publish.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Paymob"],
    github: null,
    liveUrl: null,
  },
  {
    slug: "eaip",
    title: "EAIP",
    tagline: "On-prem corporate AI platform.",
    excerpt:
      "Private AI behind the company's own auth, not a SaaS chatbot. Gateway, portal, and a data-science worker that stay on-prem.",
    problem:
      "Organizations need LLM capability inside their network and identity (LDAP, JWT), not another cloud chatbot with external tenancy.",
    built: [
      "Corporate portal with login, launcher, dashboard, and admin views.",
      "Spring Cloud API gateway with JWT routing.",
      "Auth and authorization backend with LDAP integration.",
      "Department data-science worker with Spring AI for LLM inference.",
    ],
    architecture:
      "Next.js portal calls a Spring Cloud Gateway; gateway fronts Spring Boot auth and a Spring AI worker; two Postgres databases (auth vs data-science); Docker Compose for on-prem deploy.",
    stack: ["Java 21", "Spring Boot", "Spring Cloud Gateway", "Next.js", "PostgreSQL", "Spring AI"],
    github: null,
    liveUrl: null,
  },
  {
    slug: "verdict",
    title: "Verdict",
    tagline: "Decide before you build.",
    excerpt:
      "An AI product manager that interrogates ideas instead of validating them.",
    problem:
      "Non-technical founders get polite AI that rubber-stamps weak ideas. They need something that disagrees, flags vague language, and kills bad builds early.",
    built: [
      "Idea interrogation that challenges assumptions instead of confirming them.",
      "Competitor mapping and differentiation analysis.",
      "PRD generation, interview scripts, and transcript handling.",
      "Cost estimation and decision history tracking.",
      "Founder, expert, and admin views with Docker Compose for local deployment.",
    ],
    architecture:
      "Next.js frontend, Express API, Prisma with PostgreSQL, Gemini 2.0 Flash, JWT access and refresh tokens. Prompting is opinionated: disagree when the idea is weak, score untested ideas honestly, prefer a no over a maybe.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Gemini"],
    github: "https://github.com/AliHaggag11/verdict",
    liveUrl: null,
  },
  {
    slug: "tasteos",
    title: "TasteOS",
    tagline: "Smart F&B operating system.",
    excerpt:
      "Multi-tenant ops for restaurants, cafés, and food trucks — menus, orders, kitchen, inventory, loyalty, and Paymob for Egypt.",
    problem:
      "Independent F&B shops run menus, orders, loyalty, stock, and payments as separate tools. In Egypt that also means a local payments rail, not Stripe-by-default.",
    built: [
      "QR menus and phone ordering with real-time kitchen display.",
      "Inventory management and multi-branch support.",
      "Loyalty programs and marketing tools.",
      "Feedback wall and Gemini-powered insights and recommendations.",
      "Paymob integration and Owner/Manager/Staff RBAC with subdomain tenancy.",
    ],
    architecture:
      "Next.js App Router, Supabase for Postgres, Auth, and Realtime, Paymob for Egypt payments, Gemini for insights. Multi-tenant via subdomain routing.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Gemini", "Paymob"],
    github: "https://github.com/AliHaggag11/tasteos",
    liveUrl: null,
  },
  {
    slug: "opero",
    title: "Opero",
    tagline: "Agency operating system.",
    excerpt:
      "Clients, projects, finance, and automation in one private ops platform — closer to how a studio actually runs than a project board.",
    problem:
      "Agencies still run clients, projects, and money across spreadsheets and chat. The work is operational, not a kanban skin.",
    built: [
      "Dashboard for clients, projects, and financial tracking.",
      "Automation workflows and intelligence features.",
      "Support and feedback management.",
      "Stripe integration for billing.",
      "Browser automation and Google APIs for operational tasks.",
    ],
    architecture:
      "Next.js with Drizzle and Postgres, Auth.js for authentication. Private internal tool — not a SaaS product.",
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Stripe", "Auth.js"],
    github: null,
    liveUrl: null,
  },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}
