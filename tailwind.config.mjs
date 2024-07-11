/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-google-sheets": "#09a745",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
