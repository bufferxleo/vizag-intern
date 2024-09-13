import React, { useState, useRef, useEffect } from "react";
import RenderBlocks from "./editorComponents/RenderBlocks";
import { useNavigate } from "react-router-dom";

const Editor = ({ content = [], setContent }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const [previewWidth, setPreviewWidth] = useState("100%");
  const [previewHeight, setPreviewHeight] = useState("100%");
  const navigate = useNavigate();

  const previewRef = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setPreviewWidth(`${entry.contentRect.width}px`);
        setPreviewHeight(`${entry.contentRect.height}px`);
      }
    });

    resizeObserver.observe(previewRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handlePreview = () => {
    const contentHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview Content</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          .preview-content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #cccccc;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="preview-content" style="width: ${previewWidth}; height: ${previewHeight}">
          ${previewRef.current.innerHTML}
        </div>
      </body>
      </html>
    `;

    setPreviewContent(contentHtml);
    setShowPreview(true);
  };

  const handleSave = () => {
    // Create a temporary container to manipulate the HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = previewRef.current.innerHTML;

    // Remove all <span> elements
    const spans = tempDiv.getElementsByTagName("span");
    while (spans.length > 0) {
      spans[0].parentNode.removeChild(spans[0]);
    }

    // Remove all <g> elements
    const gs = tempDiv.getElementsByTagName("g");
    while (gs.length > 0) {
      gs[0].parentNode.removeChild(gs[0]);
    }

    // Generate the final HTML content
    const contentHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview Content</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          .preview-content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #cccccc;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="preview-content" style="width: ${previewWidth}; height: ${previewHeight}">
          ${tempDiv.innerHTML}
        </div>
      </body>
      </html>
    `;

    console.log(contentHtml);
    setPreviewContent(contentHtml);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewContent("");
  };

  return (
    <div
      className={`p-4 flex flex-col w-full h-full items-center justify-center border border-black ${
        showPreview ? "blur-bg" : ""
      }`}
    >
      <h2>
        <b>Editor Area</b>
      </h2>
      <div
        ref={previewRef}
        className="w-full h-full bg-white p-2 shadow-lg border border-gray-200 overflow-auto rounded flex flex-col gap-4"
      >
        <RenderBlocks content={content} setContent={setContent} />
      </div>
      <div className="flex flex-row gap-2 p-4 rounded">
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handlePreview}
        >
          Preview
        </button>
        <button
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
      {showPreview && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-lg">
          <div className="relative w-full max-w-screen-lg h-full">
            <div
              className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200 cursor-pointer"
              onClick={closePreview}
            >
              Close
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="bg-white p-4 shadow-lg border border-gray-200 overflow-auto rounded"
                style={{ maxHeight: "90%", maxWidth: "90%" }}
                dangerouslySetInnerHTML={{ __html: previewContent }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
