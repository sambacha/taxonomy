const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

module.exports = withContentlayer();
