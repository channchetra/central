import HTMLReactParser from 'html-react-parser';
import merge from 'lodash/merge';
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
      title: 'font-bold text-2xl lg:text-3xl px-3 sm:px-0',
      description:
        'text-lg lg:text-xl leading-relaxed lg:leading-loose mt-3 lg:mt-5 px-3 sm:px-0',
      image: {
        wrapper: 'category-title relative aspect-[2/3] lg:-mt-20',
        image: '',
      },
      lineSeparator: 'border-b pb-5 md:pb-7',
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
          {description && (
            <div className={classes.description}>
              {HTMLReactParser(description)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
