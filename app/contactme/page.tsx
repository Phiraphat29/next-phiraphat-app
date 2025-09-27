import React from "react";

export default function page() {
  return (
    <div className="flex flex-row justify-between gap-4 p-18">
      <div className="w-full text-start pl-4">
        <span className="text-white text-2xl font-bold">Contact </span>
        <span className="text-orange-500 text-2xl font-bold">Me</span>
        <br />
        <br />
        <h2 className="text-white text-lg mb-8">Let's get in touch!</h2>

        <div className="grid grid-cols-2 gap-8 max-w-4xl">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="text-orange-400 text-sm block mb-2">
                Email
              </label>
              <div className="border-b border-gray-600 pb-1">
                <input
                  type="email"
                  className="bg-transparent text-white w-full outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label className="text-orange-400 text-sm block mb-2">Name</label>
              <div className="border-b border-gray-600 pb-1">
                <input
                  type="text"
                  className="bg-transparent text-white w-full outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label className="text-orange-400 text-sm block mb-2">
                Content
              </label>
              <div className="border-b border-gray-600 pb-1">
                <textarea
                  className="bg-transparent text-white w-full outline-none resize-none h-20"
                  placeholder=""
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="text-orange-400 text-sm block mb-2">
                Phone
              </label>
              <div className="border-b border-gray-600 pb-1">
                <input
                  type="tel"
                  className="bg-transparent text-white w-full outline-none"
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label className="text-orange-400 text-sm block mb-2">
                Adress
              </label>
              <div className="border-b border-gray-600 pb-1">
                <input
                  type="text"
                  className="bg-transparent text-white w-full outline-none"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter checkbox */}
        <div className="flex items-center mt-8">
          <input type="checkbox" className="mr-3 w-4 h-4" />
          <span className="text-white text-sm">
            I would like to receive the newsletter.
          </span>
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-8 w-full">
          <button className="bg-orange-500 border border-yellow-400 text-white px-8 py-3 rounded text-lg font-medium w-full hover:bg-orange-600 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
