import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '30px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 300,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#3A3A3A',
      dark: '#2D2D2D',
      light: '#DFDBDB',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffffff',
      dark: '#E28C00',
      light: '#FDB95F',
      contrastText: '#fff',
    },
  },
});

export default theme;
