module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss')('./src/tailwind.js'),
    require('autoprefixer'),
  ],
};
