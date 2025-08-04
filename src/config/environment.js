// Environment configuration for LandingPage
export const environment = {
  // App URLs - change these based on your deployment
  configuratorUrl: process.env.REACT_APP_CONFIGURATOR_URL || 'http://localhost:3000',
  landingPageUrl: process.env.REACT_APP_LANDING_PAGE_URL || 'http://localhost:3036',
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  
  // Feature flags
  features: {
    enableConfiguratorLink: process.env.REACT_APP_ENABLE_CONFIGURATOR_LINK !== 'false',
    enableSharedAuth: process.env.REACT_APP_ENABLE_SHARED_AUTH === 'true',
    enableDataSharing: process.env.REACT_APP_ENABLE_DATA_SHARING === 'true',
  },
  
  // Development vs Production
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}; 