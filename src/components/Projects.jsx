import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiCompass,
  FiExternalLink,
  FiGithub,
  FiInfo,
  FiLayers,
  FiX,
} from "react-icons/fi";
import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when details modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative z-10 px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Production-ready web applications built with modern engineering."
          text="Click 'View More / Details' on any project to explore the tech stack, development challenges, and future roadmap."
        />

        {/* Project Cards Grid - Requirement 9 */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-premium backdrop-blur-xl transition hover:-translate-y-2 hover:border-mint/40 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:shadow-xl hover:light:border-teal-400/50"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#050816]/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-mint backdrop-blur-md">
                  {project.type}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-2xl font-black text-white light:text-slate-900">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/65 light:text-slate-600">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-mint/20 bg-mint/10 px-2.5 py-1 text-xs font-semibold text-mint light:border-teal-200 light:bg-teal-50 light:text-teal-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/50 light:border-slate-200 light:bg-slate-100 light:text-slate-600">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Buttons: Requirement 9 asks for 'View More / Details' button */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10 light:border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-mint px-4 text-xs font-extrabold uppercase tracking-wider text-[#050816] transition hover:bg-white light:bg-slate-900 light:text-white light:hover:bg-teal-600"
                  >
                    View Details <FiArrowUpRight size={15} />
                  </button>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:border-teal-400 light:hover:text-teal-700"
                    title="Open Live Demo"
                  >
                    <FiExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:border-mint/50 hover:text-mint light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:border-teal-400 light:hover:text-teal-700"
                    title="View Client GitHub Repository"
                  >
                    <FiGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Detailed Project Modal Dialog - Requirement 9 */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Container */}
              <motion.div
                className="relative my-6 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0b1324] p-5 sm:p-8 shadow-2xl backdrop-blur-2xl light:border-slate-200 light:bg-white"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-black light:border-slate-300 light:bg-slate-100 light:text-slate-800"
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

                {/* Modal Header */}
                <div className="pr-12">
                  <span className="inline-block rounded-full bg-mint/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-mint light:bg-teal-50 light:text-teal-700 light:border light:border-teal-200">
                    {selectedProject.type}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-white light:text-slate-900 sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Modal Preview Image */}
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 light:border-slate-200">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>

                {/* 1. Main Technology Stack Used - Requirement 9 */}
                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-mint light:text-teal-700">
                    <FiLayers /> Main Technology Stack Used
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1.5 text-xs font-bold text-mint light:border-teal-200 light:bg-teal-50 light:text-teal-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Brief Description & Core Features - Requirement 9 */}
                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 light:text-slate-500">
                    <FiInfo /> Brief Description
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-white/80 light:text-slate-700">
                    {selectedProject.description}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {selectedProject.features?.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-white/70 light:text-slate-600">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-mint light:text-teal-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Challenges Faced - Requirement 9 */}
                <div className="mt-6 rounded-2xl border border-amber/30 bg-amber/5 p-4 light:border-amber-200 light:bg-amber-50/90">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber light:text-amber-800">
                    <FiAlertCircle /> Challenges Faced While Developing
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-white/85 light:text-slate-800">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* 4. Potential Improvements and Future Plans - Requirement 9 */}
                <div className="mt-5 rounded-2xl border border-mint/30 bg-mint/5 p-4 light:border-teal-200 light:bg-teal-50/90">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-mint light:text-teal-800">
                    <FiCompass /> Potential Improvements & Future Plans
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-white/85 light:text-slate-800">
                    {selectedProject.futurePlans}
                  </p>
                </div>

                {/* 5. Live Project & Client GitHub Repository Links - Requirement 9 */}
                <div className="mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4 border-t border-white/10 light:border-slate-200">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 text-sm font-extrabold text-[#050816] transition hover:bg-white light:bg-slate-900 light:text-white light:hover:bg-teal-600"
                  >
                    Open Live Project <FiExternalLink />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-bold text-white transition hover:border-mint/50 hover:text-mint light:border-slate-300 light:bg-white light:text-slate-800 light:hover:border-teal-400 light:hover:text-teal-700"
                  >
                    <FiGithub /> GitHub Repository (Client)
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="py-2.5 text-center text-xs font-semibold text-white/50 hover:text-white sm:ml-auto light:text-slate-500 light:hover:text-slate-900"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
