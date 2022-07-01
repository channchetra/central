import React, { useState } from 'react';
import Image from 'next/image';

function ImageWithFallback({
  src,
  fallbackSrc = '/images/APSARA_MEDIA_SERVICES_LOGO-01.png',
  objectFit = 'cover',
  ...attributes
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgObjectFit, setImgObjectFit] = useState(objectFit);

  return (
    <Image
      {...attributes}
      objectFit={imgObjectFit}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc);
          setImgObjectFit('contain');
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
        setImgObjectFit('contain');
      }}
    />
  );
}

export default ImageWithFallback;
