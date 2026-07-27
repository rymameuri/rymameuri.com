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
        background: "#FAF8F5",
        foreground: "#403D3D",
        muted: "#EBE8E3",
        border: "#E8E4DE",
        primary: {
          DEFAULT: "#724538",
          foreground: "#FAF8F5",
        },
        "thread-build": "#724538",
        "thread-research": "#403D3D",
        "thread-craft": "#A67C6F",
        "accent-gold": "#B8A070",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
