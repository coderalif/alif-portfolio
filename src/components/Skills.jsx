/**
 * ==============================================================================
 * ⚡ TECHNICAL SKILLS COMPONENT (REQUIREMENT 6)
 * ==============================================================================
 * ফাইল লোকেশন: src/components/Skills.jsx
 * কাজ:
 *  ১. টেকনিক্যাল স্কিলসমূহকে ৪টি ক্যাটাগরিতে বিভক্ত করা (Frontend, Backend, Database, Tools)
 *  ২. গ্রাফিক্যাল প্রগ্রেস বার এবং পারসেন্টেজ ডিসপ্লে করা (Requirement 6)
 *  ৩. স্মুথ স্ক্রল অ্যানিমেশন
 * ==============================================================================
 */

import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-8 sm:py-24 lg:px-12 light:border-slate-200 light:bg-slate-50/80">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technical Skills"
          title="A focused, visual breakdown of my technical proficiencies."
          text="Categorized across frontend engineering, backend architectures, database schemas, and modern development tooling."
          align="center"
        />

        {/* ৪টি ক্যাটাগরির গ্রিড */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-[#07101f]/70 p-5 sm:p-7 shadow-premium backdrop-blur-xl transition hover:border-mint/30 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:shadow-md hover:light:border-teal-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: groupIndex * 0.08 }}
              >
                {/* ক্যাটাগরি হেডার */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/10 text-mint light:bg-teal-50 light:text-teal-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white light:text-slate-900">{group.title}</h3>
                      <p className="text-xs text-white/50 light:text-slate-500">
                        {group.skills.length} core competencies
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-mint light:border-teal-200 light:bg-teal-50 light:text-teal-700">
                    Category {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Requirement 6: গ্রাফিক্যাল অ্যানিমেটেড প্রগ্রেস বার */}
                <div className="space-y-4">
                  {group.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-white/85 light:text-slate-800">{skill.name}</span>
                        <span className="text-mint light:text-teal-700 font-extrabold">{skill.level}%</span>
                      </div>
                      <div className="h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-white/10 light:bg-slate-100 light:border light:border-slate-200/60">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-mint via-cyan-400 to-amber"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
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
