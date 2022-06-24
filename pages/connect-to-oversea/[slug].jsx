import categories from '~/data/categories';
import { filter, find } from 'lodash';
import TemplateCategory from '~/templates/category';
import { getPostsByCategoryId } from '~/lib/posts';

const parentSlug = 'connect-to-oversea';
const parentCategory = find(categories, ['slug', parentSlug]);

export default function OneMinuteCategory({ category, posts }) {
  return <TemplateCategory category={category} posts={posts} />;
}

export async function getStaticProps({ params: { slug } }) {
  const category = find(categories, ['slug', slug]);
  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
  });

  return {
    props: { category, posts },
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
