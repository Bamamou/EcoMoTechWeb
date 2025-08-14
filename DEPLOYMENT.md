# Deployment Guide

This project supports dual deployment to both GitHub Pages and Netlify.

## Deployment Options

### 1. GitHub Pages (Current)
- **URL**: https://bamamou.github.io/EcoMoTechWeb/
- **Config**: Uses `vite.config.ts` with base path `/EcoMoTechWeb/`
- **Deploy**: `npm run deploy`

### 2. Netlify (New)
- **URL**: Will be provided by Netlify
- **Config**: Uses `vite.config.netlify.ts` with base path `/`
- **Deploy**: Automatic on git push or manual via Netlify CLI

## Quick Deployment

### Deploy to GitHub Pages only:
```bash
npm run build:github
npm run deploy
```

### Build for Netlify:
```bash
npm run build:netlify
```

### Deploy to both:
```bash
# On Windows
./deploy.sh

# Or manually:
npm run build:github && npm run deploy
npm run build:netlify
```

## Netlify Setup Instructions

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build:netlify`
   - Publish directory: `dist`
   - Node version: `18`

3. **Environment Variables** (in Netlify dashboard):
   ```
   SENDGRID_API_KEY=your_actual_sendgrid_api_key_here
   HR_EMAIL=ecomotech@outlook.com
   NODE_ENV=production
   ```

4. **Custom Domain** (optional):
   - Add your domain in Netlify dashboard
   - Configure DNS settings

## Key Differences

| Feature | GitHub Pages | Netlify |
|---------|-------------|---------|
| Base Path | `/EcoMoTechWeb/` | `/` |
| API Routes | Not supported | Serverless functions |
| Custom Domain | Limited | Full support |
| HTTPS | Automatic | Automatic |
| Build Time | Manual trigger | Auto on push |

## API Functionality

- **GitHub Pages**: Contact forms disabled (static hosting only)
- **Netlify**: Full API support via serverless functions
  - Contact forms: `/.netlify/functions/contact`
  - Job applications: `/.netlify/functions/apply`

## Troubleshooting

### GitHub Pages Issues:
- Ensure `base: '/EcoMoTechWeb/'` in `vite.config.ts`
- Check GitHub Pages settings in repository

### Netlify Issues:
- Verify environment variables are set
- Check function logs in Netlify dashboard
- Ensure `base: '/'` in `vite.config.netlify.ts`

## Development

Both configurations work with the same development setup:
```bash
npm run dev
```

The development server will run on `http://localhost:3001/EcoMoTechWeb/` to match the GitHub Pages path.
