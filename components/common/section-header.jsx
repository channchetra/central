/* eslint-disable no-unused-vars */
import classNames from 'classnames';
import Link from 'next/link';

export default function CommonSectionHeader({
  type = 'primary',
  title,
  link,
  className = 'text-xl dark:text-neutral-50',
  lineColor = 'bg-gray-100',
  lineHighlightColor = 'after:bg-red-900 dark:after:bg-zinc-400 dark:text-neutral-50',
}) {
  const primaryClass = classNames('h-1', 'flex-1', lineColor);
  const secondaryClass = classNames(
    'relative',
    'pb-2',
    "before:content-['']",
    'before:h-0.5',
    'before:absolute',
    'before:top-full',
    'before:left-0',
    'before:w-full',
    lineColor,

    'after:h-0.5',
    'after:absolute',
    'after:top-full',
    'after:left-0',
    'after:w-14',
    lineHighlightColor
  );
  const tertiaryClass = classNames(
    'relative',
    'pl-3',
    "before:content-['']",
    'before:w-1',
    'before:absolute',
    'before:left-0',
    'before:h-full',
    lineColor
  );

  if (type === 'primary') {
    return (
      <div className={`pl-2 sm:pl-0 flex items-center gap-3 ${className}`}>
        {link ? (
          <>
            <Link href={link}>
              <a aria-label={title}>{title}</a>
            </Link>
            <div className={primaryClass} />
          </>
        ) : (
          <>
            <span>{title}</span>
            <div className={primaryClass} />
          </>
        )}
      </div>
    );
  }

  if (type === 'secondary') {
    return (
      <div className={`${className}`}>
        {link ? (
          <Link href={link}>
            <a aria-label={title}>
              <div className={`${secondaryClass}`}>{title}</div>
            </a>
          </Link>
        ) : (
          <div className={`${secondaryClass}`}>{title}</div>
        )}
      </div>
    );
  }

  if (type === 'tertiary') {
    return (
      <div className={`${className}`}>
        {link ? (
          <Link href={link}>
            <a aria-label={title}>
              <div className={`${tertiaryClass}`}>{title}</div>
            </a>
          </Link>
        ) : (
          <div className={`${tertiaryClass}`}>{title}</div>
        )}
      </div>
    );
  }
}
