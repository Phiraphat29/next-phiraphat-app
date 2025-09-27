import React from "react";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl font-bold">My </span>
        <span className="text-orange-500 text-2xl font-bold">Skills</span>
        <br />
        <br />
        <div className="flex flex-col gap-2">
          {/* div of each skill react 60, figma 85, html/css 80, nextjs 80, javascript 60, github 90 */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-react text-[80px] text-orange-500" />
            <h1 className="text-orange-500 text-2xl font-bold">60%</h1>
          </div>
          <p className="text-white text-xl  text-center">React</p>
          {/* ----------------- */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-figma text-[80px] text-orange-500" />
          </div>
          <p className="text-white text-xl  text-center">Figma</p>
          {/* ----------------- */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-html5 text-[80px] text-orange-500" />
            <h1 className="text-orange-500 text-2xl font-bold">80%</h1>
          </div>
          <p className="text-white text-xl  text-center">HTML/CSS</p>
          {/* ----------------- */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-nextjs text-[80px] text-orange-500" />
            <h1 className="text-orange-500 text-2xl font-bold">80%</h1>
          </div>
          <p className="text-white text-xl  text-center">Next.js</p>
          {/* ----------------- */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-js-square text-[80px] text-orange-500" />
            <h1 className="text-orange-500 text-2xl font-bold">60%</h1>
          </div>
          <p className="text-white text-xl  text-center">JavaScript</p>
          {/* ----------------- */}
          <div className="flex flex-col items-center gap-2 border border-gray-500 rounded-4xl p-2 justify-between">
            <i className="fa-brands fa-github text-[80px] text-orange-500" />
            <h1 className="text-orange-500 text-2xl font-bold">90%</h1>
          </div>
          <p className="text-white text-xl  text-center">GitHub</p>
        </div>
      </div>
    </div>
  );
}
