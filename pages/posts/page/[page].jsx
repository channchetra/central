import TemplateArchive from '~/templates/archive';
import usePageMetadata from '~/hooks/use-page-metadata';
import { getAllPosts, getPagesCount, getPaginatedPosts } from '~/lib/posts';

export default function Posts({ posts, pagination }) {
  console.warn(posts, pagination);
  const title = 'All Posts';
  const slug = 'posts';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: `Page ${pagination.currentPage}`,
    },
  });

  // console.warn(metadata)
  
  return <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} />;
}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
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

export async function getStaticPaths() {
  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });
  const pagesCount = await getPagesCount(posts);
  const paths = [...new Array(pagesCount)].map((_, i) => ({ params: { page: String(i + 1) } }));
  return {
    paths,
    fallback: false,
  };
}
