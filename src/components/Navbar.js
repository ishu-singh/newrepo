import React from "react";
import profileGif from "./profile.gif";

const Navbar = ({ showBackButton }) => {
  return (
    <nav className="bg-teal-600 text-white flex justify-between items-center p-2">
      <div className="flex items-center">
        {/* GIF on the left side */}
        <img src={profileGif} alt="Profile GIF" className="w-32 h-8" />
        {/* Admin profile information */}
        {/* <span className="ml-2">Admin Profile</span> */}
      </div>
      {showBackButton && (
        <div className="back-button">
          {/* Back button */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-800">Back</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
