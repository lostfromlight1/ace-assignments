/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1200px'
    },
    fontFamily:{
      'Lato': 'var(--Lato)',
      'Poppins': 'var(--Poppins)',
    },

    container: {
      center: true,
    },
    
    extend: {
      colors: {
        
    }
    },
  },
  plugins: [],
}