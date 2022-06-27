import { gql } from '@apollo/client';
import { PER_PAGE } from '~/lib/constants';

const QUERY_ALL_TAGS = gql`
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

export default QUERY_ALL_TAGS;
