/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
    './dist/pages/*.{html,js}',
    './dist/scripts/*.js',
    '*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'lora': ['Lora', 'serif']
    },
    extend: {
      colors: {
      red: '#bb0606',
      gray: '#A9A9A9',
      pureblack: '#040C17',
      pureblackhalf: '#040c17de',
      halfred: '#bb06069c',
      black_half: '#313139af',
      redhover: '#ce1e1e',
      black: '#313139',
      superblack: '#000000',
      white: '#FFFFFF',
      whiteBg: '#ffffffda',
      },
    },
  },
  plugins: [],
}

