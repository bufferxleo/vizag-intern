import React, { useState } from "react";

const Body = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [contentWidth, setContentWidth] = useState(700);
  const [contentAlignment, setContentAlignment] = useState("left");
  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontWeight, setFontWeight] = useState("400");
  const [fontSize, setFontSize] = useState(16);
  // const [lineHeight, setLineHeight] = useState(1.5);
  // const [padding, setPadding] = useState(10);
  const [linkColor, setLinkColor] = useState("#0000FF");
  const [linkHoverColor, setLinkHoverColor] = useState("#FF0000");
  const [underlineLinks, setUnderlineLinks] = useState(true);

  const [generalOpen, setGeneralOpen] = useState(true);
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <div className="w-full h-full p-4 font-inter">
      <div className="mb-4">
        <div 
          className="w-80 flex justify-between items-center font-medium cursor-pointer bg-gray-200 p-2 px-4 rounded shadow-md hover:bg-gray-300"
          onClick={() => setGeneralOpen(!generalOpen)}
        >
          <h3>General</h3>
          <span>{generalOpen ? '-' : '+'}</span>
        </div>
        {generalOpen && (
          <div className="flex flex-col gap-1 mt-2 py-4 p-2">
            <div className="flex justify-between items-center font-normal">
              <label>Text Color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Background Color</label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Content Width</label>
              <input
                type="number"
                value={contentWidth}
                onChange={(e) => setContentWidth(e.target.value)}
                className="border p-1 w-24"
              />
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Content Alignment</label>
              <select
                value={contentAlignment}
                onChange={(e) => setContentAlignment(e.target.value)}
                className="border p-1"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Font Family</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="border p-1"
              >
                <option value="Inter">Inter</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Font Weight</label>
              <select
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                className="border p-1"
              >
                <option value="300">Light</option>
                <option value="400">Normal</option>
                <option value="700">Bold</option>
              </select>
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Font Size</label>
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="border p-1 w-24"
              />
            </div>
            {/* <div className="flex justify-between items-center font-normal">
              <label>Line Height</label>
              <input
                type="number"
                step="0.1"
                value={lineHeight}
                onChange={(e) => setLineHeight(e.target.value)}
                className="border p-1 w-24"
              />
            </div> */}
            {/* <div className="flex justify-between items-center font-normal">
              <label>Padding</label>
              <input
                type="number"
                value={padding}
                onChange={(e) => setPadding(e.target.value)}
                className="border p-1 w-24"
              />
            </div> */}
          </div>
        )}
      </div>
      <div>
        <div 
          className="w-80 flex justify-between items-center font-medium cursor-pointer bg-gray-200 p-2 px-4 rounded shadow-md hover:bg-gray-300"
          onClick={() => setLinksOpen(!linksOpen)}
        >
          <h3>Links</h3>
          <span>{linksOpen ? '-' : '+'}</span>
        </div>
        {linksOpen && (
          <div className="flex flex-col gap-1 mt-2 py-4 p-2 pr-6">
            <div className="flex justify-between items-center font-normal">
              <label>Color</label>
              <input
                type="color"
                value={linkColor}
                onChange={(e) => setLinkColor(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Hover Color</label>
              <input
                type="color"
                value={linkHoverColor}
                onChange={(e) => setLinkHoverColor(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center font-normal">
              <label>Underline</label>
              <input
                type="checkbox"
                checked={underlineLinks}
                onChange={(e) => setUnderlineLinks(e.target.checked)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
