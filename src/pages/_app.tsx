import 'tailwindcss/tailwind.css';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LicenseInfo } from '@mui/x-license-pro';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultLayout from '@/components/defaultLayout';
import { wrapper } from '@/redux';
import { appReducer, selectAppReducer } from '@/redux/appReducer';
import createEmotionCache from '@/util/createEmotionCache';
import { theme } from '@/util/muiTheme';

LicenseInfo.setLicenseKey(process.env.LICENSE_KEY || '');

interface AppWithEmotionCacheProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: {
    layout: string;
  };
}

const clientSideEmotionCache = createEmotionCache();

const App: React.FC<AppWithEmotionCacheProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
  const { route } = useSelector(selectAppReducer());
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
    dispatch(appReducer.actions.setRoute(router.pathname));
  }, [dispatch, router.pathname]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>相場観測予想システム｜SKYS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="相場観測予想システム｜SKYS" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {route ? switchLayout(pageProps.layout) : null}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
