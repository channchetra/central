import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomeDailyNews({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

  const { $breakpoints } = useBreakpoint();

  return (
    <section className={`latest-news ${className}`}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <div className="space-y-5 mb-4">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              listView: true,
              showExcerpt: false,
              showLineSeparator: true,
              showImage: $breakpoints.xlAndUp,
            }}
            styles={{
              image: {
                imageWrapper: 'aspect-video',
              },
              lineSeparator: `border-b pb-3 sm:pb-4 ${
                index > 4 ? 'sm:border-none' : ''
              } ${index > 5 ? 'border-none' : ''}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
