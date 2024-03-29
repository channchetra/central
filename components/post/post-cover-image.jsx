import { PlayIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import find from 'lodash/find';
import Link from 'next/link';
import ImageWithFallback from '../common/image-with-fallback';
import PostCategoryTag from './post-category-tag';

export default function PostCoverImage({
  title,
  image,
  link,
  isVideo = false,
  categories,
  config = {},
  className = '',
  styles,
}) {
  if (!image) {
    return null;
  }

  const conf = {
    showCategoryTag: false,
    showCategoryTagMultiple: false,
    imageQuality: 70,
    imageSize: 'td_485x360',
    ...config,
  };

  const classes = {
    wrapper: '',
    imageWrapper: 'aspect-video',
    image: classNames('shadow-sm', {
      'hover:shadow-medium transition-shadow duration-200': link,
    }),
    category: null,
    ...styles,
  };

  let { sourceUrl } = image;
  if (image.mediaDetails) {
    const imageSource = find(image.mediaDetails.sizes, [
      'name',
      conf.imageSize,
    ]);
    if (imageSource) {
      sourceUrl = imageSource.sourceUrl;
    }
  }

  const imageElement = (
    <ImageWithFallback
      layout="fill"
      objectFit="cover"
      alt={title}
      src={sourceUrl}
      quality={conf.imageQuality}
      // placeholder="blur"
      // blurDataURL={sourceUrl}
      className={classes.image}
    />
  );
  return (
    <div className={`relative ${className} ${classes.wrapper}`}>
      <div className={link ? '' : `relative ${classes.imageWrapper}`}>
        {link ? (
          <Link href={link}>
            <a
              className={`flex relative ${classes.imageWrapper}`}
              aria-label={title}
            >
              {imageElement}
            </a>
          </Link>
        ) : (
          imageElement
        )}
      </div>

      {isVideo && (
        <Link href={link}>
          <a className="flex" aria-label={title}>
            <div className="flex w-full h-full items-center justify-center absolute top-0">
              <PlayIcon className="h-12 w-12 text-white drop-shadow-lg" />
            </div>
            {/* <div className="absolute bottom-0 right-0 bg-black text-white px-1 text-[11px]">
              00:11:53
            </div> */}
          </a>
        </Link>
      )}

      {conf.showCategoryTag && (
        <PostCategoryTag
          categories={categories}
          multiple={conf.showCategoryTagMultiple}
          styles={classes.category}
        />
      )}
    </div>
  );
}
