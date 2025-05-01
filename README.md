# Research Publishing Website

This is a Next.js-based static website for publishing research papers and journals.

## Development

To start the development server:

```bash
npm run dev
```

## Building and Deploying

### Local Deployment

To build and serve the website locally:

```bash
npm run deploy:local
```

This will build the static site and serve it at http://localhost:3000.

### GitHub Pages Deployment

This project is configured specifically for GitHub Pages deployment. The configuration in `next.config.ts` includes the repository name as the base path:

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/research-publishing' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/research-publishing/' : '',
```

To deploy to GitHub Pages:

```bash
npm run deploy
```

The site will be accessible at: https://bug-battlers.github.io/research-publishing/

### Custom Hosting

If you want to host the website on any other platform:

1. **For root domain hosting** (e.g., yourdomain.com):
   - Modify next.config.ts to remove the basePath and assetPrefix:
   ```typescript
   const nextConfig = {
     output: 'export',
     // No basePath and assetPrefix needed for root domain
     // ...other settings
   };
   ```

2. **For subdirectory hosting** (e.g., yourdomain.com/subpath/):
   - Modify next.config.ts to set the correct subpath:
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/subpath' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/subpath/' : '',
     // ...other settings
   };
   ```

3. Build the static site:
   ```bash
   npm run build
   ```

4. The static files will be generated in the `out` directory. You can deploy these files to any static hosting service like:
   - Netlify
   - Vercel
   - Amazon S3
   - Firebase Hosting
   - Any web server that can serve static files

## Deployment Helper

This project includes a deployment helper script that guides you through deployment to various platforms:

```bash
./deploy-helpers.sh
```

The script supports:
- GitHub Pages
- Netlify
- Firebase Hosting
- Custom hosting
- Local preview

## Technology Stack

- Next.js 15
- React 18
- Tailwind CSS
- Radix UI Components
