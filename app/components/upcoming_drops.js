'use client';
import React from 'react';
import Image from 'next/image';

export default function UpComingDrops() {
  const cardInfo = [
    {
      name: 'Drop Name',
      havePrice: true,
      haveButton: true,
      imageUrl: '/Australia_yellow.svg',
    },
    {
      name: 'Drop Name',
      havePrice: false,
      haveButton: false,
      imageUrl: '/Australia_yellow.svg',
    },
    {
      name: 'Drop Name',
      havePrice: false,
      haveButton: false,
      imageUrl: '/Australia_yellow.svg',
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-y-10 py-10 w-full">
      <div className="text-white font-bold text-3xl">Upcoming Drops</div>
      <div className=" flex gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-10 flex-col md:flex-row">
        {cardInfo.map((card) => (
          <div
            className={
              'rounded-lg p-4  shadow-[0_0px_25px_-2px_rgba(0,0,0,0.3)] shadow-zinc-300 hover:shadow-xl bg-[#1E1E1E] w-56 sm:w-72 '
            }
          >
            <Image
              src={card.imageUrl}
              className="w-full h-60 object-cover"
              alt="Image"
              width={40}
              height={40}
            />

            <div className="mt-4 text-center text-white text-lg font-bold pb-3">
              <p>{card.name}</p>
              {card.havePrice ? (
                <>
                  <p className="font-thin text-sm">Price</p>
                  <p className="font-thin text-sm">Suddenly</p>
                </>
              ) : (
                <p className="font-thin text-sm pt-3">Price</p>
              )}
            </div>
            <div className="flex items-center justify-center">
              {card.haveButton ? (
                <button
                  className={
                    'px-2 bg-[#0EAF00] border-2 border-solid border-[#24FF11] rounded-2xl  text-white font-bold hover:bg-[#24FF11] hover:text-[#0EAF00]'
                  }
                >
                  ON SALE
                </button>
              ) : (
                <p className="text-white font-bold pt-4">Date</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-white">More</div>
    </div>
  );
}
