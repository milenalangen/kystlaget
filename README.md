# Kystlaget Trondhjem - Boat Booking & Key Management System

A Progressive Web App (PWA) for managing boat bookings and key distribution for Kystlaget Trondhjem.

## 🎭 Demo Mode Available!

**Want to showcase the app without authentication?** Enable Demo Mode to allow login with any email (no token required). Perfect for presentations and demonstrations!

👉 **[See Demo Mode Setup Guide](./DEMO_MODE.md)** for quick setup instructions.

## Features

- Boat booking system with calendar integration
- Key management system
- Weather integration (YR.no)
- Tide information (Stormglass API)
- Multi-language support (Norwegian/English)
- Light/Dark mode
- Progressive Web App capabilities
- Responsive design
- **Demo mode** for testing without authentication

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **State Management**: Preact Signals
- **PWA**: vite-plugin-pwa
- **Charts**: Chart.js
- **Date Handling**: react-date-range
- **Internationalization**: i18next

## Deployment to Netlify

### Prerequisites

1. A Netlify account
2. Git repository with this code
3. API keys for external services:
   - Stormglass API key (for tide data)

### Step-by-Step Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - These are already configured in `netlify.toml`

3. **Configure Environment Variables**

   In Netlify Dashboard → Site settings → Environment variables, add:

   ```
   VITE_API_URL=https://depositbox.api.narverk.no/api
   VITE_YR_API_URL=https://www.yr.no/api/v0
   VITE_TIDE_API_URL=https://api.stormglass.io/v2
   VITE_PRIVATE_TIDE_KEY=your-stormglass-api-key
   ```

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your app automatically

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your API keys.

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
kystlaget/
├── public/              # Static assets
│   ├── images/         # Images and icons
│   └── manifest.json   # PWA manifest
├── src/
│   ├── api/            # API integration layer
│   │   ├── boat/       # Boat-related API calls
│   │   ├── bookings/   # Booking-related API calls
│   │   ├── user/       # User-related API calls
│   │   └── weather/    # Weather API calls
│   ├── components/     # React components
│   ├── config/         # Configuration files
│   ├── pages/          # Page components
│   ├── store/          # State management
│   ├── utils/          # Utility functions
│   └── App.jsx         # Main app component
├── netlify.toml        # Netlify configuration
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## Backend API

This frontend connects to the Narverk API backend at `https://depositbox.api.narverk.no/api`.

If you need to run your own backend:
- Backend code is available in the original repository
- Requires PostgreSQL database
- Requires Node.js and Express

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Main API endpoint | Yes |
| `VITE_YR_API_URL` | YR.no weather API | No (defaults to yr.no) |
| `VITE_TIDE_API_URL` | Stormglass tide API | Yes (if using tide features) |
| `VITE_PRIVATE_TIDE_KEY` | Stormglass API key | Yes (if using tide features) |

## Known Issues & Limitations

1. **CORS Issues**: The app uses proxies during development. In production:
   - Main API (`depositbox.api.narverk.no`) must have CORS enabled
   - Weather API works via direct calls
   - Tide API requires your API key

2. **Backend**: The backend is not included in this Netlify deployment. It needs to be hosted separately.

## Support

For issues related to:
- Boat booking functionality: Contact Narverk
- Deployment: Check Netlify documentation
- General issues: Open an issue on GitHub

## License

This project was created as a bachelor's thesis project.

## Original Repository

This is a deployment-ready version of the project from: https://github.com/milenalangen/Bachelor
