import React from "react";
import DraggableItem from "./DraggableItem";
import { FaCamera, FaFile, FaVideo } from "react-icons/fa6";
import { CiTextAlignCenter } from "react-icons/ci";

const Features = () => {
  return (
    <>
      <div className="w-1/5 pr-4">
        <h2 className="text-lg font-bold mb-2">Features</h2>
        <DraggableItem
          type="Image"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          <div className="flex justify-between">
            <h1>
              <b>Image</b>
            </h1>
            <FaCamera size="30" />
          </div>
        </DraggableItem>
        <DraggableItem
          type="File"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          <div className="flex justify-between">
            <h1>
              <b>File</b>
            </h1>
            <FaFile size="30" />
          </div>
        </DraggableItem>
        <DraggableItem
          type="Video"
          kind="file"
          className="bg-white p-2 rounded shadow mb-2"
        >
          <div className="flex justify-between">
            <h1>
              <b>Video</b>
            </h1>
            <FaVideo size="30" />
          </div>
        </DraggableItem>
        <DraggableItem
          type="Text"
          kind="text"
          className="bg-white p-2 rounded shadow mb-2"
        >
          <div className="flex justify-between">
            <h1>
              <b>Text</b>
            </h1>
            <CiTextAlignCenter size="30" />
          </div>
        </DraggableItem>
      </div>
    </>
  );
};

export default Features;
