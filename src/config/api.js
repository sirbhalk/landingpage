import { environment } from './environment';

/**
 * Resolve the API base URL for the landing page.
 * Priority:
 *   1. REACT_APP_API_URL environment variable
 *   2. environment.apiUrl value
 *   3. Local development fallback
 */
const resolveApiBaseUrl = () => {
  const candidates = [
    process.env.REACT_APP_API_URL,
    environment?.apiUrl,
    process.env.NODE_ENV === 'production'
      ? 'https://threedbackend-qnmx.onrender.com/api'
      : 'http://localhost:5000/api',
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim().length > 0) {
      const trimmed = candidate.trim().replace(/\/+$/, '');
      return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
    }
  }

  return 'http://localhost:5000/api';
};

const API_BASE_URL = resolveApiBaseUrl();

if (process.env.NODE_ENV !== 'production') {
  // Log once during development to help verify configuration
  console.log('[landingpage] API_BASE_URL:', API_BASE_URL);
}

export default API_BASE_URL;

