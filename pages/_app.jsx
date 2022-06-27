import Layout from '~/components/layout/layout';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from '~/components/common/theme-switcher';

function MyApp({ Component, pageProps }) {
  const { meta } = pageProps || {};

  return (
    <ThemeProvider attribute="class">
      <Layout meta={meta}>
        <Component {...pageProps} />
      </Layout>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default MyApp;
