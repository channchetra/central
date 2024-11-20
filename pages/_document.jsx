import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            strategy="afterInteractive"
            src="https://analytic.cloud.sovichetra.com/script.js"
            data-website-id="b1e5ed14-aa5d-4f63-ab38-b0023cd61af5"
          />
        </body>
      </Html>
    );
  }
}
