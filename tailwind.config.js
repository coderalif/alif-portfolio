/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050816",
        panel: "#0a1020",
        line: "rgba(255,255,255,0.12)",
        mint: "#2dd4bf",
        amber: "#f59e0b",
        rose: "#fb7185",
      },
      boxShadow: {
        glow: "0 0 70px rgba(45, 212, 191, 0.22)",
        premium: "0 24px 90px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
        "hero-grid-light":
          "linear-gradient(rgba(15,23,42,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.04) 1px, transparent 1px)",
      },
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
    ({ addVariant }) => {
      addVariant("light", ".light &");
    },
  ],
};
