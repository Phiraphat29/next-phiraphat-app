import React from "react";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl">About </span>
        <span className="text-orange-500 text-2xl">Me</span>
        <br />
        <br />
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-white">
            I find fulfillment in blending visual design with the power of
            coding to create meaningful experiences.{" "}
          </span>
          <br />
        </h1>
        <span className="text-white/50 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, quibusdam dolor voluptatum nesciunt error sit dolorum
          ratione aperiam iste perspiciatis.
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}
