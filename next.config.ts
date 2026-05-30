import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "https://drive.google.com/file/d/1eJ3ZMSIYaTh_CEfM5kCQGJSp5xJWo7N-/view?usp=drive_link",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
