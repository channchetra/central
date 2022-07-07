import Layout from '~/components/layout/layout';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import ThemeSwitcher from '~/components/common/theme-switcher';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '~/lib/apollo-client';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <div className="hidden sm:inline">
          <ThemeSwitcher />
        </div>
        <NextNProgress color="#cf0a10" options={{ showSpinner: false }} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
