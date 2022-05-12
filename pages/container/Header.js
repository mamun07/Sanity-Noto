import React from 'react';
import { AppBar, Container, Link, Box, Typography, Grid } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import CartIcon from '@mui/icons-material/ShoppingBasketOutlined';

import classes from '../../utils/styles';

const Header = () => {
  return (
    <AppBar position="sticky" sx={classes.headermain}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={2} sx={classes.headerlogo}>
            <NextLink href={'/'} passHref>
              <Link>
                <Image
                  src="/logo.svg"
                  alt="sanity noto logo"
                  width={'130px'}
                  height={'80px'}
                />
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={8} sx={classes.headerCenter}>
            <Typography variant="h6">Search</Typography>
          </Grid>
          <Grid item xs={2} sx={classes.headerRight}>
            <NextLink href={'/cart'} passHref>
              <Link>
                <CartIcon />
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
