import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-5 py-24 light:border-slate-200 light:bg-slate-50/80 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="Technical foundation from Rangpur Polytechnic Institute."
          text="Formal computer technology study supports my practical full stack development work."
          align="center"
        />
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#07101f]/75 p-7 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white sm:p-9"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-mint/20 to-amber/20 text-mint">
              <FiAward size={28} />
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-mint">
                <FiBookOpen /> Diploma
              </p>
              <h3 className="mt-2 text-2xl font-black text-white light:text-slate-950">Diploma in Computer Technology</h3>
              <p className="mt-2 text-white/60 light:text-slate-600">Rangpur Polytechnic Institute</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
