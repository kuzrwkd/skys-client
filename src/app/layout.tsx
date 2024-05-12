import '@mantine/core/styles.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import React from 'react';
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
        <ColorSchemeScript />
      </head>
      <body>
        <ReduxProvider>
          <MantineProvider>{children}</MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
