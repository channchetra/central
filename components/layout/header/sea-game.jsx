import Image from 'next/image';
import { useEffect, useState } from 'react';

const seaGameLogo = '/central/images/seagame2023.svg';

export default function SeaGame() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2023-05-05 00:00:00') - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / 1000 / 60 / 60 / 24),
        hours: Math.floor((difference / 1000 / 60 / 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const items = [
    { label: 'ថ្ងៃ', value: timeLeft.days },
    { label: 'ម៉ោង', value: timeLeft.hours },
    { label: 'នាទី', value: timeLeft.minutes },
    { label: 'វិនាទី', value: timeLeft.seconds },
  ];

  /** 
   * Option Top Highlight
  */
  // return (
  //   <div className="relative sm:-mx-5 md:-mx-0 flex items-center justify-center md:justify-end py-1 px-[30px] lg:px-[44.5px]">
  //     <div className="w-10 h-7 relative">
  //       <Image
  //         layout="fill"
  //         alt="CAMBODIA 2023 SEA GAME"
  //         src={seaGameLogo}
  //         objectFit="contain"
  //         target="_BLANK"
  //         className="dark:brightness-0 dark:invert-[1]"
  //       />
  //     </div>
  //     <div className="grid gap-[1px] grid-cols-4">
  //       {items.map(({ label, value }) => (
  //         <div className="bg-rose-900 dark:bg-gray-800 text-white dark:text-neutral-50 text-sm md:text-[12px] font-bold italic text-center leading-[10px] py-1 w-10 md:-skew-x-12">
  //           <span>{String(value).padStart(2, 0)}</span> <br />
  //           <span className="text-[9px]">{label}</span>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  /** 
   * Option Right Highlight
  */
  return (
    <div className="sm:fixed right-0 inset-y-1/3 z-10">
      <div className="flex sm:flex-col space-x-[1px] sm:space-x-0 space-y-0 sm:space-y-[1px] bg-white justify-center items-center py-1 sm:py-0">
        <div className="w-12 sm:w-14 h-8 sm:h-12 relative sm:border sm:border-r-0">
          <Image
            layout="fill"
            alt="CAMBODIA 2023 SEA GAME"
            src={seaGameLogo}
            objectFit="contain"
            target="_BLANK"
            className="dark:brightness-0 dark:invert-[1] py-2"
          />
        </div>
        {items.map(({ label, value }) => (
          <div className="bg-rose-900 dark:bg-gray-800 text-white dark:text-neutral-50 text-sm sm:text-md font-bold italic text-center leading-[12px] py-1 sm:py-2 w-12 sm:w-14">
            <span>{String(value).padStart(2, 0)}</span> <br />
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
