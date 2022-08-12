import find from 'lodash/find';
import merge from 'lodash/merge';
import PostTitle from './post-title';
import PostAuthor from './post-author';
import PostCategoryTag from './post-category-tag';
import PostCoverImage from './post-cover-image';
import PostDate from './post-date';
import PostExcerpt from './post-excerpt';

export default function PostItem({
  post,
  className = '',
  styles,
  config = {},
}) {
  if (!post) {
    return null;
  }

  const conf = {
    listView: false,
    showImage: true,
    showTitle: true,
    showExcerpt: true,
    showMeta: true,
    showAuthor: true,
    showAuthorAvatar: false,
    showAuthorName: true,
    showDate: true,
    showCategoryTag: false,
    showCategoryTagOnImage: false,
    showCategoryTagMultiple: false,
    showLineSeparator: false,
    titleLineClamp: '2',
    excerptLineClamp: '3',
    imageSize: 'td_485x360',
    ...config,
  };
  const {
    title,
    databaseId,
    featuredImage,
    excerpt,
    date,
    author,
    categories,
    postFormats = [],
  } = post || {};

  const classes = merge(
    {
      wrapper: conf.listView
        ? 'sm:flex hover:text-rose-600 dark:hover:text-zinc-300'
        : 'hover:text-rose-600 dark:hover:text-zinc-300',
      innerWrapper: {
        first: conf.listView && conf.showImage ? 'sm:w-1/3' : '',
        second:
          conf.listView && conf.showImage
            ? 'px-3 sm:px-0 sm:flex-1 sm:pl-4'
            : 'px-3 sm:px-0',
      },
      image: {
        wrapper: `shadow ${
          conf.listView && conf.showImage ? 'mb-3 sm:mb-0 ' : 'mb-3'
        }`,
        imageWrapper:
          'pb-[56%] aspect-video bg-gradient-to-r from-gray-100 to-white dark:from-gray-700 dark:to-gray-800',
        category: {
          wrapper: 'absolute bottom-0',
          name: 'text-[11px] text-white bg-rose-900 hover:bg-rose-700 px-1 mr-1',
        },
      },
      title: {
        wrapper: '',
        title: 'text-base lg:text-lg lg:leading-relaxed dark:text-neutral-50',
      },
      excerpt: {
        wrapper: 'mt-3',
        excerpt: 'text-sm text-gray-500 dark:text-white',
      },
      meta: {
        wrapper: 'flex items-center text-xs mt-3',
        author: {
          wrapper: 'flex items-center',
          avatar: 'w-12 h-12 relative mr-4',
          name: 'font-medium text-black dark:text-white',
        },
        date: {
          wrapper: '',
          date: 'text-gray-500 dark:text-white',
        },
        category: {
          wrapper: 'mr-3',
          name: 'text-[11px] text-white bg-rose-900 hover:bg-rose-700 p-1 mr-1 dark:bg-gray-700',
        },
      },
      lineSeparator: 'border-b pb-4',
    },
    styles
  );

  if (!conf.showLineSeparator) {
    classes.lineSeparator = '';
  }

  const postDetailLink = `/detail/${databaseId}`;
  const isVideo = !!find(postFormats, ['slug', 'post-format-video']);

  return (
    <div className={`post-${databaseId} ${className} ${classes.lineSeparator}`}>
      <div className={`${classes.wrapper}`}>
        {conf.showImage && (
          <div className={`${classes.innerWrapper.first}`}>
            <PostCoverImage
              title={title}
              image={featuredImage}
              link={postDetailLink}
              categories={categories}
              isVideo={isVideo}
              styles={classes.image}
              config={{
                showCategoryTag: conf.showCategoryTagOnImage,
                showCategoryTagMultiple: conf.showCategoryTagMultiple,
                imageSize: conf.imageSize,
              }}
            />
          </div>
        )}

        <div className={`${classes.innerWrapper.second}`}>
          {conf.showTitle && (
            <PostTitle
              title={title}
              line={conf.titleLineClamp}
              link={postDetailLink}
              styles={classes.title}
            />
          )}

          {conf.showMeta && (
            <div className={classes.meta.wrapper}>
              {conf.showCategoryTag && (
                <PostCategoryTag
                  categories={categories}
                  multiple={conf.showCategoryTagMultiple}
                  styles={classes.meta.category}
                />
              )}

              {conf.showAuthor && (
                <>
                  <PostAuthor
                    author={author}
                    styles={classes.meta.author}
                    config={{
                      showAvatar: conf.showAuthorAvatar,
                      showName: conf.showAuthorName,
                    }}
                  />
                  <div className={`mx-2 ${classes.meta.date.date}`}>-</div>
                </>
              )}

              {conf.showDate && (
                <PostDate dateString={date} styles={classes.meta.date} />
              )}
            </div>
          )}

          {conf.showExcerpt && (
            <PostExcerpt
              excerpt={excerpt}
              line={conf.excerptLineClamp}
              styles={classes.excerpt}
            />
          )}
        </div>
      </div>
    </div>
  );
}
