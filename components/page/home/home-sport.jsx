import classNames from 'classnames';
import CommonSectionHeader from '~/components/common/section-header';
import PostItem from '~/components/post/post-item';
import useBreakpoint from '~/hooks/use-breakpoint';

export default function HomeSport({ title, link, posts = [], className = '' }) {
  if (!posts.length) return null;

  const { $breakpoints } = useBreakpoint();

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
      <div className="grid md:grid-cols-3 gap-5">
        <div className="col-span-2 md:col-auto">
          <PostItem
            key={posts[0]?.id}
            post={posts[0]}
            config={{
              showExcerpt: false,
              showLineSeparator: true,
            }}
            styles={{
              image: {
                imageWrapper: 'aspect-[16/8]',
              },
              lineSeparator: 'pb-4 border-b sm:border-none',
            }}
          />
        </div>
        <div className="col-span-2 grid md:grid-cols-2 gap-3 md:gap-5">
          {posts.map(
            (post, index) =>
              index > 0 && (
                <PostItem
                  key={post.id}
                  post={post}
                  config={{
                    listView: true,
                    showExcerpt: false,
                    showImage: $breakpoints.smAndUp,
                    showLineSeparator: true,
                  }}
                  styles={{
                    lineSeparator: `mb-3 border-b pb-4 ${
                      index > 3 ? 'pb-4 md:border-none' : ''
                    }  ${index > 5 ? 'border-none' : ''}`,
                  }}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
