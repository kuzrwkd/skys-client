import {SBUColorSchemeScript, SBUProvider} from '@skys-client/skys-base-ui';
import React from 'react';
import DefaultLayout from '@/components/layouts/Default';
import ReduxProvider from '@/redux/provider';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: '相場観測予想システム｜SKYS',
  description: '相場観測予想システム｜SKYS',
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <SBUColorSchemeScript />
      </head>
      <body>
        <ReduxProvider>
          <SBUProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </SBUProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
