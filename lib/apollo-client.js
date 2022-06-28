import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { removeLastTrailingSlash } from 'lib/util';

// const API_URL = process.env.WORDPRESS_API_URL;
const API_URL = 'https://ams.com.kh/central';

let client;

/**
 * createApolloClient
 */

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(`${API_URL}/graphql`),
    }),
    cache: new InMemoryCache(),
  });
}
/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = createApolloClient();
  }
  return client;
}
