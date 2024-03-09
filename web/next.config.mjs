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
    ],
  },
}

export default nextConfig
