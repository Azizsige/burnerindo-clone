module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./dist/assets/*.{png, jpg}"],
  theme: {
    extend: {
      colors: {
        'primary': '#cc0000'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}