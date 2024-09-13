import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSave, FiX, FiUpload } from "react-icons/fi";
import DropZone from "./DropZone";

const Editor = () => {
  const [editorContent, setEditorContent] = useState("");
  const [droppedItem, setDroppedItem] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Save current selection
    const saveSelection = () => {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        return selection.getRangeAt(0);
      }
      return null;
    };

    // Restore selection
    const restoreSelection = (range) => {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    };

    // Update editor content and maintain cursor position
    const handleInput = () => {
      const savedRange = saveSelection();
      setEditorContent(editorRef.current.innerHTML);
      if (savedRange) {
        restoreSelection(savedRange);
      }
    };

    // Attach event listener for input changes
    editorRef.current.addEventListener("input", handleInput);

    return () => {
      // Clean up: remove event listener
      editorRef.current.removeEventListener("input", handleInput);
    };
  }, []);

  const handleDrop = (item) => {
    setDroppedItem(item);
  };

  setTimeout(()=>{console.log(droppedItem);},3000);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked", editorContent);
  };

  const handleDataInput = (e) => {
    e.preventDefault();
    const inputElement = e.target.querySelector("input");

    if (inputElement.type === "file" && inputElement.files[0]) {
      const file = inputElement.files[0];

      if (file.type.match("image.*")) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageDataUrl = reader.result;
          insertAtCursor(editorRef.current, `<img src="${imageDataUrl}" />`);
        };
        reader.readAsDataURL(file);
      } else if (file.type.match("video.*")) {
        const videoURL = URL.createObjectURL(file);
        setVideoUrl(videoURL);
        insertAtCursor(
          editorRef.current,

          `<video controls><source src="${videoURL}" type="video/mp4">Your browser does not support the video tag.</video>`
        );
      } else {
        console.log("Unsupported file type");
      }
    } else if (inputElement.type === "text" && inputElement.value) {
      const text = inputElement.value;
      // console.log(text);
      insertAtCursor(editorRef.current, `<p>${text}</p>`);
      // console.log("input feeded");
    } else {
      console.log("Unsupported file type or empty input");
    }

    setDroppedItem(null);
  };

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const insertAtCursor = (editable, html) => {
    console.log(editable, html);
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const fragment = range.createContextualFragment(html);
      range.insertNode(fragment);
      if (html.includes("<p>")) {
        editable.innerHTML += html;
      }
    } else {
      editable.innerHTML += html;
    }
    console.log(editable, html);
  };

  return (
    <div className="h-3/4 w-4/5 pl-4 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Editor</h2>
      <DropZone
        onDrop={handleDrop}
        className="h-full bg-white p-6 border-nonerounded-lg shadow-md flex flex-col"
      >
        <div
          ref={editorRef}
          contentEditable={true}
          className="min-h-[300px] border border-gray-300 p-4 rounded-md mb-4 overflow-auto"
        ></div>
        {droppedItem && (
          <div className="p-4 border border-gray-300 rounded-md mb-4">
            <form onSubmit={handleDataInput} className="flex items-center">
              <input
                type={droppedItem.kind || "file"}
                className="flex-grow p-2 text-sm text-gray-700 border border-gray-300 rounded-md"
                placeholder={droppedItem.type}
              />
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2"
                type="submit"
              >
                <FiUpload />
              </button>
            </form>
          </div>
        )}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={handleSubmit}
          >
            <FiSave className="mr-2" /> Save
          </button>
          <Link to="/">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
              type="button"
            >
              <FiX className="mr-2" /> Cancel
            </button>
          </Link>
        </div>
      </DropZone>
    </div>
  );
};

export default Editor;
