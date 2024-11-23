import React from "react";
import Technology from "./technology";
export default function technologies() {
  return (
    <div id="Technologies" className="h-44 flex flex-col items-center justify-between  mt-10">
      <div className="divider flex mt-5 ">TECH STACK</div>
      <div className="flex flex-row justify-center items-center">
        <Technology image="Icons/ReactIcon.svg" name={"React"} />
        <Technology image="Icons/SwiftIcon.svg" name={"Swift"} />
        <Technology image="Icons/Next.js.svg" name={"Next.js"} />
        <Technology image="Icons/CSharp.svg" name={"C#"} />
        <Technology image="Icons/Unity.svg" name={"Unity"} />
        <Technology image="Icons/JavaScript.svg" name={"JavaScript"} />
        <Technology image="Icons/TypeScript.svg" name={"TypeScript"} />
      </div>
    </div>
  );
}
