import Head from 'next/head';
import { Typography } from '@mui/material';

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

      <main>
        <Typography variant="h2" component="h2">
          Welcome to Sanity Noto
        </Typography>
      </main>
    </div>
  );
}
