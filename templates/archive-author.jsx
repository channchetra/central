import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import Container from '~/components/container';
import PageBanner from '~/components/page/page-banner';
import PageTitle from '~/components/page/page-title';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function TemplateArchiveAuthor({posts, attributes = {}}) {
  // console.warn(posts)
  // return null
  const pageBanner = {
    image: "https://asset.ams.com.kh/central/media/AMS-Cover-AVI-Voice.jpg",
    enable: true,
    ...attributes.pageBanner
  }
  const pageTitle = {
    title: "Author",
    description: "Description",
    image: "https://asset.ams.com.kh/central/media/AVI-Voice-on-AMS.jpg",
    className: "my-5",
    config: {
      showLineSeparator: true
    },
    enable: true,
    ...attributes.pageTitle
  }
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);
  return (
    <>
      { pageBanner.enable &&
      <PageBanner {...pageBanner} />
      }
      <Container>
        {
          pageTitle.enable &&
          <PageTitle {...pageTitle} />
        }
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