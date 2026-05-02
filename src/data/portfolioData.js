export const personalInfo = {
  name: "Krish Kalsariya",
  role: "MERN Stack Developer",
  status: "Fresher",
  tagline: "Building scalable web applications with modern technologies",
  email: "kalsariyakrish22@gmail.com",
  phone: "+91 8499373826",
  location: "C-13 Dhanwakhada soc, chikuwadi, dhamdaja, surat",
  linkedin: "https://www.linkedin.com/in/krish-kalsariya",
  github: "https://github.com/Krish-kalsariya",
  resume: "/assets/resume/Krish_resume.pdf"
};

export const aboutData = {
  bio: "A passionate MERN Stack Developer with a strong foundation in building full-stack web applications. Currently pursuing BCA while actively developing real-world projects using React, Node.js, MongoDB, and Express.js.",
  objective: "Seeking opportunities to leverage my skills in full-stack development, contribute to innovative projects, and grow as a professional developer in a collaborative environment.",
  stats: [
    { label: "Projects Completed", value: "4+" },
    { label: "Technologies", value: "15+" },
    { label: "GitHub Repositories", value: "10+" }
  ],
  strengths: [
    "Strong problem-solving abilities",
    "Quick learner with adaptability",
    "Clean code enthusiast",
    "Passionate about modern web tech"
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", icon: "⚛️", level: 85 },
    { name: "JavaScript", icon: "🟨", level: 90 },
    { name: "HTML5", icon: "📄", level: 95 },
    { name: "CSS3", icon: "🎨", level: 90 },
    { name: "Tailwind CSS", icon: "💨", level: 88 },
    { name: "Bootstrap", icon: "🅱️", level: 80 },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", level: 82 },
    { name: "Express.js", icon: "🚂", level: 85 },
  ],
  database: [
    { name: "MongoDB", icon: "🍃", level: 80 },
  ],
  tools: [
    { name: "Git", icon: "📦", level: 85 },
    { name: "GitHub", icon: "🐙", level: 88 },
    { name: "Postman", icon: "📮", level: 82 },
    { name: "VS Code", icon: "📝", level: 90 },
  ],
  concepts: [
    { name: "JWT Authentication", icon: "🔐", level: 85 },
    { name: "REST APIs", icon: "🔌", level: 88 },
    { name: "CRUD Operations", icon: "📊", level: 90 },
    { name: "Responsive Design", icon: "📱", level: 92 },
  ]
};

export const projectsData = [
  {
    id: 1,
    name: "Bookora",
    tagline: "Online Book Store",
    description: "A comprehensive MERN stack online bookstore with separate admin and user panels, featuring role-based authentication, cart management, and order tracking.",
    features: [
      "Admin & User role-based dashboards",
      "Secure JWT authentication system",
      "Shopping cart with CRUD operations",
      "Order management & tracking",
      "Book inventory management",
      "Fully responsive UI design"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "https://bookora-book-store-fronted.vercel.app/",
    githubLink: "https://github.com/Krish-kalsariya",
    image: "/assets/screenshots/bookora.png",
    category: "E-Commerce"
  },
  {
    id: 2,
    name: "Brainera",
    tagline: "Learning Management System",
    description: "A feature-rich MERN stack LMS platform enabling course purchasing, video-based learning, interactive quizzes, and automated certificate generation.",
    features: [
      "Course purchase & enrollment system",
      "Video-based learning modules",
      "Interactive quiz system",
      "Certificate generation",
      "Instructor dashboard with analytics",
      "Secure protected routes"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "https://lms-client-plum-ten.vercel.app/",
    githubLink: "https://github.com/Krish-kalsariya",
    image: "/assets/screenshots/brainera.png",
    category: "EdTech"
  }
];

export const journeyData = {
  education: {
    degree: "Bachelor of Computer Applications (B.C.A)",
    institution: "Vivekanand College for Advanced Computer & Information Science, Surat",
    period: "2023 - 2026",
    cgpa: "7.36 / 10 (Semester 5)"
  },
  experience: {
    role: "MERN Stack Developer Intern",
    company: "Platinum Tech",
    period: "December 10, 2025 - March 10, 2026",
    duration: "3 Months",
    description: "Completed an intensive internship as a MERN Stack Developer, building full-stack web applications with MongoDB, Express.js, React, and Node.js. Developed RESTful APIs, implemented authentication, fixed bugs, and improved UI responsiveness in a collaborative team environment."
  },
  timeline: [
    {
      year: "2023",
      title: "Started BCA Journey",
      description: "Began Bachelor of Computer Applications at Vivekanand College",
      type: "education"
    },
    {
      year: "2024",
      title: "MERN Stack Learning",
      description: "Started learning MongoDB, Express, React, and Node.js through projects",
      type: "milestone"
    },
    {
      year: "2025",
      title: "Bookora Project",
      description: "Developed full-stack online bookstore with admin panel and authentication",
      type: "project"
    },
    {
      year: "2025",
      title: "Brainera LMS",
      description: "Built comprehensive learning management system with video courses",
      type: "project"
    },
    {
      year: "2025-26",
      title: "MERN Stack Intern",
      description: "Internship at Platinum Tech working on real-world MERN applications",
      type: "experience"
    }
  ]
};

export const githubData = {
  username: "Krish-kalsariya",
  profileUrl: "https://github.com/Krish-kalsariya",
  repos: 10,
  contributions: "200+",
  streak: "30+ days"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#journey" },
  { name: "Contact", href: "#contact" }
];
