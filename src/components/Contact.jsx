/**
 * ==============================================================================
 * 📬 CONTACT & INTERACTIVE MESSAGE ENGINE (REQUIREMENT 10)
 * ==============================================================================
 * ফাইল লোকেশন: src/components/Contact.jsx
 * কাজ:
 *  ১. সরাসরি যোগাযোগের মাধ্যম (ইমেইল, ফোন, হোয়াটসঅ্যাপ, গিটহাব, লিঙ্কডইন)
 *  ২. ফুলস্ট্যাক কন্টাক্ট ফর্ম যা Vercel Serverless API (/api/contact)-এর মাধ্যমে
 *     সরাসরি আপনার জিমেইলে ইমেইল পাঠায় এবং MongoDB Atlas-এ মেসেজ জমা রাখে
 *  ৩. সেন্ডিং স্টেট ও সাকসেস নোটিফিকেশন অ্যালার্ট
 * ==============================================================================
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { FaGoogleDrive, FaWhatsapp } from "react-icons/fa6";
import { developer } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

// কন্টাক্ট চ্যানেলসমূহের তালিকা
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
  {
    icon: FaGoogleDrive,
    label: "Official Resume",
    value: "Google Drive PDF",
    href: developer.resumeDriveUrl,
    action: "View on Drive",
    badge: "Verified CV",
    color: "text-amber-400",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // ফর্ম সাবমিট হ্যান্ডলার (Vercel Serverless Function /api/contact কল করে)
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent directly to Md Alif Hosen.",
        });
        form.reset();
      } else {
        throw new Error(data.message || "Server delivery failed.");
      }
    } catch (err) {
      // নেটওয়ার্ক ফেইলিউর হলে অটোমেটিক মেইল অ্যাপ দিয়ে ওপেন হওয়ার ফলব্যাক
      const subject = encodeURIComponent(payload.subject || `Inquiry from ${payload.name}`);
      const body = encodeURIComponent(
        `Hello Alif,\n\n${payload.message}\n\nSender: ${payload.name}\nEmail: ${payload.email}`
      );
      setStatus({
        type: "fallback",
        message: "Automated API delivery encountered an issue. Click below to open in your mail app:",
        fallbackUrl: `mailto:${developer.email}?subject=${subject}&body=${body}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Have a project, role, or collaboration in mind?"
          text="Send a message directly via email, phone, or WhatsApp. I usually respond within a few hours."
        />

        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          {/* ========================================================= */}
          {/* বাম দিকের কলাম: সরাসরি যোগাযোগের চ্যানেল কার্ডসমূহ (Req 10) */}
          {/* ========================================================= */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* লোকেশন ও ফুলস্ট্যাক অ্যাভেইল্যাবিলিটি নোট */}
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200/90 light:bg-white light:shadow-sm">
              <FiMapPin className="mt-1 shrink-0 text-mint light:text-teal-600" size={18} />
              <div>
                <p className="font-bold text-white light:text-slate-900">
                  Based in {developer.location}
                </p>
                <p className="mt-0.5 text-xs text-white/55 light:text-slate-500">
                  Available for remote work, contracts, and full stack developer roles worldwide.
                </p>
              </div>
            </div>

            {/* চ্যানেল কার্ডসমূহের তালিকা */}
            <div className="grid gap-3 sm:grid-cols-1">
              {contactChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-3.5 sm:p-4 transition hover:-translate-y-0.5 hover:border-mint/40 light:border-slate-200/90 light:bg-white light:shadow-sm hover:light:border-teal-400 hover:light:shadow-md"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-mint ${item.color || "text-mint"} light:bg-teal-50 light:text-teal-700`}>
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
                        <span className="mt-0.5 block truncate font-semibold text-white light:text-slate-900">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/70 transition group-hover:border-mint/50 group-hover:bg-mint group-hover:text-[#050816] light:border-slate-200 light:bg-slate-100 light:text-slate-700">
                      {item.action}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* ডানদিকের কলাম: ইন্টারঅ্যাকটিভ কন্টাক্ট ফর্ম (Backend API)  */}
          {/* ========================================================= */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-[#07101f]/75 p-5 sm:p-8 shadow-premium backdrop-blur-xl light:border-slate-200/90 light:bg-white light:shadow-lg"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-white light:text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-white/55 light:text-slate-500">
                  Delivers directly to {developer.email} via Vercel Serverless API.
                </p>
              </div>
              <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 text-[11px] font-bold text-mint light:border-teal-200 light:bg-teal-50 light:text-teal-700">
                Backend Live
              </span>
            </div>

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
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none transition focus:border-mint/60 light:border-slate-200 light:bg-slate-50/80 light:text-slate-900 light:focus:bg-white light:focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-mint px-6 text-sm font-extrabold text-[#050816] transition hover:bg-white disabled:opacity-60 shadow-glow cursor-pointer light:bg-slate-900 light:text-white light:hover:bg-teal-600"
              >
                {loading ? (
                  <>Sending Message...</>
                ) : (
                  <>Send Message <FiSend /></>
                )}
              </button>

              {/* সাবমিশন স্টেটাস মেসেজ */}
              {status && (
                <div
                  className={`mt-4 rounded-2xl border p-4 text-xs leading-6 ${
                    status.type === "success"
                      ? "border-mint/30 bg-mint/10 text-mint light:border-teal-300 light:bg-teal-50 light:text-teal-900"
                      : "border-amber/30 bg-amber/10 text-amber light:border-amber-300 light:bg-amber-50 light:text-amber-900"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {status.type === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
                    <span>{status.type === "success" ? "Message Delivered!" : "Notice"}</span>
                  </div>
                  <p className="mt-1">{status.message}</p>
                  {status.fallbackUrl && (
                    <a
                      href={status.fallbackUrl}
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-amber px-3 py-1.5 font-bold text-[#050816] transition hover:bg-white"
                    >
                      Open Email App <FiSend size={12} />
                    </a>
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ইনপুট ফিল্ড সাব-কম্পোনেন্ট
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
        className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-mint/60 light:border-slate-200 light:bg-slate-50 light:text-slate-900 light:focus:bg-white light:focus:border-teal-500"
      />
    </div>
  );
}
