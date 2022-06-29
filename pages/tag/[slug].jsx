import { mapPostData } from '~/lib/posts';
import { useQuery } from '@apollo/client';
import { getTagBySlug } from '~/lib/tag';
import { QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/tag';
import TemplateArchiveTag from '~/templates/archive-tag';

export default function ArchiveTagPage({ tag, slug }) {
  const { loading, data, fetchMore } = useQuery(
    QUERY_TAG_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );
  const postData = {
    posts:
      data?.tag?.posts.edges.map(({ node = {} }) => node).map(mapPostData) ||
      [],
    pageInfo: data?.tag.posts.pageInfo || {},
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
    <TemplateArchiveTag
      tag={tag}
      posts={postData.posts}
      hasMore={postData.pageInfo.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
  );
}

export async function getServerSideProps({ params = {} } = {}) {
  const { slug } = params;
  const tag = await getTagBySlug(slug);

  return {
    props: {
      tag,
      slug,
    },
  };
}
