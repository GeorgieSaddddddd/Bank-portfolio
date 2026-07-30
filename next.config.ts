import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // จำเป็นสำหรับการเอาไปลง GitHub Pages
  basePath: isProd ? '/Bank-portfolio' : '', // <-- เปลี่ยนเป็นชื่อโปรเจกต์ใหม่ (ตัวพิมพ์เล็ก/ใหญ่ต้องเป๊ะ)
  assetPrefix: isProd ? '/Bank-portfolio/' : '',
  images: {
    unoptimized: true, // GitHub Pages ไม่รองรับ Image Optimization
  },
};

export default nextConfig;