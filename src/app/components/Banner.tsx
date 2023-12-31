import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Image banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm;text-large">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
