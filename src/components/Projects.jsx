import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work with modern UI, strong structure, and full stack thinking."
          text="These project cards are ready to connect to your real repositories and live deployments."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
                <p className="mt-3 min-h-[112px] leading-7 text-white/60 light:text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1.5 text-xs font-bold text-mint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-extrabold text-ink transition hover:bg-mint"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-mint/40 hover:text-mint light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
