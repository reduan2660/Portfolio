module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.vue",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#F5F5F5",
      black: "#0F0F0F",
      blue: "#00D1FF",
      headerBlue: "#171D1F",
      pureWhite: "#FFFFFF",
      test: "#555555",
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      display: ["Lobster", "cursive", "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
};
