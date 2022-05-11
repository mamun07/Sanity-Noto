import React from 'react';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../utils/theme';
import Head from 'next/head';

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Sanity Noto` : 'Sanity Noto'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
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
