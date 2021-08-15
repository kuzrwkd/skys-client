/**
 * Next
 */
import { AppProps } from 'next/app';

/**
 * Store
 */
import { wrapper } from '@/Products/Driver/Store/main';

import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  console.log('-----------------___APP', { pageProps });
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(App);
