import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box>
      <Box>
        <Container maxWidth="xl">
          <Grid spacing={2} container>
            <Grid item xl={4}>
              <Typography variant="h6">QUICK LINK</Typography>
              <Typography variant="p">Left</Typography>
            </Grid>
            <Grid item xl={4}>
              <Typography variant="h6">CATEGORYS</Typography>
              <Typography variant="p">Center</Typography>
            </Grid>
            <Grid item xl={4}>
              <Typography variant="h6">STAY CONNECT</Typography>
              <Typography variant="p">Right</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl">
          <Typography variant="p">
            &copy; 2022 Sanity Noto, all rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
