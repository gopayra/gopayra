/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //   }
  // },
  // images: {
  //   loader: 'akamai',
  //   // path: 'https://gopayra.com',
  //   path: '/',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gopayra.com',
        port: '',
        pathname: '/_next/static/media/**',
      },
    ],
  },
}
