import Head from 'next/head';
import Layout from '~/components/layout/layout';
import PostItemGridView from '~/components/post/post-item-grid-view';
import CommonSectionHeader from '~/components/common/section-header';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Header from '../components/header';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Footer from '~/components/footer';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>AMS Central {CMS_NAME}</title>
      </Head>
      <Header />
      <Container>
        <div className='my-5'>
          <CommonSectionHeader type="primary" title="ព័ត៌មានថ្មីបំផុត" className='text-xl font-bold' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          { morePosts.map((post) => (
            <PostItemGridView
              key={post.databaseId}
              post={post.node}
              config={{}}
            />
          ))}
        </div>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.databaseId}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
