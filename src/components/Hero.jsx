import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiMessageSquare,
} from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import AnimatedCounter from "./AnimatedCounter.jsx";
import { developer, stats } from "../data/portfolio.js";

export default function Hero() {
  const phrases = useMemo(
    () => [
      "Full Stack Web Developer",
      "React.js & Next.js Specialist",
      "Node.js & Express API Builder",
      "MERN Stack Engineer",
    ],
    []
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const delay = deleting ? 40 : 75;
    const timer = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        window.setTimeout(() => setDeleting(true), 1200);
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

  const handleResumeClick = (e) => {
    // If resume file isn't uploaded yet, provide an informative prompt with preview
    fetch(developer.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          alert(
            "Resume file (resume.pdf) will be downloaded as soon as the latest PDF is uploaded to the public folder. For now, you can contact Md Alif Hosen directly via WhatsApp or Email!"
          );
        }
      })
      .catch(() => {
        // Fallback for offline/local
      });
  };

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-mint backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(45,212,191,.9)]" />
            Available for Full Stack Opportunities
          </div>

          <p className="text-lg font-bold text-white/70 light:text-slate-600">
            Hello, I am <span className="text-white light:text-slate-950 font-black">{developer.name}</span>
          </p>

          <h1 className="mt-2 max-w-4xl text-3xl font-black leading-[1.08] tracking-tight text-white light:text-slate-950 sm:text-5xl lg:text-6xl">
            Building modern web apps with clean code and high performance.
          </h1>

          <div className="mt-4 min-h-9 text-xl font-extrabold text-mint sm:text-2xl">
            <span>{text}</span>
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 bg-amber animate-blink" />
          </div>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 light:text-slate-600 sm:text-lg">
            A passionate {developer.designation} based in {developer.location}. I specialize in crafting
            responsive React frontends, robust Node.js REST APIs, and scalable MongoDB/MySQL backends.
          </p>

          {/* CTA Buttons - Fully responsive & accessible across all mobile devices */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 text-sm font-extrabold text-[#050816] shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              Hire Me <FiArrowRight />
            </a>

            <a
              href={developer.resumeUrl}
              download="Md_Alif_Hosen_Resume.pdf"
              onClick={handleResumeClick}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-mint/40 bg-white/[0.08] px-6 text-sm font-extrabold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-mint hover:bg-mint/20 hover:text-mint light:border-slate-300 light:bg-white light:text-slate-900"
              title="Download Md Alif Hosen's Resume"
            >
              <FiDownload className="text-mint" /> Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-sm font-bold text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white light:border-slate-200 light:bg-slate-100 light:text-slate-700"
            >
              View Projects
            </a>
          </div>

          {/* Social Media Links - Requirement 4 */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-white/40 light:text-slate-400">
              Connect:
            </span>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-white/80 transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-700"
              href={developer.github}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-white/80 transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-700"
              href={developer.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-white/80 transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-700"
              href={developer.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="text-[#25D366]" /> WhatsApp
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-white/80 transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-white light:text-slate-700"
              href={developer.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-[#1877F2]" /> Facebook
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <AnimatedCounter key={item.label} {...item} />
            ))}
          </div>
        </motion.div>

        {/* Professional Portrait Card - Requirement 2 */}
        <motion.div
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-mint/25 via-transparent to-rose/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.06] p-3.5 shadow-premium backdrop-blur-2xl light:border-slate-200 light:bg-white sm:p-4">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1220]">
              <img
                className="aspect-[4/5] w-full object-cover object-[center_60%] transition duration-500"
                src="/profile/alif-profile.jpg"
                alt={`${developer.name} - Professional Full Stack Developer`}
                onError={(event) => {
                  event.currentTarget.src =
                    "https://i.ibb.co.com/7tL6bkqc/DSC0045.jpg";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816] via-[#050816]/75 to-transparent p-6">
                <span className="inline-block rounded-full bg-mint/20 px-3 py-1 text-xs font-bold text-mint backdrop-blur-md">
                  {developer.title}
                </span>
                <h2 className="mt-2 text-2xl font-black text-white">{developer.name}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
                  <FiMapPin className="text-mint" /> {developer.location}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/12 bg-[#07101f]/90 p-4 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">Expertise</p>
            <p className="mt-1 text-sm font-bold text-white light:text-slate-950">MERN Stack Apps</p>
          </div>

          <div className="absolute -right-4 bottom-14 hidden rounded-2xl border border-white/12 bg-[#07101f]/90 p-4 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white md:block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">Education</p>
            <p className="mt-1 text-sm font-bold text-white light:text-slate-950">Kurigram Polytechnic</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
