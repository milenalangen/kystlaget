# 🚀 START HERE

Welcome to your Kystlaget Trondhjem boat booking app!

## 🎯 What Do You Want to Do?

### 🎭 Deploy a Demo (No Authentication Required)

**Perfect for:** Presentations, showcasing design, testing the app

**Quick Start:**
1. Read: [DEMO_QUICKSTART.md](./DEMO_QUICKSTART.md) ⏱️ 2 minutes
2. Follow: [ENABLE_DEMO_MODE.md](./ENABLE_DEMO_MODE.md) for step-by-step Netlify setup

**What you get:**
- Login with any email (no token needed)
- Mock boats and bookings
- Full UI/UX functionality
- Perfect for demonstrations

---

### 🔒 Deploy for Production (Real Users)

**Perfect for:** Live deployment with real authentication

**Quick Start:**
1. Read: [QUICK_START.md](./QUICK_START.md) ⏱️ 5 minutes
2. Follow: [NETLIFY_ENV_SETUP.md](./NETLIFY_ENV_SETUP.md) for environment setup

**What you get:**
- Real authentication with tokens
- Connected to backend API
- Real boats and bookings
- Full production functionality

---

## 📚 All Documentation

### Quick Guides (Start Here)
- **[DEMO_QUICKSTART.md](./DEMO_QUICKSTART.md)** - Deploy demo in 2 steps
- **[ENABLE_DEMO_MODE.md](./ENABLE_DEMO_MODE.md)** - Netlify step-by-step guide
- **[QUICK_START.md](./QUICK_START.md)** - Production deployment in 5 minutes

### Complete Guides
- **[DEMO_MODE.md](./DEMO_MODE.md)** - Everything about demo mode
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment guide
- **[NETLIFY_ENV_SETUP.md](./NETLIFY_ENV_SETUP.md)** - All environment variables
- **[README.md](./README.md)** - Complete project documentation

---

## 🎭 Recommended: Start with Demo Mode

If you're unsure which path to take, **we recommend starting with Demo Mode**:

1. It's faster to set up (just 1 environment variable)
2. No API keys or backend needed
3. Perfect for testing and presentations
4. You can switch to production mode later

👉 **[Open DEMO_QUICKSTART.md](./DEMO_QUICKSTART.md)** to get started now!

---

## ❓ Need Help?

- **Local development**: See [README.md](./README.md#local-development)
- **Deployment issues**: See [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)
- **Demo mode questions**: See [DEMO_MODE.md](./DEMO_MODE.md)
- **Environment variables**: See [NETLIFY_ENV_SETUP.md](./NETLIFY_ENV_SETUP.md)

---

## 📝 Quick Reference

### Demo Mode
```bash
# Netlify environment variable:
VITE_DEMO_MODE = true

# That's it! Login with any email
```

### Production Mode
```bash
# Netlify environment variables:
VITE_DEMO_MODE = false (or omit)
VITE_API_URL = https://depositbox.api.narverk.no/api
VITE_YR_API_URL = https://www.yr.no/api/v0
VITE_TIDE_API_URL = https://api.stormglass.io/v2
VITE_PRIVATE_TIDE_KEY = your-api-key
```

---

**Ready?** Pick your path and follow the quick start guide! 🚀
