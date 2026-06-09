import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Krish D Shah",
  description: "Learn about Krish D Shah, a Software Engineer and Computer Science undergrad specializing in AI/ML systems, full-stack software development, and open-source.",
};

export default function Page() {
  return <AboutClient />;
}