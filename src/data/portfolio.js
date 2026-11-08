import {
  FiActivity,
  FiBookOpen,
  FiBriefcase,
  FiCamera,
  FiCode,
  FiCompass,
  FiCpu,
  FiDatabase,
  FiEye,
  FiGithub,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";

export const developer = {
  name: "Md Alif Hosen",
  title: "Full Stack Developer",
  designation: "Full Stack Web Developer (MERN / React & Node.js)",
  location: "Rangpur, Bangladesh",
  email: "mdalifhosen876@gmail.com",
  phone: "+8801795713804",
  whatsapp: "+8801795713804",
  whatsappLink: "https://wa.me/8801795713804",
  portfolio: "https://alif-portfolio-two.vercel.app/",
  github: "https://github.com/coderalif",
  linkedin: "https://www.linkedin.com/in/alif26/",
  facebook: "https://facebook.com/coderalif",
  resumeUrl: "/resume.pdf",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 18, suffix: "+", label: "Projects completed" },
  { value: 10, suffix: "+", label: "Core technologies" },
  { value: 2, suffix: "+", label: "Years experience" },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: FiLayers,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 96 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: FiServer,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Authentication", level: 86 },
      { name: "API Security", level: 82 },
    ],
  },
  {
    title: "Database Management",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "Mongoose ODM", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Data Modeling", level: 84 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: FiTool,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vite", level: 92 },
      { name: "Postman", level: 88 },
      { name: "Docker (Basics)", level: 75 },
      { name: "Netlify / Vercel", level: 90 },
    ],
  },
];

export const hobbies = [
  {
    icon: FiActivity,
    title: "Playing Cricket & Football",
    description: "Active outdoor sports keep my energy high, sharpen focus, and teach effective team collaboration.",
  },
  {
    icon: FiCpu,
    title: "Exploring Electronics & Hardware",
    description: "As an Electronics Technology student, I love tinkering with circuit boards, microcontrollers, and DIY tech.",
  },
  {
    icon: FiCamera,
    title: "Traveling & Nature Photography",
    description: "Exploring new scenic spots, capturing natural aesthetics, and refreshing creative problem-solving perspectives.",
  },
  {
    icon: FiBookOpen,
    title: "Tech Reading & Problem Solving",
    description: "Reading tech engineering blogs, exploring open source repositories, and learning modern architectural patterns.",
  },
];

export const educationList = [
  {
    degree: "Diploma in Electronics Technology",
    institution: "Kurigram Polytechnic Institute",
    location: "Kurigram, Bangladesh",
    period: "2021 – Present (Running)",
    status: "Running / Present",
    description: "Studying core electronics engineering, digital logic circuits, microprocessors, and applied technical mathematics alongside advanced self-taught web software development.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rangpur Division Board",
    location: "Rangpur, Bangladesh",
    period: "Completed",
    status: "Completed",
    description: "Completed secondary education in Science with a strong grounding in physics, mathematics, and computer basics.",
  },
];

export const experienceList = [
  {
    role: "Full Stack Web Developer (Independent & Projects)",
    company: "Self-Employed / Remote Projects",
    period: "2023 – Present",
    type: "Freelance & Practical Experience",
    points: [
      "Built and deployed 18+ web applications including SaaS dashboards, REST APIs, and full stack portals.",
      "Engineered frontend user interfaces using React, Tailwind CSS, and Framer Motion with sub-second initial load times.",
      "Constructed secure Node.js/Express backend architectures with JWT auth, password hashing, and input validation.",
      "Integrated MongoDB and MySQL databases with scalable schemas and efficient data pipelines.",
    ],
  },
  {
    role: "Frontend Developer (Project Apprentice)",
    company: "Web Development Training & Collaboration",
    period: "2022 – 2023",
    type: "Practical Training",
    points: [
      "Mastered responsive layout development, mobile-first design systems, and cross-browser compatibility.",
      "Collaborated using Git and GitHub workflows, code reviews, and version control best practices.",
    ],
  },
];

