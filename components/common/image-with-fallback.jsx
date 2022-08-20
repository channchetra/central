import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

function ImageWithFallback({
  src,
  fallbackSrc = '/central/images/APSARA_MEDIA_SERVICES_LOGO-01.png',
  objectFit = 'cover',
  className = '',
  ...attributes
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgObjectFit, setImgObjectFit] = useState(objectFit);
  const [imgClassName, setImgClassName] = useState(className);

  return (
    <Image
      {...attributes}
      objectFit={imgObjectFit}
      src={imgSrc}
      className={imgClassName}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc);
          setImgObjectFit('contain');
          setImgClassName(
            classNames([imgClassName, 'dark:brightness-0 dark:invert-[1]'])
          );
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
        setImgObjectFit('contain');
        setImgClassName(
          classNames([imgClassName, 'dark:brightness-0 dark:invert-[1]'])
        );
      }}
    />
  );
}

export default ImageWithFallback;
