/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-blog',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
