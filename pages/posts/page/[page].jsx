import TemplateArchive from '~/templates/archive';
import { getAllPosts, getPagesCount, getPaginatedPosts } from '~/lib/posts';

export default function Posts({ posts, pagination }) {

  return <TemplateArchive posts={posts} pagination={pagination}/>;
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
