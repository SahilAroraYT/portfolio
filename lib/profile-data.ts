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
  image?: string;
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

export type SkillEntry = {
  name: string;
  icon?: string;
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
    instagram: string;
    email: string;
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: Record<string, SkillEntry[]>;
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
    instagram: "https://www.instagram.com/sahilarorayt"
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
      name: "Smart Logistics System",
      description:
        "An AI-powered delivery optimization platform. It predicts delivery failures, auto-assigns deliveries to agents, and generates optimized delivery routes with a live map, alerts, and audit logging.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Leaflet", "Recharts", "Python", "FastAPI", "SQL Alchemy", "XGBoost", "scikit-learn", "Pandas", "Numpy", "PostgreSQL", "Supabase", "OSRM"],
      image: "/smart_logistics_system.png",
      github: "https://github.com/SahilAroraYT/Smart-Logistics-System",
      link: "https://smartlogistics-system.vercel.app/",
    },
    {
      name: "Vote Chain - Smart Voting System",
      description:
        "Vote Chain is a blockchain-powered voting platform designed to ensure secure, transparent, and anonymous elections. It enables users to cast votes through a decentralized interface that generates instant blockchain receipts, providing verifiable proof of participation",
      tech: ["Next.js", "JavaScript", "Solidity", "Blockchain", "Hard hat"],
      github: "https://github.com/nirmt-124398/vote-chain",
    },
    {
      name: "Health Box",
      description:
        "Health Box is an AI-powered healthcare application that provides personalized medical assistance through symptom analysis and disease prediction. The platform features a comprehensive diagnostic system that analyzes user-reported symptoms using machine learning algorithms and Google's Gemini AI to deliver accurate health assessments, personalized treatment recommendations, and emergency assistance capabilities. This innovative solution combines advanced technology with medical knowledge to make healthcare more accessible and efficient for users.",
      tech: ["Python", "HTML/CSS", "Flask", "Tailwind CSS", "Material UI",  "SQLite", "SQL Alchemy", "NLTK", "OpenCV"],
      github: "https://github.com/SahilAroraYT/HealthBox-real",
      link: "https://healthbox-pbn4.onrender.com/",
      image: "/health_box.png",
    },
    {
      name: "Fusion Chess",
      description:
        "Developed a modern and responsive website for Fusion Chess Academy, designed to establish the academy’s online presence and provide students and parents with easy access to information about its chess training programs. The website showcases the academy, its coaching programs, achievements, and other relevant information in a clean and engaging interface.The platform is designed to make it easy for prospective students and parents to explore the academy’s offerings, learn about its training approach, and connect with the academy. The project focuses on responsive design, intuitive navigation, modern UI, and a user-friendly experience across devices.",
      tech: ["HTML/CSS", "JavaScript", "TypeScript","React", "Tailwind CSS", "Calendly"],
      github: "https://github.com/SahilAroraYT/Fusion-Chess",
      link: "https://fusionchess.netlify.app/",
      image: "/fusion_chess.png",
    },
  ],

  skills: {
    "Frontend & UI": [
      { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
      { name: "NextJS", icon: "https://img.icons8.com/color/48/000000/nextjs.png" },
      { name: "Redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png" },
      { name: "Material UI", icon: "https://img.icons8.com/color/48/000000/material-ui.png" },
      { name: "Chakra UI", icon: "https://img.icons8.com/color/48/000000/chakra-ui.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
      { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    ],
    "Backend & APIs": [
      { name: "NodeJS", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
      { name: "ExpressJS", icon: "https://img.icons8.com/fluency/48/000000/express-js.png" },
      { name: "Flask", icon: "https://img.icons8.com/ios/50/000000/flask.png" },
      { name: "FastAPI", icon: "https://img.icons8.com/ios/50/000000/api.png" },
      { name: "PHP", icon: "https://img.icons8.com/offices/48/000000/php-logo.png" },
    ],
    "Languages": [
      { name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
      { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
      { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
      { name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png" },
    ],
    "Databases": [
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/000000/postgreesql.png" },
      { name: "SQL", icon: "https://img.icons8.com/fluency/48/000000/sql.png" },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
      { name: "Netlify", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" },
      { name: "Vercel", icon: "https://img.icons8.com/color/48/000000/vercel.png" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/white" },
      { name: "Docker", icon: "https://img.icons8.com/color/48/000000/docker.png" },
      { name: "Podman", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/podman.png" },
    ],
    "Data & AI": [
      { name: "Machine Learning", icon: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png" },
      { name: "Data Structures & Algorithms", icon: "https://img.icons8.com/color/48/000000/tree-structure.png" },
    ],
    "Platforms": [
      { name: "Firebase", icon: "https://img.icons8.com/color/48/000000/firebase.png" },
      { name: "Supabase", icon: "https://img.icons8.com/color/48/000000/supabase.png" },
    ],
  },

  quickFacts: [
    "BTech - Computer Science Engineering",
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