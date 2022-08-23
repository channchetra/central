import { gql } from '@apollo/client';
import { PER_PAGE } from '~/lib/constants';

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
    postFormats {
      edges {
        node {
          name
          postFormatId
          slug
        }
      }
    }
  }
`;

export const ARCHIVE_POST_FIELDS = gql`
  fragment ArchivePostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
          uri
        }
      }
    }
    databaseId
    date
    slug
    title
    author {
      node {
        avatar {
          height
          url
          width
        }
        id
        name
        slug
      }
    }
    excerpt
    featuredImage {
      node {
        mediaDetails {
          sizes {
            sourceUrl
            name
          }
        }
        sourceUrl
      }
    }
    postFormats {
      edges {
        node {
          name
          postFormatId
          slug
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: ${PER_PAGE}, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: ${PER_PAGE}, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
              firstName
              lastName
            }
          }
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: ${PER_PAGE}, where: { orderby: { field: DATE, order: DESC }, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
              firstName
              lastName
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_SLUG = gql`
  query AllPostsSlug {
    posts(first: ${PER_PAGE}, where: { orderby: { field: DATE, order: DESC }, hasPassword: false }) {
      edges {
        node {
          slug
          databaseId
        }
      }
    }
  }
`;

export const QUERY_POST_BY_ID = gql`
  query PostBySlug($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      id
      content
      date
      excerpt
      modified
      databaseId
      title
      slug
      videoLink
      isSticky
      featuredImage {
        node {
          mediaDetails {
            sizes {
              sourceUrl
              name
            }
          }
          sourceUrl
        }
      }
      postFormats {
        edges {
          node {
            name
            postFormatId
            slug
          }
        }
      }
      previous {
        databaseId
        title
        uri
      }
      next {
        databaseId
        title
        uri
      }
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
            uri
          }
        }
      }
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
          firstName
          lastName
        }
      }
      seo {
        fullHead
      }
    }
  }
`;

export const QUERY_POSTS_FOR_HOME = gql`
  query PostsHomePage ($categoryName: String, $first: Int) {
    posts(where: {categoryName: $categoryName, orderby: {field: DATE, order: DESC}, hasPassword: false}, first: $first) {
      edges {
        node {
          id
          date
          databaseId
          title
          author {
            node {
              firstName
              lastName
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_POSTS_QUICK_SEARCH = gql`
  query QuickSearch($first: Int = 20, $search: String = "") {
    posts(
      where: {search: $search, hasPassword: false}
      first: $first
    ) {
      edges {
        node {
          title
          id
          databaseId
        }   
      }
    }
  }
`;

export const QUERY_POSTS_SEARCH = gql`
  query SearchQuery(
    $first: Int = 20
    $search: String = ""
    $after: String = ""
  ) {
    posts(
      where: { search: $search, hasPassword: false }
      first: $first
      after: $after
    ) {
      edges {
        node {
          title
          id
          databaseId
          date
          isSticky
          slug
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
              firstName
              lastName
            }
          }
          excerpt
          featuredImage {
            node {
              id
              sourceUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  name
                }
              }
            }
          }
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
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

/**
 * POSTS RELATED TO CATEGORY
 */
export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(
      first: ${PER_PAGE}
      where: { categoryId: $categoryId, hasPassword: false }
    ) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_SLUG = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($slug: String!) {
    posts(
      first: ${PER_PAGE}
      where: { categoryName: $slug, hasPassword: false }
    ) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

/**
 * ==========================
 */

/**
 * POSTS RELATED TO AUTHOR
 */
export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(first: ${PER_PAGE}, where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
              firstName
              lastName
            }
          }
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

/**
 * ==========================
 */


/**
 * POSTS RELATED TO TAG
 */

export const QUERY_POSTS_BY_TAG_SLUG = gql`
  ${POST_FIELDS}
  query PostsByTagSlug($slug: String!) {
    posts(
      first: ${PER_PAGE}
      where: { tag: $slug, hasPassword: false }
    ) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

/**
 * ==========================
 */