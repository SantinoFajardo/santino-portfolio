import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";

const experience = [
  {
    logo: "https://sphereone.xyz/icon.svg?43d95d86b5b39d19",
    date: "Agost 2022 - Present",
    enterprise: "SphereOne",
    job: "Softwre Engineer",
    description:
      "Create applications and server where users are able to make payments on the blockchain on more than 15 different blockchains including evm, solana and bitcoin. Building a cross-platform mobile application, web pwa, server and dashboard for customers to be able to control payments, balances and more.",
  },
  {
    logo: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/HENRY/original.PNG?1627058942",
    date: "June 2022 - October 2022",
    enterprise: "Henry Academy",
    job: "Teaching Assistant",
    description:
      "I lead a group of students to solve both technical and administrative issues. We had daily meetings where we talked about the activities done during the day as well as solving obstacles when writing code.",
  },
];

export const TimelineComponent = () => {
  return (
    <Timeline>
      {experience.map((item, index) => (
        <TimelineItem key={index}>
          <TimelinePoint />
          <TimelineContent>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-600">
              {item.date}
            </p>
            <div className="flex flex-row gap-x-2 items-center">
              <img
                src={item.logo}
                className="size-5 rounded-full"
                alt={`${item.enterprise} logo`}
              />
              <h1 className="text-body-2 font-medium text-metal-400">
                {item.enterprise}
              </h1>
            </div>
            <h2 className="text-metal-200 text-body-4">{item.job}</h2>
            <p className="text-body-5 font-normal text-metal-50">
              {item.description}
            </p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
