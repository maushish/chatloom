module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Custom named colors
      colors: {
        customGreen: '#5B9132',
        mainBlack: '#171515',
        txt1:'#FFF',
        btn:'#171515',
      },
      fontFamily: {
        'Open Sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
