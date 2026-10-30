import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#1C2410", 900: "#263114", 800: "#35451B", 700: "#47602A", 100: "#E2EAD3", 50: "#F4F7EC" },
        sand: { 500: "#C25E7C", 400: "#D1839B", 300: "#E3B3C2", 100: "#F9E8ED" },
        cream: "#FAF8F1"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(28 36 16 / 0.35)", card: "0 10px 30px -12px rgb(28 36 16 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
