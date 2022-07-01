import { gql } from '@apollo/client';
import { PER_PAGE, ARCHIVE_POST_PER_PAGE } from '~/lib/constants';
import { ARCHIVE_POST_FIELDS } from './posts';

export const QUERY_ALL_CATEGORIES = gql`
  query Categories {
    categories(first: ${PER_PAGE}) {
      edges {
        node {
          slug
          uri
          databaseId
          description
          id
          name
        }
      }
    }
  }
`;

export const QUERY_ALL_CATEGORIES_PATH = gql`
  {
    categories(first: ${PER_PAGE}) {
      edges {
        node {
          uri
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_BY_SLUG = gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
      uri
    }
  }
`;

export const QUERY_CATEGORY_SEO_BY_SLUG = gql`
  query CategorySEOBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG = gql`
  ${ARCHIVE_POST_FIELDS}
  query CategoryWithPaginatedPostsBySlug(
    $slug: ID!
    $first: Int! = ${ARCHIVE_POST_PER_PAGE}
    $after: String
  ) {
    category(
      id: $slug, idType: SLUG
    ) {
      databaseId
      description
      id
      name
      slug
      posts(
        first: $first
        after: $after
        where: { orderby: { field: DATE, order: DESC } }
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
    }
  }
`;

export const QUERY_CATEGORIES_WITH_PAGINATED_POSTS_BY_SLUGS = gql`
  ${ARCHIVE_POST_FIELDS}
  query CategoryWithPaginatedPostsBySlug(
    $slugs: [String]!
    $first: Int! = ${ARCHIVE_POST_PER_PAGE}
    $after: String
  ) {
    categories(
      where: { slug: $slugs }
    ) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
          posts(
            first: $first
            after: $after
            where: { orderby: { field: DATE, order: DESC } }
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
        }
      }
    }
  }
`;
