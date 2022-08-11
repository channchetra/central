import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

import { removeLastTrailingSlash } from 'lib/util';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge'
import { useMemo } from 'react';

// const API_URL = process.env.WORDPRESS_API_URL;
const API_URL = 'https://ams.com.kh/central';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

/**
 * createApolloClient
 */

function createApolloClient() {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(['where'])
        }
      },
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

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  const newPageProps = pageProps;
  if (pageProps?.props) {
    newPageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return newPageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
