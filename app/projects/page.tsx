import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl font-bold">Featured </span>
        <span className="text-orange-500 text-2xl font-bold">Projects</span>
        <br />
        <br />
        <h2 className="text-lg mb-4 font-bold">
          Manage Task App - fullstack web development
        </h2>
        <p className="text-sm mb-4 text-white/50">
          Here's my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!
        </p>
        <Image
          src="/project.png"
          alt="Manage Task App"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
