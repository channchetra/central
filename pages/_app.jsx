import Layout from '~/components/layout/layout';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from '~/components/common/theme-switcher';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '~/lib/apollo-client';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const { meta } = pageProps || {};
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        <Layout meta={meta}>
          <Component {...pageProps} />
        </Layout>
        <ThemeSwitcher />
        <NextNProgress color="#cf0a10" />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
