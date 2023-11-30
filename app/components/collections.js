'use client';
import React from 'react';
import { Swiper, SwiperSlide, Breakpoints } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
export default function Collections() {
  const posters = [
    { name: 'DC Heroes', imgUrl: '/collections/dc_heros.svg' },
    { name: 'Boxing Legends', imgUrl: '/collections/boxing.svg' },
    {
      name: 'Harry Potter',
      imgUrl: '/collections/harry_potter_poster.svg',
    },
    { name: 'Ouympic Icons', imgUrl: '/collections/olympic.svg' },
    { name: 'DC Heroes', imgUrl: '/collections/dc_heros.svg' },
    { name: 'Boxing Legends', imgUrl: '/collections/boxing.svg' },
    {
      name: 'Harry Potter',
      imgUrl: '/collections/harry_potter_poster.svg',
    },
    { name: 'Ouympic Icons', imgUrl: '/collections/olympic.svg' },
    { name: 'DC Heroes', imgUrl: '/collections/dc_heros.svg' },
    { name: 'Boxing Legends', imgUrl: '/collections/boxing.svg' },
    {
      name: 'Harry Potter',
      imgUrl: '/collections/harry_potter_poster.svg',
    },
    { name: 'Ouympic Icons', imgUrl: '/collections/olympic.svg' },
  ];
  const breakpoints = {
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="flex flex-col w-full py-10">
      <div className="text-white text-xl font-bold pb-10">Collections</div>
      <div className="w-full ">
        <Swiper
          grabCursor={true}
          slidesPerView="1"
          visibilityFullFit="true"
          loop="true"
          breakpoints={breakpoints}
        >
          {posters.map((poster) => {
            return (
              <SwiperSlide>
                <div
                  style={{
                    backgroundImage: `url(${poster.imgUrl})`,
                  }}
                  className="m-auto bg-cover bg-center bg-no-repeat  border border-gray-300 rounded-md  shadow-inner shadow-white p-4 w-56 h-96 flex justify-start items-end font-bold text-white"
                >
                  {poster.name}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full flex justify-end font-bold text-white pt-2">
        More
      </div>
    </div>
  );
}
