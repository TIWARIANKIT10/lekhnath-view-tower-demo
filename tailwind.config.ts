import type { Config } from "tailwindcss";

// Grand Hotel Begnas — "Grand Editorial" design system.
// Ivory paper, deep ink navy, brass. Playfair Display + Manrope.
// Deliberately unlike any other hotel site in the collection.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#182642", deep: "#0F1930", soft: "#43536F" },
        brass: { DEFAULT: "#A87F3D", light: "#C6A15B", pale: "#E9DCC0" },
        paper: "#FAF6EE",
        cream: "#F3ECDC",
        line: "#E3D9C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { mega: "0.35em" },
    },
  },
  plugins: [],
};
export default config;
