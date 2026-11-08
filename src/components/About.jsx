import { motion } from "framer-motion";
import { developer, journey } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About me"
          title="A practical builder who cares about both code quality and user experience."
          text="My journey started with frontend interfaces and grew into full stack development. I enjoy turning ideas into reliable products, from responsive screens to APIs and database logic."
        />
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-mint">Career goal</p>
            <h3 className="mt-4 text-2xl font-black text-white light:text-slate-950">Build useful, scalable web products.</h3>
            <p className="mt-5 leading-8 text-white/62 light:text-slate-600">
              I want to grow as a full stack engineer who can own complete product flows, collaborate with teams, and ship
              clean solutions for real businesses. My goal is to write code that is simple to maintain and interfaces that
              are easy for people to trust.
            </p>
            <div className="mt-7 grid gap-3 text-sm">
              <Info label="Name" value={developer.name} />
              <Info label="Title" value={developer.title} />
              <Info label="Location" value={developer.location} />
            </div>
          </motion.div>

          <div className="grid gap-4">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-mint/40 light:border-slate-200 light:bg-white"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint/12 text-mint">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white light:text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-7 text-white/60 light:text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 light:border-slate-200 light:bg-slate-50">
      <span className="text-white/45 light:text-slate-500">{label}</span>
      <strong className="text-right text-white light:text-slate-950">{value}</strong>
    </div>
  );
}
