/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBg: "var(--theme-bg)",
        themeText: "var(--theme-text)",
        themeAccent: "var(--theme-accent)",
        themeCard: "var(--theme-card)"
      }
    },
  },
  plugins: [],
};
