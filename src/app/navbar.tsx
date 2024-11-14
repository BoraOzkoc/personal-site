import React from "react";

export default function navbar() {
  return (
    <div className="fixed w-full flex items-center justify-between ">
      <div className="container mx-auto h-16 items-center flex flex-row justify-between bg-[#0E1729] bg-opacity-95">
        <img
          className="w-10 h-10"
          src="https://fastly.picsum.photos/id/157/200/200.jpg?hmac=WcY71o73tg2eJc3TmpgdISkTe-p8ZGn-A3Q3jh2h7T4"
          alt="logo"
        />
        <div>
          <button className=" m-6 btn btn-ghost ">Button</button>
          <button className=" m-6 btn btn-ghost ">Button</button>
          <button className=" m-6 btn btn-ghost ">Button</button>
          <button className=" m-6 btn btn-ghost ">Button</button>
        </div>
      </div>
    </div>
  );
}
