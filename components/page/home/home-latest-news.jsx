import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';

export default function HomeLatestNews({ title, link, posts = [], className = '' }) {
  if (!posts.length) return null;

  return (
    <section className={classNames(['daily-news', className])}>
      <div className="my-5">
        <CommonSectionHeader
          type="primary"
          title={title}
          link={link}
          className="text-xl font-bold"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-7 md:mb-7">
        <PostItem
          key={posts[0]?.id}
          post={posts[0]}
          config={{
            showExcerpt: false,
          }}
          styles={{
            image: {
              imageWrapper:
                'relative lg:aspect-[4/3.07] sm:aspect-[7/6] aspect-video',
            },
          }}
        />
        <div className="block-latest grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map(
            (post, index) =>
              index > 0 && (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    showExcerpt: false,
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `border-b pb-3 sm:pb-3 mb-1 ${
                      index > 2 ? 'sm:border-none' : ''
                    } ${index > 3 ? 'border-none' : ''}`,
                    image: {
                      wrapper: 'mb-3 shadow',
                    },
                  }}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
