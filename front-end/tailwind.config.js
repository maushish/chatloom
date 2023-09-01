module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      // Custom named colors
      colors: {
        customGreen: '#5B9132',
        mainBlack: '#171515',
        txt1:'#FFF'
      },
      fontFamily: {
        'Open Sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
