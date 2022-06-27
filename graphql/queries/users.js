import { gql } from '@apollo/client';
import { PER_PAGE } from '~/lib/constants';

export const QUERY_ALL_USERS_PATH = gql`
  {
    users(first: ${PER_PAGE}) {
      edges {
        node {
          uri
        }
      }
    }
  }
`;

export const QUERY_ALL_USERS_SLUG = gql`
  {
    users(first: ${PER_PAGE}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users(first: ${PER_PAGE}) {
      edges {
        node {
          avatar {
            height
            width
            url
          }
          description
          id
          name
          roles {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;

export const QUERY_USER_BY_SLUG = gql`
  query UserBySlug($slug: ID!) {
    user(id: $slug, idType: SLUG) {
      avatar {
        height
        width
        url
      }
      description
      id
      userId
      name
      slug
    }
  }
`;

export const QUERY_ALL_USERS_SEO = gql`
  {
    users(first: ${PER_PAGE}) {
      edges {
        node {
          id
          seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            social {
              youTube
              wikipedia
              twitter
              soundCloud
              pinterest
              mySpace
              linkedIn
              instagram
              facebook
            }
          }
        }
      }
    }
  }
`;