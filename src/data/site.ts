// ✏️ Edit everything about your portfolio here.
// Items with `pending: true` are placeholders: replace them with details you can verify.
export const profile = {
  name: 'Sovit Sarbeswar Lenka',
  firstName: 'Sovit',
  wordmark: 'SOVIT', // the oversized hero lettering
  role: 'Full-Stack Developer',
  intro:
  'I build full-stack applications and AI-powered solutions using React, Next.js, Node.js, and modern AI tools.',
statement:
  'Passionate about combining full-stack development and Generative AI to build intelligent applications, useful AI agents, and real-world software solutions.',
location: 'Balasore, Odisha',
  email: 'lenkasovitsarbeswar@gmail.com',
  resume: '/resume.pdf', // put your PDF in /public
  avatar: '/profile_picture.jpeg', // e.g. '/me.jpg'. Empty = initial
  available: true, //set true to show an "Available for work" badge
  socials: [
    { label: 'GitHub', href: 'https://github.com/Sovit8917'},
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  ],
};

export const stats = [
  { value: 'Frontend', label: 'React · Next.js' },
  { value: 'Backend', label: 'Node.js · NestJS · ElysiaJS' },
  { value: 'Database', label: 'PostgreSQL · MongoDB' },
];

export const about = [
  {
    title: 'Background',
    text: 'Computer Science graduate passionate about building practical web applications.',
  },
  {
    title: 'Current experience',
    text: 'Full Stack Developer at Bulwarkers Websecurity, building backend services and REST APIs.',
  },
  {
    title: 'Technical strengths',
    text: 'React, Next.js, Astro, Node.js, NestJS, PostgreSQL, MongoDB, and Redis.',
  },
  {
    title: 'Career goals',
    text: 'Building scalable applications and growing as a software engineer.',
  },
];
export const projects = [
  {
    slug: 'karyvio',
    title: 'Karyvio',
    tagline: 'Tech jobs and career platform.',
    description: 'Job search, filtering, authentication, and admin features.',
    live: 'https://karyvio.com/',
    repo: '',
    tags: ['Full-stack', 'Web App'],
    year: '2026',
    role: 'Full-Stack Developer',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'homeserve-customer',
    title: 'HomeServe Customer',
    tagline: 'Home services booking platform for customers.',
    description: 'Built service browsing, booking, scheduling, and OTP authentication.',
    live: 'https://home-serve-customer-website.vercel.app/',
    repo: 'https://github.com/Sovit8917/HomeServe-Customer-Website.git',
    tags: ['Full-stack', 'Web App'],
    year: '2026',
    role: 'Full-Stack Developer',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    slug: 'homeserve-worker',
    title: 'HomeServe Worker',
    tagline: 'Service management platform for workers.',
    description: 'Built worker workflows for assigned jobs, scheduling, tracking, and profile management.',
    live: 'https://home-serve-worker-website.vercel.app/',
    repo: '',
    tags: ['Full-stack', 'Web App'],
    year: '2026',
    role: 'Full-Stack Developer',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    slug: 'homeserve-mobile',
    title: 'HomeServe Mobile',
    tagline: 'Mobile app for home service bookings.',
    description: 'Built customer booking features and integrated backend APIs.',
    live: 'https://github.com/Sovit8917/HomeServe-APK/releases/download/v1.0.5/HomeServe.APK.1.1.5.apk',
    repo: 'https://github.com/Sovit8917/HomeServe-APK.git',
    tags: ['Mobile App'],
    year: '2026',
    role: 'Mobile Developer',
    stack: ['React Native', 'Expo', 'NestJS', 'PostgreSQL'],
  },
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
  
];

export const experience = [
  {
    period: 'Aug 2026 – Present',
    title: 'Full Stack Developer',
    org: 'Bulwarkers Websecurity Pvt. Ltd.',
    note: 'Developing backend services and REST APIs for web security applications.',
    points: [
      'Building APIs using ElysiaJS, TypeScript, and PostgreSQL.',
      'Working on backend architecture, authentication, and database integration.',
    ],
    pending: false,
  },
  {
    period: 'Feb 2026 – Jul 2026',
    title: 'Full Stack Developer Intern',
    org: 'Bulwarkers Websecurity Pvt. Ltd.',
    note: 'Worked on the iArmor web security application.',
    points: [
      'Improved UI responsiveness and performance through code optimization and component refactoring.',
    ],
    pending: false,
  },
  {
    period: '2022 – 2026',
    title: 'B.Tech in Computer Science and Engineering',
    org: 'Nalanda Institute of Technology',
    note: 'Completed undergraduate studies in Computer Science and Engineering.',
    points: ['CGPA: 7.8'],
    pending: false,
  },
];

export const achievements = [
  {
    title: 'Full Stack Development with AI',
    text: 'PW Skills · March 2026',
    link: 'https://drive.google.com/file/d/1WMOL1kovAlauCrObS3HLVrRDjIVY6AL7/view?usp=sharing',
    pending: false,
  },
  {
    title: 'ReactJS for Beginners',
    text: 'Simplilearn · September 2025',
    link: 'https://drive.google.com/file/d/1gTiykaVJpJgnUT704R8jV5XPheWEOH2a/view?usp=sharing',
    pending: false,
  },
  {
    title: 'Full Stack Developer Internship',
    text: 'Bulwarkers Websecurity Pvt. Ltd. · iArmor',
    link: 'https://drive.google.com/file/d/1ncPh-8It4XFWNrK3wu8CR5pa1FYuTPEM/view?usp=sharing',
    pending: false,
  },
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
