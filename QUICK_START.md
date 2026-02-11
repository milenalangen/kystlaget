# Quick Start Guide - Deploy to Netlify in 5 Minutes

## Prerequisites
- GitHub account
- Netlify account (free)
- Stormglass API key (optional, for tide data)

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub (https://github.com/new)
# Then run these commands:

git add .
git commit -m "Initial commit - Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and select your repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Click "Deploy site"

## Step 3: Add Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Click "Add a variable"
3. Add these variables:

```
VITE_API_URL = https://depositbox.api.narverk.no/api
VITE_YR_API_URL = https://www.yr.no/api/v0
VITE_TIDE_API_URL = https://api.stormglass.io/v2
VITE_PRIVATE_TIDE_KEY = your-api-key-here
```

4. Trigger a redeploy from the Deploys tab

## Step 4: Get Your Stormglass API Key (Optional)

1. Visit https://stormglass.io/
2. Sign up for free account (50 requests/day)
3. Copy your API key
4. Add it as `VITE_PRIVATE_TIDE_KEY` in Netlify

## That's It!

Your app is now live! You'll get a URL like `https://your-site-name.netlify.app`

## Customize Your Domain (Optional)

In Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API keys to .env

# Run development server
npm run dev
```

Visit http://localhost:5173

## Troubleshooting

### Build fails
- Check environment variables are set
- Check build logs in Netlify dashboard

### Blank page after deploy
- Check browser console for errors
- Verify environment variables are set correctly

### API errors
- Make sure all environment variables are added in Netlify
- The backend API must have CORS enabled for your domain

## Next Steps

- Set up custom domain
- Enable Netlify Analytics
- Configure deploy notifications
- Set up branch deploys for testing

## Resources

- [Full README](./README.md)
- [Detailed Deployment Guide](./DEPLOYMENT.md)
- [Netlify Documentation](https://docs.netlify.com/)
