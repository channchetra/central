import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomeElection({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

  const { $breakpoints } = useBreakpoint();

  return (
    <section className={classNames(['election', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              showLineSeparator: true,
              showExcerpt: false,
              showImage: $breakpoints.smAndUp || index === 0,
            }}
            styles={{
              lineSeparator: `border-b pb-4 sm:pb-5 ${
                index > 2 ? 'sm:border-none' : ''
              } ${index > 4 ? 'border-none' : ''}`,
            }}
          />
        ))}
      </section>
    </section>
  );
}
