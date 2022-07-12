import { gql } from '@apollo/client';
import { ARCHIVE_POST_PER_PAGE, PER_PAGE } from '~/lib/constants';
import { ARCHIVE_POST_FIELDS } from './posts';

export const QUERY_ALL_USERS_PATH = gql`
  query UsersPath{
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
  query Users{
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

export const QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG = gql`
  ${ARCHIVE_POST_FIELDS}
  query UserWithPaginatedPostsBySlug(
    $slug: ID!
    $first: Int! = ${ARCHIVE_POST_PER_PAGE}
    $after: String
    $postImageSize: MediaItemSizeEnum! = MEDIUM
  ) {
    user(
      id: $slug, idType: SLUG
    ) {
      databaseId
      description
      id
      name
      slug
      avatar {
        height
        width
        url
      }
      posts(
        first: $first
        after: $after
      ) {
        edges {
          node {
            ...ArchivePostFields
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
      seo {
        fullHead
      }
    }
  }
`;
