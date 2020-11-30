import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta property="og:type" content="website" />
          <meta
            name="og:title"
            property="og:title"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            name="og:description"
            property="og:description"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            property="og:site_name"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            property="og:url"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            name="twitter:description"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            name="twitter:site"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            name="twitter:creator"
            content="Developer Student Clubs VIT Bhopal"
          />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content="Developer Student Clubs VIT Bhopal"
          />
          <meta
            name="twitter:image"
            content="Developer Student Clubs VIT Bhopal"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
