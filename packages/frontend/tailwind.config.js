module.exports = {
  darkMode: "class",
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    margin: ["first"],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
