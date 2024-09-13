import React from "react";
import { FaCamera, FaFile, FaVideo } from "react-icons/fa";
import { CiText } from "react-icons/ci";
// import { RxHeading } from "react-icons/rx";
import DraggableItem from "../dropzone/DraggableItem";
const Inputs = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <DraggableItem type="image">
        <div className="border rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaCamera size={48} />
          <div className="font-thin	text-xs mt-1">Image</div>
        </div>
      </DraggableItem>
      <DraggableItem type="pdf">
        <div className="border rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaFile size={48} />
          <div className="font-thin	text-xs mt-1">PDF Viewer</div>
        </div>
      </DraggableItem>
      <DraggableItem type="video">
        <div className="border rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaVideo size={48} />
          <div className="font-thin	text-xs mt-1">Video</div>
        </div>
      </DraggableItem>
      <DraggableItem type="text">
        <div className="border rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <CiText size={48} />
          <div className="font-thin text-xs mt-1">Text</div>
        </div>
      </DraggableItem>
      {/* <DraggableItem type="text">
        <div className="border rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
          <RxHeading size={48} />
          <div className="font-thin text-xs mt-1">Heading</div>
        </div>
      </DraggableItem> */}
    </div>
  );
};

export default Inputs;
