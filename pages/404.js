import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

// pages/404.js
export default function NotFound404() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component={'h2'} variant="h2">
          404 - Page Not Found
        </Typography>
      </Box>
    </Container>
  );
}
