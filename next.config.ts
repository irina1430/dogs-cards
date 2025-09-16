import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES ? "/dogs-cards" : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.pinimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
