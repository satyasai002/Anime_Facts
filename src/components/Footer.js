import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white  p-8">
      <div className="flex items-center justify-center">
        <button className="bg-black w-1/5 p-2 m-1 rounded-sm">About</button>
        <button className="bg-black w-1/5 p-2 rounded-sm">Contact</button>
      </div>
      <p className="text-center p-4 text-light">
        Anime Facts™ | © 2022
      </p>
    </div>
  );
}

export default Footer