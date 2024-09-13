import React, { useRef, useState, useEffect, useCallback } from "react";

const images = {
  FLOORPLAN: [
    { src: "./images/selection/finishes/Mask group.png", label: "Floor Plan" },
  ],
  STRUCTURE: [
    { src: "./images/selection/slider/Mask group-2.svg", label: "Bedroom" },
    { src: "./images/selection/slider/Mask group-3.svg", label: "Kitchen" },
  ],
  FINISHES: [
    { src: "./images/selection/slider/Mask group.svg", label: "Bathroom" },
    { src: "./images/selection/slider/Mask group-1.svg", label: "Terrace" },
  ],
  ELECTRICAL: [
    { src: "./images/selection/slider/Mask group-2.svg", label: "Garage" },
    { src: "./images/selection/slider/Mask group-3.svg", label: "Basement" },
  ],
  PLUMBINGSANITARY: [
    { src: "./images/selection/slider/Mask group.svg", label: "Attic" },
    { src: "./images/selection/slider/Mask group-1.svg", label: "Garden" },
  ],
  LIFT: [
    { src: "./images/selection/slider/Mask group-2.svg", label: "Rooftop" },
    { src: "./images/selection/slider/Mask group-3.svg", label: "Pool" },
  ],
};

const ImageSlider = ({ selectedImage, setSelectedImage, selectedProgress }) => {
  const sliderRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const scrollHandler = useCallback(() => {
    if (sliderRef.current) {
      setIsTop(sliderRef.current.scrollTop === 0);
      setIsBottom(
        sliderRef.current.scrollTop + sliderRef.current.clientHeight >=
          sliderRef.current.scrollHeight - 1
      );
    }
  }, []);

  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  useEffect(() => {
    if (
      selectedProgress &&
      images[selectedProgress] &&
      images[selectedProgress].length > 0
    ) {
      setSelectedImage(images[selectedProgress][0]);
    }
  }, [selectedProgress, setSelectedImage]);

  const scrollUp = () => {
    sliderRef.current.scrollBy({
      top: -sliderRef.current.clientHeight / 3,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    sliderRef.current.scrollBy({
      top: sliderRef.current.clientHeight / 3,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-2 flex flex-col gap-10">
      <div className="text-xs flex gap-5 items-center text-nowrap">
        <p>MY UNIT COMPLETION</p>
        <img
          src="./images/selection/slider/Group 935.png"
          alt="progress"
          className="h-5 w-5"
        />
      </div>
      <div
        className={`relative w-44 h-[390px] scrollbar-hide ${
          selectedProgress === "FLOORPLAN" ? "opacity-0" : ""
        }`}
      >
        {!isTop && (
          <div
            className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 p-1 cursor-pointer z-10 bg-transparent rounded"
            onClick={scrollUp}
          >
            <img
              src="./images/selection/slider/Vector 418.svg"
              alt="Scroll Up"
            />
          </div>
        )}

        <div
          ref={sliderRef}
          onScroll={scrollHandler}
          className="h-full overflow-y-scroll scroll-smooth scrollbar-hide"
        >
          {images[selectedProgress].map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              label={image.label}
              onClick={() => setSelectedImage(image)}
              isSelected={selectedImage.label === image.label}
            />
          ))}
        </div>

        {!isBottom && (
          <div
            className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 p-1 cursor-pointer z-10 bg-transparent rounded"
            onClick={scrollDown}
          >
            <img
              src="./images/selection/slider/Vector 419.svg"
              alt="Scroll Down"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ImageCard = ({ src, label, onClick, isSelected }) => {
  return (
    <div
      className={`relative w-full h-22 mb-2 cursor-pointer ${
        isSelected ? "" : "opacity-50"
      }`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-22 rounded-lg object-cover"
      />
      <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export default ImageSlider;
