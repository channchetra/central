import { PlayIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
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
    width: 2000,
    height: 1000,
    showCategoryTag: false,
    showCategoryTagMultiple: false,
    ...config,
  };

  const classes = {
    wrapper: '',
    image: classNames('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': link,
    }),
    category: null,
    ...styles,
  };

  const imageElement = (
    <Image
      width={conf.width}
      height={conf.height}
      objectFit="cover"
      alt={title}
      src={image?.node.sourceUrl}
      className={classes.image}
    />
  );
  return (
    <div className={`${className} ${classes.wrapper}`}>
      {link ? (
        <Link href={link}>
          <a className="flex" aria-label={title}>
            {imageElement}
          </a>
        </Link>
      ) : (
        imageElement
      )}

      {isVideo && (
        <Link href={link}>
          <a className="flex" aria-label={title}>
            <div className="flex w-full h-full items-center justify-center absolute top-0">
              <PlayIcon className="h-12 w-12 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 bg-black text-white px-1 text-[11px]">
              00:11:53
            </div>
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