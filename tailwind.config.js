/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "site/snippets/**/*.php",
    "site/templates/**/*.php",
    // "site/plugins/custom/**/*.php",
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}