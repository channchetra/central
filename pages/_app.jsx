import Layout from '~/components/layout/layout';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from '~/components/common/theme-switcher';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '~/lib/apollo-client';

function MyApp({ Component, pageProps }) {
  const { meta } = pageProps || {};

  return (
    <ApolloProvider client={getApolloClient()}>
      <ThemeProvider attribute="class">
        <Layout meta={meta}>
          <Component {...pageProps} />
        </Layout>
        <ThemeSwitcher />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
