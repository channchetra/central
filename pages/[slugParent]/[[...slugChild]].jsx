import { mapPostData } from '~/lib/posts';
import { getCategoryBySlug } from '~/lib/categories';
import categoryData from '~/data/categories';
import { find } from 'lodash';
import TemplateArchiveCategory from '~/templates/archive-category';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/categories';

export default function ArchivePage({ category, slug }) {
  const { loading, data, fetchMore } = useQuery(
    QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );
  const postData = {
    posts:
      data?.category.posts.edges
        .map(({ node = {} }) => node)
        .map(mapPostData) || [],
    pageInfo: data?.category.posts.pageInfo || {},
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
    <TemplateArchiveCategory
      category={category}
      posts={postData.posts}
      hasMore={postData.pageInfo.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
  );
}

export async function getServerSideProps({ params = {} } = {}) {
  const { slugParent, slugChild = [] } = params;
  const slug = slugChild.length ? slugChild[slugChild.length - 1] : slugParent;

  let category = await getCategoryBySlug(slug);
  const localCategory = find(categoryData, ['slug', slug]) || {};
  category = {
    ...category,
    ...localCategory,
    description: localCategory.description || category.description,
  };

  return {
    props: {
      category,
      slug,
    },
  };
}
