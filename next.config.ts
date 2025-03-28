import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js", // Ensure this file exists
    unoptimized: true, // Required in "export" mode to disable Next.js optimizations
  },
};

export default nextConfig;
