# Deployment Guide for Kystlaget Trondhjem

## Quick Start - Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Prepare Your Repository**
   ```bash
   # Initialize git if not already done
   git init

   # Add all files
   git add .

   # Commit
   git commit -m "Ready for Netlify deployment"

   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Visit https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Configure Environment Variables**

   Before deploying, add these in Netlify:
   - Go to Site settings → Environment variables
   - Add the following:

   ```
   VITE_API_URL=https://depositbox.api.narverk.no/api
   VITE_YR_API_URL=https://www.yr.no/api/v0
   VITE_TIDE_API_URL=https://api.stormglass.io/v2
   VITE_PRIVATE_TIDE_KEY=your-actual-api-key-here
   ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at a random Netlify URL
   - You can customize the URL in Site settings

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Set environment variables
netlify env:set VITE_API_URL "https://depositbox.api.narverk.no/api"
netlify env:set VITE_YR_API_URL "https://www.yr.no/api/v0"
netlify env:set VITE_TIDE_API_URL "https://api.stormglass.io/v2"
netlify env:set VITE_PRIVATE_TIDE_KEY "your-actual-api-key-here"

# Deploy
netlify deploy --prod
```

## Environment Variables Explained

| Variable | Purpose | Example Value |
|----------|---------|---------------|
| `VITE_API_URL` | Backend API for boats/bookings | `https://depositbox.api.narverk.no/api` |
| `VITE_YR_API_URL` | Norwegian weather service | `https://www.yr.no/api/v0` |
| `VITE_TIDE_API_URL` | Tide prediction service | `https://api.stormglass.io/v2` |
| `VITE_PRIVATE_TIDE_KEY` | API key for Stormglass | Get from stormglass.io |

## Getting Your Stormglass API Key

1. Visit https://stormglass.io/
2. Sign up for a free account
3. Get your API key from the dashboard
4. Free tier includes 50 requests/day

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Build and deploy when you push to the `main` branch
- Create preview deployments for pull requests
- Rollback to previous deployments if needed

## Custom Domain

To use a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## Troubleshooting

### Build Fails

**Error**: "Build failed with exit code 1"
- Check that all environment variables are set correctly
- Verify Node.js version (should be 18+)
- Check build logs for specific errors

### API Calls Fail

**Error**: CORS errors in browser console
- The backend API must have CORS enabled
- Contact backend administrator to whitelist your Netlify domain

**Error**: 401 Unauthorized on weather/tide APIs
- Check that API keys are set correctly in environment variables
- Verify API keys are valid and not expired

### PWA Not Working

**Error**: Service worker not registering
- Ensure site is served over HTTPS (Netlify does this automatically)
- Check browser console for service worker errors
- Clear browser cache and try again

### Blank Page After Deployment

- Check browser console for errors
- Verify `dist` folder is being deployed (not `build`)
- Check that base URL in `vite.config.js` is correct

## Performance Optimization

The build may show a warning about chunk size. To optimize:

1. Enable code splitting in `vite.config.js`:
```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        charts: ['chart.js', 'react-chartjs-2'],
      }
    }
  }
}
```

2. Use dynamic imports for large components:
```javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## Monitoring

After deployment:
- Check Netlify Analytics for usage stats
- Monitor build times and deploy frequency
- Set up Netlify Functions for serverless features (if needed)

## Support

- Netlify Docs: https://docs.netlify.com/
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
