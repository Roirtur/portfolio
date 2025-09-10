import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export", // enables `next export`
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  trailingSlash: true,
};

export default nextConfig;
