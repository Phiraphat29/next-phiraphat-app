import React from "react";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl font-bold">Education & </span>
        <span className="text-orange-500 text-2xl font-bold">Experience</span>
        <br />
        <br />
        <p className="text-lg mb-4">
          <div className="text-orange-500">2022-present</div>
          UI/UX Designer <br />
          <div className="text-white/50 text-sm pl-4">freelance</div>
          Fullstack Web Developer <br />
          <div className="text-white/50 text-sm pl-4">freelance</div>
        </p>
        <br />
        <p className="text-lg mb-4">
          <div className="text-orange-500">2022-2025</div>
          Bachelor of Science in Technology Digital and Innovation <br />
          <div className="text-white/50 text-sm">Southease Asia University</div>
        </p>
        <br />
        <p className="text-lg mb-4">
          <div className="text-orange-500">2016-2021</div>
          High school <br />
          <div className="text-white/50 text-sm">
            Chanpradittharam Witthayakom School
          </div>
        </p>
        <br />
      </div>
    </div>
  );
}
