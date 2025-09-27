import React from "react";

export default function page() {
  const skills = [
    {
      name: "React",
      icon: "fa-brands fa-react",
      percentage: "60%",
      highlighted: true,
    },
    {
      name: "Figma",
      icon: "fa-brands fa-figma",
      percentage: "85%",
      highlighted: false,
    },
    {
      name: "HTML/CSS",
      icon: "fa-brands fa-html5",
      percentage: "80%",
      highlighted: false,
    },
    {
      name: "Next.js",
      icon: "fa-brands fa-n",
      percentage: "80%",
      highlighted: false,
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js-square",
      percentage: "60%",
      highlighted: false,
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      percentage: "90%",
      highlighted: true,
    },
  ];

  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl font-bold">My </span>
        <span className="text-orange-500 text-2xl font-bold">Skills</span>
        <br />
        <br />

        <div className="grid grid-cols-4 gap-6 max-w-5xl">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`flex flex-col items-center gap-3 border rounded-3xl p-6 justify-between w-full h-32 border-gray-700`}
              >
                <i
                  className={`${skill.icon} text-[50px] ${
                    skill.name === "React" ? "text-blue-400" : "text-white"
                  }`}
                />
                <h1 className="text-orange-500 text-lg font-bold">
                  {skill.percentage}
                </h1>
              </div>
              <p className="text-white text-base text-center mt-3">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
