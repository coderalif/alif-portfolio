/**
 * ==============================================================================
 * 🔢 ANIMATED COUNTER COMPONENT
 * ==============================================================================
 * ফাইল লোকেশন: src/components/AnimatedCounter.jsx
 * কাজ:
 *  - হিরো সেকশনের নিচে সংখ্যাগুলো (১৮+ প্রজেক্ট, ১০+ টেকনোলজি, ২+ বছর অভিজ্ঞতা)
 *    স্ক্রিনে আসার সাথে সাথে ০ থেকে লক্ষ্য সংখ্যা পর্যন্ত স্মুথলি গণনা (Count-up Animation) করে।
 *  - ডার্ক ও লাইট উভয় থিমে মানানসই কার্ড বর্ডার ও শ্যাডো।
 * ==============================================================================
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", label }) {
  // ১. উপাদানটি স্ক্রিনে দেখা যাচ্ছে কিনা তা ট্র্যাক করার রেফারেন্স
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  // ২. যখনই স্ক্রিনে আসবে, ০ থেকে value পর্যন্ত স্মুথ কাউন্টিং শুরু হবে
  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const duration = 1100; // ১.১ সেকেন্ডে কাউন্টিং শেষ হবে

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      // রিকোয়েস্টঅ্যানিমেশনফ্রেম ব্যবহার করে ফ্রেম-বাই-ফ্রেম গণনা আপডেট
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
      {/* গণনাকৃত সংখ্যা (যেমন: ১৮+) */}
      <strong className="block text-3xl font-black text-white light:text-slate-900">
        {count}
        {suffix}
      </strong>
      {/* সংখ্যার নিচের লেবেল (যেমন: Projects completed) */}
      <span className="mt-2 block text-xs sm:text-sm font-semibold text-white/60 light:text-slate-500">
        {label}
      </span>
    </motion.div>
  );
}
