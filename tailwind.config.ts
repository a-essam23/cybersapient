import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        danton: "var(--font-denton)",
      },
      colors: {
        dimmed: "rgb(108, 108, 108)",
      },
      keyframes: {
        fadein: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadein: "2s ease 0s 1 normal none running fadein",
      },
    },
  },
  plugins: [],
} satisfies Config;
