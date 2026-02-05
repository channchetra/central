import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://statistic.amskh.co/script.js"
            data-website-id="128049ce-f57b-4cbb-92a1-737e187bfa12"
          />
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-J7EDZT7KLK"
          />
          <Script id="gtag" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments);
                }
              gtag('js', new Date());

              gtag('config', 'G-J7EDZT7KLK');
            `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
