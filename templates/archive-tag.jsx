import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import Container from '~/components/layout/container';
// import PageBanner from '~/components/page/page-banner';
// import PageTitle from '~/components/page/page-title';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function TemplateArchiveTag({ tag, posts }) {
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);

  return (
    <>
      {/* {tag.banner && <PageBanner image={tag.banner} />} */}
      <section className="tag-banner sm:py-7 sm:text-2xl">
        <span>AstraZeneca</span>
      </section>
      <Container>
        {/* <PageTitle
          title={tag.name || 'Tag'}
          description={tag.description}
          image={tag.image}
          className="my-5"
        /> */}
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
          <section className="grid md:grid-cols-4 gap-5 mb-5">
            {items.map((post) => (
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
      </Container>
    </>
  );
}
