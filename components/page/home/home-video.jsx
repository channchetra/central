import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';

export default function HomeVideo({ title, link, posts = [], className = '' }) {
  if (!posts.length) return null;

  return (
    <section className={classNames(['video', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
          lineColor="before:bg-gray-300"
        />
      </div>

      <section className="grid md:grid-cols-4 gap-5">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              showExcerpt: false,
              showLineSeparator: true,
            }}
            styles={{
              lineSeparator: `border-b pb-3 sm:pb-5 border-gray-300 ${
                index > 3 ? 'sm:border-none' : ''
              } ${index > 6 ? 'border-none' : ''}`,
            }}
          />
        ))}
      </section>
    </section>
  );
}
