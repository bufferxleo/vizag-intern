import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const Structures = (props) => {
  const handleAddition = (blockId) => {
    // Add the blockId to the content state
    props.setContent([...props.content, blockId]);
  };

  return (
    <div className="p-4">
      <div className="space-y-4 w-full">
        {/* Single Full Width Block */}
        <div
          className="h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
          id="full-width"
          onClick={() => handleAddition("full-width")}
        >
          <CiCirclePlus size={32} />
        </div>
        {/* Two Equal Width Blocks */}
        <div
          className="flex space-x-4"
          id="half-width"
          onClick={() => handleAddition("half-width")}
        >
          <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
        </div>
        {/* Three Equal Width Blocks */}
        <div
          className="flex space-x-4"
          id="third-width"
          onClick={() => handleAddition("third-width")}
        >
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
        </div>
        {/* Four Equal Width Blocks */}

        <div
          className="flex space-x-4"
          id="quarter-width"
          onClick={() => handleAddition("quarter-width")}
        >
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center">
            <CiCirclePlus size={32} />
          </div>
        </div>
        {/* Mixed Width Blocks */}
        {/* <div className="flex space-x-4 border" id="mixed-width" onClick={() => handleAddition("mixed-width")}>
          <div
            className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
            
          >
            <CiCirclePlus size={32} />
          </div>
          <div
            className="w-2/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
          >
            <CiCirclePlus size={32} />
          </div>
        </div> */}
        {/* Two Rows of Two Equal Width Blocks */}
        {/* <div className="space-y-4 border" id="two-rows" onClick={() => handleAddition("two-rows")}>
          <div className="flex space-x-4">
            <div
              className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              
            >
              <CiCirclePlus size={32} />
            </div>
            <div
              className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
            >
              <CiCirclePlus size={32} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Structures;
