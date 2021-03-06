import Link from 'next/link';

export default function PostCategoryTag({
  categories,
  multiple = true,
  className = '',
  styles,
}) {
  const classes = {
    wrapper: '',
    innerWrapper: 'flex items-center',
    name: 'text-white bg-rose-900 hover:bg-rose-700 px-1 max-w-[8rem] sm:max-w-none truncate mr-2',
    ...styles,
  };

  if (!categories.length) {
    return null;
  }

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <div className={classes.innerWrapper}>
        {multiple ? (
          categories.map((category) => (
            <div className={classes.name}>
              <Link href={category.uri} key={category.databaseId}>
                <a aria-label={category.name}>{category.name}</a>
              </Link>
            </div>
          ))
        ) : (
          <Link href={categories[0].uri}>
            <a aria-label={categories[0].name}>
              <div className={classes.name}>{categories[0].name}</div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
