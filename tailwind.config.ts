import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f6fb",
          100: "#e3eaf3",
          200: "#c2d1e3",
          300: "#8ea9c8",
          400: "#5d80a8",
          500: "#3d618c",
          600: "#2d4b73",
          700: "#1f3658",
          800: "#142543",
          900: "#0b1830",
          950: "#060f21",
        },
        royal: {
          400: "#5a7bd6",
          500: "#3d5fc4",
          600: "#2d49a8",
          700: "#1f3686",
        },
        gold: {
          300: "#e9d9b2",
          400: "#d8be86",
          500: "#c8a878",
          600: "#a9885a",
          700: "#876a44",
        },
        ink: {
          50: "#fafaf8",
          100: "#f3f3ef",
          200: "#e7e6df",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(11, 24, 48, 0.18)",
        card: "0 24px 60px -24px rgba(11, 24, 48, 0.35)",
        ring: "0 0 0 1px rgba(200, 168, 120, 0.45)",
      },
      backgroundImage: {
        "navy-grad":
          "linear-gradient(135deg, #060f21 0%, #0b1830 45%, #142543 100%)",
        "gold-grad":
          "linear-gradient(135deg, #d8be86 0%, #c8a878 50%, #a9885a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
