import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-24 light:border-slate-200 light:bg-slate-50/80 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A focused stack for modern full stack development."
          text="I work with the technologies needed to design, build, connect, and deploy complete web applications."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-[#07101f]/70 p-6 shadow-premium backdrop-blur-xl transition hover:-translate-y-2 hover:border-mint/40 light:border-slate-200 light:bg-white"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-mint light:bg-mint/10">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/35 light:text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white light:text-slate-950">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-white/68 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
