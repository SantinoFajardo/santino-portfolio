import ReactIcon from "@/assets/svg/ReactIcon";
import { languages } from "./languages";
import Expo from "@/assets/svg/Expo";
import Redux from "@/assets/svg/Redux";
import Flowbite from "@/assets/svg/Flowbite";
import ReactQuery from "@/assets/svg/ReactQuery";
import TailwindCSS from "@/assets/svg/Tailwind";
import Firebase from "@/assets/svg/Firebase";
import Nodejs from "@/assets/svg/Node";
import Cypress from "@/assets/svg/Cypress";
import Expressjs from "@/assets/svg/Express";

interface Technologies {
  [key: string]: { title: string; language: string; icon: React.ReactElement };
}

export const technologies = {
  ReactNative: {
    title: "React Native",
    language: languages.Typescript,
    icon: <ReactIcon className="size-6" />,
  },
  Expo: {
    title: "Expo",
    language: languages.Typescript,
    icon: <Expo className="size-6" />,
  },
  Redux: {
    title: "Redux",
    language: languages.Typescript,
    icon: <Redux className="size-6" />,
  },
  Flowbite: {
    title: "Flowbite",
    language: languages.Typescript,
    icon: <Flowbite className="size-6" />,
  },
  ReactQuery: {
    title: "React Query",
    language: languages.Typescript,
    icon: <ReactQuery className="size-6" />,
  },
  Tailwind: {
    title: "Tailwind",
    language: languages.Typescript,
    icon: <TailwindCSS className="size-6" />,
  },
  Firebase: {
    title: "Firebase",
    languages: languages.Typescript,
    icon: <Firebase className="size-6" />,
  },
  Node: {
    title: "Node",
    languages: languages.Typescript,
    icon: <Nodejs className="size-6" />,
  },
  Cypress: {
    title: "Cypress",
    languages: languages.Typescript,
    icon: <Cypress className="size-6" />,
  },
  Express: {
    title: "Express",
    languages: languages.Typescript,
    icon: <Expressjs className="size-6" />,
  },
  Gin: {
    title: "Gin",
    languages: languages.Golang,
    icon: (
      <img
        src="https://raw.githubusercontent.com/gin-gonic/logo/master/color.png"
        alt="Gin icon"
        className="size-6"
      />
    ),
  },
};
