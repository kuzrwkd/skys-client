/**
 * Next
 */
import { AppProps } from 'next/app';

/**
 * Store
 */
import { wrapper } from '@/Products/Driver/Store/main';

/**
 * Lib
 */
import 'tailwindcss/tailwind.css';

/**
 * Application Component
 * @param Component
 * @param pageProps
 * @constructor
 */
const App = ({ Component, pageProps }: AppProps) => {
  console.log('-----------------___APP', { pageProps });
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
