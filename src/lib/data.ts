// ────────────────────────────────────────────────────────
//  Portfolio Data — Chirag Prasad
// ────────────────────────────────────────────────────────

export const IDENTITY = {
  name: 'Chirag Prasad',
  role: 'Software Engineer',
  location: 'Bhopal, India',
  status: 'Final-year IT undergrad at IIIT Bhopal',
  blurb:
    "I build backend systems, security tooling, and AI-integrated products — the kind of software that has to be correct under load, not just correct in the demo. ",
}

export const SOCIAL = {
  github: 'https://github.com/Chiiraag11',
  linkedin: 'https://www.linkedin.com/in/chiragprasad11/',
  email: 'chiragprasad504@gmail.com',
  leetcode: 'https://leetcode.com/u/Chirag_11/',
}

export const EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    org: 'Ambiguity Labs',
    duration: 'Jul 2026 — Aug 2026',
    desc: 'Built 10+ Dockerized TerminalBench tasks across ML, distributed systems, and system administration, with oracle solutions and Pytest-based verification pipelines for benchmarking LLM coding agents.',
    stack: ['Python', 'Bash', 'Docker', 'Pytest'],
  },
  {
    role: 'SDE Intern',
    org: 'VedaAI',
    duration: 'Feb 2026 — Jun 2026',
    desc: 'Delivered an AI academic assessment system using React, Node.js, Python, and MongoDB for 1K+ students, building REST APIs and LLM-powered backend services while reducing average API response times by 30%.',
    stack: ['React', 'Node.js', 'Python', 'MongoDB'],
  },
  {
    role: 'Intern',
    org: 'Grasim Industries — Aditya Birla Group',
    duration: 'Dec 2025 — Jan 2026',
    desc: 'Automated certificate generation and assignment workflows across 3 user roles and 4 core modules, reducing processing time from 5 minutes to 20 seconds while enabling secure trainee management and real-time reporting.',
    stack: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint'],
  },
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'Tailwind CSS'],
  },
  {
    category: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Linux'],
  },
  {
    category: 'AI & Engineering',
    items: ['LLM Agents', 'RAG', 'API Testing', 'Performance Testing', 'CI/CD'],
  },
]

export const PROJECTS = [
  {
    title: 'CashChat',
    tagline: 'AI finance dashboard',
    desc: 'A finance dashboard that turns natural language into SQL via the Gemini API, with a custom validator that blocks injection attacks and unauthorized schema access — verified against 10 adversarial test cases. OAuth 2.0 auth backs 7+ REST endpoints, and Redis caching cuts repeat LLM calls and token cost.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Gemini API'],
    live: 'https://cash-chat.vercel.app',
    repo: 'https://github.com/Chiiraag11/CashChat',
    variant: 'lime' as const,
    visual: 'chat' as const,
    image: '/projects/project1.png',
  },
  {
    title: 'LoanFlow',
    tagline: 'Loan management system',
    desc: 'A full-stack loan management platform with RBAC across 6 roles, securing 18 REST endpoints behind auth middleware. The loan lifecycle is modeled as a 6-state machine driven by a business rule engine, backed by JWT and bcrypt. Ships at 56ms average API response time and a 97/100 Lighthouse score.',
    stack: ['Next.js', 'Express', 'TypeScript', 'MongoDB', 'JWT'],
    live: 'https://loan-flow-gamma.vercel.app',
    repo: 'https://github.com/Chiiraag11/LoanFlow',
    variant: 'coral' as const,
    visual: 'flow' as const,
    image: '/projects/project2.png',
  },
]
