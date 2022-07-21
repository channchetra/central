import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative hidden md:block">
      <Slider {...settings}>
        <div className="relative pb-[40%]">
          <Image
            src="https://ams.com.kh/central/wp-content/uploads/2022/07/3.-Flyer-1600x1200-1-7-1024x683.jpg"
            layout="raw"
            height="500"
            width="1200"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <h3 className="absolute bottom-10 md:bottom-14 inset-x-20 md:inset-x-[20%] z-10 mx-auto text-center bg-black/30 py-2 sm:py-3">
            <span className="mr-3 md:mr-6">អត្ថបទដោយ៖ AMS</span>
            <span>ចេញផ្សាយថ្ងៃ៖ 18 កក្កដា 2022</span>
          </h3>
        </div>
        <div className="relative pb-[40%]">
          <Image
            src="https://ams.com.kh/central/wp-content/uploads/2022/07/3.-Flyer-1600x1200-1-6.jpg"
            layout="raw"
            height="500"
            width="1200"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <h3 className="absolute bottom-10 md:bottom-14 inset-x-[20%] z-10 mx-auto text-center bg-black/30 py-3">
            <span className="mr-3 md:mr-6">អត្ថបទដោយ៖ AMS</span>
            <span>ចេញផ្សាយថ្ងៃ៖ 18 កក្កដា 2022</span>
          </h3>
        </div>
        <div className="relative pb-[40%]">
          <Image
            src="https://asset.ams.com.kh/central/media/AVIVoiceEp71-Flyer.jpg"
            layout="raw"
            height="500"
            width="1200"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <h3 className="absolute bottom-10 md:bottom-14 inset-x-[20%] z-10 mx-auto text-center bg-black/30 py-3">
            <span className="mr-3 md:mr-6">អត្ថបទដោយ៖ AMS</span>
            <span>ចេញផ្សាយថ្ងៃ៖ 18 កក្កដា 2022</span>
          </h3>
        </div>
        <div className="relative pb-[40%]">
          <Image
            src="https://asset.ams.com.kh/central/media/AVIVoiceEP68-Flyer.jpg"
            layout="raw"
            height="500"
            width="1200"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <h3 className="absolute bottom-10 md:bottom-14 inset-x-[20%] z-10 mx-auto text-center bg-black/30 py-3">
            <span className="mr-3 md:mr-6">អត្ថបទដោយ៖ AMS</span>
            <span>ចេញផ្សាយថ្ងៃ៖ 18 កក្កដា 2022</span>
          </h3>
        </div>
      </Slider>
    </div>
  );
}
