import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        // 头像路径形如 /u/157564203?v=4，放宽到全部路径最省事：
        pathname: "/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
