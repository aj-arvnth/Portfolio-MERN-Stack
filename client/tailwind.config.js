module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#090f18",
        "secondary": "#20C20E",
        "tertiary": "#54D6BB",
      }
    },
    screens: {
      'lg': { 'max': '2023px' },
      'sm': { 'max': '800px' },
    },
  },
  plugins: [],
}