/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: ["var(--rubik)"]
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
