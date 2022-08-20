import Head from 'next/head';
import { CMS_NAME } from '~/lib/constants';

export default function Meta() {
  return (
    <Head>
      <title>{CMS_NAME}</title>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/central/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/central/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/central/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/central/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/central/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/central/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/central/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/central/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/central/favicon/apple-icon-180x180.png"
      />
      <link
        // eslint-disable-next-line react/no-invalid-html-attribute
        rel="android-chrome"
        sizes="192x192"
        href="/central/favicon/android-chrome-192x192.png"
      />
      <link
        // eslint-disable-next-line react/no-invalid-html-attribute
        rel="android-chrome"
        sizes="512x512"
        href="/central/favicon/android-chrome-512x512.png"
      />
      <link
        rel="mask-icon"
        href="/central/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/central/favicon/central/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="color-scheme" content="dark light" />
    </Head>
  );
}
