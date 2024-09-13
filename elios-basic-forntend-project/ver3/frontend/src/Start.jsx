import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Link to="/interface">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Create
        </button>
      </Link>
    </div>
  )
}

export default Start
