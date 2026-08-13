/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kommoncanvas',
  trailingSlash: true,
  // GSAP's ScrollTrigger creates its own DOM wrapper elements (pin-spacers)
  // outside React's control. React Strict Mode double-mounts components in
  // dev only (never in production) to surface cleanup bugs, and that
  // double-mount isn't safely re-entrant with GSAP's DOM edits — it causes
  // an intermittent "removeChild ... not a child of this node" error on
  // first load that goes away on refresh. Disabling it here removes that
  // dev-only double-mount; it has no effect on the production build.
  reactStrictMode: false,
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