import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#0C1F1A", 900: "#122B23", 800: "#1A3A2F", 700: "#24503F", 100: "#DCE8E1", 50: "#F2F6F3" },
        sand: { 500: "#C99B5F", 400: "#D9AE77", 100: "#F5EBDD" },
        cream: "#FAF7F2"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(12 31 26 / 0.35)", card: "0 10px 30px -12px rgb(12 31 26 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
