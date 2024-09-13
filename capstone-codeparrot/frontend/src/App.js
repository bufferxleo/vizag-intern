// App.js

import React, { useState } from "react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./screens/DashBoard";
import Selection from "./screens/Selection";
import Modification from "./screens/Modification";
function App() {
  const [selectedProgress, setSelectedProgress] = useState("FLOORPLAN");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/selection" element={<Selection selectedProgress={selectedProgress} setSelectedProgress={setSelectedProgress}/>} />
        <Route exact path="/modification" element={<Modification selectedProgress={selectedProgress}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
