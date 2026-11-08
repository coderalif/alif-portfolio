/**
 * ==============================================================================
 * 🧭 NAVIGATION BAR COMPONENT
 * ==============================================================================
 * ফাইল লোকেশন: src/components/Navbar.jsx
 * কাজ:
 *  ১. স্ক্রিনের উপরে ফিক্সড স্টিকি গ্লাস নেভিগেশন বার
 *  ২. ডার্ক ও লাইট থিম সুইচ বাটন
 *  ৩. মোবাইলের জন্য রেসপন্সিভ ড্রপডাউন মেনু (Hamburger Menu)
 * ==============================================================================
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { developer, navItems } from "../data/portfolio.js";

export default function Navbar({ isLight, onToggleTheme }) {
  // মোবাইল মেনু খোলা বা বন্ধ রাখার স্টেট
  const [open, setOpen] = useState(false);

  // মোবাইল মেনু ওপেন থাকলে পেজের ব্যাকগ্রাউন্ড স্ক্রলিং লক করা
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
        {/* ১. লোগো ও ডেভেলপারের নাম */}
        <a href="#home" className="flex items-center gap-3" aria-label="Portfolio home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-mint via-cyan-400 to-amber text-base font-black text-ink shadow-glow">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold sm:text-base text-white light:text-slate-950">
              {developer.name}
            </span>
            <span className="block truncate text-xs text-white/50 light:text-slate-500">
              {developer.title}
            </span>
          </span>
        </a>

        {/* ২. ডেক্সটপ মেনু লিংকসমূহ */}
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

        {/* ৩. ডানদিকের অ্যাকশন বাটন (থিম সুইচ, হায়ার মি, মোবাইল টগল) */}
        <div className="flex items-center gap-2">
          {/* থিম পরিবর্তন বাটন */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-amber/40 hover:text-amber light:border-slate-200 light:bg-white light:text-slate-700"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </button>

          {/* Hire Me বাটন */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-mint sm:inline-flex light:bg-slate-900 light:text-white light:hover:bg-teal-600 light:shadow-sm"
          >
            Hire Me
          </a>

          {/* মোবাইল মেনু টগল বাটন */}
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

      {/* ৪. মোবাইল মেনু ড্রপডাউন */}
      {open && (
        <motion.div
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#07101f]/95 p-3 shadow-premium backdrop-blur-2xl light:border-slate-200 light:bg-white"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-2 border-t border-white/10 pt-2 light:border-slate-100">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-xl bg-mint py-2.5 text-center text-sm font-extrabold text-[#050816] transition hover:bg-white light:bg-slate-900 light:text-white light:hover:bg-teal-600"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
