import { merge } from 'lodash';
import Image from 'next/image';

export default function CategoryTitle({
  title,
  description,
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
        content: `flex-1 ${image ? 'md:pl-5' : ''}`,
      },
      title: 'font-bold text-2xl md:text-3xl',
      description:
        'text-lg md:text-xl leading-relaxed md:leading-loose mt-3 md:mt-5',
      image: {
        wrapper: 'relative aspect-[2/3] lg:-mt-20',
        image: '',
      },
      lineSeparator: 'border-b pb-5 md:pb-10',
    },
    styles
  );

  if (!conf.showLineSeparator) {
    classes.lineSeparator = '';
  }

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
      <div className={`${classes.innerWrapper.content}`}>
        <div className={classes.lineSeparator}>
          {title && <div className={classes.title}>{title}</div>}
          {description && <div className={classes.description}>{description}</div>}
        </div>
      </div>
    </div>
  );
}
