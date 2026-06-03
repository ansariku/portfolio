// Personal Information
export const personalInfo = {
  name: 'ANSARI USMAN',
  title: 'Software Engineer',
  shortBio:'I build clean, efficient, and scalable software solutions. Passionate about creating meaningful digital experiences from robust backend architecture to polished user interfaces.',
  about: `I'm a software engineer based in Metro Manila with a strong foundation in computer science and a genuine passion for building reliable, scalable software. I thrive in environments that challenge me to think critically and deliver impactful solutions.

I form ideas into a creation that gives great and impactful experience to anyone that interacts with it.`,
  location: 'Metro Manila, PH',
  education: 'BS in Information Technology',
  interests: 'Software Development',
  email: 'ansarikatugusman@gmail.com',
  phone: '+63 976 100 9508',
  linkedin: 'https://linkedin.com/in/ansariku',
  github: 'https://github.com/ansariku',
  cvUrl: '/ANSARI_USMAN_CV.pdf', // CV located in public folder
};

// Skills (checklist)
export const skills = [
  'Proficient in building RESTful APIs and microservices',
  'Experience with relational and non-relational databases',
  'Strong understanding of software design patterns and SOLID principles',
  'Skilled in version control workflows using Git and GitHub',
  'Familiar with agile development methodologies and sprint cycles',
  'Experience with CI/CD pipelines and basic DevOps practices',
];

// Tech Map (key → display info): Used by TechBadge and referenced in projects
export const TECH_MAP = {
  javascript: { key: 'javascript', name: 'JavaScript (JS)' },
  typescript: { key: 'typescript', name: 'TypeScript (TS)' },
  html: { key: 'html', name: 'HTML5' },
  css: { key: 'css', name: 'CSS3' },
  sql: { key: 'sql',name: 'SQL' },
  python: { key: 'python', name: 'Python 3' },
  java: { key: 'java', name: 'Java' },
  csharp: { key: 'csharp', name: 'C#' },
  reactjs: { key: 'reactjs',name: 'React.js' },
  nodejs: { key: 'nodejs', name: 'Node.js' },
  express: { key: 'express', name: 'Express' },
  reactnative: { key: 'reactnative', name: 'React Native' },
  nextjs: { key: 'nextjs',name: 'Next.js' },
  git: { key: 'git', name: 'Git' },
  github: { key: 'github', name: 'GitHub' },
  postman: { key: 'postman', name: 'Postman' },
  docker: { key: 'docker', name: 'Docker' },
  aws: { key: 'aws', name: 'AWS' },
  vercel: { key: 'vercel', name: 'Vercel' },
  render: { key: 'render', name: 'Render' },
  vscode: { key: 'vscode', name: 'VS Code' },
  postman: { key: 'postman', name: 'Postman' },
  mongodb: { key: 'mongodb', name: 'MongoDB' },
  postgresql: { key: 'postgresql', name: 'PostgreSQL' },
  mysql: { key: 'mysql', name: 'MySQL' },
  redis: { key: 'redis', name: 'Redis' },
};

// Languages
export const languages = [
  TECH_MAP.javascript,
  TECH_MAP.typescript,
  TECH_MAP.html,
  TECH_MAP.css,
  TECH_MAP.sql,
  TECH_MAP.python,
  TECH_MAP.java,
  TECH_MAP.csharp,
];

// Frameworks
export const frameworks = [
  TECH_MAP.reactjs,
  TECH_MAP.nodejs,
  TECH_MAP.express,
  TECH_MAP.reactnative,
  TECH_MAP.nextjs
];

// Tools
export const tools = [
  TECH_MAP.git,
  TECH_MAP.github,
  TECH_MAP.docker,
  TECH_MAP.aws,
  TECH_MAP.vercel,
  TECH_MAP.render,
  TECH_MAP.vscode,
  TECH_MAP.postman,
];

// Databases
export const databases = [
  TECH_MAP.mongodb,
  TECH_MAP.postgresql,
  TECH_MAP.mysql,
  TECH_MAP.redis
]