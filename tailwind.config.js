/**
 * ==============================================================================
 * ⚙️ TAILWIND CSS CONFIGURATION
 * ==============================================================================
 * ফাইল লোকেশন: tailwind.config.js
 * কাজ:
 *  ১. পোর্টফোলিওর কাস্টম কালার প্যালেট (ink, mint, amber, rose)
 *  ২. ডার্ক ও লাইট গ্রিড ব্যাকগ্রাউন্ড প্যাটার্ন
 *  ৩. টাইপিং কার্সারের ব্লিংক এবং ফ্লোটিং অ্যানিমেশন
 *  ৪. কাস্টম "light:" ভ্যারিয়েন্ট প্লাগিন (সাদা থিমের জন্য সহজ ক্লাস ব্যবহারের সুবিধা)
 * ==============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // ১. পোর্টফোলিওর ব্র্যান্ড কালারসমূহ
      colors: {
        ink: "#050816",             // ডিপ স্পেস ব্ল্যাক
        panel: "#0a1020",           // গ্লাস কার্ড প্যানেল
        line: "rgba(255,255,255,0.12)",
        mint: "#2dd4bf",            // সিগনেচার মিন্ট/টিয়াল
        amber: "#f59e0b",           // অ্যাকসেন্ট গোল্ডেন অ্যাম্বার
        rose: "#fb7185",            // সফট রোজ
      },
      // ২. সিলিকন ভ্যালি স্টাইল সফট শ্যাডো
      boxShadow: {
        glow: "0 0 70px rgba(45, 212, 191, 0.22)",
        premium: "0 24px 90px rgba(0, 0, 0, 0.35)",
      },
      // ৩. ডার্ক ও লাইট ব্যাকগ্রাউন্ডের জন্য জিওমেট্রিক গ্রিড
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        "hero-grid-light":
          "linear-gradient(rgba(15,23,42,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.04) 1px, transparent 1px)",
      },
      // ৪. কার্সর ব্লিংক ও ভাসমান অ্যানিমেশন
      keyframes: {
        blink: {
          "0%, 48%": { opacity: 1 },
          "49%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // ৫. "light:" ভ্যারিয়েন্ট যাতে light:bg-white বা light:text-slate-900 সরাসরি কাজ করে
    ({ addVariant }) => {
      addVariant("light", ".light &");
    },
  ],
};
