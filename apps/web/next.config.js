/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
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

module.exports = withContentlayer(nextConfig);
