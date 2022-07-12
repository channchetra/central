import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomeVideo({ title, link, posts = [], className = '' }) {
  if (!posts.length) return null;
  const { $breakpoints } = useBreakpoint();

  return (
    <section className={classNames(['video', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
          lineColor="bg-gray-300"
        />
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              showExcerpt: false,
              showLineSeparator: true,
              showImage: $breakpoints.smAndUp || index === 0,
            }}
            styles={{
              lineSeparator: `border-b pb-4 sm:pb-5 border-gray-300 ${
                index > 3 ? 'md:border-none' : ''
              } ${index > 5 ? 'border-none' : ''}`,
            }}
          />
        ))}
      </section>
    </section>
  );
}
