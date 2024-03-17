import type { Config } from "tailwindcss";

const tailwindcssConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "color-link": "var(--glb-color-link)",
        "color-link-hover": "var(--glb-color-link-hover)",
      },
    },
  },
  plugins: [],
};

export default tailwindcssConfig;
