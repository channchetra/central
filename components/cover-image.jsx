import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      layout="fill"
      objectFit="center"
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="relative sm:mx-0 pb-[56%]">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
