import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { developer } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const contactLinks = [
  { icon: FiMail, label: "Email", value: developer.email, href: `mailto:${developer.email}` },
  { icon: FiPhone, label: "Phone", value: developer.phone, href: `tel:${developer.phone}` },
  { icon: FiGithub, label: "GitHub", value: "mdsamimprogramer", href: developer.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "samim01", href: developer.linkedin },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subjectText = data.get("subject") || `Portfolio inquiry from ${data.get("name")}`;
    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`);
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app is opening with the message ready.");
    form.reset();
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Have a project, role, or collaboration in mind?"
          text="Send a quick message and I will get back with next steps, timing, and how I can help."
        />
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
              <FiMapPin className="mt-1 shrink-0 text-mint" />
              <div>
                <p className="font-bold text-white light:text-slate-950">Based in {developer.location}</p>
                <p className="mt-1 text-sm text-white/55 light:text-slate-500">Open to remote projects and full stack opportunities.</p>
              </div>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-mint/40 light:border-slate-200 light:bg-slate-50"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint/10 text-mint">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white/38 light:text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate font-semibold text-white light:text-slate-950">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-[#07101f]/75 p-6 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="Project discussion" />
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-bold text-white/70 light:text-slate-700">Message</span>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project..."
                className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-mint/60 light:border-slate-200 light:bg-slate-50 light:text-slate-950 light:placeholder:text-slate-400"
              />
            </label>
            {status && <p className="mt-4 rounded-2xl bg-mint/10 px-4 py-3 text-sm font-semibold text-mint">{status}</p>}
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:bg-mint sm:w-auto"
            >
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="mb-2 block text-sm font-bold text-white/70 light:text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-white/28 focus:border-mint/60 light:border-slate-200 light:bg-slate-50 light:text-slate-950 light:placeholder:text-slate-400"
      />
    </label>
  );
}
