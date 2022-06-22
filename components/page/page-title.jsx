import { merge } from 'lodash';
import Image from 'next/image';
import CommonLineSeparator from '../common/line-separator';

export default function PageTitle({
  title,
  subtitle,
  image,
  className = '',
  config,
  styles,
}) {
  const conf = {
    showLineSeparator: true,
    ...config,
  };
  const classes = merge(
    {
      wrapper: 'flex',
      innerWrapper: {
        image: 'w-[30%] lg:w-1/4 hidden md:block',
        content: `flex-1 ${image ? 'md:px-5' : ''}`,
      },
      title: 'font-bold text-2xl md:text-3xl mb-3 md:mb-5',
      subtitle: 'text-lg md:text-xl leading-relaxed md:leading-loose',
      image: {
        wrapper: 'relative aspect-[2/3] lg:-mt-20',
        image: '',
      },
      lineSeparator: {
        wrapper: 'mt-5 md:mt-10',
        line: 'border-accent-2',
      },
    },
    styles
  );

  return (
    <div className={`${className} ${classes.wrapper}`}>
      {image && (
        <div className={classes.innerWrapper.image}>
          <div className={classes.image.wrapper}>
            <Image
              layout="fill"
              objectFit="cover"
              alt={title}
              src={image}
              className={classes.image.image}
            />
          </div>
        </div>
      )}
      <div className={classes.innerWrapper.content}>
        {title && <div className={classes.title}>{title}</div>}
        {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
        {conf.showLineSeparator && (
          <div className={classes.lineSeparator.wrapper}>
            <CommonLineSeparator className={classes.lineSeparator.wrapper} />
          </div>
        )}
      </div>
    </div>
  );
}
