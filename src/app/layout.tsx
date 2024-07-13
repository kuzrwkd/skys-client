import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './layout.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import React from 'react';
import ReduxProvider from '@/redux/provider';
import DefaultLayout from 'src/components/layouts/Default';

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
          <MantineProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
