import Head from 'next/head';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Noto</title>
        <meta
          name="description"
          content="The ecommerce website create by nextJS and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="xl">
        <Typography component={'h2'} variant="h2">
          Sanity noto home page
        </Typography>
      </Container>
    </div>
  );
}
