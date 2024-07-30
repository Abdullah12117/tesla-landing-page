/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/images/mainpage.jpg')",
        '2nd-bg': "url('/images/2ndpage.avif')",
        '3rd-bg': "url('/images/3rdpage.avif')",
        '4th-bg': "url('/images/4thimage.avif')",
        '5th-bg': "url('/images/5thimage.avif')",
        '6th-bg': "url('/images/6thimage.avif')",
        '7th-bg': "url('/images/7thimage.avif')",
        '8th-bg': "url('/images/8thimage.avif')",
        '9th-bg': "url('/images/9thimage.avif')",
      },
      colors: {
        customeGrey: '#e2e3e3',
        customeBlack: '#111',
        'black-bg': '#111',
         txtgrey: '#a2a3a5',
      },
    },
  },
  plugins: [],
}

