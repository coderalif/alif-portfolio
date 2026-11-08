import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      className={`mx-auto mb-10 max-w-3xl ${align === "center" ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-mint">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-white light:text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-white/60 light:text-slate-600 sm:text-lg">{text}</p>}
    </motion.div>
  );
}
