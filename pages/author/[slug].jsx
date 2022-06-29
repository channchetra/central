import { mapPostData } from '~/lib/posts';
import { getUserBySlug } from '~/lib/users';
import { useQuery } from '@apollo/client';
import TemplateArchiveAuthor from '~/templates/archive-author';
import { QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/users';

export default function ArchiveAuthorPage({ author, slug }) {
  const { loading, data, fetchMore } = useQuery(
    QUERY_AUTHOR_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );
  const postData = {
    posts:
      data?.user.posts.edges.map(({ node = {} }) => node).map(mapPostData) ||
      [],
    pageInfo: data?.user.posts.pageInfo || {},
  };

  const loadMore = () =>
    fetchMore({
      variables: {
        slug,
        after: postData.pageInfo.endCursor,
      },
      notifyOnNetworkStatusChange: true,
    });

  return (
    <TemplateArchiveAuthor
      author={author}
      posts={postData.posts}
      hasMore={postData.pageInfo.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
  );
}

export async function getServerSideProps({ params = {} } = {}) {
  const { slug } = params;
  const author = await getUserBySlug(slug);

  return {
    props: {
      author,
      slug,
    },
  };
}
