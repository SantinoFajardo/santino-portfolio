import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import { Project } from "./ProjectsCarrousel";

const ProjectCard: React.FC<{ project: Project }> = ({
  project,
}: {
  project: Project;
}): React.ReactElement => {
  return (
    <div className="border border-white rounded-3xl flex flex-col justify-center items-center w-full bg-black">
      <img
        src={project.background}
        className="w-full object-cover rounded-t-3xl h-[200px] border-b border-white"
      />
      <div className="px-5 pb-5">
        <h3 className="text-xl pt-3 font-semibold">{project.title}</h3>
        <p className="text-sm md:text-base">{project.description}</p>

        <h4 className="font-semibold">Languages:</h4>
        <div className="mt-1 flex flex-row flex-wrap gap-x-2">
          {project.languages.map((item: any, index: number) => (
            <div key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{item.icon}</TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>

        <h4 className="font-semibold mt-3">Technologies:</h4>
        <div className="mt-1 flex flex-row flex-wrap gap-x-2">
          {project.tecnologies.map((item, index: number) => (
            <div key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{item.icon}</TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>

        <h4 className="font-semibold mt-3">Others:</h4>
        <div className="mt-1 flex flex-col gap-y-2 sm:flex-row justify-between">
          <div className="flex flex-row flex-wrap gap-x-2">
            {project.others.map((item, index: number) => (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>{item.icon}</TooltipTrigger>
                    <TooltipContent>{item.title}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center gap-x-2">
            <a href={project.link} target="_blank">
              <Button className="bg-white text-black hover:text-white hover:bg-black hover:border-white border flex flex-row gap-x-1">
                <span>Take a look here!</span>
                <Link2Icon className="size-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
