import React, { useState } from "react";
import FinishesList from "../components/modificationComponents/FinishesList";
import Header from "../common/Header";
import Display from "../components/modificationComponents/Display";
import Options from "../components/modificationComponents/Options";

const Overlay = ({ handleApplyClick, handleCancelClick }) => (
  <>
    <div className="fixed inset-0 flex items-center justify-center h-screen bg-transparent z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-[300px] h-[250px] flex flex-col items-center">
        <p className="text-gray-700 text-left mb-8 font-light text-[18px] leading-[24px]">
          Once you click on APPLY you will not be able to make changes to this
          selection. Click on APPLY to continue with your selection.
        </p>
        <div className="flex justify-end w-full gap-10 px-2">
          <button
            className="text-gray-400 font-bold text-[14px] tracking-wide"
            onClick={handleCancelClick}
          >
            CANCEL
          </button>
          <button
            className="text-[#f15f40ff] font-bold text-[14px] tracking-wide"
            onClick={handleApplyClick}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
    <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
  </>
);

const Modification = ({ selectedProgress }) => {
  const [seeingButton, setSeeingButton] = useState("");
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applyClicked, setApplyClicked] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleApplyClick = () => {
    setApplyClicked(false);
    setApplySubmitted(true);
    // Add your logic to handle the apply action here
  };

  const handleCancelClick = () => {
    console.log("Cancel clicked");
    setApplyClicked(false);
  };

  const handleOptionsApplyClick = () => {
    console.log("Options Apply clicked");
    setApplyClicked(true);
  };

  return (
    <div className="relative">
      {applyClicked && (
        <Overlay
          handleApplyClick={handleApplyClick}
          handleCancelClick={handleCancelClick}
        />
      )}
      <div className={`${applyClicked ? "relative z-30" : ""}`}>
        <Header />
        <div className="flex gap-10 px-6 p-4">
          <FinishesList
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            selectedProgress={selectedProgress}
          />
          <Display
            seeingButton={seeingButton}
            setSeeingButton={setSeeingButton}
            selectedProgress={selectedProgress}
            activeItem={activeItem}
          />
          <Options
          seeingButton={seeingButton}
            applySubmitted={applySubmitted}
            selectedProgress={selectedProgress}
            handleApplyClick={handleOptionsApplyClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modification;
