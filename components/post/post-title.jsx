import Link from 'next/link'
import CommonLineClamp from '../common/line-clamp'

export default function PostTitle({ title, link, line = null, className = '', styles }) {

  const classes = {
    wrapper: '',
    title: '',
    ...styles,
  }

  return (
    <div className={`${className || ``} ${classes.wrapper}`}>
      <h3 className={classes.title}>
        {link ? (
          <Link href={link}>
            <a aria-label={title}><CommonLineClamp content={title} line={line} /></a>
          </Link>
        ) : (
          <CommonLineClamp content={title} line={line} />
        )}
      </h3>
    </div>
  )
}
