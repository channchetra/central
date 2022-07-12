import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomePolitico360({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

  const { $breakpoints } = useBreakpoint();

  return (
    <section className={`block-politico ${className}`}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <PostItem
        key={posts[0]?.id}
        post={posts[0]}
        config={{
          showExcerpt: true,
          showLineSeparator: true,
          imageSize: 'medium_large',
        }}
        styles={{
          lineSeparator: 'pb-3 border-b sm:border-none',
        }}
      />
      <div className="mt-3 lg:mt-5 space-y-4 lg:space-y-7">
        {posts.map(
          (post, index) =>
            index > 0 && (
              <PostItem
                key={post.id}
                post={post}
                config={{
                  listView: true,
                  showExcerpt: $breakpoints.smAndUp,
                  showLineSeparator: true,
                  showImage: $breakpoints.smAndUp,
                }}
                styles={{
                  lineSeparator: `border-b pb-4 sm:pb-4 lg:pb-5 ${
                    index > 3 ? 'sm:border-none' : ''
                  } ${index > 4 ? 'border-none' : ''}`,
                }}
              />
            )
        )}
      </div>
    </section>
  );
}
