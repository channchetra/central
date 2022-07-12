import { gql } from '@apollo/client';
import { ARCHIVE_POST_PER_PAGE, PER_PAGE } from '~/lib/constants';
import { ARCHIVE_POST_FIELDS } from './posts';

export const QUERY_ALL_TAGS = gql`
  query Tags {
    tags(first: ${PER_PAGE}) {
      edges {
        node {
          id
          tagId
          name
          slug
          description
        }
      }
    }
  }
`;

export const QUERY_ALL_TAGS_SLUG = gql`
  {
    tags(first: ${PER_PAGE}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const QUERY_TAG_BY_SLUG = gql`
  query TagBySlug($slug: ID!) {
    tag(id: $slug, idType: SLUG) {
      id
      tagId
      name
      slug
      description
    }
  }
`;

export const QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG = gql`
  ${ARCHIVE_POST_FIELDS}
  query TagWithPaginatedPostsBySlug(
    $slug: ID!
    $first: Int! = ${ARCHIVE_POST_PER_PAGE}
    $after: String
    $postImageSize: MediaItemSizeEnum! = MEDIUM
  ) {
    tag(
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
