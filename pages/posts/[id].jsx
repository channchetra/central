import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '~/components/container';
import { getPostById } from '~/lib/posts';
import PostBody from '../../components/post-body';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { CMS_NAME } from '../../lib/constants';

export default function Post({ post }) {
  // console.warn(post);
  const router = useRouter();
  if (!router.isFallback && !post && !post?.databaseId) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mt-4 sm:mt-6">
            <Head>
              <title>
                {post.title} {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.sourceUrl}
              />
            </Head>
            {/* <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            /> */}
            <PostBody content={post.content} />
            
          </article>

          <SectionSeparator />
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { post } = await getPostById(params.id);
  return {
    props: {
      post
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.databaseId}`) || [],
    fallback: true,
  };
}
