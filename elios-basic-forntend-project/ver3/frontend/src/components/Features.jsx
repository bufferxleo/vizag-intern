import React, { useState } from "react";
import Structures from "./featureComponents/Structures";
import Body from "./featureComponents/Body";
import Inputs from "./featureComponents/Inputs";

const Features = (props) => {
  const [opened, setOpened] = useState("inputs");

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2 justify-center items-center text-center font-bold">
        <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpened("inputs")}
        >
          Inputs
        </button>
        <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-1 rounded"
          onClick={() => setOpened("structure")}
        >
          Structure
        </button>
        {/* <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpened("body")}
        >
          Body
        </button> */}
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="border border-black rounded m-2 p-2 w-96 h-96 flex flex-col text-center font-bold overflow-auto">
          {opened === "inputs" ? (
            <div>
              <Inputs />
            </div>
          ) : opened === "structure" ? (
            <div>
              <Structures content={props.content} setContent={props.setContent}/>
            </div>
          ) : opened === "body" ? (
            <div>
              <Body />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Features;
