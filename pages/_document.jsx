import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-zinc-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
