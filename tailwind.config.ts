import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#071F16", 900: "#0B2E1F", 800: "#123C29", 700: "#1A5238", 100: "#D5E8DC", 50: "#EEF6F0" },
        sand: { 500: "#E8A33D", 400: "#F0B95C", 300: "#F7D48C", 100: "#FBF0DA" },
        cream: "#FAF8F1"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(7 31 22 / 0.35)", card: "0 10px 30px -12px rgb(7 31 22 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
