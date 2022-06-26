import Document, { Html, Head, Main, NextScript } from 'next/document';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-zinc-700">
          <Main />
          <NextScript />
          <button className="fixed bottom-16 right-20 bg-slate-100 dark:bg-zinc-600 p-4 rounded-full">
            <MoonIcon className="h-5 w-5 text-dark dark:text-ams-light" />
            <SunIcon className="h-5 w-5 dark:text-dark text-ams-light" />
          </button>
        </body>
      </Html>
    );
  }
}
