module.exports = {
  content: [
    "./*.html",
    "./dist/js/*.js",
    "./dist/css/*.css",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc0000",
        kategoriHero: 'rgba(232, 227, 227, .5)'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
