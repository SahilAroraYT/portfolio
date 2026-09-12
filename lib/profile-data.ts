export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  current?: boolean;
};

export type ProjectEntry = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  featured?: boolean;
};

export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string;
};

export type ProfileData = {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  avatar: string;
  location: string;
  availability: string;
  about: string[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: Record<string, string[]>;
  quickFacts: string[];
  chatContextExtra: string[];
};

export const profile: ProfileData = {
  name: "Sahil Arora",
  title: "Software Developer",
  roles: [
    "Software Developer",
    "Web & App Builder",
    "Problem Solver",
    "Lifelong Learner",
  ],
  tagline:
    "I build web and mobile applications that solve real problems with clean, reliable code.",
  avatar: "/profile.png",
  location: "Ludhiana, Punjab, India",
  availability: "Open to Opportunities",

  about: [
    "I am a Software Developer based in Ludhiana, Punjab, passionate about building web and mobile applications that are fast, accessible, and a pleasure to use. My journey began with a BTech in Computer Science Engineering from Guru Nanak Dev Engineering College, Ludhiana.",
    "I enjoy solving problems end-to-end — from understanding what a user actually needs, to designing the architecture, to shipping polished, production-ready products. I care deeply about code quality, performance, and the details that make software feel great.",
  ],

  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com",
  },

  education: [
    {
      degree: "BTech in Computer Science Engineering",
      school: "Guru Nanak Dev Engineering College",
      location: "Ludhiana, Punjab",
      duration: "20XX — 20XX",
      description:
        "Core computer science fundamentals — data structures, algorithms, operating systems, and software engineering.",
    },
  ],

  experience: [
    {
      role: "Data Science Intern",
      company: "Sun Foundation",
      location: "Ludhiana, Punjab",
      duration: "20XX — 20XX",
      current: false,
      description:
        "Applied machine learning and statistical analysis to real-world data problems.",
      highlights: [
        "Built data pipelines and performed cleaning, transformation, and visualization",
        "Applied statistical analysis and ML models to solve practical problems",
        "Collaborated with mentors on data-driven projects",
      ],
    },
    {
      role: "Software Developer",
      company: "Your Company Name",
      location: "Remote / On-site",
      duration: "20XX — Present",
      current: true,
      description:
        "Developing and maintaining web applications with modern JavaScript technologies.",
      highlights: [
        "Built responsive, accessible interfaces with React and Next.js",
        "Designed and consumed RESTful APIs with Node.js",
        "Shipped features in cross-functional teams",
      ],
    },
  ],

  projects: [
    {
      name: "Project Alpha",
      description:
        "A full-stack web application for tracking daily tasks with analytics and insight dashboards.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-alpha",
      featured: true,
    },
    {
      name: "Project Beta",
      description:
        "A mobile-first personal finance app with expense tracking and budget planning.",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project-beta",
    },
    {
      name: "Project Gamma",
      description:
        "A data analysis tool that processes CSV datasets and generates interactive visualizations.",
      tech: ["Python", "Pandas", "Flask"],
      github: "https://github.com/yourusername/project-gamma",
    },
  ],

  skills: {
    "Frontend": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    "Backend": ["Node.js", "Express", "REST APIs"],
    "Data & AI": ["Python", "Pandas", "Machine Learning", "Data Analysis"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "Tools": ["Git", "GitHub", "Docker", "Vercel"],
  },

  quickFacts: [
    "BTech — Computer Science Engineering",
    "Data Science Intern at Sun Foundation",
    "React, Next.js, Node.js, Python",
    "Ludhiana, Punjab, India",
  ],

  chatContextExtra: [
    "Sahil Arora is a Software Developer based in Ludhiana, Punjab, India.",
    "He completed his BTech in Computer Science Engineering from Guru Nanak Dev Engineering College, Ludhiana.",
    "He can build websites, web applications, and mobile applications.",
    "He values clean, reliable code and enjoys full-stack development.",
  ],
};