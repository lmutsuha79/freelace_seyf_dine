module.exports = {
  mode: "jit",
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
 
      fontFamily: {
        mainFont: "Poppins"
      },
      colors: {
        white: "#FCFCFD",
        black: "#23262F",
        gray: "#777E90",
        light_ray: "#E6E8EC",
        blue: "#3772FF",
        border_color_green: "#00D3A1",
        border_color_gray: "#707070",
        green: "#45B26B"
      },
      borderWidth: {
        '1': '1px',
      },
      zIndex: {
        '-1': '-1',
      }
    
      
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
