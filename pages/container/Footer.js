import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import classes from '../../utils/classes';

const Footer = () => {
  return (
    <Box sx={classes.footer}>
      <Container maxWidth="xl">
        <Typography component={'p'} variant="p" color={'primary.light2'}>
          @ 2022 Sanity Noto
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
