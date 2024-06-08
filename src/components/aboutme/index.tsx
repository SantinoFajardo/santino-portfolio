import React from "react";
import SantinoImage from "../../assets/me.jpeg";
import Image from "next/image";
import LinkedinIcon from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/github.svg";
import CV from "../../assets/cv.png";
import { motion } from "framer-motion";

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const AboutMe: React.FC = (): React.ReactElement => {
  return (
    <div className="h-[100vh] flex justify-center items-center" id="about">
      <motion.div
        className="flex flex-col md:flex-row gap-x-5 justify-center items-center gap-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <Image
            src={SantinoImage}
            alt="Santino Fajardo image"
            width={150}
            height={150}
            className="rounded-full shadow-lg shadow-gray-400"
          />
        </motion.div>
        <motion.div
          className="justify-center items-center flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <h1 className="font-bold text-gray-400 text-lg md:text-3xl">
            Santino Fajardo
          </h1>
          <h3 className="text-gray-300 md:text-xl">Software engineer</h3>
          <motion.div
            className="flex flex-row gap-x-3 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <Image
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/santino-fajardo-810a61235/"
                )
              }
              src={LinkedinIcon}
              className="w-10 h-10 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-black transition-all duration-200"
              alt="Linkedin icon"
            />
            <Image
              onClick={() => openLink("https://github.com/SantinoFajardo")}
              src={GitHubIcon}
              alt="Github"
              className="w-10 h-10 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-black transition-all duration-200"
            />
            <Image
              src={CV}
              alt="CV Icon"
              className="w-10 h-10 rounded-full hover:cursor-pointer hover:shadow-md hover:shadow-black transition-all duration-200"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
