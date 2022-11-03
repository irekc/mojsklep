/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
<<<<<<< HEAD
    domains: ["naszsklep-api.vercel.app", "picsum.photos"],
=======
    domains: ["fakestoreapi.com"],
>>>>>>> 2d5eb02e6d7ad4806852ccfeed98972862354b78
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
