import React from 'react';
import { AppBar, Container, Link, Box, TextField } from '@mui/material';
import NextLink from 'next/link';
import classes from '../../utils/classes';
import Image from 'next/image';
import CartIcon from '@mui/icons-material/ShoppingBasketOutlined';
import UserIcon from '@mui/icons-material/VerifiedUserOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'primary.light2',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={classes.toolbar}>
          <Box sx={classes.logo}>
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
          </Box>
          <Box sx={classes.headerSearch}>
            <SearchIcon />
            <input type="text" placeholder="search here..." />
          </Box>
          <Box sx={classes.headerNavbar}>
            <ul>
              <li>
                <NextLink href={'/login'} passHref>
                  <Link>
                    <UserIcon />
                  </Link>
                </NextLink>
              </li>
              <li>
                <NextLink href={'/cart'} passHref>
                  <Link>
                    <CartIcon />
                  </Link>
                </NextLink>
              </li>
            </ul>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
