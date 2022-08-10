import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { find, map } from 'lodash';
import { parseISO, format } from 'date-fns';
import { km } from 'date-fns/locale';
import Link from 'next/link';

export default function HomeSlide({ posts = [] }) {
  if (!posts.length) {
    return null;
  }

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = map(posts, (post) => {
    const { databaseId, title, featuredImage, author, date } = post;
    const image =
      find(featuredImage.mediaDetails.sizes, ['name', 'large']) || {};
    return {
      databaseId,
      title,
      src: image.sourceUrl,
      author: author.name,
      date: format(parseISO(date), 'd LLLL yyyy', { locale: km }),
    };
  }).slice(0, 5);

  return (
    <div className="relative hidden md:block">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.databaseId}>
            <Link href={`/detail/${slide.databaseId}`}>
              <a aria-label={slide.title}>
                <div className="relative pb-[40%]">
                  <Image
                    src={slide.src}
                    layout="fill"
                    objectFit="cover"
                    height="500"
                    width="1200"
                  />
                  <h3 className="absolute bottom-10 md:bottom-14 inset-x-20 md:inset-x-[20%] z-10 mx-auto text-center bg-black/30 py-2 sm:py-3 text-white">
                    <span className="mr-3 md:mr-6">
                      អត្ថបទដោយ៖ {slide.author}
                    </span>
                    <span>ចេញផ្សាយថ្ងៃ៖ {slide.date}</span>
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
