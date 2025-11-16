/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-b70cb36a6853407fa468c5d6dec16633.r2.dev',
      },
    ],
  },
}

module.exports = nextConfig