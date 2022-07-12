import { mapPostData } from '~/lib/posts';
import { getAllUsersSlug } from '~/lib/users';
import { useQuery } from '@apollo/client';
import TemplateArchiveAuthor from '~/templates/archive-author';
import { QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/users';
import { addApolloState, initializeApollo } from '~/lib/apollo-client';
import { useRouter } from 'next/router';

export default function ArchiveAuthorPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <TemplateArchiveAuthor isFallback={router.isFallback} />;
  }

  const { loading, data, fetchMore } = useQuery(
    QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
        postImageSize: 'MEDIUM_LARGE',
      },
    }
  );
  const author = data?.user || {};
  const postData = {
    posts:
      data?.user?.posts?.edges.map(({ node = {} }) => node).map(mapPostData) ||
      [],
    pageInfo: data?.user?.posts?.pageInfo || {},
  };

  const loadMore = () =>
    fetchMore({
      variables: {
        slug,
        after: postData.pageInfo.endCursor,
        first: 18,
      },
      notifyOnNetworkStatusChange: true,
    });

  return (
    <TemplateArchiveAuthor
      author={author}
      posts={postData.posts}
      hasMore={postData.pageInfo.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { slug } = params;

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG,
    variables: {
      slug,
      postImageSize: 'MEDIUM_LARGE',
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 10,
    notFound: !data?.user,
  });
}

export async function getStaticPaths() {
  const { users } = await getAllUsersSlug();
  const paths = users.map(({ slug }) => `/author/${slug}`);

  return {
    paths,
    fallback: true,
  };
}
