/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dino-teal": "#76B8B0",
        "dino-dark-teal": "#449F94",
        "dino-neon-orange": "#FDA747",
        "dino-dark-neon-orange": "#FF8700",
        "dino-orange": "#FFBE74",
        "dino-dark-orange": "#E97D04",
        "light-dino-teal": "#ADD4D0",
        "dark-dino-teal": "#C8E3DF",
        "dino-dark-text": "rgb(43 118 109)",
      },
      gridTemplateColumns: {
        weird: "1fr 0.1fr 1fr",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        adumu: ['"Adumu"', "sans-serif"],
      },
      maxWidth: {
        "10xl": "140rem",
      },
      minWidth: {
        "70l": "80rem",
        "30l": "30rem",
      },
      scale: {
        200: "1.84",
      },
      maxWidth: {
        "text": "92%",
      },
      maxHeight: {
        "text": "92%",
      },
      borderWidth: {
        // "3": "3px"
      }
    },
  },
  plugins: [],
};
