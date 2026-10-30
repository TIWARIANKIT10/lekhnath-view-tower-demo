import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#171310", 900: "#211A15", 800: "#2E241C", 700: "#453527", 100: "#E9DFD2", 50: "#F6F1E9" },
        sand: { 500: "#A9713B", 400: "#C08D54", 300: "#D9B489", 100: "#F3E7D3" },
        cream: "#FBF8F2"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(23 19 16 / 0.4)", card: "0 10px 30px -12px rgb(23 19 16 / 0.3)" }
    }
  },
  plugins: []
};
export default config;
