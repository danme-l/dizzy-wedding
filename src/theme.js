import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#5E8BF2', // navy
      },
      secondary: {
        main: '#6A3805', // bronze
      },
      background: {
        default: '#f9f9f9', // Light background
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
  });
  

export default theme;