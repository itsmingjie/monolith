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
  async rewrites() {
    return [
      {
        source: "/ft",
        destination: "/facetime",
      },
    ];
  },
  // redirects
  async redirects() {
    return [
      {
        source: "/travel",
        destination:
          "https://mingjie.notion.site/mingjie/e2dde52ddfa446d799b45649f6869f34",
        permanent: false,
      },
    ];
  },
};

module.exports = withMdx(withContentlayer(nextConfig));
