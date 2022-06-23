import TemplateArchive from '~/templates/archive';
import { getPaginatedPosts } from '../lib/posts';

export default function Posts({ posts, pagination }) {
  // console.warn(posts, pagination);
  
  return <TemplateArchive posts={posts} pagination={pagination} />;
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
