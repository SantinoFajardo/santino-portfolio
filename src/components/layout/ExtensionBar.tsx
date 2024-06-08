import React from "react";

const ExtensionBar: React.FC = () => {
  return (
    <nav className="bg-gray-400 h-[5vh] w-full flex flex-row justify-between px-1 flex-wrap items-center">
      <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
        About
      </span>
      <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
        Experience
      </span>
      <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
        Contact
      </span>
      <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
        Skills
      </span>
    </nav>
  );
};

export default ExtensionBar;
