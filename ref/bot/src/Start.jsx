import React, { useEffect, useState } from "react";
const Start = () => {
  const [name, setName] = useState("");
  const [renders, setRenders] = useState(0);
  useEffect(() => {
    setRenders(prevRender => prevRender+1);
  },[]);
  return (
    <>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>hi this is {name}</p>
      <p>renders: {renders}</p>
    </>
  );
};

export default Start;
