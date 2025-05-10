import type {NextConfig} from 'next';

// Determine if we're deploying to GitHub Pages
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';
// Determine if we're deploying to Vercel (using Vercel's environment variable)
const isVercel = process.env.VERCEL === '1';

// Log deployment target for debugging
console.log(`Building for: ${isGitHubPages ? 'GitHub Pages' : isVercel ? 'Vercel' : 'Local Development'}`);

const nextConfig: NextConfig = {
  /* config options here */
  
  // Only use static export for GitHub Pages
  ...(isGitHubPages && { 
    output: 'export' 
  }),
  
  // Only apply basePath and assetPrefix for GitHub Pages
  ...(isGitHubPages && {
    basePath: '/research-publishing',
    assetPrefix: '/research-publishing/',
  }),
  
  // Common configuration for all environments
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Images configuration - only unoptimize for GitHub Pages
  images: {
    ...(isGitHubPages && { unoptimized: true }),
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
