'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex md:flex-row flex-col w-full py-28 sm:justify-between">
      <Image
        src="/teams_t_shirts.svg"
        alt="Teams_t_shirts"
        className="w-full md:w-1/2 "
        width={600}
        height={200}
      />
      <div className="flex flex-col justify-center text-center sm:text-start w-full md:w-1/2 gap-y-14">
        {/* first section for write */}
        <div className="flex flex-col gap-y-5">
          <div className="text-white font-main text-lg sm:text-3xl">
            High-quality Fashion
          </div>
          <div className="flex gap-x-5 justify-center sm:justify-start">
            <div className="relative">
              <span className="absolute inset-3 md:inset-5 bg-zinc-400 w-16  md:w-32 h-1"></span>
              <span className="relative  text-zinc-400 font-main text-lg sm:text-3xl">
                sports
              </span>
              <span className="absolute top-6 -left-4 -translate-y-50% text-[#FFE500] font-abc text-lg sm:text-4xl">
                street
              </span>
            </div>
            <div className="text-white font-main text-lg sm:text-3xl">Wear</div>
          </div>
        </div>
        {/* second section */}
        <div className="text-white text-sm sm:text-base w-full sm:w-2/3 ">
          Sports jerseys are more than just that. Introducing the cutting-edge
          fashion sportswear made for the streets.
        </div>
        {/* third section */}
        <div className="flex justify-between w-full items-end ">
          <button className="bg-transparent border text-white  border-white rounded-lg  w-40 h-2/3">
            CTA
          </button>
          <div className="flex flex-col ">
            <span className="text-zinc-300 text-[8px] sm:text-xs font-main sm:text-left text-right">
              Hypersweat Technology
            </span>
            <span className="text-zinc-300 text-[8px] sm:text-xs font-main sm:text-left text-right">
              Hypersweat Technology
            </span>
            <span className="text-zinc-300 text-[8px] sm:text-xs font-main sm:text-left text-right">
              Anthracite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
