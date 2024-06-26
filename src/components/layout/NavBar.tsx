import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import ExtensionBar from "./ExtensionBar";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationBarProps {
  extensionBar: boolean;
  setExtensionBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  extensionBar,
  setExtensionBar,
}): React.ReactElement => {
  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };
  return (
    <nav className="flex flex-col items-center fixed w-full z-50">
      <div className="flex flex-row w-full justify-between items-center px-1 h-[5vh] bg-gray-100 z-20">
        <div className="md:hidden">
          <button
            onClick={() => {
              setExtensionBar(!extensionBar);
            }}>
            <Bars3BottomLeftIcon className="w-6 h-6 text-violet-400 hover:cursor-pointer" />
          </button>
        </div>
        <div className="hidden md:flex gap-x-2 text-gray-400">
          <Link to="about" smooth={true} duration={500}>
            <span className="hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
              About
            </span>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <span className="hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
              Experience
            </span>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <span className="hover:cursor-pointer hover:text-violet-300 transition-all duration-200">
              Skills
            </span>
          </Link>
        </div>

        <h1 className="text-violet-400 font-bold">Santino Fajardo</h1>
      </div>
      <AnimatePresence>
        {extensionBar && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="w-full">
            <ExtensionBar />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;
