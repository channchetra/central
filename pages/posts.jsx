import Head from 'next/head';
import Layout from '~/components/layout/layout';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import PageTitle from '~/components/page/page-title';
import Container from '../components/container';
import Header from '../components/header';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts: { edges }, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>AMS Central {CMS_NAME}</title>
      </Head>
      <Header />
      <Container>
        <div className='my-10'>
          <PageTitle title="Posts" />
        </div>
        <div className="my-5">
          <CommonSectionHeader
            type="primary"
            title="ព័ត៌មានថ្មីបំផុត"
            className="text-xl font-bold"
          />
        </div>
        <section className="grid md:grid-cols-3 gap-5 mb-7 md:mb-7">
          {
            edges.map(({node}) => 
              <PostItem
                key={node.databaseId}
                post={node}
                config={{
                  showExcerpt: false,
                  imageHeight: 800,
                  imageWidth: 1000,
                }}
                styles={{}}
              />
            )
          }
            
        </section>
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
