import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';

export default function HomeEconomy({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

  return (
    <section className={classNames(['economy', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            config={{
              showImage: false,
              listView: true,
              showExcerpt: false,
              showLineSeparator: true,
            }}
            styles={{
              lineSeparator: `border-b pb-4 ${index > 3 ? 'border-none' : ''}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
