/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {

    extend: {
      animation: {
        move: 'move 2s infinite alternate',
      },
      keyframes: { 
    
        move: {
          '0%': { left: '0' },
          '100%': { left: 'calc(100% - 100px)'}
        }
      },
      fontFamily: {
        bebas: ['Bebas Neue'],
        // Add more custom font families here if needed
      },
      fontSize: {
        '7xl': '65px',
        '42': '42px',
        '29': '29px',
        '83': '83px'
        // Define more custom font sizes as needed
      },
      colors: {
        mygrey: "#E7E7E7"
        ,
        myblack: "#434343"
        ,
        myyellow:"#FF9900",
          
        myred:"#FF003D",
        
        myblue:  '#5364FF',
        secondaryblue:"#0085FF"
          
      },
    },
  },
  plugins: [],
}

