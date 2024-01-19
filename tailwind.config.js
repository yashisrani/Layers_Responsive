/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        "small" : {'max' : "1200px"},
        "vsmall" : {'max' : "750px"},
        "vvsmall" : {'max' : "425px"},
        "footer" : {'max' : "950px"},
      }
    },
  },
  plugins: [],
}

