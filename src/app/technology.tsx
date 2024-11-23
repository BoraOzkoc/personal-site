import React from "react";

type Props = {
  name: string;
  image: string;
};

export default function Technology(technology: Props) {
  return (
    <div className="flex flex-col justify-center items-center m-10 w-24 h-24">
      <img className=" w-12" src={technology.image} alt="" />
      <div className="mt-2">{technology.name}</div>
    </div>
  );
}
