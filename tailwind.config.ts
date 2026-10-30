import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#0C1B26", 900: "#102636", 800: "#17364C", 700: "#1F4A66", 100: "#D6E4EE", 50: "#EEF4F8" },
        sand: { 500: "#C75B39", 400: "#DA7757", 300: "#EDAE94", 100: "#FAE9E0" },
        cream: "#FAF6EF"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(12 27 38 / 0.35)", card: "0 10px 30px -12px rgb(12 27 38 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
