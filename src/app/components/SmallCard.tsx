import React from "react";
import Image from "next/image";

function SmallCard(props: any) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-20 ease-out">
      <div className="relative h-16 w-16">
        <Image
          src={props.img}
          layout="fill"
          alt="image"
          className="rounded-lg"
        />
      </div>

      <div>
        <h1>{props.location}</h1>
        <h2 className="text-gray-500">{props.distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
