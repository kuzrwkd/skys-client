/**
 * Store
 */
import { wrapper } from '@/Products/Driver/Store/main';

const App = ({ Component, pageProps }: Next.AppProps) => {
  console.log('-----------------___APP', { pageProps });
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(App);
