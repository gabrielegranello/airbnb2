import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb logo"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 outline-none flex-grow bg-transparent text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-0.5 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
