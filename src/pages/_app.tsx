import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import DefaultLayout from '@/layout/default';
import { wrapper } from '@/store';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  switch (pageProps.layout) {
    case 'auth': {
      return <p>準備中</p>;
    }
    default: {
      return (
        <>
          <Head>
            <title>{`${pageProps.title} | SKYS`}</title>
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
