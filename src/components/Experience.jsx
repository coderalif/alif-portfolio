import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { experienceList } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Practical development experience shipping web software."
          text="Applying clean coding principles across independent client work, open source projects, and structured web engineering."
        />

        <div className="relative border-l-2 border-mint/20 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-8 light:border-slate-200">
          {experienceList.map((item, index) => (
            <motion.div
              key={item.role}
              className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-7 shadow-premium backdrop-blur-xl transition hover:border-mint/30 light:border-slate-200 light:bg-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-6 grid h-8 w-8 place-items-center rounded-full border border-mint bg-[#050816] text-mint shadow-glow">
                <FiBriefcase size={14} />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint">
                    {item.type}
                  </span>
                  <h3 className="mt-2 text-xl font-black text-white light:text-slate-950 sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-white/60 light:text-slate-500">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-mint">
                  <FiCalendar /> {item.period}
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70 light:text-slate-600">
                    <FiCheckCircle className="mt-1 shrink-0 text-mint" size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
