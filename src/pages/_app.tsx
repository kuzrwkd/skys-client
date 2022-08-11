import 'tailwindcss/tailwind.css';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { wrapper } from '@/context';
import { appContext, useAppContext } from '@/context/appContext';
import DefaultLayout from '@/layout/default';
import createEmotionCache from '@/util/createEmotionCache';
import { theme } from '@/util/muiTheme';

interface AppWithEmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FC<AppWithEmotionCacheProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
  const { route } = useSelector(useAppContext());
  const dispatch = useDispatch();

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

  React.useEffect(() => {
    dispatch(appContext.actions.setRoute(router.pathname));
  }, [dispatch, router.pathname]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>相場観測予想システム｜SKYS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={pageProps.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {route ? switchLayout(pageProps.layout) : null}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
