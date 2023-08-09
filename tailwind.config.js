/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        // primary
        orange : 'hsl(26, 100%, 55%)',
        paleOrange : 'hsl(25, 100%, 94%)', 

        // neutral
        darkBlue : 'hsl(220, 13%, 13%)',
        darkGrayishBlue : 'hsl(219, 9%, 45%)',
        grayishBlue : 'hsl(220, 14%, 75%)',
        lightGrayishBlue : 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        blacks : 'hsl(0, 0%, 0%)', // 75% opacity
      }
    },
    screens: {
      xxs: '500px',
      
      'xs': '600px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

