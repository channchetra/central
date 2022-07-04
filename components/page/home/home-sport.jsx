import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';

export default function HomeSport({ title, link, posts = [], className = '' }) {
  if (!posts.length) return null;

  return (
    <section className={classNames(['sport', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <PostItem
          key={posts[0]?.id}
          post={posts[0]}
          config={{
            showExcerpt: false,
          }}
          styles={{
            image: {
              imageWrapper: 'aspect-[16/8]',
            },
          }}
        />
        <div className="space-y-4">
          {posts.map(
            (post, index) =>
              index > 0 && (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    listView: true,
                    showExcerpt: false,
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `border-b pb-4 ${
                      index > 2 ? 'pb-0 sm:border-none' : ''
                    } ${index > 3 ? 'border-none' : ''}`,
                  }}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
