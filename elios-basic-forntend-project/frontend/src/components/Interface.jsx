import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Features from "./interfaceComponents/Features";
import Editor from "./interfaceComponents/Editor";

const Interface = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}> 
        <div className="font-mono bg-gradient-to-l from-purple-400 to-blue-400 flex h-screen items-center justify-center">
          <div className="w-full h-full p-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-20 text-center">INTERFACE</h1>
            <div className="flex w-full p-4 max-w-6xl mx-auto">
              <Features/>
              <Editor />
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default Interface;
