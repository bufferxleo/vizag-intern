import React, { useState } from "react";

const ProgressComponent = ({ selectedProgress,setSelectedProgress }) => {
  const [selectedProgressLocal, setSelectedProgressLocal] = useState(selectedProgress);
  const progress = {
    floorPlan: 0,
    structure: 0,
    finishes: 34,
    electrical: 0,
    plumbingSanitary: 0,
    lift: 0,
  };

  const handleCardClick = (title) => {
    setSelectedProgressLocal(title);
    setSelectedProgress(title);
  };

  return (
    <div className="flex flex-col bg-white w-[260px] p-4 gap-4 rounded-lg">
      {Object.keys(progress).map((key) => (
        <div key={key} onClick={() => handleCardClick(key.toUpperCase())}>
          <ProgressCard
            title={key
              .toUpperCase()
              .replace(/([A-Z])/g, " $1")
              .trim()}
            highlight={selectedProgressLocal === key.toUpperCase()}
            progress={progress[key]}
          />
        </div>
      ))}
    </div>
  );
};

const ProgressCard = ({ title, highlight, progress }) => {
  return (
    <div
      className={`p-4 flex w-[200px] justify-start items-center ${
        highlight ? "bg-[#6B5EA9] h-[90px]" : "bg-[#A6D5E2] opacity-60 h-[45px]"
      } rounded-md`}
    >
      {highlight && progress !== undefined && (
        <div className="w-full text-center">
          <div className="flex justify-start items-center mb-1 gap-2">
            <img
              src="./images/selection/group 126.png"
              alt="icon"
              className="w-4 h-4"
            />
            <span className="text-white font-bold text-[10px] text-nowrap">
              {title}
            </span>
          </div>
          <div className="flex items-center pt-2">
            <span className="text-white text-thin text-[10px]">{`Completion Status: ${progress}%`}</span>
          </div>
          <div className="flex mt-1">
            <img
              src="./images/selection/rectangle 7445.png"
              alt="progress"
              className="inline-block w-3/4 h-1"
            />
          </div>
        </div>
      )}
      {!highlight && (
        <span className="text-slate-900 font-bold text-[10px] text-nowrap">
          {title}
        </span>
      )}
    </div>
  );
};

export default ProgressComponent;
