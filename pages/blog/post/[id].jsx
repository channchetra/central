import { getPageInfo, getPost } from '~/lib/get-post-and-next-posts';
import Head from 'next/head';
import Layout from '~/components/layout/layout';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import PageTitle from '~/components/page/page-title';
import Container from '../../../components/container';
import Header from '../../../components/header';
import { CMS_NAME } from '../../../lib/constants';

export default function Page({ post, next }) {
  return (
    <Layout preview={false}>
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
          <PostItem
            key={post.databaseId}
            post={post}
            config={{
              showExcerpt: false,
              imageHeight: 800,
              imageWidth: 1000,
            }}
            styles={{}}
          />
            
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  const next = params.next.databaseId;
  return {
    props: { post, next },
    revalidate: 10,
  };
}

export async function getStaticPaths() {

  const pageInfo = await getPageInfo();
  
  const paths = [];

  pageInfo.edges.map(({node}, i, e ) => paths.push({params: {id: `/blog/post/${node.databaseId}`, next: e[i+1]}}))

  return {
    paths,
    fallback: false,
  };
}
