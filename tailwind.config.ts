import type { Config } from "tailwindcss";

// Raniban Retreat — its own design language: deep forest green of the
// Raniban ("Queen's Forest"), warm cream, sunrise gold. Cormorant
// Garamond for emotion, Manrope for information. Soft, rounded, calm.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: "#1d3b2e",
          deep: "#122619",
          soft: "#2c5240",
        },
        cream: "#f7f2e7",
        sand: "#efe6d3",
        mist: "#dde5d5",
        sage: "#9db89a",
        gold: {
          DEFAULT: "#c2a059",
          soft: "#d9bc7f",
        },
        ink: "#1f2a23",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
