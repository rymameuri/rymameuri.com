import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        surface: "#141414",
        border: "#222222",
        primary: "#F0EDE8",
        secondary: "#888888",
        accent: "#C8A97E",
        "accent-hover": "#E2C9A0",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
