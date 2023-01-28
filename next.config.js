/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/terms-and-conditions': { page: '/terms-and-conditions' },
    }
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
}
