import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Krish_Resume_Intern_1.pdf",
        permanent: false,
      },
      {
        source: "/resume1",
        destination: "/Krish_Resume_Intern_1.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
