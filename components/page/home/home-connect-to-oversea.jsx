import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomeConnectToOversea({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

  const { $breakpoints } = useBreakpoint();

  return (
    <section className={classNames(['connect-to-oversea', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              showExcerpt: $breakpoints.smAndUp,
              showLineSeparator: true,
              showImage: $breakpoints.smAndUp || index === 0,
            }}
            styles={{
              lineSeparator: `mb-4 border-b pb-4 sm:pb-5 ${
                index > 3 ? 'lg:border-none' : ''
              } ${index > 5 ? 'mb-0 sm:pb-0 border-none' : ''}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
