import categories from '~/data/categories';
import { find } from 'lodash';
import TemplateCategory from '~/templates/category';
import { getPostsByCategoryId } from '~/lib/posts';

const slug = 'one-minute';

export default function OneMinute({ category, posts }) {
  return <TemplateCategory category={category} posts={posts} />;
}

export async function getStaticProps() {
  const category = find(categories, ['slug', slug]);
  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
  });

  return {
    props: { category, posts },
    revalidate: 10,
  };
}
