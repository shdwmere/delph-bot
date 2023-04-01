module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'maingreen': '#0D723C',
        'backgroundSet': '#212121',
        'greenbet': '#43E143',
        'greenletters': '#00AB00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};