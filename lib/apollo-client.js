import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

import { removeLastTrailingSlash } from 'lib/util';

// const API_URL = process.env.WORDPRESS_API_URL;
const API_URL = 'https://ams.com.kh/central';

let client;

/**
 * createApolloClient
 */

export function createApolloClient() {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache({
    typePolicies: {
      Category: {
        fields: {
          posts: relayStylePagination(),
        },
      },
      User: {
        fields: {
          posts: relayStylePagination(),
        },
      },
      Tag: {
        fields: {
          posts: relayStylePagination(),
        },
      },
    },
  });
  return new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri: removeLastTrailingSlash(`${API_URL}/graphql`),
    }),
    cache,
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
