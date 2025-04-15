/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/index.html",
    "./src/**/*.js" // 👈 include your JS files where classes are used
  ],
  safelist: [
    "bg-red-500",
    "text-white",
    "bg-green-500",
    "text-black",
    "rounded-md"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

