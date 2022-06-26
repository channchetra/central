import { getApolloClient } from 'lib/apollo-client';

import { QUERY_ALL_CATEGORIES } from 'graphql/queries/categories';

/**
 * getAllCategories
 */

async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}

export default getAllCategories