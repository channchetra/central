import TemplateArchive from '~/templates/archive';
import usePageMetadata from '~/hooks/use-page-metadata';
import { getPaginatedPosts } from '../lib/posts';

export default function Posts({ posts, pagination }) {
  console.warn(posts, pagination);
  const title = 'All Posts';
  const slug = 'posts';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: false,
    },
  });
  
  return <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} />;
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
