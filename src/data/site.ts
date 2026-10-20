// ✏️ Edit everything about your portfolio here.
// Items with `pending: true` are placeholders: replace them with details you can verify.
export const profile = {
  name: 'Sovit Sarbeswar Lenka',
  firstName: 'Sovit',
  wordmark: 'SOVIT', // the oversized hero lettering
  role: 'Full-Stack Developer',
  intro:
    'I build real-world web applications end to end: React and Astro on the front, Node.js and NestJS on the back, and databases underneath.',
  statement:
    'A full-stack developer who works across the whole stack, from the interface people touch to the API and the database behind it.',
  location: '', // optional, hidden when empty
  email: 'you@example.com',
  resume: '/resume.pdf', // put your PDF in /public
  avatar: '', // e.g. '/me.jpg'. Empty = initial
  available: false, // set true to show an "Available for work" badge
  socials: [
    { label: 'GitHub', href: 'https://github.com/Sovit8917'},
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  ],
};

export const stats = [
  { value: 'Frontend', label: 'React · Astro' },
  { value: 'Backend', label: 'Node.js · NestJS' },
  { value: 'Data', label: 'Databases' },
];

export const about = [
  { title: 'Background', text: 'Add a short, true account of how you got into software: studies, first projects, what pulled you in.', pending: true },
  { title: 'Current experience', text: 'Add your current role, or what you are building right now.', pending: true },
  { title: 'Technical strengths', text: 'React and Astro for the interface, Node.js and NestJS for services, and databases for the data layer, applied to real-world web applications.' },
  { title: 'Career goals', text: 'Add where you want to grow next.', pending: true },
];

export const projects = [
  { slug: 'project-one', title: 'Featured project', tagline: 'Add a one-line summary', description: 'Replace with what it does, who uses it, and what you built.', live: '', repo: '', tags: ['Web App'], year: '', role: '', stack: [] as string[] },
  { slug: 'project-two', title: 'Second project', tagline: 'Add a one-line summary', description: 'Replace with what it does, who uses it, and what you built.', live: '', repo: '', tags: ['Full-stack'], year: '', role: '', stack: [] as string[] },
  { slug: 'project-three', title: 'Third project', tagline: 'Add a one-line summary', description: 'Replace with what it does, who uses it, and what you built.', live: '', repo: '', tags: ['Web App'], year: '', role: '', stack: [] as string[] },
];

export const skills = [
  {
    group: 'Frontend',
    blurb: 'Building responsive, accessible, and modern user interfaces.',
    items: [
      { name: 'HTML5 & CSS3', note: 'Semantic markup and modern styling' },
      { name: 'Tailwind CSS', note: 'Utility-first responsive UI development' },
      { name: 'JavaScript', note: 'ES6+ and modern web development' },
      { name: 'TypeScript', note: 'Type-safe, maintainable applications' },
      { name: 'React', note: 'Reusable components and interactive interfaces' },
      { name: 'Next.js', note: 'Full-stack React applications' },
      { name: 'Astro', note: 'Fast, content-focused websites' },
      { name: 'Redux Toolkit', note: 'Predictable application state management' },
    ],
  },
  {
    group: 'Backend',
    blurb: 'Developing scalable APIs, services, and application logic.',
    items: [
      { name: 'Node.js', note: 'Server-side JavaScript development' },
      { name: 'Express.js', note: 'REST APIs and web services' },
      { name: 'NestJS', note: 'Modular, scalable backend architecture' },
      { name: 'ElysiaJS', note: 'High-performance TypeScript APIs with Bun' },
      { name: 'REST APIs', note: 'API design, integration, and documentation' },
      { name: 'WebSockets', note: 'Real-time, bidirectional communication' },
    ],
  },
  {
    group: 'AI Engineering',
    blurb: 'Building LLM-powered applications and intelligent workflows.',
    items: [
      { name: 'LLMs', note: 'Integrating large language models into applications' },
      { name: 'RAG', note: 'Retrieval-augmented generation workflows' },
      { name: 'LangChain', note: 'LLM applications and tool integration' },
      { name: 'AI Agents', note: 'Tool calling and multi-step AI workflows' },
      { name: 'Google Gemini', note: 'Integrating Gemini models into applications' },
    ],
  },
  {
    group: 'Databases',
    blurb: 'Designing reliable data models and efficient data access layers.',
    items: [
      { name: 'PostgreSQL', note: 'Relational data modeling and SQL queries' },
      { name: 'MongoDB', note: 'Document-oriented data storage' },
      { name: 'MySQL', note: 'Relational database management' },
      { name: 'Redis', note: 'Caching and fast data access' },
      { name: 'Prisma', note: 'Type-safe database access and migrations' },
      { name: 'Drizzle ORM', note: 'Type-safe SQL queries and schema management' },
    ],
  },
  {
    group: 'DevOps & Cloud',
    blurb: 'Managing development workflows, containers, and cloud deployments.',
    items: [
      { name: 'Git', note: 'Version control and collaborative workflows' },
      { name: 'GitHub', note: 'Repository management and collaboration' },
      { name: 'Docker', note: 'Containerization and local development environments' },
      { name: 'CI/CD', note: 'Automated build, test, and deployment pipelines' },
      { name: 'AWS', note: 'Cloud infrastructure and deployment fundamentals' },
      { name: 'GitHub Actions', note: 'Workflow automation and CI/CD pipelines' },
      { name: 'Cloudflare', note: 'Pages, Workers, CDN, and web infrastructure' },
      { name: 'Postman', note: 'API testing and debugging' },
    ],
  },
  {
    group: 'Authentication & Security',
    blurb: 'Implementing secure authentication and session-based access.',
    items: [
      { name: 'JWT', note: 'Token-based authentication' },
      { name: 'Better Auth', note: 'Authentication and session management' },
      { name: 'Session Management', note: 'Cookie-based sessions and access control' },
    ],
  },
];

export const experience = [
  { period: 'Add dates', title: 'Current role', org: 'Add company', note: 'Add what you do and own here.', points: ['Add a verified highlight.'], pending: true },
  { period: 'Add dates', title: 'Education', org: 'Add institution', note: 'Add your degree or training here.', points: ['Add a verified highlight.'], pending: true },
];

export const achievements = [
  { title: 'Certification or award', text: 'Add a recognition you can verify.', pending: true },
  { title: 'Hackathon or open source', text: 'Add contributions or events you took part in.', pending: true },
  { title: 'Shipped milestone', text: 'Add a launch or result you can stand behind.', pending: true },
];

// 🎨 Look & feel. Light theme only.
export const theme = {
  accent: '#FF794A',
  background: '#fffaf4',
  ink: '#1f1d1b',
  radius: '14px',
  headingFont: 'Instrument Serif',
  bodyFont: 'Inter Tight',
  maxWidth: '1240px',
};

export const sections = { about: true, skills: true, projects: true, experience: true, achievements: true, contact: true };
