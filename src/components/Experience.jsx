/**
 * ==============================================================================
 * 💼 EXPERIENCE TIMELINE COMPONENT (REQUIREMENT 8)
 * ==============================================================================
 * ফাইল লোকেশন: src/components/Experience.jsx
 * কাজ:
 *  ১. প্রফেশনাল কাজের অভিজ্ঞতা এবং প্রজেক্ট অভিজ্ঞতার টাইমলাইন প্রদর্শন
 *  ২. সিগনেচার ভার্টিকাল লাইন ও গ্লোয়িং মার্কার
 * ==============================================================================
 */

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { experienceList } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Practical development experience shipping web software."
          text="Applying clean coding principles across independent client work, open source projects, and structured web engineering."
        />

        {/* টাইমলাইন ভার্টিকাল ট্র‍্যাক */}
        <div className="relative border-l-2 border-mint/20 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-8 light:border-teal-200">
          {experienceList.map((item, index) => (
            <motion.div
              key={item.role}
              className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-7 shadow-premium backdrop-blur-xl transition hover:border-mint/30 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:border-teal-400/50 hover:light:shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* টাইমলাইন পয়েন্টার মার্কার */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-6 grid h-8 w-8 place-items-center rounded-full border border-mint bg-[#050816] text-mint shadow-glow light:border-teal-500 light:bg-white light:text-teal-700 light:shadow-md">
                <FiBriefcase size={14} />
              </div>

              {/* রোল, কোম্পানি ও কাজের সময়কাল */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint light:bg-teal-50 light:text-teal-700">
                    {item.type}
                  </span>
                  <h3 className="mt-2 text-xl font-black text-white light:text-slate-900 sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-white/60 light:text-slate-500">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-mint light:text-teal-700">
                  <FiCalendar /> {item.period}
                </div>
              </div>

              {/* প্রধান কাজের বুলেট পয়েন্টসমূহ */}
              <ul className="mt-5 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70 light:text-slate-600">
                    <FiCheckCircle className="mt-1 shrink-0 text-mint light:text-teal-600" size={15} />
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
