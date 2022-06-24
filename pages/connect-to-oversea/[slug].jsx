import categories from '~/data/categories';
import { filter, find, map } from 'lodash';
import { getAllPostsForHome } from '~/lib/api';
import TemplateCategory from '~/templates/category';

const parentSlug = 'connect-to-oversea';
const parentCategory = find(categories, ['slug', parentSlug]);

export default function OneMinuteCategory({ category, posts }) {
  return <TemplateCategory category={category} posts={posts} />;
}

export async function getStaticProps({ params: { slug } }) {
  console.warn(slug);
  const category = find(categories, ['slug', slug]);
  const posts = await getAllPostsForHome();

  return {
    props: { category, posts: map(posts.edges, 'node') },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  if (!parentCategory) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const subCategories = filter(categories, [
    'parentDatabaseId',
    parentCategory.databaseId,
  ]);

  return {
    paths: subCategories.map(({ slug }) => `/${parentSlug}/${slug}`) || [],
    fallback: true,
  };
}
