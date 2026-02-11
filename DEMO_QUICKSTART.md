# 🎭 Demo Mode - Quick Start

## Enable Demo Mode in 2 Steps

### Step 1: Add Environment Variable in Netlify

1. Go to: **Netlify Dashboard** → **Your Site** → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   ```
   Key:   VITE_DEMO_MODE
   Value: true
   ```
4. Click **Save**

### Step 2: Redeploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**
3. Wait for deployment to complete

## ✅ That's It!

Your app is now in demo mode. Anyone can login with any email address - no token required!

## Test It

1. Visit your deployed site
2. You'll see **"Demo Mode - Enter any email"** on the login screen
3. Type any email (e.g., `test@demo.com`)
4. Click **Login**
5. You're in! Explore all features with mock data

## What You Get in Demo Mode

✅ Full UI and design showcase
✅ Mock boats (Elfryd I & II)
✅ Sample bookings
✅ Weather data (if configured)
✅ All navigation and features
✅ No authentication required

## Optional: Add Weather Data

For even better demo, add this variable too:

```
Key:   VITE_YR_API_URL
Value: https://www.yr.no/api/v0
```

This enables real weather data in your demo!

## Switch Back to Production

When ready for real users:

1. Change `VITE_DEMO_MODE` to `false` (or delete it)
2. Add production API variables (see NETLIFY_ENV_SETUP.md)
3. Redeploy

---

**Need more details?** See [DEMO_MODE.md](./DEMO_MODE.md) for complete guide.
