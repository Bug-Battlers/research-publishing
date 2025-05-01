import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // GitHub Pages serves from repo name subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/research-publishing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/research-publishing/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
