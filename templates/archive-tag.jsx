import InfiniteScroll from 'react-infinite-scroller';
import ClientOnly from '~/components/client-only';
import Container from '~/components/layout/container';
import TagBanner from '~/components/page/tag/tag-banner';
import PostItem from '~/components/post/post-item';
import SkeletonPostItem from '~/components/skeleton/skeleton-post-item';

export default function TemplateArchiveTag({
  tag = {},
  posts = [],
  hasMore = true,
  loadMore,
  loading = false,
}) {

  return (
    <>
      <TagBanner tag={tag} className="mb-4" />
      <Container>
        <ClientOnly>
          <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore}>
            <section className="grid md:grid-cols-4 gap-5 mb-5">
              {posts.map((post) => (
                <PostItem
                  key={`post-${post.databaseId}`}
                  post={post}
                  config={{
                    showExcerpt: false,
                    showMeta: false,
                  }}
                  styles={{}}
                />
              ))}
            </section>
          </InfiniteScroll>
        </ClientOnly>
        {loading && (
          <div className="loader my-5">
            <section className="grid md:grid-cols-4 gap-5 mb-5">
              <SkeletonPostItem />
              <SkeletonPostItem />
              <SkeletonPostItem />
              <SkeletonPostItem />
            </section>
          </div>
        )}
      </Container>
    </>
  );
}
