import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from '@/interfaces/presenters/redux/store'
import CssBaseline from '@material-ui/core/CssBaseline'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default wrapper.withRedux(App)
