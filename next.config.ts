import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Bank-portfolio',   
  assetPrefix: '/Bank-portfolio/', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;