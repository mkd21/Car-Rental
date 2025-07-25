/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        primary : 'var(--color-primary)',
        primaryDull : "var(--color-primary-dull)",
        light : "var(--color-light)",
        borderColor : "var(--color-border-color)",
        navText : "var(--color-nav)"
      },
      fontFamily : {
        outfit : ["Outfit", "sans-serif"],
        roboto : ["roboto", "sans-serif"],
        inter : ["inter" , "sans-serif"]
      },
      
    },
  },
  plugins: [],
}

