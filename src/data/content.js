export const profile = {
  name: "Nitya Jamdagni",
  initials: "NJ",
  photo: "/nitya-photo.jpg",
  title: "Full Stack Developer & AI Engineer",
  location: "Noida, UP",
  email: "nityajamdagni18@gmail.com",
  phone: "+91 9718227860",
  links: {
    linkedin: "https://www.linkedin.com/in/nitya-jamdagni-ab2b86325/",
    github: "https://github.com/nityajamdagni",
    leetcode: "https://leetcode.com/u/nityajamdagni/",
  },
  bio: [
    "Greetings, explorer! I'm Nitya, a full stack developer and AI enthusiast who builds intelligent, user-centric applications that solve real-world problems. As I begin my 4th year of Computer Science Engineering, I've shipped everything from AI-powered healthcare tools to productivity platforms.",
    "My journey includes interning at the Ministry of Electronics & IT (MeitY), leading my team to the Grand Finale of the Google Cloud Gen AI Exchange Hackathon, and building with React, Next.js, Node.js, Python, Firebase, and generative AI stacks like Gemini and Vertex AI.",
    "I'm driven by curiosity and collaboration — always chasing the next hackathon, the next hard problem, the next thing worth building.",
  ],
};

export const experience = [
  {
    company: "Freelance",
    org: "Self-employed",
    role: "Full Stack Developer",
    period: "June 2026 – Present",
    points: [
      "Design and build responsive, production-ready websites for small businesses and associations, managing each project end-to-end from requirements to deployment",
      "Working with clients across sectors including sports associations, training academies, and security services",
      "Collaborate directly with clients to translate their goals into functional, user-friendly web experiences, iterating based on feedback",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Client Delivery"],
  },
  {
    company: "Google Cloud Hackathon",
    org: "Gen AI Exchange Hackathon 2025",
    role: "Team Lead",
    period: "Aug 2025 – Dec 2025",
    points: [
      "Led a team of four to build an AI-powered mental wellness platform using Google Cloud technologies",
      "Developed full-stack features with React, Firebase, Vertex AI, and Gemini",
      "Recognised as Top 10 finalists under the problem statement \"Generative AI for Youth Mental Wellness,\" out of 185,000+ participants nationwide",
      "Presented and demoed the AI prototype to Google experts and judges at the Grand Finale, Leela Palace, Bangalore",
    ],
    tags: ["React", "Firebase", "Vertex AI", "Gemini"],
    certificate: "/hackathon-certificate.png",
  },
  {
    company: "MeitY",
    org: "Ministry of Electronics & IT",
    role: "Gen AI Intern",
    period: "July 2025 – Sept 2025",
    points: [
      "Analyzed real-world Generative AI systems and proposed scalable implementation strategies for production environments",
      "Collaborated with cross-functional teams to evaluate feasibility and architecture of AI-based solutions",
      "Presented technical findings and system-level recommendations to senior stakeholders of the Software Industry Division",
    ],
    tags: ["Generative AI", "System Design", "Stakeholder Comms"],
  },
  {
    company: "SheFi",
    org: "Web3 Education Program",
    role: "Scholar & Trainee",
    period: "Feb 2025 – May 2025",
    points: [
      "Built foundational understanding of distributed systems, blockchain architecture, and decentralized applications",
      "Explored real-world implementations of DeFi protocols and smart contract workflows",
    ],
    tags: ["Blockchain", "DeFi", "Distributed Systems"],
  },
];

export const projects = [
  {
    name: "Clario",
    tagline: "AI-Powered Mental Health Companion",
    description:
      "An AI mental wellness and sleep companion enabling personalized journaling, emotional reflection, sleep analysis, and multilingual voice-based interactions. Features an AI-driven Empty Chair Therapy module and a Clario AI Twin for guided self-reflection and relationship insights.",
    highlights: [
      "MCP-powered AI agents for real-time sleep coaching and automated journal insights",
      "Mood-based avatar generation and 7-day AI sleep reports",
      "Built on Firestore, Cloud Functions, and Cloud Scheduler",
    ],
    tech: ["Flutter", "Gemini AI", "Firebase", "Google Cloud"],
    links: {
      demo: "https://drive.google.com/file/d/1aQn8TP_VJUEYd8MkU-TEAizFHGUf8ZZo/view",
      apk: "https://drive.google.com/file/d/1PTguvildcpajV5IY9u6fcCQl0QSMh5xG/view",
    },
  },
  {
    name: "OnTrack",
    tagline: "Task Scheduler & Calendar Web App",
    description:
      "A responsive task management app with calendar view, full CRUD, search/filter/sort, and data visualization — built with a modular component architecture using React hooks.",
    highlights: [
      "Calendar view with client-side data persistence",
      "Multi-theme system with dark/light modes",
      "Data visualization powered by Recharts",
    ],
    tech: ["React.js", "Tailwind CSS", "Vite", "Recharts"],
    links: {
      live: "https://ontrack-scheduler.netlify.app/",
    },
  },
  {
    name: "Autism Support Platform",
    tagline: "AI-Powered Screening & Therapy Guidance",
    description:
      "A full-stack platform featuring ISAA-based screening, conversational assistance, and therapy recommendation generation to guide parents of children on the autism spectrum.",
    highlights: [
      "LangChain-powered LLM pipelines for contextual parent guidance",
      "Modular backend for user input, scoring logic, and AI inference",
      "Real-time chat interface with voice-enabled interaction",
    ],
    tech: ["React", "Python", "LangChain", "REST APIs"],
    links: {
      live: "https://isaa-autism.netlify.app/",
    },
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C++", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Express.js", "Flask", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    label: "AI / Cloud",
    skills: ["Google Gemini", "Vertex AI", "LangChain", "RAG", "Prompt Engineering", "Google Cloud", "Azure", "Docker"],
  },
  {
    label: "Tools",
    skills: ["Git & GitHub", "REST APIs", "Data Structures & Algorithms"],
  },
];

export const achievements = [
  {
    title: "National Finalist — Google Gen AI Hackathon",
    detail: "Top 10 of 185,000+ teams · Team Lead",
    period: "Nov 2025",
  },
  {
    title: "AWS AI & ML Scholar",
    detail: "Selected scholarship program",
    period: "Jul 2025 – Sept 2025",
  },
  {
    title: "Google Cloud Gen AI Academy",
    detail: "Completed cohort program",
    period: "Apr 2025 – Aug 2025",
  },
  {
    title: "Flipkart Grid 7.0",
    detail: "Shortlisted — top 10 percent",
    period: "Jul 2025",
  },
  {
    title: "Creative Head, E-Cell ADGIPS",
    detail: "Organised E-Summit, pitching events, tech contests",
    period: "Oct 2024 – Present",
  },
];

export const education = {
  school: "Guru Gobind Singh Indraprastha University, Delhi",
  degree: "B.Tech in Computer Science",
  period: "Aug 2023 – June 2027",
  gpa: "8.9 CGPA",
  coursework: [
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    "Data Structures & Algorithms",
    "Software Engineering",
    "OOP",
  ],
};
