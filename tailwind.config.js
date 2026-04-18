/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf4',
          100: '#c5d1e4',
          200: '#9db2cf',
          300: '#7593bb',
          400: '#577cab',
          500: '#3a659b',
          600: '#2d5489',
          700: '#1e3a5f',
          800: '#162c4a',
          900: '#0d1d32',
        },
        brand: {
          green: '#22c55e',
          navy:  '#1e3a5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
