// API Configuration for production deployment
export const API_CONFIG = {
  // Main API endpoint (Narverk backend)
  API_BASE_URL: import.meta.env.VITE_API_URL || '/api',

  // Weather API (YR.no)
  YR_BASE_URL: import.meta.env.VITE_YR_API_URL || '/locations',

  // Tide API (Stormglass)
  TIDE_BASE_URL: import.meta.env.VITE_TIDE_API_URL || '/tide',
  TIDE_API_KEY: import.meta.env.VITE_PRIVATE_TIDE_KEY || '',
};

// Helper function to build full URLs
export const getApiUrl = (path) => {
  if (path.startsWith('/api')) {
    return `${API_CONFIG.API_BASE_URL}${path.replace('/api', '')}`;
  }
  if (path.startsWith('/locations')) {
    return `${API_CONFIG.YR_BASE_URL}${path.replace('/locations', '')}`;
  }
  if (path.startsWith('/tide')) {
    return `${API_CONFIG.TIDE_BASE_URL}${path.replace('/tide', '')}`;
  }
  return path;
};
