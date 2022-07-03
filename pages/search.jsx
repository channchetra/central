
import { mapPostData } from "~/lib/posts";
import { useForm } from 'react-hook-form';
import { QUERY_POSTS_SEARCH } from "~/graphql/queries/posts";
import { useQuery } from "@apollo/client";
import TemplateSearch from '~/templates/search';
import { useRouter } from "next/router";

export default function Search ( {search}) {

  const router = useRouter();

  const { control, handleSubmit, setValue } = useForm();

  setValue("q", search);
  
  const { loading, data, fetchMore } = useQuery(
    QUERY_POSTS_SEARCH,
    {
      variables: {
        search,
        first: 20,
        after: null
      }
    }
  );

  const { pageInfo } = data?.posts || {}
  
  const postData = {
    posts:
      data?.posts?.edges
        .map(({ node = {} }) => node)
        .map(mapPostData) || []
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

  const handleOnSubmit = ({q}) => router.push(`/search?q=${q}`);

// console.warn(postData.pageInfo.endCursor);
  return (
    // <>
    // {pageInfo?.endCursor}
    <TemplateSearch
      search={search}
      control={control}
      handleSubmit={handleSubmit(handleOnSubmit)}
      posts={postData.posts}
      hasMore={pageInfo?.hasNextPage}
      loading={loading}
      loadMore={loadMore}
    />
    // </>
  )
}

export async function getServerSideProps({query}) {
  return {
    props: {
      search: query.q || '',
    }
  };
}
