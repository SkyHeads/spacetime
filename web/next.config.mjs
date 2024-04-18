/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['avatars.githubusercontent.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
}

export default nextConfig
