import React, { useRef, useState, useEffect } from "react";

const FinishesList = ({ activeItem, setActiveItem, selectedProgress }) => {
  const lists = {
    FINISHES: [
      "Foyer",
      "Living & Dining",
      "Puja",
      "Kitchen",
      "GF Bedroom",
      "Maid Room",
      "GF BR-Toilet",
      "GF PDR-Toilet",
      "GF-Servant Toilet",
      "Staircase",
      "FF Lounge",
    ],
    FLOORPLAN: ["MediaRoom", "HomeOffice", "Kitchen", "MaidRoom"],
  };

  const listRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const scrollHandler = () => {
    if (listRef.current) {
      setIsTop(listRef.current.scrollTop === 0);
      setIsBottom(
        listRef.current.scrollTop + listRef.current.clientHeight >=
          listRef.current.scrollHeight
      );
    }
  };

  useEffect(() => {
    scrollHandler();
  }, []);

  const scrollUp = () => {
    listRef.current.scrollBy({
      top: -listRef.current.clientHeight / 3,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    listRef.current.scrollBy({
      top: listRef.current.clientHeight / 3,
      behavior: "smooth",
    });
  };

  const getFilteredItems = () => {
    if (selectedProgress === "FINISHES") {
      return lists.FINISHES;
    } else if (selectedProgress === "FLOORPLAN") {
      return lists.FLOORPLAN;
    } else {
      return [];
    }
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Update activeItem state in Modification
  };

  return (
    <div className="relative w-[350px] h-[698px] overflow-hidden bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="p-4 bg-purple-100">
        <div className="flex items-center text-purple-500">
          <img
            src="./images/modification/finishesList/Group 126.png"
            alt="Icon"
            className="h-4 w-4 mr-2"
          />
          <h1 className="font-bold text-sm">FINISHES</h1>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-xs text-purple-500">
            Completion Status: 34%
          </span>
          <img
            src="./images/modification/finishesList/Rectangle 7445.png"
            alt="Status"
            className="w-full h-1 mt-1"
          />
        </div>
      </div>

      {/* List Container */}
      <div
        ref={listRef}
        onScroll={scrollHandler}
        className="h-full overflow-y-scroll scroll-smooth scrollbar-hide"
      >
        {getFilteredItems().map((label, index) => (
          <Item
            key={index}
            label={label}
            active={label === activeItem}
            onClick={() => handleItemClick(label)}
          />
        ))}
      </div>

      {/* Bottom Arrow */}
      {!isBottom && (
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 cursor-pointer z-10 rounded"
          onClick={scrollDown}
        >
          <img
            src="./images/selection/slider/Vector 419.svg"
            alt="Scroll Down"
          />
        </div>
      )}

      {/* Top Arrow */}
      {!isTop && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 p-1 cursor-pointer z-10 rounded"
          onClick={scrollUp}
        >
          <img src="./images/selection/slider/Vector 418.svg" alt="Scroll Up" />
        </div>
      )}
    </div>
  );
};

const Item = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 ${
        active ? "bg-purple-50" : ""
      } border-b border-gray-200 cursor-pointer`}
    >
      <span
        className={`text-sm ${
          active ? "text-black font-semibold" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
export default FinishesList;
