import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import React from 'react';
import DefaultLayout from '@/components/layouts/defaultLayout';
import ReduxProvider from '@/redux/provider';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: '相場観測予想システム｜SKYS',
  description: '相場観測予想システム｜SKYS',
};

export default function RootLayout(props: RootLayoutProps) {
  const {children} = props;
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <AppRouterCacheProvider options={{key: 'css'}}>
            <DefaultLayout>{children}</DefaultLayout>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
