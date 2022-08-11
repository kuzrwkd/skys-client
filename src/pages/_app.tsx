import 'tailwindcss/tailwind.css';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';

import DefaultLayout from '@/layout/default';
import { wrapper } from '@/store';
import createEmotionCache from '@/util/createEmotionCache';
import { theme } from '@/util/muiTheme';

interface AppWithEmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = (props: AppWithEmotionCacheProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  switch (pageProps.layout) {
    case 'auth': {
      return <p>準備中</p>;
    }
    default: {
      return (
        <>
          <CacheProvider value={emotionCache}>
            <Head>
              <title>相場観測予想システム｜SKYS</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
              <meta name="description" content={pageProps.description} />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </ThemeProvider>
          </CacheProvider>
        </>
      );
    }
  }
};

export default wrapper.withRedux(App);
