import React, { useState } from "react";
import Header from "../common/Header.jsx";
import ProgressComponent from "../components/selectionComponents/ProgressComponent.jsx";
import FinishesComponent from "../components/selectionComponents/FinishesComponent.jsx";
import ImageSlider from "../components/selectionComponents/ImageSlider.jsx";

const Selection = ({ selectedProgress, setSelectedProgress }) => {
  const [selectedImage, setSelectedImage] = useState({
    src: "./images/selection/Mask group.png",
    label: "Living Room",
  });

  return (
    <>
      <Header />
      <div className="flex font-montserrat p-4 gap-10">
        <ProgressComponent
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setSelectedProgress={setSelectedProgress}
        />
        <FinishesComponent
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedProgress={selectedProgress}
        />
        <ImageSlider
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedProgress={selectedProgress}
        />
      </div>
    </>
  );
};

export default Selection;
