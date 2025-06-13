import { gql } from '@apollo/client';
import { ARCHIVE_POST_FIELDS } from './posts';

export const QUERY_ALL_PODCASTS = gql`
  query Podcasts {
    podcasts(first: 300) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_ALL_PODCASTS_SLUG = gql`
  {
    podcasts(first: 300) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const QUERY_PODCAST_BY_SLUG = gql`
  query TagBySlug($slug: ID!) {
    podcast(id: $slug, idType: SLUG) {
      id
      name
      slug
    }
  }
`;

export const QUERY_PODCAST_WITH_PAGINATED_POSTS_BY_SLUG = gql`
  ${ARCHIVE_POST_FIELDS}
  query PodcastWithPaginatedPostsBySlug(
    $slug: ID!
    $first: Int! = 300
    $after: String
  ) {
    podcast(id: $slug, idType: SLUG) {
      id
      name
      slug
      posts(first: $first, after: $after) {
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
