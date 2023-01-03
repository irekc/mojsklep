/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["naszsklep-api.vercel.app", "picsum.photos", "media.graphassets.com"],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
