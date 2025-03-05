import { createTheme } from "@mui/material";
import  './global.css';

const myPalette = {
  primary: {
    main: '#B2D8E5', // soft pastel blue (tablecloth)
    light: '#D9ECF2',
    dark: '#89AEB8',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#E6B8C6', // mutel pastel pink (flowers)
    light: '#F5D8E1',
    dark: '#B38397',
    contrastText: '#ffffff',
  },
  error: {
    main: '#C85C5C', //Deep rose for accents
  },
  warning: {
    main: '#F4C95D', //Warm gold for subtle contrast
  },
  info: {
    main: '#A88EC2', //soft lavender (napkins)
  },
  success: {
    main: '#87A68A', // muted sage green (foliage)
  },
  background: {
    default: '#F8F8F8', // Light airy background
    paper: '#ffffff', // White background for paper components
  },
}

const theme = createTheme({
    palette: myPalette,
    typography: {
      fontFamily: "Georgia,serif",
      h1: {
        fontFamily: '"Great Vibes", cursive', // Cursive font for headings
        fontSize: '3.1rem',
        fontWeight: 400,
        color: myPalette.primary.dark, // bronze for headings
      },
      h2: {
        fontFamily: '"Great Vibes", cursive',
        fontSize: '1.9rem',
        fontWeight: 400,
        // color: '#6A3805',
      },
      h3: {
        fontFamily: '"Great Vibes", cursive',
        fontSize: '1.75rem',
        fontWeight: 400,
        // color: '#6A3805',
      },
      body1: {
        fontSize: '1rem',
        color: '#333333',
      },
      button: {
        textTransform: 'none', // Prevent uppercase transformation
      },
      invitation1: {
        fontFamily: '"Kapakana", cursive',
        fontSize: '1.9rem',
        fontWeight: 400,
        color: '#03311C', 
      },
      invitation2: {
        fontFamily: '"Kapana", cursive',
        fontSize: '1.9rem',
        fontWeight: 400,
        color: 'black', 
      }
    },
    
  });
  

export default theme;