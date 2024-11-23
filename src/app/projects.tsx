import React from "react";
import Card from "./card";
import Link from "next/link";

export default function projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col justify-center items-center mt-5">
      <div className="divider ">PROJECTS</div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-full grid grid-cols-2 content-center w-3/5  mt-10 mb-10">
          <div className="h-full w-full justify-center items-center flex p-6">
            <Card
              image="https://github.com/BoraOzkoc/SwiftUiMapApp/blob/main/Ekran%20Kaydı%202024-08-23%2022.07.03.gif?raw=true"
              name="Reconstructed Rome"
              description="Simulation game created with Unity"
              link="https://github.com/BoraOzkoc/SwiftUiMapApp"
            />
          </div>
          <div className="h-full w-full justify-center items-center flex p-6">
            <Card
              image="https://raw.githubusercontent.com/BoraOzkoc/Calculator/refs/heads/main/Calculator%20App%20Video-2.gif"
              name="Merging Dragons"
              description="Runner game created with Unity"
              link="https://github.com/BoraOzkoc/Calculator"
            />
          </div>
          <div className="h-full w-full justify-center items-center flex p-6">
            <Card
              image="Icons/MergingDragons.png"
              name="Merging Dragons"
              description="Runner game created with Unity"
              link="https://apps.apple.com/tr/app/merging-dragons/id6502720658"
            />
          </div>
          <div className="h-full w-full justify-center items-center flex p-6">
            <Card
              image="Icons/ReconstructedRome.png"
              name="Reconstructed Rome"
              description="Simulation game created with Unity"
              link="https://apps.apple.com/tr/app/reconstructedrome/id6504153435?l=tr"
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
