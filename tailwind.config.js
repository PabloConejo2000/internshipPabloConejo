/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      backgroundColor:{
        'orange-rental':'#e46855',
        'welcome':'#f6f6f6;'
      },
      text:{
        'custom-black':'#f9f9f9'
      },
      fontSize: {
        'rental-custom': '1.8rem',
      },
      margin: {
        'custom':'0px 75px',
        'customli':'mt-8'
      },
      padding:{
        'jumbo':'p-20'
      }

    },
  },
  plugins: [],
};