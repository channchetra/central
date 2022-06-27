import { gql } from '@apollo/client';

const QUERY_ALL_TAGS = gql`
  {
    tags(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
          uri
        }
      }
    }
  }
`;

export default QUERY_ALL_TAGS