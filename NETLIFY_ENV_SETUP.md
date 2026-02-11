# Netlify Environment Variables Setup

After deploying to Netlify, you need to configure these environment variables.

## 🎭 Quick Start: Demo Mode (No Authentication)

**Want to test the app without real authentication?** Just add this one variable:

```
Key:   VITE_DEMO_MODE
Value: true
```

Then skip to the bottom for optional weather/tide configuration. **[Read more about Demo Mode](./DEMO_MODE.md)**

---

## How to Add Environment Variables in Netlify

1. Log into your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** for each one below

## Production Environment Variables

For production deployment with real authentication, add these variables:

Copy and paste these exactly as shown (update the API key):

### Main Backend API
```
Key:   VITE_API_URL
Value: https://depositbox.api.narverk.no/api
```

### Weather API (YR.no)
```
Key:   VITE_YR_API_URL
Value: https://www.yr.no/api/v0
```

### Tide API Base URL
```
Key:   VITE_TIDE_API_URL
Value: https://api.stormglass.io/v2
```

### Tide API Key (Get from stormglass.io)
```
Key:   VITE_PRIVATE_TIDE_KEY
Value: YOUR_STORMGLASS_API_KEY_HERE
```

## Getting Your Stormglass API Key

1. Visit https://stormglass.io/
2. Click "Sign Up" → "Get Started Free"
3. Create an account
4. Go to your Dashboard
5. Copy the API Key
6. Paste it as the value for `VITE_PRIVATE_TIDE_KEY`

**Note**: Free tier includes 50 requests per day, which should be enough for testing and moderate usage.

## Important Notes

- ⚠️ Variables starting with `VITE_` are exposed to the browser
- Never put sensitive credentials in `VITE_` variables
- After adding/changing variables, trigger a new deploy in Netlify
- Variables are only available after a new build

## Verify Setup

After deploying with environment variables:

1. Open your deployed site
2. Open browser DevTools (F12)
3. Go to Console tab
4. Type: `import.meta.env`
5. You should see your `VITE_` variables listed

## Troubleshooting

### "Cannot read properties of undefined"
- Environment variables not set
- Redeploy needed after adding variables

### "Network Error" on API calls
- Check CORS is enabled on the backend
- Verify API URLs are correct
- Check API keys are valid

### Weather/Tide data not loading
- Verify `VITE_PRIVATE_TIDE_KEY` is set correctly
- Check API quota hasn't been exceeded
- Check browser console for specific errors

## Local Development Environment Variables

For local development, create a `.env` file in the project root:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your values:

```env
VITE_API_URL=https://depositbox.api.narverk.no/api
VITE_YR_API_URL=https://www.yr.no/api/v0
VITE_TIDE_API_URL=https://api.stormglass.io/v2
VITE_PRIVATE_TIDE_KEY=your-stormglass-api-key
```

**Note**: The `.env` file is gitignored and won't be committed to your repository.
