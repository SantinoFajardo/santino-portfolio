"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { languages } from "@/const/languages";
import { technologies } from "@/const/technologies";
import { others } from "@/const/others";
import ProjectCard from "./ProjectCard";

export interface Project {
  title: string;
  languages: Array<any>;
  description: string;
  link: string;
  background: string;
  others: Array<any>;
  tecnologies: Array<any>;
  icon: React.ReactElement;
}

const projects = [
  {
    icon: (
      <img
        src="https://play-lh.googleusercontent.com/VwL_rDHBbjudK_jHXJMeSjnld4A4TerPP0CLEI60RkP2aJ5e0t6ebB3YB8ByRH2YbC0=w480-h960-rw"
        alt={`SphereOne icon`}
        className="size-4"
      />
    ),
    title: "Blockchain dapp",
    languages: [languages.Typescript, languages.Javascript],
    others: [others.Figma, others.Git, others.GitHub],
    tecnologies: [
      technologies.ReactNative,
      technologies.Expo,
      technologies.Redux,
      technologies.Flowbite,
      technologies.ReactQuery,
      technologies.Firebase,
    ],
    description: `This React Native application provides a robust and secure platform for conducting Web3 payments on the blockchain. 
    Users can perform transactions with other users, execute swaps and bridges, and more. 
    The app handles user information, supports authentication and multi-factor authentication, and allows users to view their balances across multiple blockchains. 
    The designs were created using Figma, task management was done through Jira, and version control and repository management were handled using Git and GitHub. `,
    link: "https://play.google.com/store/apps/details?id=com.sphereglobal.wallet&hl=en&pli=1",
    background:
      "https://cdn.dribbble.com/userupload/7822081/file/original-1865025c371cfb4adf4a5659b1dd3916.jpg?resize=752x",
  },
  {
    icon: (
      <img
        src="https://play-lh.googleusercontent.com/VwL_rDHBbjudK_jHXJMeSjnld4A4TerPP0CLEI60RkP2aJ5e0t6ebB3YB8ByRH2YbC0=w480-h960-rw"
        alt={`SphereOne icon`}
        className="size-4"
      />
    ),
    title: "Blockchain based server",
    languages: [languages.Typescript, languages.Javascript],
    others: [others.Figma],
    tecnologies: [
      technologies.Express,
      technologies.Node,
      technologies.Firebase,
    ],
    description: `This server processes payments on the blockchain, interacting with protocols and smart contracts. 
    It is deployed on Google Cloud and includes automation with GitHub Actions and unit testing. 
    Built with Express and Google Gateway, it uses JWT token control for authentication and connects to a Firebase database. 
    The server handles user payments, user and client information, and analytics for a dashboard.`,
    link: "https://docs.sphereone.xyz/reference/get-user-info-v1",
    background:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4e81769-dc04-4b6f-92d4-b579469c2322%2FSphereOne__SP.png?id=10d622a4-a3d0-4fde-a633-6562e283630c&table=block",
  },
  {
    icon: (
      <img
        src="https://play-lh.googleusercontent.com/VwL_rDHBbjudK_jHXJMeSjnld4A4TerPP0CLEI60RkP2aJ5e0t6ebB3YB8ByRH2YbC0=w480-h960-rw"
        alt={`SphereOne icon`}
        className="size-4"
      />
    ),
    title: "Client dashboard",
    languages: [languages.Typescript, languages.Javascript],
    others: [others.Git, others.GitHub, others.Figma],
    tecnologies: [
      technologies.Redux,
      technologies.Flowbite,
      technologies.Tailwind,
      technologies.ReactNative,
      technologies.ReactQuery,
      technologies.Tailwind,
    ],
    description:
      "This React Native application provides a robust and secure platform for conducting Web3 payments on the blockchain. Users can perform transactions with other users, execute swaps and bridges, and more. The app handles user information, supports authentication and multi-factor authentication, and allows users to view their balances across multiple blockchains. The designs were created using Figma, task management was done through Jira, and version control and repository management were handled using Git and GitHub. ",
    link: "https://dashboard.sphereone.xyz/",
    background: "https://files.readme.io/47a4904-image.png",
  },
  {
    icon: (
      <img
        alt="Santino Fajardo foto"
        className="size-8 rounded-full"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfR8KylILANWQo92FzenfAAyJzP40M9l0Dw&s"
        }
      />
    ),
    title: "Simple Bank",
    languages: [languages.Golang],
    others: [
      others.Git,
      others.GitHub,
      others.AWS,
      others.gRPC,
      others.Docker,
      others.Kubernetes,
      others.PostgreSql,
    ],
    tecnologies: [technologies.Gin],
    description: `Server application created 100% with Golang programing language. This server leverage the AWS tools in order to deploy a postgres database and
      deploy Docker images. Use gRPC requests leveraging the protobuf tools in order to generate the stubs, generate the openapi json and generate useful documentation.
      Also, create a authentication middleware using PASETO token in order to increase the security and limit the access to users that can leverage the server endpoints.`,
    link: "https://github.com/SantinoFajardo/simple_bank",
    background:
      "https://github.com/techschool/simplebank/raw/master/backend-master.png",
  },
  {
    icon: (
      <img
        alt="Santino Fajardo foto"
        className="size-8 rounded-full"
        src={
          "https://zengo.com/wp-content/uploads/Bitcoin-to-ETH.png"
        }
      />
    ),
    title: "Btc and Eth RPC nodes",
    languages: [languages.Typescript, languages.Javascript, languages.Typescript, languages.Python],
    others: [
      others.Git,
      others.GitHub,
      others.AWS,
      others.gRPC,
      others.Docker,
      others.Kubernetes,
      others.Mongodb,
    ],
    tecnologies: [technologies.Gin, technologies.Linux],
    description: `This application deploys two independent servers to run native Bitcoin and Ethereum JSON-RPC nodes, providing dedicated RPC endpoints for each blockchain. A gateway server, implemented in Golang, acts as a single entry point for clients, forwarding and orchestrating all requests to the underlying Bitcoin and Ethereum RPC nodes. This gateway abstracts the complexity of interacting with multiple blockchain protocols, offering a unified API surface and handling request routing, authentication, and response formatting between clients and both blockchain backends.`,
    link: "https://github.com/SantinoFajardo/simple_bank",
    background:
      "https://bunny-wp-pullzone-nb318evfcx.b-cdn.net/wp-content/uploads/2022/07/node-1024x527.png",
  },
];

function ProjectsCarrousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1: any = useRef(null);
  let sliderRef2: any = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="px-20">
      {/* @ts-ignore */}
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        className="flex justify-center items-center">
        {projects.map((item, index) => (
          <ProjectCard project={item} key={index} />
        ))}
      </Slider>
      {/* @ts-ignore */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={4}
        responsive={[
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        swipeToSlide={true}
        focusOnSelect={true}>
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-row text-center justify-center items-center pt-2">
            <div className="flex justify-center items-center">{item.icon}</div>
            <span className="text-center">{item.title}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsCarrousel;
