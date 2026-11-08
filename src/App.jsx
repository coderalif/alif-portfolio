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
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { developer } from "./data/portfolio.js";

const socialLinks = [
  { href: developer.github, label: "GitHub", icon: FiGithub },
  { href: developer.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: `mailto:${developer.email}`, label: "Email", icon: FiMail },
  { href: `tel:${developer.phone.replace(/\s/g, "")}`, label: "Phone", icon: FiPhone },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowTop(scrollTop > 620);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <div className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-mint via-amber to-rose" style={{ width: `${progress}%` }} />
      <div className="min-h-screen overflow-hidden bg-[#050816] text-white transition-colors duration-500 light:bg-[#f7f8fb] light:text-[#08111f]">
        <SiteBackdrop />
        <Navbar isLight={isLight} onToggleTheme={() => setIsLight((value) => !value)} />
        <main>
          <Hero />
          <About />
          <Skills />
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
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-2xl font-black text-mint shadow-glow"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        >
          A
        </motion.div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Loading portfolio</p>
      </div>
    </motion.div>
  );
}

function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-hero-grid bg-[length:44px_44px] opacity-40 light:opacity-20" />
      <div className="absolute left-1/2 top-[-22rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute bottom-[-24rem] right-[-14rem] h-[42rem] w-[42rem] rounded-full bg-rose/10 blur-3xl" />
    </div>
  );
}

function Footer({ isLight, onToggleTheme }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 light:border-slate-200 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{developer.name}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-white/55 light:text-slate-500">
            <FiMapPin className="shrink-0" /> Rangpur, Bangladesh
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-mint/40 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-600"
              >
                <Icon />
              </a>
            );
          })}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-amber/40 hover:text-amber light:border-slate-200 light:bg-white light:text-slate-700"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </footer>
  );
}
