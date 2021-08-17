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
 * Components
 */
import DefaultLayout from '@/Products/Driver/UI/Components/Layout/default.layout';

/**
 * Application Component
 * @param Component
 * @param pageProps
 * @constructor
 */
const App = ({ Component, pageProps }: AppProps) => {
  console.log('-----------------___APP', { pageProps });
  switch (pageProps.layout) {
    case 'auth': {
      return <p>準備中</p>;
    }
    default: {
      return (
        <DefaultLayout title={pageProps.title} description={pageProps.description}>
          <Component {...pageProps} />
        </DefaultLayout>
      );
    }
  }
};

export default wrapper.withRedux(App);
