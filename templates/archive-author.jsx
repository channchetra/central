import InfiniteScroll from 'react-infinite-scroller';
import Container from '~/components/layout/container';
import AuthorCard from '~/components/page/author/author-card';
import PostItem from '~/components/post/post-item';
import SkeletonPostItem from '~/components/skeleton/skeleton-post-item';

export default function TemplateArchiveAuthor({
  author = {},
  posts = [],
  hasMore = false,
  loadMore,
  loading = false,
}) {
  return (
    <Container className="my-5">
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore}>
        <section className="grid md:grid-cols-3 gap-5 sm:gap-7 mb-5">
          <AuthorCard author={author} />
          {posts.map((post) => (
            <PostItem
              key={`post-${post.databaseId}`}
              post={post}
              config={{
                showExcerpt: false,
                showCategoryTag: true,
              }}
              styles={{}}
            />
          ))}
          {loading && (
            <>
              <SkeletonPostItem />
              <SkeletonPostItem />
              { posts.length > 0 && <SkeletonPostItem /> }
            </>
          )}
        </section>
      </InfiniteScroll>
      {/* {loading && (
        <div className="loader my-5">
          <section className="grid md:grid-cols-4 gap-5 mb-5">
            <SkeletonPostItem />
            <SkeletonPostItem />
          </section>
        </div>
      )} */}
    </Container>
  );
}
