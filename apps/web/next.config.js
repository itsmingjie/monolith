/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withMdx = require("@next/mdx")();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.mingjie.dev",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co", // spotify
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com", // used for Notion image rendering
      },
    ],
  },
};

module.exports = withMdx(withContentlayer(nextConfig));
