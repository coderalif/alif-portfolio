import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-24 light:border-slate-200 light:bg-slate-50/80 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="Technical foundation from Kurigram Polytechnic Institute."
          text="Diploma in Electronics Technology alongside modern full stack web development."
          align="center"
        />
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#07101f]/75 p-7 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white sm:p-9"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-mint/20 to-amber/20 text-mint shrink-0">
                <FiAward size={28} />
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-mint">
                  <FiBookOpen /> Diploma in Engineering
                </p>
                <h3 className="mt-2 text-2xl font-black text-white light:text-slate-950">Diploma in Electronics Technology</h3>
                <p className="mt-2 text-white/60 light:text-slate-600 font-medium">Kurigram Polytechnic Institute</p>
              </div>
            </div>
            <div className="sm:self-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-mint">
                <FiCalendar size={13} /> Present (Running)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
