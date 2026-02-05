import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import CategoryBanner from '~/components/page/category/category-banner';
import CategoryTitle from '~/components/page/category/category-title';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';
import Container from '~/components/layout/container';

export default function TemplateArchive({ posts, attributes = {} }) {
  // console.warn(posts)
  // return null
  const pageBanner = {
    image: '/images/AMS-Cover-AVI-Voice.jpg',
    enable: true,
    ...attributes.pageBanner,
  };
  const pageTitle = {
    title: 'Archive',
    description: 'Description',
    image: '/images/AVI-Voice-on-AMS.jpg',
    className: 'my-5',
    config: {
      showLineSeparator: true,
    },
    enable: true,
    ...attributes.pageTitle,
  };
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);
  return (
    <>
      {pageBanner.enable && <CategoryBanner {...pageBanner} />}
      <Container>
        {pageTitle.enable && <CategoryTitle {...pageTitle} />}
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
                key={post.id}
                post={post}
                config={{
                  showExcerpt: false,
                  showMeta: true,
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
