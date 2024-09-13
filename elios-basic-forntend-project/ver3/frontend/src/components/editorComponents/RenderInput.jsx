// RenderInput.js
import React, { useState } from 'react';

const RenderInput = ({ type, blockIndex, positionIndex, handleFileChange }) => {
  const [textInput, setTextInput] = useState('');

  const handleTextSubmit = (event) => {
    event.preventDefault();
    handleFileChange(blockIndex, positionIndex, textInput);
    setTextInput('');
  };

  if (type instanceof File) {
    const fileURL = URL.createObjectURL(type);
    if (type.type.startsWith('image/')) {
      return <img src={fileURL} alt="preview" className="h-full w-full" />;
    } else if (type.type === 'application/pdf') {
      return (
        <embed
          src={fileURL}
          type="application/pdf"
          className="h-full w-full"
        />
      );
    } else if (type.type.startsWith('video/')) {
      return <video src={fileURL} controls className="h-full w-full" />;
    }
  }

  switch (type) {
    case 'text':
      return (
        <form onSubmit={handleTextSubmit}>
          <textarea
            id="txtArea"
            className="p-1 h-full w-full"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      );
    case 'image':
      return (
        <input
          type="file"
          accept="image/*"
          className="border p-1 rounded w-full"
          onChange={(e) =>
            handleFileChange(blockIndex, positionIndex, e.target.files[0])
          }
        />
      );
    case 'pdf':
      return (
        <input
          type="file"
          accept="application/pdf"
          className="border p-1 rounded w-full"
          onChange={(e) =>
            handleFileChange(blockIndex, positionIndex, e.target.files[0])
          }
        />
      );
    case 'video':
      return (
        <input
          type="file"
          accept="video/*"
          className="border p-1 rounded w-full"
          onChange={(e) =>
            handleFileChange(blockIndex, positionIndex, e.target.files[0])
          }
        />
      );
    case 'heading':
      return (
        <input
          type="text"
          placeholder="Heading"
          className="border p-1 rounded w-full font-bold text-xl"
        />
      );
    default:
      return <h5>{type}</h5>;
  }
};

export default RenderInput;
