# Healthcare Card Portal - Deployment Guide

## Vercel Deployment

This project is configured for easy deployment to Vercel with audio support enabled.

### Prerequisites
- Node.js 18+ or pnpm installed
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

### Quick Start

#### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

#### Option 2: Deploy via GitHub Integration
1. Push this repository to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"

### Environment Variables

Add these to your Vercel project settings if needed:

```
VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
VITE_ANALYTICS_WEBSITE_ID=your_website_id
```

### Build Configuration

The project uses:
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Features Enabled

✅ Audio input for voice interactions
✅ File upload support
✅ Google CX Agent Studio integration
✅ Responsive design (mobile & desktop)
✅ Professional healthcare UI

### Deployment ID

Your Google Chat Messenger deployment is configured with:
```
Deployment: projects/546321192618/locations/us/apps/4f5b38e8-d94c-4801-ab6a-1fb8b635e86b/deployments/ec6a2078-440b-48ae-bb07-bc3f53a14208
```

### Troubleshooting

**Build fails with "Cannot find module"**
- Run `pnpm install` locally first
- Clear Vercel build cache and redeploy

**Audio not working**
- Check browser microphone permissions
- Ensure HTTPS is enabled (Vercel provides this by default)
- Test with different browsers

**Chat widget not appearing**
- Verify Google Chat Messenger SDK is loaded
- Check browser console for errors
- Ensure deployment ID is correct

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Support

For issues with:
- **Vercel deployment**: https://vercel.com/docs
- **Google CX Agent Studio**: https://cloud.google.com/dialogflow/cx/docs
- **React/Vite**: https://vitejs.dev/
