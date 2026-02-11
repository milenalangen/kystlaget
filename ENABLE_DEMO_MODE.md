# Enable Demo Mode - Step by Step

Follow these exact steps to enable demo mode on your deployed Netlify app:

## Step 1: Go to Netlify Dashboard

Visit: https://app.netlify.com/teams/milenalangen/sites

Click on your deployed site.

## Step 2: Navigate to Environment Variables

1. Click **"Site settings"** in the top navigation
2. In the left sidebar, click **"Environment variables"**
3. You'll see a page with all environment variables

## Step 3: Add Demo Mode Variable

1. Click the **"Add a variable"** button
2. Fill in:
   - **Key**: `VITE_DEMO_MODE`
   - **Value**: `true`
3. Click **"Create variable"** or **"Save"**

## Step 4: Trigger a New Deployment

1. Go back to the main site dashboard (click your site name at top)
2. Click the **"Deploys"** tab
3. Click **"Trigger deploy"** dropdown
4. Select **"Clear cache and deploy site"**
5. Wait for the deployment to complete (usually 1-2 minutes)

## Step 5: Test Your Demo!

1. Visit your site URL (e.g., `https://your-app.netlify.app`)
2. You should see the login screen
3. The input field should say **"Demo Mode - Enter any email"**
4. Type **ANY** email address (e.g., `demo@test.com`)
5. Click **"Login"**
6. You're in! 🎉

## What You Should See

### Login Screen (Demo Mode Enabled)
```
┌─────────────────────────────────────┐
│  Demo Mode - Enter any email       │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ Enter your email              │ │
│  └───────────────────────────────┘ │
│                                     │
│  [        Login        ]           │
└─────────────────────────────────────┘
```

### After Login
You'll see:
- ✅ Home page with boat listings
- ✅ Sample bookings
- ✅ Weather information
- ✅ Your profile (using the email you entered)
- ✅ All navigation and features working

## Troubleshooting

### Still shows "Login with your token"
**Solution**:
- Make sure you typed `true` as a string, not a boolean
- Make sure the key is exactly `VITE_DEMO_MODE`
- Try clearing cache and redeploying
- Wait a few minutes for DNS/CDN to update

### "Demo User" but no data showing
**Solution**:
- Check browser console (F12) for errors
- Try refreshing the page
- Mock data should load automatically

### Page is blank after login
**Solution**:
- Check browser console for errors
- Try a different browser
- Clear browser cache
- Check that the build completed successfully

## Verify Environment Variable

To double-check the variable is set:

1. Go to **Site settings** → **Environment variables**
2. You should see:
   ```
   VITE_DEMO_MODE = true
   ```
3. If it says `false` or is missing, edit/add it again

## Remove Demo Mode Later

When you want to switch back to production:

1. Go to **Site settings** → **Environment variables**
2. Click on `VITE_DEMO_MODE`
3. Either:
   - Change value to `false`, OR
   - Delete the variable completely
4. Trigger a new deployment

Then add production environment variables (see `NETLIFY_ENV_SETUP.md`).

## Quick Reference

| What | Where | Value |
|------|-------|-------|
| Variable Name | Environment variables | `VITE_DEMO_MODE` |
| Variable Value | Environment variables | `true` |
| After Adding | Deploys tab | Trigger deploy → Clear cache |
| Test | Your site URL | Login with any email |

---

**Need help?** Check:
- [DEMO_QUICKSTART.md](./DEMO_QUICKSTART.md) - Overview
- [DEMO_MODE.md](./DEMO_MODE.md) - Complete guide
- [NETLIFY_ENV_SETUP.md](./NETLIFY_ENV_SETUP.md) - All variables
