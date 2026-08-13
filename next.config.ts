/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kommoncanvas',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
   env: {
    NEXT_PUBLIC_BASE_PATH: '/kommoncanvas',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;