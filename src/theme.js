import { createTheme } from "@mui/material";
import "./global.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B2D8E5",
      light: "#D9ECF2",
      dark: "#89AEB8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#E6B8C6",
      light: "#F5D8E1",
      dark: "#B38397",
      contrastText: "#ffffff",
    },
    tertiary: {
      main: "#6A3805",
    },
    error: {
      main: "#C85C5C",
    },
    warning: {
      main: "#F4C95D",
    },
    info: {
      main: "#A88EC2",
    },
    success: {
      main: "#87A68A",
    },
    background: {
      default: "#F8F8F8",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Georgia, serif",
    h1: {
      fontFamily: '"Alex Brush", cursive;',
      fontSize: "3.3rem",
      fontWeight: 400,
      color: "#89AEB8",
    },
    h2: {
      fontFamily: '"Alex Brush", cursive;',
      fontSize: "2.1rem",
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Alex Brush", cursive;',
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Belleza, Arial, sans-serif',
      fontSize: "1rem",
      color: "#333333",
    },
    body2: {
      // fontFamily: '"Great Vibes", cursive',
      fontSize: "1.4rem",
      color: "#B38397",
    },
    button: {
      textTransform: "none",
    },
    invitation1: {
      fontFamily: '"Kapakana", cursive',
      fontSize: "1.9rem",
      fontWeight: 400,
      color: "#03311C",
    },
    invitation2: {
      fontFamily: '"Kapana", cursive',
      fontSize: "1.9rem",
      fontWeight: 400,
      color: "black",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#B38397",
          margin: "16px 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        invitation2: {
          fontFamily: '"Kapana", cursive',
          fontSize: '1.9rem',
          fontWeight: 400,
          color: 'black',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#B38397",
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme;