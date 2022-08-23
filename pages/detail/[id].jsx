import { getAllPostsSlug, mapPostData, postPathById } from '~/lib/posts';
import TemplateSingle from '~/templates/single';
import Container from '~/components/layout/container';
import SkeletonPostDetail from '~/components/skeleton/skeleton-post-detail';
import { useRouter } from 'next/router';
import { addApolloState, initializeApollo } from '~/lib/apollo-client';
import { QUERY_POST_BY_ID } from '~/graphql/queries/posts';
import { useQuery } from '@apollo/client';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return (
      <Container>
        <div className="grid sm:grid-cols-3 gap-3 lg:gap-6">
          <div className="col-span-2">
            <SkeletonPostDetail className="my-3" />
          </div>
        </div>
      </Container>
    );
  }

  const { data } = useQuery(QUERY_POST_BY_ID, {
    variables: {
      id,
    },
  });
  const post = [data.post].map(mapPostData)[0];

  return <TemplateSingle post={post} />;
}

export async function getStaticProps({ params = {} }) {
  const { id } = params;
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: QUERY_POST_BY_ID,
    variables: {
      id,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      post: [data.post].map(mapPostData)[0],
    },
    revalidate: 10,
    notFound: !data?.post,
  });
}

export async function getStaticPaths() {
  const { posts } = await getAllPostsSlug();

  return {
    paths: posts.map(({ databaseId }) => postPathById(databaseId) || []),
    fallback: true,
  };
}
