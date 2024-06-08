import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const Experience: React.FC = (): React.ReactElement => {
  return (
    <div
      className="min-h-[95vh] bg-white flex justify-center items-center"
      id="experience">
      <div className="flex justify-center items-center flex-col">
        <h3 className="font-bold text-gray-400 text-lg md:text-3xl">
          Experience
        </h3>
        <VerticalTimeline className="relative">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<CodeBracketIcon className="hover:cursor-pointer" />}>
            <h3 className="vertical-timeline-element-title font-semibold text-lg">
              Teaching assistant
            </h3>
            <h4>Henry Academy</h4>
            <h5 className="vertical-timeline-element-subtitle">
              Argentina, Bs.As
            </h5>
            <h6>May 2022 - December 2022</h6>
            <p>
              Teaching assistant in programming academy, assisting in technical
              and administrative problems, participating in meetings to improve
              the academic experience.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            icon={<ComputerDesktopIcon className="hover:cursor-pointer" />}>
            <h3 className="vertical-timeline-element-title font-semibold text-lg">
              Software Engineer
            </h3>
            <h4>SphereOne</h4>
            <h5 className="vertical-timeline-element-subtitle">USA, Texas</h5>
            <h6>Jul 2022 - Present</h6>
            <p>
              Semi senior developer in mobile, web3, AI and web. I review and
              correct PRs, participate in architecture meetings, and deal with
              clients.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(127, 231, 78 )", color: "#fff" }}
            iconStyle={{ background: "rgb(127, 231, 78 )", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(127, 231, 78 )" }}
            icon={<ComputerDesktopIcon className="hover:cursor-pointer" />}>
            <h3 className="vertical-timeline-element-title font-semibold text-lg">
              Freelance
            </h3>
            <h6>Jun 2022 - Present</h6>
            <p>
              Freelance developer, creating APIs, web pages and mobile
              applications. I manage design, development and release to
              production for clients.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
