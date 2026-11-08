import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { developer } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const contactChannels = [
  {
    icon: FiMail,
    label: "Email Address",
    value: developer.email,
    href: `mailto:${developer.email}`,
    action: "Send Email",
  },
  {
    icon: FiPhone,
    label: "Phone Number",
    value: developer.phone,
    href: `tel:${developer.phone}`,
    action: "Call Direct",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp Number",
    value: developer.whatsapp,
    href: developer.whatsappLink,
    action: "Chat on WhatsApp",
    badge: "Fastest Reply",
    color: "text-[#25D366]",
  },
  {
    icon: FiGithub,
    label: "GitHub Profile",
    value: "coderalif",
    href: developer.github,
    action: "Follow & Star",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn Profile",
    value: "alif26",
    href: developer.linkedin,
    action: "Connect",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subjectText = data.get("subject") || `Portfolio Inquiry from ${data.get("name")}`;
    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(
      `Hello Alif,\n\n${data.get("message")}\n\nSender: ${data.get("name")}\nEmail: ${data.get("email")}`
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;
    setStatus("Thank you! Your email application is opening with the message drafted.");
    form.reset();
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Have a project, role, or collaboration in mind?"
          text="Send a message directly via email, phone, or WhatsApp. I usually respond within a few hours."
        />

        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          {/* Contact Direct Cards - Requirement 10 */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Location & Availability Note */}
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-slate-50">
              <FiMapPin className="mt-1 shrink-0 text-mint" size={18} />
              <div>
                <p className="font-bold text-white light:text-slate-950">
                  Based in {developer.location}
                </p>
                <p className="mt-0.5 text-xs text-white/55 light:text-slate-500">
                  Available for remote work, contracts, and full stack developer roles worldwide.
                </p>
              </div>
            </div>

            {/* Direct Cards List */}
            <div className="grid gap-3 sm:grid-cols-1">
              {contactChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-0.5 hover:border-mint/40 light:border-slate-200 light:bg-white"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-mint ${item.color || "text-mint"} light:bg-slate-100`}>
                        <Icon size={20} />
                      </span>
                      <div className="min-w-0">
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/45 light:text-slate-400">
                          {item.label}
                          {item.badge && (
                            <span className="rounded-full bg-[#25D366]/20 px-2 py-0.5 text-[10px] font-bold text-[#25D366]">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block truncate font-semibold text-white light:text-slate-950">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/70 transition group-hover:border-mint/50 group-hover:bg-mint group-hover:text-[#050816] light:border-slate-200 light:bg-slate-50 light:text-slate-700">
                      {item.action}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-[#07101f]/75 p-6 shadow-premium backdrop-blur-xl light:border-slate-200 light:bg-white sm:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-black text-white light:text-slate-950">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-white/55 light:text-slate-500">
              Fill out the form below and it will draft directly to {developer.email}.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="John Doe" required />
                <Field label="Your Email" name="email" type="email" placeholder="john@example.com" required />
              </div>

              <Field
                label="Subject"
                name="subject"
                placeholder="Project Inquiry / Job Opportunity"
                required
              />

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55 light:text-slate-500">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project goals, scope, and timeline..."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none transition focus:border-mint/60 light:border-slate-200 light:bg-slate-50 light:text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-mint px-6 text-sm font-extrabold text-[#050816] transition hover:bg-white shadow-glow"
              >
                Send Message <FiSend />
              </button>

              {status && (
                <div className="flex items-center gap-2 rounded-xl bg-mint/10 p-3 text-xs font-semibold text-mint">
                  <FiCheckCircle /> {status}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55 light:text-slate-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-mint/60 light:border-slate-200 light:bg-slate-50 light:text-slate-900"
      />
    </div>
  );
}
