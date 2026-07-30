import type { NextConfig } from "next";

// โค้ดนี้จะช่วยให้ระบบรู้ว่าควรใส่ basePath เฉพาะตอน Build ขึ้น GitHub เท่านั้น
const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = '/Bank-portfolio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? REPO_NAME : '',
  assetPrefix: isProd ? REPO_NAME + '/' : '',
  images: {
    unoptimized: true,
  },
  // ป้องกันปัญหาสาย tailwind หาไฟล์ไม่เจอในบางกรณี
  trailingSlash: true, 
};

export default nextConfig;