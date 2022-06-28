import InfiniteScroll from 'react-infinite-scroller';
import CommonLoader from '~/components/common/loader';
import Container from '~/components/layout/container';
import AuthorCard from '~/components/page/author/author-card';
import PostItem from '~/components/post/post-item';
import useStaticInfiniteScroll from '~/hooks/use-static-infinite-scroll';

export default function TemplateArchiveAuthor({ author, posts }) {
  const { items, hasMore, loadMore } = useStaticInfiniteScroll(posts);

  return (
    <Container className="my-5">
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
        <section className="grid md:grid-cols-3 gap-5 sm:gap-7 mb-5">
          <AuthorCard author={author} />
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
    </Container>
  );
}
