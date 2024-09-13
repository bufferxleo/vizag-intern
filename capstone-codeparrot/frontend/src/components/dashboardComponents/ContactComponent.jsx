import React from "react";

const ContactComponent = () => {
  return (
    <div className=" p-4 bg-white">
      <div className="relative">
        <img
          src="./images/dashboard/leaves_image.svg"
          alt="Green Leaf"
          className=" h-[300px] w-[400px]"
        />
        <div className="absolute p-4 inset-0 flex place-items-end justify-start">
          <img
            src="./images/dashboard/text-overlay.svg"
            alt="Text Overlay"
            className="h-40 w-40"
          />
        </div>
      </div>
      <div className="font-montserrat flex flex-col gap-2 px-6 p-4 bg-transprent text-left">
        <h1 className="my-2 text-[#93c7d6] text-[14px] font-bold tracking-wider">
          GET IN TOUCH WITH US
        </h1>
        <div className="mt-2 flex align-center items-center justify-left text-[#333333]">
          <img
            src="./images/dashboard/phone-logo.svg"
            alt="Phone Icon"
            className="w-4 h-4 mr-2"
          />
          <span className="text-[12px] font-bold leading-4">
            +91 80888 85353
          </span>
        </div>
        <div className="mt-2 flex justify-left text-[#333333]">
          <img
            src="./images/dashboard/mail-logo.svg"
            alt="Email Icon"
            className="w-4 h-4 mr-2"
          />
          <span className="text-[12px] align-center items-center font-bold leading-4">
            sales@capstonelife.in
          </span>
        </div>
        <div className="mt-2 flex justify-left text-[#333333]">
          <img
            src="./images/dashboard/website-logo.svg"
            alt="Website Icon"
            className="w-4 h-4 mr-2"
          />
          <span className="text-[12px] align-center items-center font-bold leading-4">
            www.casptonelife.in
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
