import React from 'react';
import ThemeRegistry from '@/app/ThemeRegistry/ThemeRegistry';
import DefaultLayout from '@/layouts/default';
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
        <ThemeRegistry options={{key: 'mui'}}>
          <ReduxProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </ReduxProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
