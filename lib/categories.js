import {
  QUERY_ALL_CATEGORIES,
  QUERY_ALL_CATEGORIES_PATH,
  QUERY_CATEGORIES_WITH_POSTS_BY_SLUGS,
  QUERY_CATEGORY_BY_SLUG,
} from 'graphql/queries/categories';
import { initializeApollo } from './apollo-client';
import { ARCHIVE_POST_PER_PAGE } from './constants';
import { mapPostData } from './posts';

/**
 * mapCategoryData
 */

export function mapCategoryData(category = {}) {
  const data = { ...category };

  if (data.posts) {
    data.posts = data.posts.edges.map(({ node = {} }) => node).map(mapPostData);
  }

  return data;
}

/**
 * getAllCategories
 */
export async function getAllCategories() {
  const apolloClient = initializeApollo();

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
  const apolloClient = initializeApollo();
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
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES_PATH,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}

/**
 * getCategoriesWithPostsBySlugs
 */
export async function getCategoriesWithPostsBySlugs(slugs = [], payload = {}) {
  const { first = ARCHIVE_POST_PER_PAGE, postImageSize = 'MEDIUM' } = payload
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: QUERY_CATEGORIES_WITH_POSTS_BY_SLUGS,
    variables: {
      slugs,
      first,
      postImageSize,
    },
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories: Array.isArray(categories) && categories.map(mapCategoryData),
  };
}
