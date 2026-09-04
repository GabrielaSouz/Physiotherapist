import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f5f1",
          100: "#dfe8df",
          200: "#c0d1c1",
          300: "#9ab29c",
          400: "#748f77",
          500: "#57735b",
          600: "#445c48",
          700: "#39492e",
          800: "#2f3f33",
          900: "#25322a",
          950: "#151d18",
        },
        sage: {
          DEFAULT: "#5f7a63",
          light: "#7f9683",
        },
        cream: {
          DEFAULT: "#f6f2ea",
          dark: "#efe9dc",
        },
        ink: "#26261f",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        blob: "48% 52% 55% 45% / 45% 48% 52% 55%",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
