import React from "react";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white">Lets Work </span>
        <span className="text-orange-500">Together !</span>
        <br />
        <br />
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-white">Hi From </span>
          <span className="text-orange-500">Phiraphat</span>
          <span className="text-white">,</span>
          <br />
          <span className="text-white">
            Interactice Designer & Fullstack <br />
            Web Developer
          </span>
        </h1>
        <span className="text-white/50 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, quibusdam dolor voluptatum nesciunt error sit dolorum
          ratione aperiam iste perspiciatis.
        </span>
        <br />
        <br />
        <div className="flex gap-3">
          <div className="flex flex-col">
            <span className="text-orange-500 text-4xl">3+</span>
            <br />
            <span className="text-white/50 text-sm">
              Years of <br /> Experienced
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-orange-500 text-4xl">10+</span>
            <br />
            <span className="text-white/50 text-sm">
              Projects <br /> Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
