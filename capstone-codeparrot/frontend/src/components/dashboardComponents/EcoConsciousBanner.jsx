import React from "react";

const EcoConsciousBanner = () => {
  return (
    <div
      className="h-[100px] flex items-center bg-[#f4f4f7] rounded-lg shadow-lg overflow-hidden hidden md:flex"
    >
      <img
        src="./images/dashboard/mask group.png"
        alt="Eco-living"
        className="h-full w-[500px] rounded-lg object-cover"
      />
      <div className="flex items-center " style={{ flex: 1 }}>
        <img
          src="./images/dashboard/group 127.png"
          alt="Eco-logo"
          className="w-[100px] h-[100px] px-4"
        />
        <p className="text-xl font-bold text-gray-900 leading-6">
          Eco-conscious living meets unparalleled serenity
        </p>
      </div>
    </div>
  );
};

export default EcoConsciousBanner;
