import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const duration = 1100;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-1 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:shadow-md"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <strong className="block text-3xl font-black text-white light:text-slate-900">
        {count}
        {suffix}
      </strong>
      <span className="mt-2 block text-xs sm:text-sm font-semibold text-white/60 light:text-slate-500">{label}</span>
    </motion.div>
  );
}
