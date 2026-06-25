  // ────────────────────────────────────────────────────────
  //  Portfolio Data — Chirag Prasad
  // ────────────────────────────────────────────────────────

  export const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Leadership', href: '#positions' },
    { label: 'Contact', href: '#contact' },
  ]



export const EXPERIENCE = [
    {
  role: 'Full Stack Developer Intern',
  org: 'VedaAI',
  duration: 'March 2026 – June 2026',

  desc: [
    'Built and shipped an automated AI-grading pipeline integrating LLM APIs with Node.js and MongoDB, processing 200+ student assignments and reducing manual grading workload by 30+ hours per month.',

    'Designed 15+ REST API endpoints and MongoDB schemas for AI-powered assessment workflows, improving average API response times by 20% and enabling seamless frontend integration.'
  ],

  color: 'purple',
},

    {
      role: 'Intern',
      org: 'Grasim Industries (Aditya Birla Group)',
      duration: 'Dec 2025 – Jan 2026',

      desc: [
        'Built a centralized enterprise Trainee Tracker application using Microsoft Power Apps, Dataverse, and SharePoint, implementing role-based access for three user roles (HR, trainees, and department) along with four core modules for trainee management, assignments, progress tracking, and certification.',

        'Automated end-to-end certificate generation and assignment workflows using Power Automate by integrating Word templates with Dataverse, converting them to PDF, and distributing via Outlook—reducing manual processing time from ~5 minutes per trainee to under 20 seconds (~95% time savings) and enabling real-time monitoring through Power BI dashboards.'
      ],

      color: 'blue',

      report: '/reports/report.pdf'
    },
  ]


  export const EDUCATION = [
    {
      degree: 'B.Tech in Information Technology',
      institute: 'IIIT Bhopal',
      duration: '2023 – 2027',
      gpa: '8.18 CGPA',
      highlights: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management System' , 'Object Oriented Programming','Computer Networks','Software Engineering'],
    },
  ]

  export const SKILLS = [
  {
    category: 'Programming Languages',
    icon: '⌨',
    items: [
      'C++',
      'C',
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
      'HTML5',
    ],
  },

  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },

  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'GraphQL',
      'JWT',
      'Microservices',
    ],
  },

  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Firebase',
    ],
  },

  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'CI/CD',
      'Render',
      'Vercel',
    ],
  },

  {
    category: 'Concepts',
    icon: '📚',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design',
      'Agile/Scrum',
    ],
  },
]

  export const ACHIEVEMENTS = [
    {
      title: 'India Space Week Competition',
      subtitle: 'ISRO (East Zone)',
      description: 'Ranked 1st among all participants',
      icon: '🚀',
      highlight: '1st Rank',
    },
    {
      title: 'OWASP Bug Hunting',
      subtitle: 'MANIT Bhopal',
      description: 'Secured 4th position in cybersecurity competition',
      icon: '🛡️',
      highlight: '4th Place',
    },
    {
      title: 'CodeChef & Leetcode',
      subtitle: 'Competitive Programming',
      description: 'Achieved 3★ rating with max rating of 1601 on Codechef & 1613 rating on LeetCode',
      icon: '💻',
      highlight: '3★',
    },
    {
      title: 'DSA Practice',
      subtitle: 'LeetCode • CodeChef • GeeksforGeeks',
      description: 'Solved 500+ data structures and algorithms problems',
      icon: '📊',
      highlight: '500+ Problems',
    },
  ]

  export const POSITIONS = [
    {
      title: 'CTF Master',
      org: 'XPOLIT CLUB(Cybersecurity), IIIT Bhopal',
      duration: 'July2025 – Present',
      impact: [
    'Organized and executed “RootRush” CTF during NIIMACK 2026 (February 2026) at IIIT Bhopal, attracting 200+ participants across inter-college institutions in Bhopal with competitive challenges',
    
    'Organized and led Xploit Club’s inaugural cybersecurity events during September 2025 Student Week, engaging 300+ B.Tech, M.Tech, and MCA students of IIIT Bhopal through quizzes and CTF challenges focused on hands-on problem-solving and collaboration'
  ],
    },
    {
      title: 'ARMA CODE O',
      org: 'IISER x IIIT Bhopal',
      duration: 'March 2025',
      impact: [
    'Contributed to the organizing team of ARMA CODE 0, a national-level hackathon by IISER Bhopal and IIIT Bhopal, with 200+ participants',
    
    'Guided 10 finalist teams in developing full-stack web solutions during the hackathon'
  ],
    },

    {
      title: 'Magazine Editor & Head',
      org: 'Magazine Team',
      duration: 'May 2025 - Feb 2026',
      impact: [
    'Led and coordinated a team to successfully deliver 3 editions of the college magazine on time',
    
    'Curated high-quality content, oversaw editorial workflows, and ensured consistency in design and publication standards'
  ],
    },

  ]

  export const CERTIFICATIONS = [
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: '2026',
      badge: '🏅',
      url: 'https://www.hackerrank.com/certificates/793321062c9f',
      color: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/20',
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      date: '2026',
      badge: '🏅',
      url: 'https://www.hackerrank.com/certificates/8fbf8ad42a97',
      color: 'from-green-500/20 to-teal-500/20',
      border: 'border-green-500/20',
    },
    {
      title: 'GirlScript Summer of Code (GSSoc24)',
      issuer: 'GirlScript Foundation',
      date: '2024',
      badge: '🏅',
      url: '',
      color: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-500/20',
    },
  ]

  export const PROJECTS = [
    {
      title: 'ASTRA',
      desc: 'A Web based security analysis app for detection of fake urls and apks providing deep analysis and reports',
      stack: ['Next.js', 'Tailwind', 'Postgres', 'React.js', 'Vite'],
      live: 'https://astra-eta-nine.vercel.app/',
      repo: 'https://github.com/Chiiraag11/ASTRA.git',
      featured: true,
    },
  {
    title: 'CyberPulse',
    desc: 'Developed and deployed a full-stack cybersecurity monitoring platform for real-time website security analysis, featuring automated risk scoring, security audits, PDF report exports, and interactive analytics dashboards.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Recharts', 'Tailwind CSS'],
    live: 'https://cyber-pulse-nine.vercel.app/',
    repo: 'https://github.com/Chiiraag11/CyberPulse',
    featured: false,
  },
  {
      title: 'Finance-manager',
      desc: 'A RESTful backend service for managing personal finances — built with Kotlin, Spring Boot 3.x, and H2',
      stack: ['Kotlin'],
      repo: 'https://github.com/Chiiraag11/finance-manager',
      featured: false,
    },

    {
      title: 'LoanFlow',
      desc: 'A production-quality, full-stack Loan Management System built with Next.js 15, Express.js, MongoDB, and JWT authentication',
      stack: [
    'Next.js 15',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Tailwind CSS',
  ],
      live: 'https://loan-flow-gamma.vercel.app',
      repo: 'https://github.com/Chiiraag11/LoanFlow',
      featured: true,
    },

    {
  title: 'FinChat',
  desc: 'An AI-powered personal finance dashboard that transforms natural-language questions into secure SQL queries, delivering real-time spending insights, analytics, and interactive visualizations from user transaction data.',
  stack: [
    'Next.js 14',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'OpenAI GPT-4o Mini',
    'Redis',
    'NextAuth.js',
    'TanStack Query',
    'Zustand',
    'Recharts',
    'Tailwind CSS',
    'Docker',
  ],
      live: 'cash-chat.vercel.app',
      repo: 'https://github.com/Chiiraag11/CashChat',
      featured: false,
}

  ]

  export const SOCIAL = {
    github: 'https://github.com/Chiiraag11',
    linkedin: 'https://www.linkedin.com/in/chiragprasad11/',
    email: 'chiragprasad504@gmail.com',
    leetcode: 'https://leetcode.com/u/Chirag_11/',
  }
