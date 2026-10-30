import type { Config } from "tailwindcss";

// Grand Hotel Begnas — design language after Cheval Blanc:
// white and ivory, warm charcoal-brown ink, a single muted taupe.
// Cormorant Garamond for emotion, Jost for information. Sharp corners.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2E2A26", soft: "#4C463F", mute: "#7C756B" },
        taupe: { DEFAULT: "#5F574E", deep: "#4C463F" },
        ivory: "#FAF8F4",
        line: "#E7E1D8",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
