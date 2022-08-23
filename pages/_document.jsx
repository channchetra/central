import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            async
            defer
            data-website-id="817a094a-7bea-4c3d-8eab-12a57a932937"
            src="https://status.amskh.co/umami.js"
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
