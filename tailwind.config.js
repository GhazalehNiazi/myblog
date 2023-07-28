/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      keyframes: {
        cssmarquee: {
          " 0%": {
            transform: "translateX(100%)",
          },
          " 100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        cssmarquee: "cssmarquee 10s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
