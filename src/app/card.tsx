import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  name: string;
  description: string;
  link:string;
};

export default function card(properties: Props) {
  return (
    <Link href={properties.link} className=" hover:scale-110 duration-300 h-full w-72 flex flex-col justify-between items-center rounded-lg overflow-hidden shadow-xl shadow-[#0d0d14] bg-[#182544]">
      <div className=" text-[#fff] underline p-3 font-bold text-xl">
        {properties.name}
      </div>
      <img className="h-64" src={properties.image} alt="" />
      <div className="text-[#fff] text-center text-wrap p-5">{properties.description}</div>
    </Link>
  );
}
