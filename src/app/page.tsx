"use client";
import React from "react";
import { TimelineComponent } from "@/components/Timeline";
import ProjectsCarrousel from "@/components/ProjectsCarrousel";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#111111] text-white pb-10 max-w-screen overflow-x-hidden">
      <Element
        name="home"
        className="flex justify-center text-center items-center flex-col h-[80vh]">
        <h1 className="text-7xl mb-3">
          Santino <span className="text-[#2139b8]">Fajardo</span>
        </h1>
        <h2 className="text-2xl">Software Engineer</h2>
        <span className="text-lg">Golang | NodeJs | Python | Blockchain</span>
        <div className="absolute bg-white h-[200px] w-[300px] rounded-full blur-3xl opacity-15" />
      </Element>

      <Element className="h-[80vh]" name="experience">
        <h1 className="text-3xl mb-5">Experience</h1>
        <TimelineComponent />
      </Element>

      <Element className="w-full flex flex-col" name="projects">
        <h1 className="text-2xl mb-5 text-center">Projects</h1>
        <ProjectsCarrousel />
      </Element>
    </div>
  );
}
