import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Krish D Shah",
  description: "Explore Krish D Shah's engineering portfolio, showcasing production AI agents, RAG support pipelines, developer tools, and scalable full-stack web platforms.",
};

export default function Page() {
  return <ProjectsClient />;
}