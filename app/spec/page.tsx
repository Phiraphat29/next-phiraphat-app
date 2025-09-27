import React from "react";

export default function page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold">
            <span className="text-white">My </span>
            <span className="text-orange-500">Specializations</span>
          </h1>
        </div>

        {/* Specialization Cards */}
        <div className="space-y-6">
          {/* Front-end Developer Card */}
          <div className=" border border-orange-500 rounded-lg p-6 relative">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Front end-developer
                </h2>
                <p className=" text-lg text-white/50">
                  Front-end is where I weave code and creativity to shape
                  captivating and user-centric digital experiences.
                </p>
              </div>
              <div className="ml-4">
                <div className="text-orange-500 text-4xl font-bold">
                  &lt;/&gt;
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Designer Card */}
          <div className=" border border-orange-500 rounded-lg p-6 relative">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-white text-2xl font-bold mb-4">
                  UI/UX Designer
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  UI/UX design is my palette for blending art and user
                  psychology into seamless and delightful interactions.
                </p>
              </div>
              <div className="ml-4">
                <div className="text-orange-500 text-4xl">🌐</div>
              </div>
            </div>
          </div>

          {/* Graphic Designer Card */}
          <div className=" border border-orange-500 rounded-lg p-6 relative">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Graphic designer
                </h2>
                <p className=" text-lg text-white/50">
                  As a graphic designer, I transform ideas into visually
                  striking and impactful designs.
                </p>
              </div>
              <div className="ml-4">
                <div className="text-orange-500 text-4xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
