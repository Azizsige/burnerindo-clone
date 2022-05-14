module.exports = {
  content: ["./*.html", "./dist/js/*.js", "./dist/css/*.css", "./node_modules/flowbite/**/*.js"],
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