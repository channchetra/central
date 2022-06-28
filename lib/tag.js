import { getApolloClient } from 'lib/apollo-client';

import QUERY_ALL_TAGS, { QUERY_TAG_BY_SLUG } from 'graphql/queries/tag';

/**
 * getAllTagsSlug
 */

export async function getAllTagsSlug() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_TAGS,
  });

  const tags = data?.data.tags.edges.map(({ node = {} }) => node);
  return {
    tags,
  };
}

/**
 * getTagBySlug
 */

export async function getTagBySlug(slug) {
  const apolloClient = getApolloClient();
  let tagData = {};

  try {
    tagData = await apolloClient.query({
      query: QUERY_TAG_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(
      `[users][getTagBySlug] Failed to query tag data: ${e.message}`
    );
    throw e;
  }

  return tagData?.data?.tag || {};
}