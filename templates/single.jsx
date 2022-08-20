import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroller';
import Container from '~/components/layout/container';
import PostDetailItem from '~/components/post/post-detail-item';
import SkeletonPostDetail from '~/components/skeleton/skeleton-post-detail';

export default function TemplateSingle({
  post = {},
  posts = [],
  hasMore = true,
  previous,
  title,
}) {

  const { seo = {} } = post || {}

  return (
    <>
      <Head>{HTMLReactParser(seo.fullHead)}</Head>
      <Container>
        <InfiniteScroll
          pageStart={0}
          loadMore={previous}
          hasMore={hasMore}
          loader={
            <div className="grid sm:grid-cols-3 gap-3 lg:gap-6" key={0}>
              <div className="col-span-2">
                <SkeletonPostDetail className="my-3" />
              </div>
            </div>
          }
        >
          {posts.map((_post) => (
            <PostDetailItem title={title} key={_post.id} post={_post} />
          ))}
        </InfiniteScroll>
      </Container>
    </>
  );
}
