import { parseISO, format, formatDistance, differenceInWeeks } from 'date-fns';
import { km } from 'date-fns/locale';
import ClientOnly from '../client-only';

export default function PostDate({ dateString, className = '', styles }) {
  if (!dateString) {
    return null;
  }

  const classes = {
    wrapper: '',
    date: '',
    ...styles,
  };

  const date = parseISO(dateString);
  const diff = differenceInWeeks(new Date(), date);
  let displayDate = format(date, 'd LLLL yyyy', { locale: km });
  if (diff < 1) {
    // display text if below 1 week past
    displayDate = formatDistance(date, new Date(), {
      addSuffix: true,
      includeSeconds: true,
      locale: km,
    });
  }

  return (
    <ClientOnly>
      <div className={`${className} ${classes.wrapper}`}>
        <div
          dateTime={dateString}
          className={classes.date}
        >{`${displayDate}`}</div>
      </div>
    </ClientOnly>
  );
}
