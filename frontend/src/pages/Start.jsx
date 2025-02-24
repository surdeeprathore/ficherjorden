import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://www.trioangle.com/blog/wp-content/uploads/2024/06/Taxi-Banner-cover.png)] h-screen flex items-center justify-center w-full'>
      <div className="bg-yellow-500 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          Travel in Style, Arrive in Comfort
        </h2>
        <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 hover:bg-gray-800 transition duration-300">Continue </Link>
      </div>
    </div>
  )
}

export default Start
