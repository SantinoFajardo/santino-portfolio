import React from "react";
import images from "@/assets";
import Image, { StaticImageData } from "next/image";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";

const frameworksAndDataBases: { name: string; image: StaticImageData }[] = [
  { name: "React", image: images.ReactIcon },
  { name: "React Native", image: images.ReactNativeIcon },
  { name: "NextJs", image: images.NextJSIcon },
  { name: "Postgress", image: images.PostgressIcon },
  { name: "MongoDB", image: images.MongoIcon },
  { name: "Firebase", image: images.FirebaseIcon },
  { name: "NodeJS", image: images.NodeIcon },
  { name: "Express", image: images.ExpressIcon },
];

const lenguajes: { name: string; image: StaticImageData }[] = [
  { name: "Typescript", image: images.TypescriptIcon },
  { name: "Javascript", image: images.JavascriptIcon },
  { name: "Python", image: images.PythonIcon },
  { name: "Swift", image: images.SwiftIcon },
];

const others: { name: string; image: StaticImageData }[] = [
  { name: "Scrum", image: images.ScrumIcon },
  { name: "GitHub", image: images.GitHubIcon },
  { name: "Git", image: images.GitIcon },
  { name: "Jira", image: images.JiraIcon },
];

const floatingEffect = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Stack: React.FC = (): React.ReactElement => {
  return (
    <div
      id="skills"
      className="h-[100vh] bg-white flex flex-col justify-center gap-y-4 items-center">
      <h3 className="font-bold text-gray-400 text-lg md:text-3xl text-center">
        My lenguajes and skills
      </h3>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
        {lenguajes.map((l, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [0, -4, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}>
            <Image
              data-tooltip-id={`${l.name}-tooltip`}
              src={l.image}
              alt={`${l.name} icon`}
              className="w-10 h-10 md:w-20 md:h-20"
            />
            <Tooltip
              id={`${l.name}-tooltip`}
              place="bottom"
              content={l.name}
              className="z-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center mt-4">
        {frameworksAndDataBases.map((l, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [0, -4, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}>
            <Image
              data-tooltip-id={`${l.name}-tooltip`}
              src={l.image}
              alt={`${l.name} icon`}
              className="w-10 h-10 md:w-20 md:h-20"
            />
            <Tooltip
              id={`${l.name}-tooltip`}
              place="bottom"
              content={l.name}
              className="z-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center mt-4">
        {others.map((l, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [0, -4, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}>
            <Image
              data-tooltip-id={`${l.name}-tooltip`}
              src={l.image}
              alt={`${l.name} icon`}
              className="w-10 h-10 md:w-20 md:h-20"
            />
            <Tooltip
              id={`${l.name}-tooltip`}
              place="bottom"
              content={l.name}
              className="z-40"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
