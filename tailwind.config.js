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
      container: {
        center: true,

        // padding: {
        //   // DEFAULT: '1rem',
        //   sm: '0px 98px',
        //   lg: '0px 98px',
        //   xl: '0px 98px',
        //   '2xl': '0px 98px',
        // },
      },
      colors: {
        white: "#FCFCFD",
        black: "#23262F",
        gray: "#777E90",
        light_ray: "#E6E8EC",
        blue: "#3772FF",
        dark_blue: "#0045EA",
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
