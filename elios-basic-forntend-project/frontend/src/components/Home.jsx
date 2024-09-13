import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Link to="/interface">
        <button className="font-mono bg-gradient-to-l from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          Create
        </button>
      </Link>
    </div>
  );
};

export default Home;
