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
  score: string;
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
    "Content Creator",
  ],
  tagline:
    "I build web and mobile applications that solve real problems with clean, reliable code.",
  avatar: "/profile.png",
  location: "Ludhiana, Punjab, India",
  availability: "Open to Opportunities",  

  about: [
    "I am a Software Developer based in Ludhiana, Punjab, passionate about building web and mobile applications that are fast, accessible, and a pleasure to use. My journey began with a BTech in Computer Science Engineering from Guru Nanak Dev Engineering College, Ludhiana.",
    "I enjoy solving problems end-to-end - from understanding what a user actually needs, to designing the architecture, to shipping polished, production-ready products. I care deeply about code quality, performance, and the details that make software feel great.",
  ],

  socials: {
    github: "https://github.com/sahilarorayt",
    linkedin: "https://www.linkedin.com/in/sahil-arora-9279792b8/",
    email: "sahilarorapersonal2003@gmail.com",
    twitter: ""
  },

  education: [
    {
      degree: "MTech in Computer Science & Engineering",
      school: "Guru Nanak Dev Engineering College",
      location: "Ludhiana, Punjab",
      duration: "2026 - present",
      score: "CGPA: —",
    },
    {
      degree: "BTech in Computer Science & Engineering",
      school: "Guru Nanak Dev Engineering College",
      location: "Ludhiana, Punjab",
      duration: "2022 - 2026",
      score: "CGPA: 8.26 / 10",
    },
    {
      degree: "Senior Secondary",
      school: "Spring Dale Public School",
      location: "Ludhiana, Punjab",
      duration: "2022",
      score: "Percentage: 92.8%",
    },
    {
      degree: "Matriculation",
      school: "Spring Dale Public School",
      location: "Ludhiana, Punjab",
      duration: "2020",
      score: "Percentage: 91.6%",
    },
    
  ],

  experience: [
    {
      role: "Data Science Intern",
      company: "Sun Foundation",
      location: "Ludhiana, Punjab",
      duration: "Jan 2026 - June 2026",
      current: false,
      description:
        "Applied machine learning and statistical analysis to real-world data problems.",
      highlights: [
        "Built data pipelines and performed cleaning, transformation, and visualization",
        "Applied statistical analysis and ML models to solve practical problems",
        "Collaborated with mentors on data-driven projects",
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