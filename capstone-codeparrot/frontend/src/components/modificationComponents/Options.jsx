import React, { useState } from "react";

const images = {
  FINISHES: [
    {
      src: "./images/modification/options/Mask group.svg",
      label: "Vitrified",
      selected: true,
    },
    {
      src: "./images/modification/options/Mask group-1.svg",
      label: "Non-vitrified",
      selected: false,
    },
  ],
  FLOORPLAN: [
    {
      src: "./images/modification/options/floorplans1.png",
      label: "Vitrified",
      selected: true,
    },
    {
      src: "./images/modification/options/floorplans2.png",
      label: "Non-vitrified",
      selected: false,
    },
  ],
};

const Options = ({
  seeingButton,
  applySubmitted,
  selectedProgress,
  handleApplyClick,
}) => {
  // Ensure selectedProgress is valid before accessing images
  const initialSelectedImage = selectedProgress
    ? images[selectedProgress.toString()]?.find((image) => image.selected)
    : null;

  const [selectedImage, setSelectedImage] = useState(initialSelectedImage);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  return (
    <div className="p-4 flex flex-col gap-2 h-full w-[500px] bg-white rounded-lg items-center">
      {/* Header */}
      <div className="flex gap-2 mb-20 items-center text-sm font-bold text-gray-500">
        <p>MY UNIT COMPLETION</p>
        <img
          src="./images/modification/options/Group 935.svg"
          alt="progress"
          className="h-5 w-5"
        />
      </div>
      {seeingButton === "WALLS" ? (
        <>
          <div className="w-[289px] h-[77px] text-red-600 text-sm font-normal font-['Montserrat']">
            This unit does NOT offer any modifications.
          </div>
        </>
      ) : (
        <>
          {applySubmitted && seeingButton !== "WALLS" ? (
            <>
              <ImageCard
                src={selectedImage.src}
                label={selectedImage.label}
                isSelected={true}
              />
              <br />
              <div className="w-[289px] h-[117px] text-red-600 text-sm font-normal font-['Montserrat']">
                You have customised this unit.
                <br />
                Further modifications not allowed.
                <br />
                <br />
                Date: {formattedDate}
                <br />
                <br />
                Time: {formattedTime}
              </div>
              <button className="w-full mt-10 bg-purple-500 text-white text-sm font-bold py-3 flex justify-center items-center rounded-lg hover:bg-purple-700 opacity-50">
                <span>APPLY CHANGES</span>
                <img
                  src="./images/modification/options/Arrow 1.png"
                  alt="Arrow"
                  className="ml-2 h-4 w-6"
                />
              </button>
            </>
          ) : (
            <>
              {images[selectedProgress?.toString()]?.map((image, index) => (
                <ImageCard
                  key={index}
                  src={image.src}
                  label={image.label}
                  isSelected={selectedImage?.label === image.label}
                  onClick={() => setSelectedImage(image)}
                />
              ))}

              {/* Apply Changes Button */}
              <button
                onClick={handleApplyClick}
                className="w-full mt-10 bg-purple-500 text-white text-sm font-bold py-3 flex justify-center items-center rounded-lg hover:bg-purple-700"
              >
                <span>APPLY CHANGES</span>
                <img
                  src="./images/modification/options/Arrow 1.png"
                  alt="Arrow"
                  className="ml-2 h-4 w-6"
                />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

const ImageCard = ({ src, label, isSelected, onClick }) => {
  return (
    <div
      className={`relative w-full h-[149px] rounded-lg border ${
        isSelected ? "border-orange-500" : "border-transparent"
      } cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full rounded-lg object-cover"
      />
      {isSelected && (
        <div className="flex gap-2 absolute top-2 right-2 px-2 py-1 text-xs align-center items-center text-white font-bold rounded">
          SELECTED
          <span className="block w-6 h-6 border-2 border-white-900 bg-orange-500 rounded-full"></span>
        </div>
      )}
      {!isSelected && (
        <div className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full">
          <span className="block w-6 h-6 border-2 border-white-900 border-opacity-50 rounded-full"></span>
        </div>
      )}
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default Options;
