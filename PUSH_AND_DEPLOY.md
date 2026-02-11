# 🚀 Push Demo Mode to GitHub & Deploy

Your demo mode code is ready! Just need to push it to GitHub and enable it on Netlify.

## ✅ Step 1: Push to GitHub

You have **3 commits** ready to push with all the demo mode features.

### Option A: Using Terminal (Easiest)

```bash
git push origin main
```

If it asks for credentials:
- **Username**: `milenalangen`
- **Password**: Use a **Personal Access Token** (not your GitHub password)
  - Get one at: https://github.com/settings/tokens
  - Or use the one you created before

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. You should see the changes
3. Click "Push origin"
4. Done!

### Option C: Using VS Code

1. Open the Source Control panel (Ctrl+Shift+G)
2. Click the "..." menu
3. Select "Push"
4. Done!

---

## ✅ Step 2: Netlify Will Auto-Deploy

Once pushed, Netlify should **automatically deploy** (if you connected GitHub to Netlify).

Check deployment:
1. Go to: https://app.netlify.com/teams/milenalangen/sites
2. Click on your site
3. Go to "Deploys" tab
4. You should see a new deployment starting

---

## ✅ Step 3: Enable Demo Mode in Netlify

After deployment completes:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   ```
   Key:   VITE_DEMO_MODE
   Value: true
   ```
4. Click **Save**
5. Go to **Deploys** tab
6. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## ✅ Step 4: Test Your Demo!

After the deploy completes:

1. Visit your site (your Netlify URL)
2. You should see: **"Demo Mode - Enter any email"**
3. Type any email (e.g., `test@demo.com`)
4. Click Login
5. You're in! 🎉

---

## 🎁 What's Being Pushed

**3 new commits:**
1. ✅ Initial commit with app structure
2. ✅ Demo mode implementation
3. ✅ Complete documentation

**Files added:**
- Demo mode utilities (`src/utils/demoData.js`)
- 8 documentation files (guides for setup)
- Updated API calls to support demo mode
- Updated login page for demo mode

**Total changes:** 13 files modified, 500+ lines added

---

## 📋 Quick Checklist

- [ ] Push to GitHub (`git push origin main`)
- [ ] Wait for Netlify auto-deploy (or manually deploy)
- [ ] Add `VITE_DEMO_MODE = true` in Netlify
- [ ] Trigger redeploy
- [ ] Test the demo!

---

## 🆘 Troubleshooting

### Can't push to GitHub?
Try:
```bash
# Set up SSH instead of HTTPS
git remote set-url origin git@github.com:milenalangen/kystlaget.git
git push origin main
```

Or create a Personal Access Token:
- Go to: https://github.com/settings/tokens
- Generate new token (classic)
- Select "repo" scope
- Use token as password when pushing

### Netlify not auto-deploying?
- Go to Netlify dashboard
- Click "Trigger deploy" manually
- Select "Deploy site"

### Demo mode not working after deploy?
- Make sure `VITE_DEMO_MODE = true` is set (not `"true"` with quotes)
- Trigger a fresh deploy after adding the variable
- Check browser console for errors

---

## 🎯 Expected Result

After all steps, your site will:
- ✅ Show "Demo Mode - Enter any email" on login
- ✅ Accept any email address
- ✅ Show 2 demo boats (Elfryd I & II)
- ✅ Show sample bookings
- ✅ Display all features and UI

Perfect for presentations and demos!
