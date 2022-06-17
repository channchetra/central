import { map } from 'lodash'
import Link from 'next/link'

export default function PostCategoryTag({ categories, multiple = true, className = '', styles }) {
  const { edges = [] } = categories || {}
  const items = map(edges, 'node')
  const classes = {
    wrapper: '',
    innerWrapper: 'flex items-center',
    name: 'text-white bg-rose-900 hover:bg-rose-700 px-1 mr-1',
    ...styles,
  }

  if (!items.length) {
    return (null)
  }

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <div className={classes.innerWrapper}>
        { multiple ?
          items.map((category) => (
            <Link href="#">
              <a aria-label={category.name}>
                <div className={classes.name}>{category.name}</div>
              </a>
            </Link>
          )) : 
          <Link href="#">
            <a aria-label={items[0].name}>
              <div className={classes.name}>{items[0].name}</div>
            </a>
          </Link>
        }
      </div>
    </div>
  )
}
