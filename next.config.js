/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 100000
  },
  images: {
    domains: ["assets.pokemon.com"]
  }
}

module.exports = nextConfig
