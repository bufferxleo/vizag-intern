import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white h-15 shadow-md">
      <div className="p-4">
        <img
          src="./images/header/logo_dark.png"
          alt="capstoneLIFE"
          className="h-30 w-[200px]"
        />
      </div>
      <div className="flex p-4 items-center">
        <div className="relative mx-3">
          <img
            src="./images/header/message-icon.svg"
            alt="Messages Icon"
            className="w-6 h-6"
          />
          <div className="absolute top-[-4px] right-[-4px] bg-white border border-gray-400 text-red-500 w-1 h-1 p-2 flex items-center justify-center rounded-full text-xs font-bold">
            <p className="text-xs font-medium">1</p>
          </div>
        </div>
        <div className="relative mx-3">
          <img
            src="./images/header/notification_icon.svg"
            alt="Notification Icon"
            className="w-6 h-6"
          />
          <div className="absolute top-[-4px] right-[-4px] bg-white border border-gray-400 text-red-500 w-1 h-1 p-2 flex items-center justify-center rounded-full text-xs font-bold">
            <p className="text-xs font-medium">1</p>
          </div>
        </div>
        <div className="relative mx-3">
          <img
            src="./images/header/other_icon.svg"
            alt="Other Icon"
            className="w-6 h-6"
          />
        </div>
        <div className="relative ml-2">
          <img
            src="./images/header/profile_pic.svg"
            alt="Profile"
            className="w-7 h-7 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
