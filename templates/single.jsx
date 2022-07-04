import InfiniteScroll from 'react-infinite-scroller';
import Container from '~/components/layout/container';
import PostDetailItem from '~/components/post/post-detail-item';
import SkeletonPostDetail from '~/components/skeleton/skeleton-post-detail';

export default function TemplateSingle({
  posts = [],
  hasMore = true,
  previous,
  title,
}) {
  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={previous}
        hasMore={hasMore}
        loader={
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
            <div className="col-span-2">
              <SkeletonPostDetail className="my-3" />
            </div>
          </div>
        }
      >
        {posts.map((post) => (
          <PostDetailItem
            title={title}
            key={post.id}
            post={post}
          />
        ))}
      </InfiniteScroll>
    </Container>
  );
}
