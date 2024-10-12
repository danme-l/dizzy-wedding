import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#0a2749', // navy
      },
      secondary: {
        main: '#C28E61', // bronze
      },
      tertiary: {
        main: '#69482C', //dark brown
      },
      background: {
        default: '#cdcdc3', // Light background
        secondary: '#afc0be', //Light blue
        paper: '#ffffff', // White background for paper components
      },
    },
    typography: {
      fontFamily: "Georgia,serif",
      h1: {
        fontFamily: '"Great Vibes", cursive', // Cursive font for headings
        fontSize: '3.1rem',
        fontWeight: 400,
        color: '#6A3805', // bronze for headings
      },
      h2: {
        fontFamily: '"Great Vibes", cursive',
        fontSize: '1.9rem',
        fontWeight: 400,
        color: '#6A3805',
      },
      h3: {
        fontFamily: '"Great Vibes", cursive',
        fontSize: '1.75rem',
        fontWeight: 400,
        color: '#6A3805',
      },
      body1: {
        fontSize: '1rem',
        color: '#333333',
      },
      button: {
        textTransform: 'none', // Prevent uppercase transformation
      },
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
                "&:hover": {
              border: 'solid',
              borderColor: "#C28E61",
            }
            
          }
        }
      }
    }
  });
  

export default theme;