import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
  /* config options here */
};

export default nextConfig;
