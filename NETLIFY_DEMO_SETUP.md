# ⚡ Enable Demo Mode in Netlify - 2 Minutes

Your code is on GitHub! ✅
Now just enable demo mode in Netlify:

---

## Step 1: Go to Your Netlify Site

Visit: **https://app.netlify.com/teams/milenalangen/sites**

Click on your deployed site.

---

## Step 2: Add Environment Variable

1. Click **"Site settings"** (top menu)
2. Click **"Environment variables"** (left sidebar)
3. Click **"Add a variable"** button
4. Fill in:
   - **Key**: `VITE_DEMO_MODE`
   - **Value**: `true`
5. Click **"Create variable"** or **"Save"**

---

## Step 3: Trigger New Deployment

1. Click **"Deploys"** (top menu)
2. Click **"Trigger deploy"** button
3. Select **"Clear cache and deploy site"**
4. Wait 2-3 minutes for deployment

---

## Step 4: Test Your Demo! 🎉

1. Visit your Netlify site URL
2. You should see: **"Demo Mode - Enter any email"**
3. Type ANY email (e.g., `demo@test.com`)
4. Click **"Login"**
5. You're in!

---

## ✅ What You'll See

**Login Screen:**
```
Demo Mode - Enter any email
┌─────────────────────────┐
│ Enter your email        │
└─────────────────────────┘
     [    Login    ]
```

**After Login:**
- ✅ Home page with boat listings
- ✅ 2 demo boats (Elfryd I & II)
- ✅ Sample bookings
- ✅ Weather info
- ✅ Your profile
- ✅ All features working!

---

## 🎯 That's It!

Your demo is now live and anyone can access it without a token!

Perfect for:
- Presentations
- Client demos
- Testing
- Showcasing design

---

## 🔄 To Switch Back to Production Later

1. Change `VITE_DEMO_MODE` to `false` (or delete it)
2. Add other API environment variables
3. Redeploy

See `NETLIFY_ENV_SETUP.md` for production setup.
