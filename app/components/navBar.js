'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const menuOpenAnimation = {
    transform: 'translate(0, 0)',
  };

  const menuClosedAnimation = {
    transform: 'translate(-100%, 0)',
  };

  return (
    <nav className="fixed w-full bg-transparent top-0 z-50">
      <div
        className="fixed w-full h-full gap-y-10  bg-black z-50 flex flex-col justify-center text-center"
        style={{
          transition: 'transform 0.5s ease-in-out',
          ...(isOpen ? menuOpenAnimation : menuClosedAnimation),
        }}
      >
        <button
          className={`fixed top-0 right-0 h-16 w-16  z-60 ${
            isOpen ? 'block' : 'hidden'
          }`}
          onClick={handleCloseClick}
        >
          <FaTimes className="text-white text-3xl font-bold" />
        </button>
        <ul className={`flex flex-col justify-between w-full  gap-y-10 `}>
          <li className="mr-4">
            <Link href="">
              <span className="text-white font-light font-main hover:text-gray-300">
                Drops
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="text-white font-light font-main hover:text-gray-300">
                collections
              </span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span className="text-white font-light font-main hover:text-gray-300">
                Quality Products
              </span>
            </Link>
          </li>
        </ul>
        <div className="justify-center flex flex-col gap-y-10">
          <span className="text-white  font-bold font-abc text-center">
            Sign In
          </span>
          <div className="flex justify-center">
            <Link href="">
              <Image
                src="/shopping_cart.svg"
                className="w-5 h-5 text-center"
                alt="Shop icon"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="">
            <span className="font-bold text-2xl text-white  font-abc">
              Goat skins
            </span>
          </Link>
          <ul
            className={`hidden  md:flex justify-between w-1/2 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="mr-4">
              <Link href="">
                <span className="text-white font-thin font-main hover:text-gray-300">
                  Drops
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span className="text-white font-light font-main hover:text-gray-300">
                  collections
                </span>
              </Link>
            </li>
            <li>
              <Link href="">
                <span className="text-white font-light font-main hover:text-gray-300">
                  Quality Products
                </span>
              </Link>
            </li>
          </ul>
          <div className="justify-between hidden  md:flex">
            <span className="text-white mr-5 font-abc font-bold">Sign In</span>
            <Link href="">
              <Image
                src="/shopping_cart.svg"
                className="w-5 h-5"
                alt="Shop icon"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <button className="block md:hidden w-10" onClick={handleMenuClick}>
            <span className="text-white text-3xl font-bold">&#9776;</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
