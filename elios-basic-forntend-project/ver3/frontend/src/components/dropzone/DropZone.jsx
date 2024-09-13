import React from "react";
import { useDrop } from "react-dnd";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ItemTypes = {
  FEATURE: "feature",
};

const DropZone = ({ onDrop, children, className , height ,width}) => {
  const [, dropRef] = useDrop({
    accept: ItemTypes.FEATURE,
    drop: (item) => onDrop(item),
  });


  return (
    <ResizableBox
      width={width}
      height={height}
      resizeHandles={["s", "e", "w", "n","se"]} 
      className={className}
    >
      <div ref={dropRef} className="h-full w-full flex justify-center items-center align-center">
        {children}
      </div>
    </ResizableBox>
  );
};

export default DropZone;