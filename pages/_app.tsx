import '@/src/assets/styles/main.css';
import Layout from '@/src/components/layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Ihsan Nurul Habib</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
