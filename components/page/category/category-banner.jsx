import { merge } from "lodash";
import Image from "next/image";

export default function CategoryBanner({ image, className = '', styles }) {

  if (!image) {
    return (null)
  }

  const classes = merge(
    {
      wrapper: 'relative w-full aspect-[11/4] md:aspect-[11/2]',
      image: '',
    },
    styles
  );

  return  <div className={`${className} ${classes.wrapper}`}>
    <Image
      layout="fill"
      objectFit="cover"
      src={image}
      className={classes.image}
    />
  </div>
}
