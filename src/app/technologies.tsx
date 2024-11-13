import React from "react";
import Technology from "./technology";
export default function technologies() {
  return (
    <div className="h-44 flex flex-col items-center justify-between border-2 border-stone-200 mt-10">
      <div className="flex border-2 border-stone-200 mt-5 ">FAMILIAR TECHNOLOGIES</div>
      <div className="flex flex-row justify-center items-center border-2 border-stone-200">
        <Technology image="Icons/ReactIcon.svg" name={"React"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
      </div>
    </div>
  );
}
