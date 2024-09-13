/* DesignComponent.jsx */
import React from "react";

const DesignComponent = () => {
  return (
    <div className="flex flex-row place-items-center justify-center h-auto bg-transparent gap-10 ">
      <img
        src="./images/home/vertical-line-home.png"
        alt="Decoration"
        className="h-[200px]"
      />
      <div className="flex flex-col items-start">
        <img
          src="./images/home/logo.png"
          alt="capstoneLIFE"
          className="h-30 w-[200px]"
        />
        <div className="w-10 h-1 bg-red-500 mb-4 mt-4"></div>
        <h1 className="text-[#E9D655] text-4xl md:text-5xl lg:text-5xl font-montserrat tracking-wider leading-tight text-left">
          The <br />
          New-Way <br />
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default DesignComponent;
