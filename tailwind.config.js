/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js"
  ],
  theme: {
    extend: {
      width: {
        '100px': '100px',
      },
      transitionDuration: {
        '250': '0.25s',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      fontSize: {
        '1': '1.875rem',
        '2': '1.5rem',
        '3': '1.375rem',
        '4': '1.125rem',
        '5': '0.875rem',
        '6': '0.813rem',
        '7': '0.75rem',
      },
      fontWeight: {
        '500': 500,
        '600': 600,
        '700': 700,
      },
      colors: {
        deepPurple:  {
          50 :  '#EDE7F6', 
          100 :  '#D1C4E9', 
          200 :  '#B39DDB', 
          300 :  '#9575CD', 
          400 :  '#7E57C2', 
          500 :  '#673AB7', 
          600 :  '#5E35B1', 
          700 :  '#512DA8', 
          800 :  '#4527A0', 
          900 :  '#311B92'
        },
        warna: {
          'shadow1': '#363c42', //shadow1
          'shadow2': '#0f1318', //shadow2
          5: '#ff7d1a1a', //hsla
          7: '#FF7D8A',
          10: '#073113',              //         --dark-jungle-green: hsl(188, 63%, 7%);
          20: '#1c3954',              // --prussian-blue: hsl(200, 69%, 14%);
          30: '#1e262b',              // --raisin-black-1: hsl(227, 29%, 13%);
          40: '#1a1f27',              // --raisin-black-2: hsl(229, 17%, 19%);
          50: '#8cc63f',              // --yellow-green: hsl(89, 72%, 45%);
          60: '#ff5100',              // --orange-soda: hsl(9, 100%, 62%);
          65: '#FF7D27',
          70: '#eeeded',              // --cultured-1: hsl(0, 0%, 93%);
          80: '#f5f2f7',              // --cultured-2: hsl(192, 24%, 96%);
          90: '#f4d0c6',              // --misty-rose: hsl(7, 56%, 91%);
          100: '#f7fcff',              // --alice-blue: hsl(210, 100%, 97%);
          110: '#f9f2f2',              // --seashell: hsl(8, 100%, 97%);
          120: '#5a7f9b',              // --cadet: hsl(200, 15%, 43%);
          130: '#ffffff',              // --white: hsl(0, 0%, 100%);
          140: '#000000',              // --black: hsl(0, 0%, 0%);
          150: '#a2c1bf'              // --opal: hsl(180, 20%, 62%);
        },
        pallete: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#F7E9D7',
          500: '#EBD8C3',
          600: '#B3E8E5',
          700: '#82DBD8',
          800: '#3BACB6',
          900: '#2F8F9D',
        },
        jembot: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#233876',
          300: '#e0cec7',
          400: '#F7E9D7',
          500: '#EBD8C3',
          600: '#98A8F8',
          700: '#BCCEF8',
          800: '#CDFCF6',
          900: '#FAF7F0',
        },
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'bree-serif': ["Bree Serif", "serif"],
        'ff-poppins': ["Poppins", "sans-serif"],
      },
      container: {
        center: true
      }
    },
    screens: {
      'xxxs': '200px',
      'xxs': '300px',
      'xs': '414px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'bek': '1240px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    
  ],
}
