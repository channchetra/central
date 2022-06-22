import { fetchAPI } from './api';

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      databaseId
      title
      excerpt
      slug
      date
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query GetPost($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: Number(slug)
      },
    }
  )
  
  return data?.post
}

export async function getPosts(first, after) {
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      databaseId
      title
      excerpt
      slug
      date
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query GetPosts($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        edges {
          node {
            ...PostFields
            content
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
    {
      variables: {
        first,
        after
      },
    }
  )
  
  return data?.posts
}

export async function getPageInfo() {
  const data = await fetchAPI(
    `
    query GetPageInfo {
      posts(first: 100) {
        edges {
          node {
            databaseId
          }
        }
      }
    }
  `
  )
  
  return data?.posts
}
