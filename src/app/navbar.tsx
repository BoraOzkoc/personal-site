import React from "react";

export default function navbar() {
  return (
    <div className="flex items-center justify-between border-2 border-rose-500">
        <img className="w-10" src="https://fastly.picsum.photos/id/157/200/200.jpg?hmac=WcY71o73tg2eJc3TmpgdISkTe-p8ZGn-A3Q3jh2h7T4" alt="logo" />
      <div>
        <button className=" m-6 btn">Button</button>
        <button className=" m-6 btn">Button</button>
        <button className=" m-6 btn">Button</button>
        <button className=" m-6 btn">Button</button>
      </div>
    </div>
  );
}
