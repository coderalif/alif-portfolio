import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { developer, navItems } from "../data/portfolio.js";

export default function Navbar({ isLight, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <motion.nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#07101f]/75 px-4 py-3 shadow-premium backdrop-blur-2xl light:border-slate-200 light:bg-white/85"
        initial={{ y: -26, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Portfolio home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-mint via-cyan-400 to-amber text-base font-black text-ink shadow-glow">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold sm:text-base">{developer.name}</span>
            <span className="block truncate text-xs text-white/50 light:text-slate-500">{developer.title}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/62 transition hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-amber/40 hover:text-amber light:border-slate-200 light:bg-white light:text-slate-700"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-mint sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden light:border-slate-200 light:bg-white light:text-slate-900"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-[#07101f]/95 p-3 shadow-premium backdrop-blur-2xl light:border-slate-200 light:bg-white"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
