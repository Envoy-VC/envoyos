import type { NextConfig } from "next";
import "./src/env";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "g1cb8myw8k.ufs.sh",
        protocol: "https",
      },
    ],
  },
  typedRoutes: true,
};

export default config;
