import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Brand */}
        <div className="flex-shrink-0 flex items-center">
          <p className="text-white font-semibold text-2xl">Jobs</p>
        </div>
        {/* Search Box */}
        <div className="flex justify-center flex-grow">
          <input
            type="text"
            className="w-f h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        {/* User Icon */}
        <div className="flex items-center">
          <p className="text-white">User</p>
          {/* You can replace 'User' with an actual user icon */}
          <svg
            className="h-8 w-8 ml-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a4 4 0 100-8 4 4 0 000 8zm6 2a6 6 0 01-6 6 6 6 0 01-6-6 1 1 0 00-1-1 8 8 0 0015 0 1 1 0 00-1 1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;