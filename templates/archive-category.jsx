import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import Container from '~/components/layout/container';
import CategoryBanner from '~/components/page/category/category-banner';
import CategoryTitle from '~/components/page/category/category-title';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function TemplateArchiveCategory({ category, posts }) {
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);

  return (
    <>
      {category.banner && <CategoryBanner image={category.banner} />}
      <Container>
        <CategoryTitle
          title={category.title || 'Category'}
          description={category.description}
          image={category.image}
          className="my-5"
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
