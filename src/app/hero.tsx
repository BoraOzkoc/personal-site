import React from "react";

export default function hero() {
  return (
    <div className="flex-row flex justify-center border-2 border-gold-500 mt-10">
      <div className="w-[40vw] h-96 flex flex-col items-end justify-center border-2 border-blue-500">
        <div className=" flex flex-col items-center justify-center w-[80%] border-2 border-green-500">
          <div className="flex w-4/5 justify-center h-20 border-2 border-orange-500">
            header
          </div>
          <div className="flex w-4/5 justify-center h-32 border-2 border-orange-500">
            paragraph
          </div>
          <div className="border-2 border-rose-500">
            <button className=" btn btn-wide">Contact</button>
          </div>
        </div>
      </div>
      <div className="w-[40vw] h-96 items-center pl-20 flex justify-start border-2 border-rose-500">
        <img
          className="w-96 h-96"
          src="https://fastly.picsum.photos/id/157/200/200.jpg?hmac=WcY71o73tg2eJc3TmpgdISkTe-p8ZGn-A3Q3jh2h7T4"
          alt=""
        />
      </div>
    </div>
  );
}
