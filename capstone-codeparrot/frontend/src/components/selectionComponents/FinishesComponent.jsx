import React from 'react';
import {Link} from "react-router-dom"
const FinishesComponent = ({ selectedImage, selectedProgress }) => {
  const finishes = {
    FLOORPLAN: "Floor Plan Details",
    STRUCTURE: "Structure Details",
    FINISHES: "Finishes Details",
    ELECTRICAL: "Electrical Details",
    PLUMBINGSANITARY: "Plumbing & Sanitary Details",
    LIFT: "Lift Details",
  };

  return (
    <div className="relative flex flex-col items-center bg-white p-2 h-full w-full">
      <div className="self-start mb-4 text-gray-800">
        <span className="font-light text-sm">Dashboard &gt;&gt; <p className='font-bold inline'>My Choices</p></span>
      </div>
      <div className="self-start mb-4 text-orange-600">
        <h1 className="font-bold text-lg md:text-3xl">{finishes[selectedProgress]}</h1>
      </div>
      <img
        src={selectedImage.src}
        alt={selectedImage.label}
        className="w-full h-full"
      />
      <Link to="/modification">
      <button className="absolute bottom-[7.5px] right-[7.5px] w-[500px] bg-[#E6E6F3] text-xs text-[#6B5EA9] font-montserrat font-bold py-3 px-6 flex justify-between items-center rounded-lg hover:bg-gray-400">
        <span>VIEW MODIFICATION OPTIONS & START CUSTOMISING NOW</span>
        <img src="./images/selection/Arrow 1.png" alt="Arrow" />
      </button></Link>
    </div>
  );
};

export default FinishesComponent;
