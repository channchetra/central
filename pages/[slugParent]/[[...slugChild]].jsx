import { mapPostData } from '~/lib/posts';
import { getAllCategoriesPath } from '~/lib/categories';
import categoryData from '~/data/categories';
import { find } from 'lodash';
import TemplateArchiveCategory from '~/templates/archive-category';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG } from '~/graphql/queries/categories';
import { addApolloState, initializeApollo } from '~/lib/apollo-client';
import { useRouter } from 'next/router';

export default function ArchivePage() {
  const router = useRouter();
  const {
    query: { slugChild, slugParent },
  } = router;
  const slug =
    slugChild && slugChild.length
      ? slugChild[slugChild.length - 1]
      : slugParent;

  if (router.isFallback) {
    return <TemplateArchiveCategory isFallback={router.isFallback} />;
  }

  const { loading, data, fetchMore } = useQuery(
    QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );

  const localCategory = find(categoryData, ['slug', slug]) || {};
  const category = {
    ...data?.category,
    ...localCategory,
    description: localCategory.description || data?.category.description,
  };
  const postData = {
    posts:
      data?.category?.posts?.edges
        .map(({ node = {} }) => node)
        .map(mapPostData) || [],
    pageInfo: data?.category?.posts?.pageInfo || {},
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

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild = [] } = params;
  const slug =
    slugChild && slugChild.length
      ? slugChild[slugChild.length - 1]
      : slugParent;

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY_CATEGORY_WITH_PAGINATED_POSTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export async function getStaticPaths() {
  const { categories } = await getAllCategoriesPath();
  const paths = categories.map(({ uri }) => {
    const segments = uri.split('/').filter((seg) => seg !== '');
    segments.shift();
    return {
      params: {
        slugParent: segments.shift(),
        slugChild: segments,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
