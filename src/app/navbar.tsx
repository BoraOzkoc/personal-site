import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <div className="fixed w-full flex items-center justify-between ">
      <div className="container mx-auto h-16 items-center flex flex-row justify-between bg-[#0E1729] bg-opacity-95">
        <img className="w-10 h-10" src="Icons/EmojiPhoto.png" alt="logo" />
        <div>
          <Link href={"#Hero"} className=" scroll-smooth duration-300 transition-all hover:scale-110 m-6 btn btn-ghost ">About</Link>
          <Link href={"#Projects"} className=" hover:scale-110 m-6 btn btn-ghost ">
            Projects
          </Link>
          <Link href={"#Footer"} className="hover:scale-110 m-6 btn btn-ghost ">Contact</Link>
        </div>
      </div>
    </div>
  );
}
