import { environment } from './environment';

// Configuration for connecting LandingPage and Client apps
export const appConfig = {
  // Use environment configuration
  configuratorUrl: environment.configuratorUrl,
  landingPageUrl: environment.landingPageUrl,
  apiBaseUrl: environment.apiUrl,
  
  // Feature flags from environment
  features: environment.features
};

// Helper functions for navigation between apps
export const navigationHelpers = {
  // Navigate to configurator
  goToConfigurator: (path = '') => {
    const url = `${appConfig.configuratorUrl}${path}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },
  
  // Navigate back to landing page
  goToLandingPage: (path = '') => {
    const url = `${appConfig.landingPageUrl}${path}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },
  
  // Get configurator URL for links
  getConfiguratorUrl: (path = '') => {
    return `${appConfig.configuratorUrl}${path}`;
  }
}; 