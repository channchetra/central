import { getApolloClient } from 'lib/apollo-client';

import QUERY_ALL_TAGS from 'graphql/queries/tag';

/**
 * getAllTagsSlug
 */

async function getAllTagsSlug() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_TAGS,
  });

  const tags = data?.data.tags.edges.map(({ node = {} }) => node);
  return {
    tags,
  };
}

export default getAllTagsSlug