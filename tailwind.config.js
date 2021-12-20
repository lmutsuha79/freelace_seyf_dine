module.exports = {
  mode: "jit",
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      screens: {
        'sm': '768px',
        'md': '992px',
        'lg': '1200px',
        'xl': '1200px',
        '2xl': '1200px'
      },
   
 
      fontFamily: {
        mainFont: "Poppins"
      },
  
      colors: {
        white: "#FCFCFD",
        black: "#23262F",
        gray: "#777E90",
        light_ray: "#E6E8EC",
        super_light_gray: "#F4F5F6",
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
        '99': '99'
      },
      flexGrow: {
        '3': 3
      },
      padding: {
        '5px': '5px',
      },
      translate: {
        '5px': '5px',
      },
      dropShadow: {
        'contact_drop_shadow': '0px 10px 20px rgba(119, 126, 144, 0.18)'
      }
    
      
    
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // extra small devices less than 768px
        '.container': {
          margin: 'auto',
          maxWidth: 'calc(100% - 48px)',
          '@screen sm': {
            maxWidth: '750px',
            padding: '0px 20px',
          },
          '@screen md': {
            maxWidth: '970px',
            padding: '0px 20px',

          },
          '@screen lg': {
            maxWidth: '1170px',
            padding: '0px 20px',

          },
          '@screen xl': {
            maxWidth: '1170px',
            padding: '0px 20px',

          },
          '@screen 2xl': {
            maxWidth: '1170px',
            padding: '0px 20px',

          },
        }
      })
    }
  ]
}
