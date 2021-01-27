import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <meta name="title" content="AluraQuiz"/>
          <meta name="description" content="A simple quiz app developed during the Imersão Alura using styled-components and powered by Next.js and hosted on ▲Vercel."/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://aluraquiz-imersao-react-v2.todomir.vercel.app/"/>
          <meta property="og:title" content="AluraQuiz"/>
          <meta property="og:description" content="A simple quiz app developed during the Imersão Alura using styled-components and powered by Next.js and hosted on ▲Vercel."/>
          <meta property="og:image" content=""/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://aluraquiz-imersao-react-v2.todomir.vercel.app/"/>
          <meta property="twitter:title" content="AluraQuiz"/>
          <meta property="twitter:description" content="A simple quiz app developed during the Imersão Alura using styled-components and powered by Next.js and hosted on ▲Vercel."/>
          <meta property="twitter:image" content=""/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
