import Image from 'next/image';
import Link from 'next/link';

export default function PostAuthor({
  author,
  className = '',
  styles,
  config = {},
}) {
  if (!author) {
    return null;
  }

  const { firstName, lastName, name, amsAvatar, slug } = author || {};
  const authorName = name || `${firstName} ${lastName}` || null;
  const conf = {
    showAvatar: true,
    showName: true,
    ...config,
  };
  const classes = {
    wrapper: '',
    avatar: '',
    name: '',
    ...styles,
  };

  return (
    <div className={`${className} ${classes.wrapper}`}>
      {conf.showAvatar && (
        <div className={classes.avatar}>
          <Image
            src={amsAvatar}
            layout="fill"
            className="rounded-full"
            alt={authorName}
          />
        </div>
      )}
      {conf.showName && (
        <Link href={`/author/${slug}`}>
          <a aria-label={authorName}>
            <div className={classes.name}>{authorName}</div>
          </a>
        </Link>
      )}
    </div>
  );
}
