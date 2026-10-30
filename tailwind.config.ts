import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#131A12", 900: "#1B2618", 800: "#27371F", 700: "#38512C", 100: "#DFE8D2", 50: "#F2F5EA" },
        sand: { 500: "#D97D3E", 400: "#E79A5F", 300: "#F2BE94", 100: "#FBEBD9" },
        cream: "#FAF7EF"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(19 26 18 / 0.4)", card: "0 10px 30px -12px rgb(19 26 18 / 0.3)" }
    }
  },
  plugins: []
};
export default config;
