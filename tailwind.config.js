/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#EC4899",
        background: "#F9FAFB",
        tprimary: "#111827",
        tsecondary: "#6B7280",
        accent: "#10B981",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
