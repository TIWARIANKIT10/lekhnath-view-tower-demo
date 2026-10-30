import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#081426", 900: "#0B1F3A", 800: "#123058", 700: "#1B4480", 100: "#D8E2F0", 50: "#EFF4FA" },
        sand: { 500: "#C8A24B", 400: "#DDBC72", 300: "#EAD9A8", 100: "#F4ECD7" },
        cream: "#FAF8F3"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(8 20 38 / 0.35)", card: "0 10px 30px -12px rgb(8 20 38 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
