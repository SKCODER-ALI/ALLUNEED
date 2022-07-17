/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
      "/node_modules/flowbite/plugin.js"
  ],

  theme: {
    extend: {},
  },
    plugins: [
      require('flowbite/plugin')
  
  ]
}
