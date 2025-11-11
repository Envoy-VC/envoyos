import type { NextConfig } from "next";
import "./src/env";

const config: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "g1cb8myw8k.ufs.sh",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
};

export default config;
