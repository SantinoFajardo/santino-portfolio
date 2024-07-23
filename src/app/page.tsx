"use client";
import React, { useEffect } from "react";
import { TimelineComponent } from "@/components/Timeline";
import ProjectsCarrousel from "@/components/ProjectsCarrousel";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home(): React.ReactElement {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#111111] text-white pb-10 max-w-screen overflow-x-hidden">
      <Element
        name="home"
        className="flex justify-center text-center items-center flex-col h-[80vh]">
        <h1
          className="text-7xl mb-3"
          data-aos="fade-right"
          data-aos-duration="1500">
          Santino <span className="text-[#2139b8]">Fajardo</span>
        </h1>
        <h2 className="text-2xl" data-aos-duration="1500" data-aos="fade-left">
          Software Engineer
        </h2>
        <span data-aos="fade-left" data-aos-duration="1500" className="text-lg">
          Golang | NodeJs | Python | Blockchain
        </span>
        <div className="absolute bg-white h-[200px] w-[300px] rounded-full blur-3xl opacity-15" />
      </Element>

      <Element
        className="h-[80vh]"
        name="experience"
        data-aos-duration="1500"
        data-aos="fade-left">
        <h1 className="text-3xl mb-5">Experience</h1>
        <TimelineComponent />
      </Element>

      <Element
        className="w-full flex flex-col"
        name="projects"
        data-aos-duration="1500"
        data-aos="zoom-in">
        <h1 className="text-2xl mb-5 text-center">Projects</h1>
        <ProjectsCarrousel />
      </Element>
    </div>
  );
}
