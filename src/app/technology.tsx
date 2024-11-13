import React from "react";

type Props = {
  name: string;
  image: string;
};

export default function Technology(technology: Props) {
  return <div className="flex flex-col items-center m-5">
    <img className=" w-12" src={technology.image} alt="" />
    <div>{technology.name}</div>
    
  </div>;
}
