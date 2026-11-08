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
      className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl light:border-slate-200 light:bg-white"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <strong className="block text-3xl font-black text-white light:text-slate-950">
        {count}
        {suffix}
      </strong>
      <span className="mt-2 block text-sm font-medium text-white/55 light:text-slate-500">{label}</span>
    </motion.div>
  );
}
