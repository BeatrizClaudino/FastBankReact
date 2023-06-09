/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        dark: {
          100: '#212A3E',
          200: '(bg-slate-500)'
        },
        light:{
          100: '#FFFFFF',
        }
      }
    },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
  },
plugins: [
  
  // ...
]
}
