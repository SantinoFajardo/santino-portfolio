import React from "react";
import { Link } from "react-scroll";

const ExtensionBar: React.FC = () => {
  return (
    <nav className="md:hidden bg-gray-400 h-[5vh] w-full flex flex-row justify-between px-1 flex-wrap items-center">
      <Link to="about" smooth={true} duration={500}>
        <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
          About
        </span>
      </Link>
      <Link to="experience" smooth={true} duration={500}>
        <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
          Experience
        </span>
      </Link>
      <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
        Contact
      </span>
      <Link to="skills" smooth={true} duration={500}>
        <span className="text-gray-100 hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
          Skills
        </span>
      </Link>
    </nav>
  );
};

export default ExtensionBar;
