import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroller';
import ClientOnly from '~/components/client-only';
import Container from '~/components/layout/container';
import CategoryBanner from '~/components/page/category/category-banner';
import CategoryTitle from '~/components/page/category/category-title';
import PostItem from '~/components/post/post-item';
import { SkeletonCategoryPage } from '~/components/skeleton';
import SkeletonPostItem from '~/components/skeleton/skeleton-post-item';

export default function TemplateArchiveCategory({
  category = {},
  posts = [],
  hasMore = true,
  loadMore = () => {},
  loading = false,
  isFallback = false,
}) {
  if (isFallback) {
    return <SkeletonCategoryPage />;
  }

  const { seo = {} } = category || {}

  return (
    <>
      <Head>{HTMLReactParser(seo.fullHead)}</Head>
      {category?.image?.banner && (
        <CategoryBanner image={category?.image?.banner} />
      )}
      <Container>
        <CategoryTitle
          title={category.name || 'Category'}
          description={category.description}
          image={category?.image?.thumbnail}
          className="my-5"
        />
        <ClientOnly>
          <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore}>
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
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
