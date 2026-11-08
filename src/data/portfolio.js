import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";

export const developer = {
  name: "Md Alif Hosen",
  title: "Full Stack Developer",
  location: "Rangpur, Bangladesh",
  email: "mdalifhosen876@gmail.com",
  phone: "+8801743282144",
  portfolio: "https://coderalif.netlify.app/",
  github: "https://github.com/coderalif",
  linkedin: "https://www.linkedin.com/in/coderalif/",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 18, suffix: "+", label: "Projects shipped" },
  { value: 10, suffix: "+", label: "Core technologies" },
  { value: 2, suffix: "+", label: "Years learning" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: FiLayers,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: ["MongoDB", "MySQL", "Schema Design", "Data Modeling"],
  },
  {
    title: "Tools",
    icon: FiTool,
    skills: ["Git", "GitHub", "Docker", "Vite"],
  },
];

export const projects = [
  {
    title: "SaaS Analytics Dashboard",
    type: "Full Stack App",
    description:
      "A premium admin dashboard with KPI cards, role-aware data views, server-side filtering, and a clean analytics workflow for product teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: developer.portfolio,
    github: developer.github,
  },
  {
    title: "Developer Portfolio System",
    type: "Portfolio",
    description:
      "A high-performance personal portfolio with animated sections, SEO metadata, reusable components, and responsive project presentation.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    stack: ["React", "Vite", "Framer Motion", "Tailwind"],
    live: developer.portfolio,
    github: developer.github,
  },
  {
    title: "Commerce API Platform",
    type: "Backend",
    description:
      "REST API foundation for products, carts, orders, and protected routes with scalable Express architecture and database-first thinking.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    stack: ["Node.js", "Express.js", "MySQL", "Docker"],
    live: developer.portfolio,
    github: developer.github,
  },
];

export const journey = [
  {
    icon: FiCode,
    title: "Started With Interfaces",
    text: "Built responsive user interfaces and learned how layout, spacing, typography, and performance affect real user trust.",
  },
  {
    icon: FiCpu,
    title: "Moved Into Full Stack",
    text: "Expanded into Node.js, Express.js, databases, and API design to deliver complete web applications from idea to deployment.",
  },
  {
    icon: FiGithub,
    title: "Focused On Production Quality",
    text: "Now I focus on clean component systems, maintainable code, and polished experiences that feel fast and dependable.",
  },
];
