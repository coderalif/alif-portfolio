import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { educationList } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="relative z-10 border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-8 sm:py-24 lg:px-12 light:border-slate-200 light:bg-slate-50/80">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Educational Qualification"
          title="Technical education and foundational engineering background."
          text="Combining formal engineering discipline from Kurigram Polytechnic Institute with modern software engineering practices."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              className="rounded-3xl border border-white/10 bg-[#07101f]/75 p-5 shadow-premium backdrop-blur-xl transition hover:border-mint/30 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:border-teal-400/50 hover:light:shadow-md sm:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-mint/20 to-amber/20 text-mint light:from-teal-50 light:to-amber-50 light:text-teal-700 light:border light:border-teal-200/50">
                  <FiAward size={26} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1 text-xs font-bold text-mint light:border-teal-200 light:bg-teal-50 light:text-teal-700">
                  <FiCalendar size={12} /> {item.period}
                </span>
              </div>

              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-mint light:text-teal-700">
                  <FiBookOpen /> {item.status}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white light:text-slate-900">
                  {item.degree}
                </h3>
                <p className="mt-1 font-semibold text-white/80 light:text-slate-700">
                  {item.institution}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-white/50 light:text-slate-500">
                  <FiMapPin size={13} className="text-mint light:text-teal-600" /> {item.location}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/60 light:text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
