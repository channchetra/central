import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useState } from 'react';
import PostHeader from '~/components/post-header';
import Container from '~/components/container';
import PostBody from '../../components/post-body';
// import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { CMS_NAME } from '../../lib/constants';
import Tags from '../../components/tags';
// import CommonBreadcrumb from '../../components/common/breadcrumb';

export default function Post({ data: { post } }) {
  const router = useRouter();

  if (!router.isFallback && !post && !post?.databaseId) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {/* <CommonBreadcrumb
          className="my-5"
          items={[{ label: 'One-Minute', link: '#' }, { label: post.title }]}
        /> */}
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
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
          </>
        )}
      </Container>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, posts } = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      data: { post, posts },
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
