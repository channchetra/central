import InfiniteScroll from 'react-infinite-scroller';
import Container from '~/components/layout/container';
import PostDetailItem from '~/components/post/post-detail-item';
import SkeletonPostItem from '~/components/skeleton/skeleton-post-item';

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
          <section className="grid md:grid-cols-4 gap-5 mb-5">
            <SkeletonPostItem />
            <SkeletonPostItem />
            <SkeletonPostItem />
            <SkeletonPostItem />
          </section>
        }
      >
        {posts.map((post) => (
          <PostDetailItem title={title} key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </Container>
  );
}
