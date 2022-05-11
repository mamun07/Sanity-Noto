import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '60px',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '40px',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: 'rgb(255 255 255)',
      dark: 'rgb(66 66 66)',
      light: '#343434',
      light2: '#ededed',
    },
    secondary: {
      main: 'rgb(255 129 0)',
      dark: 'rgb(205 104 0)',
      light: 'rgb(255 167 77)',
    },
  },
});

export default theme;
