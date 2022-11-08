/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "heart-burst": "heart-burst 0.8s steps(28) 1 forwards",
        "heart-burst-immediate": "heart-burst 0s steps(28) 1 forwards",
      },
      keyframes: {
        "heart-burst": {
          from: { backgroundPosition: "left" },
          to: { backgroundPosition: "right" },
        },
      },
    },
  },
  plugins: [],
};
