/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainBg: "#0F172A",
        secondBg: "#141E33",
        thirdBg: "#1D283D",
        textColor: "#94A3B8",
        lightMainBg: "#E2E8F0",
        lightSecondBg: "#F1F5F9",
        textLightColor: "#475569",
      },
    },
  },
  plugins: [],
};
