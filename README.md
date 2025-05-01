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

To deploy to GitHub Pages:

```bash
npm run deploy
```

### Custom Hosting

If you want to host the website on any other platform:

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory. You can deploy these files to any static hosting service like:
   - Netlify
   - Vercel
   - Amazon S3
   - Firebase Hosting
   - Any web server that can serve static files

## Configuration Notes

The website is configured for static export with all paths properly set for direct hosting without any path prefix.

If you need to host the site in a subdirectory (for example, at `example.com/research/`), you'll need to modify the `next.config.ts` file to include the appropriate base path:

```typescript
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/research' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/research/' : '',
  // ...other settings
};
```

Then rebuild the site with `npm run build`.

## Technology Stack

- Next.js 15
- React 18
- Tailwind CSS
- Radix UI Components
