import { motion } from "framer-motion";
import { FiHeart, FiSmile } from "react-icons/fi";
import { developer, hobbies, journey } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="A practical full stack builder driven by code quality, curiosity, and product impact."
          text="I combine formal engineering principles from Electronics Technology with real-world full stack web development to build reliable software solutions."
        />

        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          {/* Left Column: Core Intro & What I Enjoy */}
          <div className="space-y-6">
            <motion.div
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-mint">
                <FiSmile /> Who I Am & What I Love
              </div>

              <h3 className="mt-4 text-2xl font-black text-white light:text-slate-950">
                Crafting clean web experiences from frontend to database.
              </h3>

              <p className="mt-4 leading-8 text-white/70 light:text-slate-600">
                Hello! I am {developer.name}, a {developer.title} residing in {developer.location}.
                I love turning complex functional challenges into elegant, clean-coded web solutions.
                Whether designing smooth user interfaces with React & Tailwind or engineering scalable RESTful APIs
                with Node.js and MongoDB, I am deeply invested in every layer of the modern web stack.
              </p>

              <div className="mt-6 rounded-2xl border border-mint/20 bg-mint/5 p-4 light:border-mint/30 light:bg-mint/10">
                <p className="text-xs font-bold uppercase tracking-wider text-mint">The Work I Truly Enjoy</p>
                <p className="mt-2 text-sm leading-6 text-white/80 light:text-slate-700">
                  ⚡ Designing intuitive, responsive user experiences that delight users.
                  <br />
                  ⚡ Architecting clean RESTful backend APIs with strong security & auth.
                  <br />
                  ⚡ Optimizing database queries, caching, and state management for lightning speed.
                </p>
              </div>

              <div className="mt-6 grid gap-2.5 text-sm">
                <Info label="Name" value={developer.name} />
                <Info label="Designation" value={developer.title} />
                <Info label="Location" value={developer.location} />
                <Info label="Education" value="Diploma in Electronics Technology" />
                <Info label="Institute" value="Kurigram Polytechnic Institute" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Programming Journey Cards */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50 light:text-slate-500">
              My Programming Journey
            </h4>
            <div className="grid gap-4">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-mint/40 light:border-slate-200 light:bg-white"
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
                        <h4 className="text-lg font-black text-white light:text-slate-950">{item.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-white/65 light:text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hobbies & Interests Outside Programming - Requirement 5 */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <FiHeart className="text-rose" />
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60 light:text-slate-500">
              Beyond Coding • Hobbies & Interests
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-mint/30 light:border-slate-200 light:bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-mint/10 text-mint">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-3 text-base font-bold text-white light:text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-white/60 light:text-slate-500">{item.description}</p>
                </motion.div>
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
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 light:border-slate-200 light:bg-slate-50">
      <span className="text-xs text-white/50 light:text-slate-500">{label}</span>
      <strong className="text-right text-xs font-semibold text-white light:text-slate-950 truncate max-w-[240px]">
        {value}
      </strong>
    </div>
  );
}
