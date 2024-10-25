// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'], // Permite todos os domínios
  },
};

module.exports = nextConfig;