import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { 950: "#191423", 900: "#221A33", 800: "#32264A", 700: "#463363", 100: "#E0D9EE", 50: "#F3F0F9" },
        sand: { 500: "#E39A2D", 400: "#EDB154", 300: "#F6CD8A", 100: "#FBF0DA" },
        cream: "#FAF7F0"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 20px 50px -20px rgb(25 20 35 / 0.35)", card: "0 10px 30px -12px rgb(25 20 35 / 0.25)" }
    }
  },
  plugins: []
};
export default config;
