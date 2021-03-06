import parameterize from 'parameterize';

import {
  QUERY_ALL_USERS,
  QUERY_ALL_USERS_PATH,
  QUERY_ALL_USERS_SEO,
  QUERY_ALL_USERS_SLUG,
  QUERY_USER_BY_SLUG,
} from 'graphql/queries/users';
import { initializeApollo } from './apollo-client';

// const ROLES_AUTHOR = ['author', 'administrator'];

/**
 * postPathBySlug
 */

export function authorPathBySlug(slug) {
  return `/authors/${slug}`;
}

/**
 * updateUserAvatar
 */

export function updateUserAvatar(avatar) {
  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  return {
    ...avatar,
    url: avatar.url?.replace('http://', 'https://'),
  };
}

/**
 * mapUserData
 */

export function mapUserData(user) {
  return {
    ...user,
    roles: [...user.roles.nodes],
    avatar: user.avatar && updateUserAvatar(user.avatar),
  };
}

/**
 * getAllUsers
 */

export async function getAllUsers() {
  const apolloClient = initializeApollo();

  let usersData;
  let seoData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS,
    });
  } catch (e) {
    console.warn(
      `[users][getAllUsers] Failed to query users data: ${e.message}`
    );
    throw e;
  }

  let users = usersData?.data.users.edges
    .map(({ node = {} }) => node)
    .map(mapUserData);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_ALL_USERS_SEO,
      });
    } catch (e) {
      console.warn(
        `[users][getAllUsers] Failed to query SEO plugin: ${e.message}`
      );
      console.warn(
        'Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.'
      );
      throw e;
    }

    users = users.map((user) => {
      const data = { ...user };
      const { id } = data;

      const seo = seoData?.data?.users.edges
        .map(({ node = {} }) => node)
        .find((node) => node.id === id)?.seo;

      return {
        ...data,
        title: seo.title,
        description: seo.metaDesc,
        robots: {
          nofollow: seo.metaRobotsNofollow,
          noindex: seo.metaRobotsNoindex,
        },
        social: seo.social,
      };
    });
  }

  return {
    users,
  };
}

/**
 * getAllUsersPath
 */

export async function getAllUsersPath() {
  const apolloClient = initializeApollo();

  let usersData;

  try {
    usersData = await apolloClient.query({
      query: QUERY_ALL_USERS_PATH,
    });
  } catch (e) {
    console.warn(
      `[users][getAllUsers] Failed to query users data: ${e.message}`
    );
    throw e;
  }
  const users = usersData?.data.users.edges.map(({ node = {} }) => node);

  return {
    users,
  };
}

/**
 * getAllUsersSlug
 */
export async function getAllUsersSlug() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: QUERY_ALL_USERS_SLUG,
  });

  const users = data?.data.users.edges.map(({ node = {} }) => node);

  return {
    users,
  };
}

/**
 * getUserBySlug
 */

export async function getUserBySlug(slug) {
  const apolloClient = initializeApollo();
  let authorData = {};

  try {
    authorData = await apolloClient.query({
      query: QUERY_USER_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.warn(
      `[users][getUserBySlug] Failed to query user data: ${e.message}`
    );
    throw e;
  }

  return authorData?.data?.user || {};
}

/**
 * authorPathByName
 */

export function authorPathByName(name) {
  return `/authors/${parameterize(name)}`;
}

/**
 * getUserByNameSlug
 */

export async function getUserByNameSlug(name) {
  const { users } = await getAllUsers();

  const user = users.find((u) => parameterize(u.name) === name);

  return {
    user,
  };
}

/**
 * userSlugByName
 */

export function userSlugByName(name) {
  return parameterize(name);
}

/**
 * getAllAuthors
 */

export async function getAllAuthors() {
  const { users } = await getAllUsers();

  // TODO: Roles aren't showing in response - we should be filtering here

  // const authors = users.filter(({ roles }) => {
  //   const userRoles = roles.map(({ name }) => name);
  //   const authorRoles = userRoles.filter(role => ROLES_AUTHOR.includes(role));
  //   return authorRoles.length > 0;
  // });

  return {
    authors: users,
  };
}
