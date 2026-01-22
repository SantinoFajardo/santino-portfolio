import AmazonWebServices from "@/assets/svg/AWS";
import Docker from "@/assets/svg/Docker";
import Figma from "@/assets/svg/Figma";
import Git from "@/assets/svg/Git";
import Github from "@/assets/svg/GithHub";
import Kubernetes from "@/assets/svg/Kubernetets";
import PostgreSQL from "@/assets/svg/PostgreSQL";

export const others = {
  Figma: {
    title: "Figma",
    icon: <Figma className="size-6" />,
  },
  GitHub: {
    title: "GitHub",
    icon: <Github className="size-6" />,
  },
  Git: {
    title: "Git",
    icon: <Git className="size-6" />,
  },
  AWS: {
    title: "Amazon Web Services",
    icon: <AmazonWebServices className="size-6" />,
  },
  gRPC: {
    title: "gRPC",
    icon: (
      <img
        className="size-6"
        src="https://adictosaltrabajo.com/wp-content/uploads/2023/01/grpc-icon-color.png"
        alt="gRPC icon"
      />
    ),
  },
  Docker: {
    title: "Docker",
    icon: <Docker className="size-6" />,
  },
  Kubernetes: {
    title: "Kubernetes",

    icon: <Kubernetes className="size-6" />,
  },
  PostgreSql: {
    title: "PostgreSQL",
    icon: <PostgreSQL className="size-6" />,
  },
  Mongodb: {
    title: "MongoDB",
    icon: <img src="https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fmongodb_original_wordmark_logo_icon_146425.png&id=146425&pack_or_individual=pack" className="size-6" />,
  }
};
