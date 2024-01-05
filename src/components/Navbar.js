import React, { useState } from "react";

function Navbar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);
    onSearch(userInput); // Pass the user input to the parent component
    console.log(userInput);
  };

 

  return (
    <nav className="bg-customBlueGray shadow w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center">
          <p className="text-white font-semibold text-2xl">Jobs</p>
        </div>
    
        <div className="flex justify-center flex-grow">
          <input
            type="text"
            className="w-1/2 h-10 px-4 border bg-customDarkBlue  text-customGray border-none rounded-full focus:outline-none focus:border-none"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center">
          <p className="text-white">User</p>

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
