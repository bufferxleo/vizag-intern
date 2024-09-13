import React from "react";

const Display = ({ seeingButton, setSeeingButton,selectedProgress, activeItem }) => {
  
  const buttons = {
    FLOORPLAN: {},
    STRUCTURE: {},
    FINISHES: {
      FLOORPLAN: { name: "FLOORS - FLOORING", editable: true, edited: false },
      WALLS: { name: "WALLS", editable: true, edited: false },
      MAIN_DOOR: { name: "MAIN DOOR", editable: true, edited: false },
    },
    ELECTRICAL: {},
    PLUMBINGSANITARY: {},
    LIFT: {},
  };

  
  console.log(seeingButton)
  const images = {
    FINISHES: "./images/modification/display/Mask group.svg",
    FLOORPLAN: "./images/modification/display/floorplan.png",
  };

  return (
    <div className="relative flex flex-col items-left bg-white p-3 h-screen w-full gap-3">
      {/* Breadcrumb Section */}
      <div className="self-start mb-2 text-gray-500">
        <span className="font-light text-sm">
          Dashboard &gt;&gt; My Choices
        </span>
        <span className="font-normal text-sm">
          &gt;&gt;
          {selectedProgress
            .toString()
            .toLowerCase()
            .charAt(0)
            .toUpperCase() +
            selectedProgress.toString().toLowerCase().slice(1)}
        </span>
      </div>

      {/* Title Section */}
      <div className="self-start mb-2 text-orange-600">
        <h1 className="font-bold text-xm md:text-3xl">
          {activeItem || "Select an item"}
        </h1>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-2 mb-2 items-left">
        {Object.keys(buttons[selectedProgress.toString()]).map((key) => (
          <button
            key={key}
            className={`bg-purple-100 text-purple-700 font-bold text-xs px-4 py-2 rounded-lg ${
              key === seeingButton ? "opacity-40" : ""
            }`}
            onClick={() => setSeeingButton(key)} // Pass key to setSeeingButton
          >
            {buttons[selectedProgress.toString()][key].name}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-4xl mb-2">
        <img
          src={images[selectedProgress.toString()]}
          alt="Current Selection"
          className="w-full h-full rounded-md "
        />
        <div className="absolute top-[-40px] right-4 text-gray-500 text-xs font-bold">
          01 / 03
        </div>
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
          <img src="./images/modification/display/Group 937.svg" alt="360" />
        </div>
        <div className="absolute top-4 right-4 text-gray-500 text-xs font-bold">
          <img
            src="./images/modification/display/Group.svg"
            alt="full-screen"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Live Results Section */}
      <div className="self-start text-white font-bold text-xs mb-2">
        LIVE RESULTS BASED ON SELECTION
      </div>

      {/* Bottom Navigation Section */}
      <div className="flex justify-between items-center w-full max-w-4xl">
        <button className="text-orange-500 font-bold text-xs text-nowrap">
          &#60;&#60; BACK
        </button>
        {/* Progress Bar Section */}
        <div className="w-full px-12 max-w-4xl">
          <img
            src="./images/modification/display/Group 940.svg"
            alt="Progress Bar"
            className="w-full"
          />
        </div>
        <button className="text-orange-500 font-bold text-xs text-nowrap">
          NEXT &#62;&#62;
        </button>
      </div>
    </div>
  );
};

export default Display;
