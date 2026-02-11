# Demo Mode Setup Guide

Demo mode allows you to deploy a test version of the Kystlaget app **without requiring real authentication tokens**. This is perfect for showcasing the design and functionality of the app.

## What is Demo Mode?

In demo mode:
- ✅ Users can login with **any email address** (no token validation)
- ✅ All app features and UI are functional
- ✅ Mock data is used for boats and bookings
- ✅ Weather and tide data still work (if APIs are configured)
- ✅ Perfect for presentations and demonstrations

## Quick Setup for Netlify

### Option 1: Set Environment Variable in Netlify UI

1. Go to your site in Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add:
   ```
   Key:   VITE_DEMO_MODE
   Value: true
   ```
5. Save and trigger a new deployment

### Option 2: Set in netlify.toml

Add this to your `netlify.toml` file:

```toml
[build.environment]
  VITE_DEMO_MODE = "true"
```

Then commit and push:
```bash
git add netlify.toml
git commit -m "Enable demo mode"
git push
```

## Local Development with Demo Mode

1. **Create a `.env` file** (if you haven't already):
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` and add**:
   ```env
   VITE_DEMO_MODE=true
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Login with any email** - no token required!

## How Demo Mode Works

### Login Screen
- **Production mode**: "Login with your token" + requires valid token
- **Demo mode**: "Demo Mode - Enter any email" + accepts any input

### Data
- **Users**: Mock user data is created based on the email entered
- **Boats**: Two demo boats (Elfryd I and Elfryd II) are available
- **Bookings**: Sample bookings are pre-populated
- **Weather/Tide**: Real data (if API keys are configured)

### What's Mocked in Demo Mode

The following API calls return mock data:
- ✅ User profile
- ✅ Boat listings
- ✅ User bookings
- ✅ Future bookings
- ✅ All bookings list

The following still use real APIs:
- ✅ Weather data (YR.no)
- ✅ Tide data (Stormglass - if configured)

## Demo User Details

When you login in demo mode, a user is created with:
```javascript
{
  id: "demo-user-123",
  email: "whatever-you-entered@email.com",
  name: "Demo User"
}
```

## Demo Boats

Two boats are available in demo mode:
1. **Elfryd I** - Motor boat, capacity 6
2. **Elfryd II** - Sailing boat, capacity 4

## Demo Bookings

Sample bookings are created:
- Booking 1: 2 days from now
- Booking 2: 5 days from now

## Switching Between Modes

### To Enable Demo Mode
Set `VITE_DEMO_MODE=true` in environment variables

### To Disable Demo Mode (Production)
Either:
- Set `VITE_DEMO_MODE=false`
- Or remove the variable entirely (defaults to false)

## Testing Demo Mode

1. **Deploy to Netlify** with demo mode enabled
2. **Visit your site** (e.g., `https://your-app.netlify.app`)
3. **Enter any email** on the login screen
4. **Click Login** - you'll be taken to the app
5. **Explore all features** - bookings, boats, weather, profile

## Limitations of Demo Mode

⚠️ **Important Notes:**

1. **No persistence**: Refreshing the page may reset data
2. **Mock data only**: Bookings and boats are fake
3. **No real backend**: Cannot create/update/delete real data
4. **Single user**: All demo sessions use the same mock user
5. **Weather/Tide**: Requires API keys to work (optional)

## Production Deployment

When you're ready to deploy for real users:

1. **Set `VITE_DEMO_MODE=false`** (or remove the variable)
2. **Add all required environment variables**:
   ```
   VITE_API_URL=https://depositbox.api.narverk.no/api
   VITE_YR_API_URL=https://www.yr.no/api/v0
   VITE_TIDE_API_URL=https://api.stormglass.io/v2
   VITE_PRIVATE_TIDE_KEY=your-api-key
   ```
3. **Redeploy**
4. Users will now need real authentication tokens

## Recommended Setup

For presentations and demos:
```env
VITE_DEMO_MODE=true
VITE_YR_API_URL=https://www.yr.no/api/v0
# Weather will work, other features use mock data
```

For production:
```env
VITE_DEMO_MODE=false
VITE_API_URL=https://depositbox.api.narverk.no/api
VITE_YR_API_URL=https://www.yr.no/api/v0
VITE_TIDE_API_URL=https://api.stormglass.io/v2
VITE_PRIVATE_TIDE_KEY=your-real-api-key
```

## Troubleshooting

### "Still asking for token"
- Check that `VITE_DEMO_MODE` is set to `"true"` (string, not boolean)
- Trigger a new deployment after adding the variable
- Clear browser cache and try again

### "No boats/bookings showing"
- Check browser console for errors
- Mock data should load automatically in demo mode
- Try refreshing the page

### "Weather not working"
- Weather requires the YR.no API (no key needed)
- Check that `VITE_YR_API_URL` is set
- Network requests might be blocked by CORS

## Questions?

- Check `src/utils/demoData.js` to see/modify mock data
- Check `src/pages/Welcome.jsx` to see demo mode login logic
- Check individual API files for demo mode implementations
