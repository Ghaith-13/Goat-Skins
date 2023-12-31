'use client';
import React from 'react';
import Image from 'next/image';

export default function LicensedProducts() {
  const Images = [
    '/licensed/dc.svg',
    '/licensed/looney_tones.svg',
    '/licensed/game_of_thrones.svg',
    '/licensed/harry_potter.svg',
    '/licensed/friends.svg',
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-white font-bold text-lg sm:text-xl pb-5">
        Officially Licensed Products
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-x-10">
        {Images.map((image) => {
          return (
            <Image
              src={image}
              //   className=""
              alt="icon"
              width={150}
              height={150}
            />
          );
        })}
      </div>
    </div>
  );
}
