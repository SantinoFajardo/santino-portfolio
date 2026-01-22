import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";

const experience = [
  {
    logo: "https://s2.coinmarketcap.com/static/img/coins/200x200/4287.png",
    date: "2024 - Present",
    enterprise: "Jobchain",
    job: "Full Stack Developer",
    description:
      "I currently work as a Backend Software Engineer on a regulated cryptocurrency exchange, where I own and maintain the core exchange backend. I’m responsible for designing and building systems that manage user balances, wallets, and transactions, ensuring accuracy, security, and regulatory compliance. My role involves end-to-end ownership, including architecture decisions, integrations with blockchain networks and external services, and deploying production-ready systems that operate reliably at scale."
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEYt_cfBidhfw/company-logo_200_200/B56ZaHjqxAGkAM-/0/1746030996889?e=1770854400&v=beta&t=vzd8JhtBD4xugyVAFd1ql5fwfwFe7Fit0Gr5AIzoOpc",
    date: "2023 - 2024",
    enterprise: "Orbit AI",
    job: "Software Engineer",
    description:
      "Developed AI agents that interact directly with the blockchain to help users perform complex actions across more than 10 different blockchains. These agents assist with challenging operations such as bridging assets, swapping tokens, participating in liquidity pools, and more, making advanced blockchain functionality accessible through intelligent automation."
  },
  {
    logo: "https://sphereone.xyz/icon.svg?43d95d86b5b39d19",
    date: "2021 - 2023",
    enterprise: "SphereOne",
    job: "Software Engineer",
    description:
      "Create applications and server where users are able to make payments on the blockchain on more than 15 different blockchains including evm, solana and bitcoin. Building a cross-platform mobile application, web pwa, server and dashboard for customers to be able to control payments, balances and more.",
  },
  {
    logo: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/HENRY/original.PNG?1627058942",
    date: "2022",
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
