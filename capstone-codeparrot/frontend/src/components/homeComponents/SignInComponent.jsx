/* SignInComponent.jsx */

import React from "react";
import DesignComponent from "./DesignComponent";

const SignInComponent = () => {
  return (
    <div
      className="bg-cover p-20 bg-center h-screen flex flex-col md:flex-row md:place-items-start md:justify-start justify-center gap-10"
      style={{
        backgroundImage: "url('./images/home/login-bg.png')",
      }}
    >
      <div className="md:hidden flex flex-col items-start">
        <img
          src="./images/home/logo.png"
          alt="capstoneLIFE"
          className="h-30 w-[200px]"
        />
        <div className="w-10 h-1 bg-red-500 mb-4 mt-4"></div>
      </div>
      <div className="rounded-lg shadow-md max-w-md">
        <InputField label="Email" />
        <InputField label="Password" />
        <Divider />
        <GoogleSignInButton />
      </div>
      <div className="hidden md:flex">
        <DesignComponent />
      </div>
    </div>
  );
};

const InputField = ({ label }) => {
  return (
    <div className="mb-4">
      <input
        type={label.toLowerCase()}
        placeholder={label}
        className="w-full px-4 py-2 border border-white rounded-md text-white opacity-70 placeholder:text-slate-500"
      />
    </div>
  );
};

const Divider = () => {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-2 text-sm text-white">OR</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

const GoogleSignInButton = () => {
  return (
    <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 bg-white opacity-70">
      <img src="./images/home/image24.png" alt="Google" className="h-6 w-6 mr-2" />
      <span className="text-black">Sign in with Google</span>
    </button>
  );
};

export default SignInComponent;
