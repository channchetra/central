import { mapPostData } from '~/lib/posts';
import { useQuery } from '@apollo/client';
import { getAllTagsSlug } from '~/lib/tag';
import { QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/tag';
import TemplateArchiveTag from '~/templates/archive-tag';
import { addApolloState, initializeApollo } from '~/lib/apollo-client';
import { useRouter } from 'next/router';

export default function ArchiveTagPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <TemplateArchiveTag isFallback={router.isFallback} />;
  }

  const { loading, data, fetchMore } = useQuery(
    QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );
  const tag = data?.tag || {};
  const postData = {
    posts:
      data?.tag?.posts?.edges.map(({ node = {} }) => node).map(mapPostData) ||
      [],
    pageInfo: data?.tag?.posts?.pageInfo || {},
  };

  const loadMore = () =>
    fetchMore({
      variables: {
        slug,
        after: postData.pageInfo.endCursor,
      },
      notifyOnNetworkStatusChange: true,
    });

  return (
    <TemplateArchiveTag
      tag={tag}
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
  const { tag } = await apolloClient.query({
    query: QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 10,
    notFound: !tag,
  });
}

export async function getStaticPaths() {
  const { tags } = await getAllTagsSlug();
  const paths = tags.map(({ slug }) => `/tag/${slug}`);
  return {
    paths,
    fallback: true,
  };
}
