'use client';
import React from 'react';

export default function JoinUs() {
  return (
    <div className="flex w-full flex-col gap-y-5 sm:gap-y-0 items-center sm:flex-row sm:justify-evenly text-white py-10">
      <div className="bg-[#1E1E1E] border border-white rounded-2xl p-4 flex flex-col justify-between w-64 h-80">
        <div className="font-bold text-2xl">Newsletter</div>
        <div>
          Be the first to know about the next drop and receive our latest news
          from Goat Skins.
        </div>
        <button
          className=" flex items-start  bg-white text-[#1E1E1E]  font-bold py-2 px-4 rounded-xl hover:bg-gray-200
"
        >
          Email
        </button>
      </div>
      <div className="bg-[#1E1E1E] border border-white rounded-2xl px-10 py-4 flex flex-col justify-between w-full sm:w-1/2 h-80">
        <div className="flex w-full text-xl  sm:text-3xl">
          <div>Join the </div>

          <div className="font-bold pl-2 text-xl sm:text-3xl">CLUB</div>
        </div>
        <div>
          Secure your spot for every single drop and automatically qualify for
          exclusive drops and surprise airdrops.
        </div>
        <div className="flex flex-col">
          <div>- Presale Guarantee</div>
          <div>- Free Shipping </div>
          <div>- Exclusive Access </div>
        </div>
        <button
          className=" flex justify-center w-full border-white border  text-white bg-[#1E1E1E]  font-bold py-2 px-4 mx-5 rounded-xl hover:bg-gray-200
"
        >
          Join
        </button>
      </div>
    </div>
  );
}
