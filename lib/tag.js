import { QUERY_ALL_TAGS_SLUG, QUERY_TAG_BY_SLUG } from 'graphql/queries/tag';
import { initializeApollo } from './apollo-client';

/**
 * getAllTagsSlug
 */

export async function getAllTagsSlug() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: QUERY_ALL_TAGS_SLUG,
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
  const apolloClient = initializeApollo();
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
