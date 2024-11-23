import Link from "next/link";
import React from "react";

export default function hero() {
  return (
    <div id="Hero" className="grid grid-cols-5 gap-4 mt-10">
      <div className="w-full h-96 flex col-span-3  flex-col items-end justify-center">
        <div className=" flex flex-col items-center justify-center w-[80%]">
          <div className="flex w-4/5 justify-start h-20 font-bold text-3xl mb-10">
            <h1>Bora Özkoc | Software Engineer</h1>
          </div>
          <div className="flex w-4/5 justify-center h-32 mb-10">
            <p>
              Hi, I’m Bora Özkoc, a Software Engineering graduate from Izmir
              University of Economics with 3 years of development experience.
              I’m currently focusing on mobile development and front-end
              technologies. On this site, you can explore the technologies I use
              and the projects I’ve worked on as I continue to improve my skills
              in these areas.
            </p>
          </div>
          <div>
            <Link
              href={"mailto:boraozkoc@hotmail.com"}
              className="hover:bg-slate-400 btn btn-wide bg-white text-black"
            >
              Contact Me
            </Link>
          </div>
        
        </div>
      </div>
      <div className="w-full h-96 col-span-2 items-center pl-20 flex justify-start">
        <img
          className=" rounded-full h-96"
          src="Icons/ProfilePhoto.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}
