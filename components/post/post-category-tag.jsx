import Link from 'next/link'

export default function PostCategoryTag({ categories, multiple = true, className = '', styles }) {
  const classes = {
    wrapper: '',
    innerWrapper: 'flex items-center',
    name: 'text-white bg-rose-900 hover:bg-rose-700 px-1 mr-1',
    ...styles,
  }

  if (!categories.length) {
    return null;
  }

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <div className={classes.innerWrapper}>
        {multiple ? (
          categories.map((category) => (
            <Link href="#" key={category.databaseId}>
              <a aria-label={category.name}>
                <div className={classes.name}>{category.name}</div>
              </a>
            </Link>
          ))
        ) : (
          <Link href="#">
            <a aria-label={categories[0].name}>
              <div className={classes.name}>{categories[0].name}</div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
