import InfiniteScroll from 'react-infinite-scroller';
import ClientOnly from '~/components/client-only';
import CustomInputText from '~/components/common/custom-input-text';
import Container from '~/components/layout/container';
import PostItem from '~/components/post/post-item';
import SkeletonPostItem from '~/components/skeleton/skeleton-post-item';

export default function TemplateSearch({
  search = '',
  control,
  handleSubmit,
  posts = [],
  hasMore = true,
  loadMore,
  loading = false,
}) {
  return (
    <>
      <div className="my-4 sm:my-8">
        <Container>
          <h1 className="mb-4 text-lg sm:text-2xl leading-relaxed text-center">
            {search && (
              <>
                <span>ស្វែងរកលទ្ធផលសម្រាប់: </span>
                <span className="font-normal">{search}</span>
              </>
            )}
            {!search && <span>សូមធ្វើការស្វែងរក</span>}
          </h1>
          <div className="max-w-32 max-w-xl mx-auto px-3">
            <form onSubmit={handleSubmit} className="flex">
              <CustomInputText
                id="search"
                className="h-12 px-3 block w-full rounded-l-md bg-gray-100 dark:bg-zinc-800 border-transparent focus:outline-none"
                placeholder="ស្វែងរក"
                type="search"
                name="q"
                autoComplete="off"
                rules={{ required: 'This field is required' }}
                control={control}
              />
              <button
                type="submit"
                className="rounded-r-md bg-slate-300 dark:bg-gray-700 px-4 h-12"
              >
                ស្វែងរក
              </button>
            </form>
          </div>
        </Container>
      </div>
      <Container>
        <ClientOnly>
          <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore}>
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {posts.map((post) => (
                <PostItem
                  key={`post-${post.databaseId}`}
                  post={post}
                  config={{
                    showExcerpt: false,
                    showMeta: true,
                    showLineSeparator: true,
                  }}
                  styles={{}}
                />
              ))}
            </section>
          </InfiniteScroll>
          {loading && (
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <SkeletonPostItem />
              <SkeletonPostItem />
              <SkeletonPostItem />
              <SkeletonPostItem />
            </section>
          )}
        </ClientOnly>
      </Container>
    </>
  );
}
