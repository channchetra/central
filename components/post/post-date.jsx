import { parseISO, format } from 'date-fns'

export default function PostDate({ dateString, className = '', styles }) {
  const date = parseISO(dateString)
  const classes = {
    wrapper: '',
    date: '',
    ...styles
  }

  return <div className={`${className} ${classes.wrapper}`}>
    <div dateTime={dateString} className={classes.date}>{format(date, 'LLLL	d, yyyy')}</div>
  </div>
}
