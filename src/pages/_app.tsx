import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import DefaultLayout from '@/layout/default';
import { wrapper } from '@/store';

const App = ({ Component, pageProps }: AppProps) => {
  console.log('-----------------___APP', { pageProps });
  switch (pageProps.layout) {
    case 'auth': {
      return <p>準備中</p>;
    }
    default: {
      return (
        <>
          <Head>
            <title>{pageProps.title}&nbsp;|&nbsp;Create Next App</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name="description" content={pageProps.description} />
          </Head>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </>
      );
    }
  }
};

export default wrapper.withRedux(App);
