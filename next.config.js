// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
