import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import CommonSectionHeader from '~/components/common/section-header';
import Container from '~/components/layout/container';
import AuthorCard from '~/components/page/author/author-card';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function TemplateArchiveAuthor({ author, posts }) {
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);

  return (
    <Container className="my-5">
      <section className="grid md:grid-cols-3 gap-5 mb-8">
        <AuthorCard author={author} />
        <div className="col-span-2">
          <CommonSectionHeader
            title="ព័ត៌មានថ្មី"
            type="tertiary"
            lineColor="before:bg-sky-500"
            className="text-xl dark:text-neutral-50 font-bold"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <CommonSectionHeader
            title="ព័ត៌មានទាំងអស់"
            type="tertiary"
            lineColor="before:bg-sky-500"
            className="text-xl dark:text-neutral-50 font-bold mb-5"
          />
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={
              <div className="loader my-5" key={0}>
                <CommonLoader />
              </div>
            }
          >
            <section className="grid md:grid-cols-2 gap-5 mb-5">
              {items.map((post) => (
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
            </section>
          </InfiniteScroll>
        </div>
        <div>
          <CommonSectionHeader
            title="ព័ត៌មានពេញនិយម"
            type="tertiary"
            lineColor="before:bg-sky-500"
            className="text-xl dark:text-neutral-50 font-bold"
          />
        </div>
      </section>
    </Container>
  );
}
