import CommonLineClamp from '../common/line-clamp'

export default function PostExcerpt({ excerpt, line, className = '', styles }) {

  const classes = {
    wrapper: '',
    excerpt: '',
    ...styles,
  }

  return (
    <div className={`${className} ${classes.wrapper}`}>
      <div className={classes.excerpt}>
        <CommonLineClamp content={excerpt} line={line} />
      </div>
    </div>
  )
}
