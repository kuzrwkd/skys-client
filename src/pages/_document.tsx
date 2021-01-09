import React, { ReactElement } from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { RenderPageResult } from 'next/dist/next-server/lib/utils'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core'

class AppDocument extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
AppDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  // Render app and page and get the context of the page with collected side effects.
  const styledComponentsSheet = new ServerStyleSheet()
  const materialUiSheets = new MaterialServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
      originalRenderPage({
        enhanceApp: (App) => (
          props
        ): React.ReactElement<{
          sheet: ServerStyleSheet
        }> =>
          styledComponentsSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />)
          ),
      })

    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {styledComponentsSheet.getStyleElement()}
          {materialUiSheets.getStyleElement()}
        </React.Fragment>,
      ],
    }
  } finally {
    styledComponentsSheet.seal()
  }
}

export default AppDocument