export const projects = [
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    type: "Full Stack MERN App",
    shortDescription:
      "A high-performance enterprise admin dashboard with real-time KPI metrics, role-based data views, server-side filtering, and data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Recharts"],
    live: developer.portfolio,
    github: developer.github,
    description:
      "A complete full-stack analytics platform built to give SaaS founders instant visibility into customer churn, MRR, user activity, and conversion rates with interactive visual charts.",
    features: [
      "Real-time analytics graphs and KPI summary indicators",
      "Dynamic filtering by date ranges, user tiers, and geographic segments",
      "Role-based authentication (Admin vs. Member access)",
      "Dark and light theme toggles with smooth transition states",
    ],
    challenges:
      "Handling large datasets without frontend lag was the primary challenge. Solved it by implementing server-side pagination, indexing MongoDB queries, and debouncing client search inputs.",
    futurePlans:
      "Add automated CSV export reports, WebSocket-powered live user tracking, and integration with Stripe webhooks for instant revenue synchronization.",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio System",
    type: "Portfolio Website",
    shortDescription:
      "A high-performance personal portfolio with interactive animations, accessible components, SEO metadata, and responsive showcase flows.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    stack: ["React.js", "Vite", "Framer Motion", "Tailwind CSS", "React Icons"],
    live: developer.portfolio,
    github: "https://github.com/coderalif/alif-portfolio",
    description:
      "A modern, responsive portfolio engineered with React and Vite. Features silky smooth entrance animations, dark/light theme switching, and modular architectural components.",
    features: [
      "Ultra-fast loading speed with Vite build optimization",
      "Framer Motion interactive cards and modal dialogues",
      "100% responsive design tested across all screen viewports",
      "Accessible contact pathways and direct resume download trigger",
    ],
    challenges:
      "Balancing complex animations with top-tier mobile performance. Optimized Framer Motion layout animations by utilizing CSS hardware acceleration and reducing unnecessary re-renders.",
    futurePlans:
      "Incorporate an integrated blog section powered by Markdown / MDX, GitHub activity commit heatmaps, and multi-language support (English & Bengali).",
  },
  {
    id: "commerce-api",
    title: "Commerce API & Store Platform",
    type: "Full Stack Backend & Web",
    shortDescription:
      "Robust REST API and shopping interface for products, carts, orders, and secure payment processing with scalable database structure.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Docker"],
    live: developer.portfolio,
    github: developer.github,
    description:
      "A scalable e-commerce infrastructure supporting full product catalog management, persistent cart state, order workflows, and role-protected administrator endpoints.",
    features: [
      "JWT-authenticated user accounts and bcrypt password encryption",
      "Order status pipeline (Pending, Shipped, Delivered, Canceled)",
      "Product search, categorization, and stock inventory tracking",
      "Protected routes for customer dashboards and store administrators",
    ],
    challenges:
      "Ensuring transactional safety for inventory depletion during simultaneous orders. Handled through database schema atomic updates and robust error-handling middleware.",
    futurePlans:
      "Integrate SSLCommerz / bKash payment gateway for local transactions, Redis caching for hot product listings, and email notification webhooks.",
  },
];

export const journey = [
  {
    icon: FiCode,
    title: "Started With Frontend Interfaces",
    text: "Discovered web development through HTML, CSS, and modern JavaScript. Focused on building responsive, user-friendly layouts and learning how design aesthetics influence user trust.",
  },
  {
    icon: FiCpu,
    title: "Bridged Hardware With Software",
    text: "Studying Electronics Technology gave me deep appreciation for how computing systems work from the silicon level up to high-level web APIs and asynchronous networking.",
  },
  {
    icon: FiServer,
    title: "Expanded Into Full Stack Engineering",
    text: "Advanced into Node.js, Express, MongoDB, and MySQL. Learned to architect resilient backend services, design relational and NoSQL schemas, and secure API endpoints.",
  },
  {
    icon: FiGithub,
    title: "Focused On Production Standards",
    text: "Today I focus on writing clean, modular code, optimizing web performance, adhering to clean architecture patterns, and shipping dependable products.",
  },
];
