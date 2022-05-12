import React from 'react';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../utils/theme';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
