import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';

export default function HomePolitico360({
  title,
  link,
  posts = [],
  className = '',
}) {
  if (!posts.length) return null;

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
          showExcerpt: false,
          showLineSeparator: true,
        }}
        styles={{
          title: {
            wrapper: 'mb-3',
            title: 'text-base lg:text-lg lg:leading-relaxed',
          },
          excerpt: {
            excerpt: 'text-sm',
          },
          lineSeparator: 'pb-3 border-b sm:border-none',
        }}
      />
      <div className="mt-5 space-y-7">
        {posts.map(
          (post, index) =>
            index > 0 && (
              <PostItem
                key={post.id}
                post={post}
                config={{
                  listView: true,
                  showExcerpt: true,
                  showLineSeparator: true,
                }}
                styles={{
                  lineSeparator: `border-b pb-4 sm:pb-6 ${
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
