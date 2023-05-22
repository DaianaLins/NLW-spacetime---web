/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      '192.168.1.4',
      'http://localhost:3333',
      'http://localhost:3000',
      'localhost',
    ],
  },
}

module.exports = nextConfig
