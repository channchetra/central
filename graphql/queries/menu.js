import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const QUERY_ALL_MENUS = gql`
  {
    menus {
      edges {
        node {
          id
          menuItems {
            edges {
              node {
                cssClasses
                id
                parentId
                label
                title
                target
                path
              }
            }
          }
          name
          slug
          locations
        }
      }
    }
  }
`;
