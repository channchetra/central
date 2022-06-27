import TemplateArchive from '~/templates/archive';
import { getPostsByCategorySlug } from '~/lib/posts';
import getAllCategories from '~/lib/categories';

export default function Category({posts}) {
  const attr = {
    pageTitle: {}
  }
  return <TemplateArchive posts={posts} attributes={attr} />;
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild = [] } = params;
  const slug = [slugParent, ...slugChild];
  const {posts} = await getPostsByCategorySlug({slug: slug[slug.length -1]});
  return {
    props: { 
      posts
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const skipPaths = [
    '/central/connect-to-oversea/avi-voice',
    '/central/connect-to-oversea/asian-vision-dialogue',
    '/central/connect-to-oversea/climate-change',
    '/central/connect-to-oversea/biodegradable',
    '/central/connect-to-oversea'
  ]
  const {categories} = await getAllCategories();
  const paths = categories
    .filter(({ uri }) => typeof uri === 'string' && !skipPaths.includes(uri))
    .map(({ uri }) => {
      const segments = uri.split('/').filter((seg) => seg !== '');
      segments.shift();
      return {
        params: {
          slugParent: segments.shift(),
          slugChild: segments,
        },
      };
    });
  return {
    paths,
    fallback: false,
  };
}

