module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sanguine: {
          50: '#faf7f7',
          100: '#f5eeed',
          200: '#ebdcdc',
          300: '#e0cacc',
          400: '#d6b8bb',
          500: '#a67173',
          600: '#8b4f52',
          700: '#740b0a',
          800: '#5c0908',
          900: '#440705',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
