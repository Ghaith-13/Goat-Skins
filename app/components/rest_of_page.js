'use client';

import React from 'react';
import About from './about';
import UpComingDrops from './upcoming_drops';
import LicensedProducts from './licensed_product';
import Collections from './collections';
import JoinUs from './join';
import Fotter from './fotter';
export default function RestOfSection() {
  return (
    <div
      style={{
        backgroundImage: `url('/background.png')`,
        alignItems: 'center',
      }}
      className="bg-cover bg-center bg-no-repeat bg-black    w-full    flex flex-col px-3 sm:px-10 "
    >
      <About />
      <UpComingDrops />
      <LicensedProducts />
      <Collections />
      <JoinUs />
      <Fotter />
    </div>
  );
}
