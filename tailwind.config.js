// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-reveal": "textReveal 2s ease-out", // Define the animation duration and easing
      },
      keyframes: {
        textReveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" }, // Start from invisible and slightly below
          "100%": { opacity: "1", transform: "translateY(0)" }, // End at full opacity and original position
        },
      },
      screens: {
        "sm-390": {
          raw: "(min-width: 390px) and (max-width: 390px) and (min-height: 844px)",
        },
        "sm-375": {
          raw: "(min-width: 375px) and (max-width: 375px) and (min-height: 667px)",
        },
        "sm-430": {
          raw: "(min-width: 430px) and (max-width: 430px) and (min-height: 932px)",
        },
        "tablet-1024": {
          raw: "(min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px)",
        },
      },
    },
  },
  plugins: [],
};
