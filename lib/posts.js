import { getApolloClient } from 'lib/apollo-client';

import { updateUserAvatar } from 'lib/users';
import { sortObjectsByDate } from 'lib/datetime';

import {
  QUERY_ALL_POSTS_INDEX,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS,
  QUERY_POST_BY_ID,
  QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
  QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  QUERY_POSTS_BY_AUTHOR_SLUG,
  QUERY_POSTS_BY_CATEGORY_ID_INDEX,
  QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POSTS_BY_CATEGORY_SLUG,
  QUERY_POSTS_BY_CATEGORY_TAG,
  QUERY_POST_PER_PAGE,
} from 'graphql/queries/posts';

/**
 * postPathBySlug
 */

export function postPathBySlug(slug) {
  return `/posts/${slug}`;
}

/**
 * mapPostData
 */

 export function mapPostData(post = {}) {
  const data = { ...post };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  if (data.author?.avatar) {
    data.author.avatar = updateUserAvatar(data.author.avatar);
  }

  // Clean up the categories to make them more easy to access

  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => node);
  }

  // Clean up the featured image to make them more easy to access

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  return data;
}

/**
 * getPostById
 */

export async function getPostById(databaseId) {
  const apolloClient = getApolloClient();
  let postData;
  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_ID,
      variables: {
        id: databaseId,
      },
    });
  } catch (e) {
    console.warn(`[posts][getPostById] Failed to query post data: ${e.message}`);
    throw e;
  }

  const post = [postData?.data.post].map(mapPostData)[0];

  return {
    post,
  };
}

/**
 * getAllPosts
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
};

export async function getAllPosts(options = {}) {
  const { queryIncludes = 'all' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByAuthorSlug
 */

const postsByAuthorSlugIncludesTypes = {
  all: QUERY_POSTS_BY_AUTHOR_SLUG,
  archive: QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE,
  index: QUERY_POSTS_BY_AUTHOR_SLUG_INDEX,
};

export async function getPostsByAuthorSlug({ slug, ...options }) {
  const { queryIncludes = 'all' } = options;

  const apolloClient = getApolloClient();

  let postData;
  try {
    postData = await apolloClient.query({
      query: postsByAuthorSlugIncludesTypes[queryIncludes],
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(`[posts][getPostsByAuthorSlug] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByCategoryId
 */

const postsByCategoryIdIncludesTypes = {
  all: QUERY_POSTS_BY_CATEGORY_ID,
  archive: QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE,
  index: QUERY_POSTS_BY_CATEGORY_ID_INDEX,
};

export async function getPostsByCategoryId({ categoryId, ...options }) {
  const { queryIncludes = 'all' } = options;

  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      query: postsByCategoryIdIncludesTypes[queryIncludes],
      variables: {
        categoryId,
      },
    });
  } catch (e) {
    console.warn(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByTagSlug
 */

export async function getPostsByTagSlug({ slug }) {
  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POSTS_BY_CATEGORY_TAG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(
      `[posts][getPostsByTagSlug] Failed to query post data: ${e.message}`
    );
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);
  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getPostsByCategorySlug
 */

export async function getPostsByCategorySlug({ slug }) {
  const apolloClient = getApolloClient();

  let postData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POSTS_BY_CATEGORY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(`[posts][getPostsByCategoryId] Failed to query post data: ${e.message}`);
    throw e;
  }

  const posts = postData?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

/**
 * getRecentPosts
 */

export async function getRecentPosts({ count, ...options }) {
  const { posts } = await getAllPosts(options);
  const sorted = sortObjectsByDate(posts);
  return {
    posts: sorted.slice(0, count),
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt) {
  if (typeof excerpt !== 'string') {
    throw new Error(`Failed to sanitize excerpt: invalid type ${typeof excerpt}`);
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, '&hellip;');

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace('....', '.');
  sanitized = sanitized.replace('.&hellip;', '.');

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, '');

  return sanitized;
}

/**
 * getRelatedPosts
 */

export async function getRelatedPosts(categories, postId, count = 5) {
  if (!Array.isArray(categories) || categories.length === 0) return null;

  let related = {
    category: categories && categories.shift(),
  };

  if (related.category) {
    const { posts } = await getPostsByCategoryId({
      categoryId: related.category.databaseId,
      queryIncludes: 'archive',
    });

    const filtered = posts.filter(({ postId: id }) => id !== postId);
    const sorted = sortObjectsByDate(filtered);

    related.posts = sorted.map((post) => ({ title: post.title, slug: post.slug }));
  }

  if (!Array.isArray(related.posts) || related.posts.length === 0) {
    const relatedPosts = await getRelatedPosts(categories, postId, count);
    related = relatedPosts || related;
  }

  if (Array.isArray(related.posts) && related.posts.length > count) {
    return related.posts.slice(0, count);
  }

  return related;
}

/**
 * sortStickyPosts
 */

export function sortStickyPosts(posts) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

/**
 * getPostsPerPage
 */

export async function getPostsPerPage() {
  // If POST_PER_PAGE is defined at next.config.js
  if (process.env.POSTS_PER_PAGE) {
    console.warn(
      'You are using the deprecated POST_PER_PAGE variable. Use your WordPress instance instead to set this value ("Settings" > "Reading" > "Blog pages show at most").'
    );
    return Number(process.env.POSTS_PER_PAGE);
  }

  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_POST_PER_PAGE,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.warn(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}

/**
 * getPageCount
 */

export async function getPagesCount(posts, postsPerPage) {
  const perPage = postsPerPage ?? (await getPostsPerPage());
  return Math.ceil(posts.length / perPage);
}

/**
 * getPaginatedPosts
 */

export async function getPaginatedPosts({ currentPage = 1, ...options } = {}) {
  const { posts } = await getAllPosts(options);
  console.warn(posts);
  const postsPerPage = await getPostsPerPage();
  const pagesCount = await getPagesCount(posts, postsPerPage);
  let page = Number(currentPage);
  if (typeof page === 'undefined' || Number.isNaN(page) || page > pagesCount) {
    page = 1;
  }
  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
  };
}