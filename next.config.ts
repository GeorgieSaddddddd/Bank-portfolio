import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // ถ้าเป็น Production (Build) ให้ใส่ basePath, ถ้าเป็น dev ให้เป็น undefined
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;