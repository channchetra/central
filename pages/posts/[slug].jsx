import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useState } from 'react';
import PostBody from '../../components/post-body';
// import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import { getAllPostsWithSlug } from '../../lib/api';
import { getPost } from '../../lib/get-post-and-next-posts';
import PostTitle from '../../components/post-title';
import { CMS_NAME } from '../../lib/constants';
import Tags from '../../components/tags';
// import CommonBreadcrumb from '../../components/common/breadcrumb';

export default function Post({ post }) {
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

      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
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
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getPost(params.slug);
  return {
    props: {
      preview,
      post,
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
