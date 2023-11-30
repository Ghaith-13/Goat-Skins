'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        style={{
          '--swiper-pagination-color': '#ffffff',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-width': '50px',
          '--swiper-pagination-bullet-height': '5px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
          '--swiper-pagination-bullet-border-radius': '5px',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('/slider.png')`,
            }}
            className="bg-cover bg-center bg-no-repeat  h-screen  w-full  flex "
          >
            <div className="w-full md:w-2/3 h-1/3  justify-end  flex-col text-center flex">
              <div className="flex justify-center gap-x-4 gap-y-4">
                <span className="font-bold text-2xl sm:text-4xl md:text-7xl font-abc text-white font-monument">
                  The{'  '}
                </span>
                <div className="font-bold text-2xl sm:text-4xl md:text-7xl font-abc text-[#FFE500] font-monument  ">
                  Goat{'  '}
                </div>
                <span className="font-bold text-2xl sm:text-4xl md:text-7xl font-abc text-white font-monument">
                  Has{' '}
                </span>
              </div>
              <div className="font-bold text-2xl sm:text-4xl md:text-7xl font-abc text-white font-monument flex justify-center">
                Arrived{''}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            style={{
              backgroundImage: `url('/slider.png')`,
              alignItems: 'center',
            }}
            className="bg-cover bg-center bg-no-repeat  h-screen  w-full justify-end   flex flex-col"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            style={{
              backgroundImage: `url('/slider.png')`,
              alignItems: 'center',
            }}
            className="bg-cover bg-center bg-no-repeat  h-screen  w-full justify-end   flex flex-col"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div
            style={{
              backgroundImage: `url('/slider.png')`,
              alignItems: 'center',
            }}
            className="bg-cover bg-center bg-no-repeat  h-screen  w-full justify-end   flex flex-col"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
