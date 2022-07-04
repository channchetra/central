import { mapPostData } from '~/lib/posts';
import { useForm } from 'react-hook-form';
import { QUERY_POSTS_SEARCH } from '~/graphql/queries/posts';
import { useQuery } from '@apollo/client';
import TemplateSearch from '~/templates/search';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Search() {
  const router = useRouter();
  const search = router.query.q || '';

  const { control, handleSubmit, setValue } = useForm({defaultValues: {q: search}});

  const { loading, data, fetchMore } = useQuery(QUERY_POSTS_SEARCH, {
    variables: {
      search,
      first: 20,
      after: null,
    },
  });

  const { pageInfo } = data?.posts || {};

  const postData = {
    posts:
      data?.posts?.edges.map(({ node = {} }) => node).map(mapPostData) || [],
  };

  const loadMore = () =>
    fetchMore({
      variables: {
        search,
        first: 20,
        after: pageInfo?.endCursor,
      },
      notifyOnNetworkStatusChange: true,
    });

  const handleOnSubmit = ({ q }) => router.push(`/search?q=${q}`);

  useEffect(() => {
    setValue('q', search);
  }, [search]);

  return (
    <TemplateSearch
      search={search}
      control={control}
      handleSubmit={handleSubmit(handleOnSubmit)}
      posts={postData.posts}
      hasMore={pageInfo?.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
  );
}
