import Link from 'next/link';

export default function PostCategoryTag({
  categories = [],
  multiple = true,
  className = '',
  styles,
}) {
  const classes = {
    wrapper: '',
    innerWrapper: 'flex items-center',
    name: 'mr-2 py-1 px-2 text-white bg-rose-900 hover:bg-rose-700 max-w-[8rem] sm:max-w-none truncate',
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
            <div className={classes.name} key={category.databaseId}>
              <Link href={category.uri}>
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
