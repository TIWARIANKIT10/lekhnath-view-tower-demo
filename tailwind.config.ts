import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#04211D", 900: "#06302A", 800: "#0A453C", 700: "#0F5D50", 100: "#D3EAE3", 50: "#EDF6F2" },
        sand: { 500: "#E07856", 400: "#EC9478", 300: "#F5BBA6", 100: "#FBE9E1" },
        cream: "#FBF8F3"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(4 33 29 / 0.35)", card: "0 10px 30px -12px rgb(4 33 29 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
