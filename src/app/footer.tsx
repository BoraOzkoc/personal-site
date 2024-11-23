import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div id="Footer" className=" h-auto flex justify-center items-center">
      <div className="h-full w-1/2  flex justify-center items-center">
        <div className="w-3/4 h-3/4  flex flex-col justify-between my-10">
          <h1 className=" font-bold text-3xl mt-3">{`Let's Talk`}</h1>
          <p className="mb-6">
            Got a project in mind or just want to connect? I’m always open to
            discussing new ideas, collaborations, or opportunities. Feel free to
            reach out if you’d like to chat about technology, my projects, or
            potential work together. I’d love to hear from you!
          </p>
          <Link
            href={"mailto:boraozkoc@hotmail.com"}
            className="hover:bg-slate-400 hover:scale-110 btn btn-wide bg-white text-black"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className=" h-auto w-1/2  grid grid-flow-col grid-cols-3  p-12">
        <Link
          href="https://linkedin.com/in/bora-ozkoc"
          className=" justify-center hover:scale-110 bg-none flex w-16 h-full"
        >
          <img className="w-16 h-full p-1" src="Icons/Linkedin.svg" alt="" />
        </Link>
        <Link
          href="https://github.com/BoraOzkoc"
          className="justify-center hover:scale-110 bg-none flex w-16 h-full"
        >
          <img className="w-16 h-full p-1" src="Icons/GitHub.svg" alt="" />
        </Link>
        <Link
          href="http://apps.apple.com/developer/bora-ozkoc/id1742469862"
          className="justify-center hover:scale-110 bg-none flex w-16 h-full"
        >
          <img className="w-16 h-full p-1" src="Icons/app-store.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
