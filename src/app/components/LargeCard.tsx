import React from "react";
import Image from "next/image";

function LargeCard(props: any) {
  return (
    <section className="relative py-5 cursor-pointer">
      <div className="relative h-96 w-min-[300px] rounded-2xl">
        <Image src={props.img} alt="err" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{props.title}</h3>
        <p>{props.description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {props.buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
