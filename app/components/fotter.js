'use client';
import React from 'react';
import Image from 'next/image';

export default function Fotter() {
  return (
    <div className="text-white flex flex-col w-full py-10">
      <div className="flex justify-between w-full">
        <Image
          src="/fotter/fotter_icon.svg"
          alt="icon"
          width={60}
          height={60}
        />
        <div className="flex flex-col">
          <span className="text-zinc-400 text-xs">Product</span>
          <span className="text-xs">Features</span>
          <span className="text-xs">Pricing</span>
          <span className="text-xs">Book a demo</span>
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-400 text-xs">Explore</span>
          <span className="text-xs">Events</span>
          <span className="text-xs">Blog</span>
        </div>
        <div className="flex flex-col">
          <span className="text-zinc-400 text-xs">Company</span>
          <span className="text-xs">About us</span>
          <span className="text-xs">Contact us</span>
        </div>
      </div>
      <div className=" my-10 w-full h-[0.4px] bg-[#1E1E1E]"></div>
      <div className="flex sm:flex-row flex-col gap-y-3 sm:gap-y-0 justify-between w-full">
        <div className="flex gap-x-5">
          <span className="text-xs text-zinc-400">
            © 2022 Welcome. All right reserved.
          </span>
          <span className="text-xs text-zinc-400">Privacy Policy</span>
          <span className="text-xs text-zinc-400">Terms of Service</span>
        </div>
        <div className="flex gap-x-2">
          <Image
            src="/fotter/youtube.svg"
            alt="youtube_icon"
            width={30}
            height={30}
          />

          <Image
            src="/fotter/twitter.svg"
            alt="twitter_icon"
            width={30}
            height={30}
          />
          <Image
            src="/fotter/linkidin.svg"
            alt="linkidin Icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
