import { getApolloClient } from 'lib/apollo-client';

import {
  QUERY_ALL_CATEGORIES,
  QUERY_ALL_CATEGORIES_PATH,
  QUERY_CATEGORY_BY_SLUG,
} from 'graphql/queries/categories';

/**
 * getAllCategories
 */
export async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}

/**
 * getCategoryBySlug
 */
export async function getCategoryBySlug(slug) {
  const apolloClient = getApolloClient();
  let categoryData = {};

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(
      `[categories][getCategoryBySlug] Failed to query category data: ${e.message}`
    );
    throw e;
  }

  return categoryData?.data?.category || {};
}

/**
 * getAllCategoriesPath
 */
export async function getAllCategoriesPath() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES_PATH,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}
