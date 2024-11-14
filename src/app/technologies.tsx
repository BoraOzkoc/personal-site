import React from "react";
import Technology from "./technology";
export default function technologies() {
  return (
    <div className="h-44 flex flex-col items-center justify-between  mt-10">
      <div className="divider divider-info flex mt-5 ">TECH STACK</div>
      <div className="flex flex-row justify-center items-center">
        <Technology image="Icons/ReactIcon.svg" name={"React"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
      </div>
    </div>
  );
}
