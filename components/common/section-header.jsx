/* eslint-disable no-unused-vars */
import classNames from 'classnames';
import Link from 'next/link';

export default function CommonSectionHeader({
  type = 'primary',
  title,
  link,
  className = 'text-xl dark:text-neutral-50',
  lineColor = 'before:bg-gray-100',
  lineHighlightColor = 'after:bg-red-900 after:bg-zinc-400 dark:text-neutral-50',
}) {
  const primaryClass = classNames(
    'relative',
    'pr-5',
    "before:content-['']",
    'before:block',
    'before:h-1',
    'before:absolute',
    'before:left-full',
    'before:top-2/4',
    'before:w-screen',
    'dark:text-neutral-50',
    lineColor
  );
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
      <div className={`overflow-hidden ${className}`}>
        {link ? (
          <Link href={link}>
            <a aria-label={title}>
              <span className={primaryClass}>{title}</span>
            </a>
          </Link>
        ) : (
          <span className={primaryClass}>{title}</span>
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
