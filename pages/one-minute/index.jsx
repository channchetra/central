import categories from '~/data/categories';
import { find, map } from 'lodash';
import { getAllPostsForHome } from '~/lib/api';
import TemplateCategory from '~/templates/category';

const slug = 'one-minute';

export default function OneMinute({ category, posts }) {
  return <TemplateCategory category={category} posts={posts} />;
}

export async function getStaticProps() {
  const category = find(categories, ['slug', slug]);
  const posts = await getAllPostsForHome();

  return {
    props: { category, posts: map(posts.edges, 'node') },
    revalidate: 10,
  };
}
