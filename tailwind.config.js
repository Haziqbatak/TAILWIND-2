/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        dark: '#0f172a',
        grey: '#64748b'
      }
      },
  },
  plugins: [require('flowbite/plugin')],
}

