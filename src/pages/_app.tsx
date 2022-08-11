import 'tailwindcss/tailwind.css';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useDispatch } from 'react-redux';

import DefaultLayout from '@/layout/default';
import { wrapper } from '@/store';
import { appContextSlice } from '@/store/appContextSlice';
import createEmotionCache from '@/util/createEmotionCache';
import { theme } from '@/util/muiTheme';

interface AppWithEmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FC<AppWithEmotionCacheProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
  const dispatch = useDispatch();

  dispatch(appContextSlice.actions.set({ route: router.pathname }));

  const switchLayout = (layout: string) => {
    switch (layout) {
      case 'auth': {
        return <p>準備中</p>;
      }
      default: {
        return (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        );
      }
    }
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>相場観測予想システム｜SKYS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={pageProps.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {switchLayout(pageProps.layout)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
