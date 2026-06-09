import ProfilesClient from "./ProfilesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Command Center | Krish D Shah",
  description: "Connect with Krish D Shah across digital channels including GitHub open-source repositories, LinkedIn network, tech publications, and platforms.",
};

export default function Page() {
  return <ProfilesClient />;
}