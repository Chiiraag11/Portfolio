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
  { label: 'Position of Responsibility', href: '#positions' },
  { label: 'Contact', href: '#contact' },
]

export const EXPERIENCE = [
  {
    role: 'Intern',
    org: 'Grasim Industries(Aditya Birla Group)',
    duration: 'Dec 2025 – Jan 2026',

    desc: [
  'Built a centralized enterprise Trainee Tracker application using Microsoft Power Apps, Dataverse, and SharePoint, implementing role-based access for three user roles (HR, trainees, and department) along with four core modules for trainee management, assignments, progress tracking, and certification.',
  
  'Automated end-to-end certificate generation and assignment workflows using Power Automate by integrating Word templates with Dataverse, converting them to PDF, and distributing via Outlook—reducing manual processing time from ~5 minutes per trainee to under 20 seconds (~95% time savings) and enabling real-time monitoring through Power BI dashboards.'
],

    color: 'blue',
  },
]

export const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    institute: 'IIIT Bhopal',
    duration: '2023 – 2027',
    gpa: '8.16 CGPA',
    highlights: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS' , 'OOPs'],
  },
  
]

export const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨',
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL' ,'Power Fx'],
  },
  {
    category: 'Technonologies',
    icon: '🌐',
    items: [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'FastAPI',
  'Bootstrap',
  'Tailwind CSS'
],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma','Canva', 'Vercel' , 'BurpSuite' , 'MATLAB' , 'PowerApps'],
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
    title: 'CodeChef',
    subtitle: 'Competitive Programming',
    description: 'Achieved 2★ rating with max rating of 1537',
    icon: '💻',
    highlight: '2★',
  },
  {
    title: 'DSA Practice',
    subtitle: 'LeetCode • CodeChef • GeeksforGeeks',
    description: 'Solved 350+ data structures and algorithms problems',
    icon: '📊',
    highlight: '350+ Problems',
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
    title: 'GirlScript Summer of Code',
    issuer: 'GirlScript Foundation',
    date: '2024',
    badge: '🌸',
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
    live: 'https://astra-orpin-two.vercel.app/',
    repo: 'https://github.com/Chiiraag11/ASTRA.git',
    featured: true,
  },
  {
    title: 'HelpResume',
    desc: 'Build a full stack AI powered resume builder for creating and editing professional resumes',
    stack: ['React.js', 'Next.js', 'MongoDB', 'Tailwind' , 'Express.js' , 'Node.js'],
    live: '#',
    repo: 'https://github.com/Chiiraag11/HelpResume.git',
    featured: true,
  },
  {
    title: 'Project Management System',
    desc: 'Built a backend for a Project Management System using the MERN stack, enabling efficient task management, user authentication, and scalable API handling.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    repo: 'https://github.com',
    featured: false,
  },
  {
    title: 'qr-ify generator',
    desc: 'Developed a QR Code Generator web application with customizable themes and color options for enhanced user experience.',
    stack: ['HTML', 'CSS3', 'Javascript', 'Bootstrap'],
    live: 'https://qr-ify-generator.vercel.app/',
    repo: 'https://github.com/Chiiraag11/qr-ify-generator.git',
    featured: false,
  },
 
  {
    title: 'Image Enhancement',
    desc: 'Build a application for image enhancement using CLAHE Tech and Histogram Equalization',
    stack: ['Python'],
    live: '#',
    repo: 'https://github.com/Chiiraag11/Image-Enhancement.git',
    featured: false,
  },
]

export const SOCIAL = {
  github: 'https://github.com/Chiiraag11',
  linkedin: 'https://www.linkedin.com/in/chiragprasad11/',
  email: 'chiragprasad504@gmail.com',
  leetcode: 'https://leetcode.com/u/Chirag_11/',
}
