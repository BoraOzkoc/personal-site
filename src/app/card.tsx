import React from "react";

type Props = {
  image: string;
  name: string;
  description: string;
};

export default function card(properties: Props) {
  return (
    <div className="h-full w-72 flex flex-col justify-between items-center rounded-lg overflow-hidden shadow-xl shadow-[#0d0d14] bg-[#182544]">
      <div className=" text-[#fff] underline p-3 font-bold text-xl">
        {properties.name}
      </div>
      <img className="h-full w-32" src={properties.image} alt="" />
      <div className="text-[#fff] text-wrap p-5">{properties.description}</div>
    </div>
  );
}
