import { addApolloState, initializeApollo } from '~/lib/apollo-client';
import { generateRSSFeed, getAllPodcastsSlug } from '~/lib/podcast';
import { QUERY_PODCAST_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/podcast';
import TemplateArchiveCategory from '~/templates/archive-category';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { mapPostData } from '../../lib/posts';

export default function ArchivePodcastPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <TemplateArchiveCategory isFallback={router.isFallback} />;
  }

  const { loading, data, fetchMore } = useQuery(
    QUERY_PODCAST_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );
  const podcast = data?.podcast || {};
  const postData = {
    posts:
      data?.podcast?.posts?.edges
        .map(({ node = {} }) => node)
        .map(mapPostData) || [],
    pageInfo: data?.podcast?.posts?.pageInfo || {},
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
    <TemplateArchiveCategory
      category={podcast}
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
    query: QUERY_PODCAST_WITH_PAGINATED_POSTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  generateRSSFeed(data?.podcast);

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 10,
    notFound: !data?.podcast,
  });
}

export async function getStaticPaths() {
  const { podcasts } = await getAllPodcastsSlug();
  const paths = podcasts.map(({ slug }) => `/podcast/${slug}`);
  return {
    paths,
    fallback: true,
  };
}
