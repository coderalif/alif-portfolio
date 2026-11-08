import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiPhone,
  FiSun,
} from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { developer } from "./data/portfolio.js";

const socialLinks = [
  { href: developer.github, label: "GitHub", icon: FiGithub },
  { href: developer.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: developer.whatsappLink, label: "WhatsApp", icon: FaWhatsapp },
  { href: developer.facebook, label: "Facebook", icon: FaFacebook },
  { href: `mailto:${developer.email}`, label: "Email", icon: FiMail },
  { href: `tel:${developer.phone.replace(/\s/g, "")}`, label: "Phone", icon: FiPhone },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "light";
    } catch {
      // Fallback
    }
    return false;
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {
      // Fallback
    }
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowTop(scrollTop > 600);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <div
        className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-mint via-amber to-rose"
        style={{ width: `${progress}%` }}
      />
      <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white transition-colors duration-500 light:bg-[#f8fafc] light:text-slate-900">
        <SiteBackdrop />
        <Navbar isLight={isLight} onToggleTheme={() => setIsLight((value) => !value)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer isLight={isLight} onToggleTheme={() => setIsLight((value) => !value)} />
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              aria-label="Back to top"
              className="fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-premium backdrop-blur-xl transition hover:-translate-y-1 hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white/90 light:text-slate-900"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FiArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-2xl font-black text-mint shadow-glow"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        >
          A
        </motion.div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/60">
          Loading {developer.name}&apos;s Portfolio
        </p>
      </div>
    </motion.div>
  );
}

function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-hero-grid bg-[length:44px_44px] opacity-40 light:hidden" />
      <div className="absolute inset-0 bg-hero-grid-light bg-[length:44px_44px] hidden light:block opacity-100" />
      <div className="absolute left-1/2 top-[-20rem] h-[45rem] w-[45rem] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px] light:bg-teal-400/20" />
      <div className="absolute bottom-[-20rem] right-[-10rem] h-[45rem] w-[45rem] rounded-full bg-rose/10 blur-[130px] light:bg-sky-400/20" />
      <div className="absolute top-[40%] left-[-15rem] h-[35rem] w-[35rem] rounded-full bg-amber/5 blur-[120px] light:bg-amber-300/15" />
    </div>
  );
}

function Footer({ isLight, onToggleTheme }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10 light:border-slate-200 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-white light:text-slate-950">{developer.name}</p>
          <p className="text-xs font-semibold text-mint">{developer.title}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/50 light:text-slate-500">
            <FiMapPin className="shrink-0 text-mint" /> {developer.location}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between md:justify-end">
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-mint/40 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-600"
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-amber/40 hover:text-amber light:border-slate-200 light:bg-white light:text-slate-700"
            >
              {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 light:border-slate-200 light:text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {developer.name}. All rights reserved.</p>
        <p>Built with React, Vite, Framer Motion & Tailwind CSS</p>
      </div>
    </footer>
  );
}
