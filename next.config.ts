import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/site",
  images: {
    minimumCacheTTL: 31536000, // 1 year
  },
};

export default nextConfig;
