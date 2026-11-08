import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import AnimatedCounter from "./AnimatedCounter.jsx";
import { developer, stats } from "../data/portfolio.js";

export default function Hero() {
  const phrases = useMemo(() => ["React.js Specialist", "Node.js API Builder", "MERN Stack Developer", "Clean UI Engineer"], []);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const delay = deleting ? 42 : 78;
    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        window.setTimeout(() => setDeleting(true), 900);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }
      setText(phrase.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, phrases, text]);

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-xl light:border-slate-200 light:bg-white light:text-slate-600">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(45,212,191,.9)]" />
            Available for full stack projects
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-white light:text-slate-950 sm:text-6xl lg:text-7xl">
            Building premium web apps with clean code and sharp product thinking.
          </h1>
          <div className="mt-6 min-h-9 text-xl font-bold text-mint sm:text-2xl">
            {text}
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 bg-amber animate-blink" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 light:text-slate-600 sm:text-lg">
            I am {developer.name}, a {developer.title} from {developer.location}. I create responsive
            React interfaces, scalable backend APIs, and database-backed products that feel fast, polished, and dependable.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:bg-mint"
            >
              Hire Me <FiArrowRight />
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 text-sm font-extrabold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-900"
            >
              View Projects <FiDownload />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/55 light:text-slate-500">
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="text-mint" /> {developer.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-mint" href={developer.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-mint" href={developer.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <AnimatedCounter key={item.label} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-mint/25 via-transparent to-rose/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-premium backdrop-blur-2xl light:border-slate-200 light:bg-white sm:p-4">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-[#101827]">
              <img
                className="aspect-[4/5] w-full object-cover object-[center_68%] opacity-95"
                src="/profile/alif-profile.jpg"
                alt={`${developer.name} professional portrait`}
                onError={(event) => {
                  event.currentTarget.src =
                    "https://i.ibb.co.com/7tL6bkqc/DSC0045.jpg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/65 to-transparent p-6">
                <p className="text-sm font-semibold text-mint">Full Stack Developer</p>
                <h2 className="mt-1 text-2xl font-black text-white">{developer.name}</h2>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-12 hidden rounded-2xl border border-white/12 bg-white/10 p-4 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45 light:text-slate-400">Stack</p>
            <p className="mt-2 text-sm font-bold text-white light:text-slate-950">React + Node + DB</p>
          </div>
          <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/12 bg-white/10 p-4 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45 light:text-slate-400">Focus</p>
            <p className="mt-2 text-sm font-bold text-white light:text-slate-950">Premium UX</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
