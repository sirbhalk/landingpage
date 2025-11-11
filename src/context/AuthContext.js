import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import API_BASE_URL from '../config/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const data = await request('/auth/profile');
      setUser(data.user);
    } catch (err) {
      console.error('Auth check failed:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const data = await request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      const { user: userData } = data;

      if (userData) {
        setUser(userData);
      } else {
        await checkAuthStatus();
      }

      return { success: true };
    } catch (err) {
      console.error('Login error:', err);

      let message = 'Login failed';
      if (err.data) {
        const errorData = err.data;
        message =
          errorData.error ||
          errorData.errorMessage ||
          err.message ||
          message;

        if (errorData.errorName) {
          console.error('Error type:', errorData.errorName);
          console.error('Error message:', errorData.errorMessage);
        }

        if (
          errorData.errorName === 'MongooseServerSelectionError' ||
          errorData.errorMessage?.includes('Database')
        ) {
          message = 'Database connection failed. Please try again later.';
        } else if (errorData.errorMessage?.includes('JWT_SECRET')) {
          message = 'Server configuration error. Please contact support.';
        }
      } else if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
        message = 'Cannot connect to server. Please check your connection.';
      } else if (err.message) {
        message = err.message;
      }

      setError(message);
      return { success: false, error: message };
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);

      const data = await request('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const { user: userData } = data;

      if (userData) {
        setUser(userData);
      } else {
        await checkAuthStatus();
      }

      return { success: true };
    } catch (err) {
      console.error('Registration error:', err);
      let message = extractErrorMessage(err, 'Registration failed');

      setError(message);
      return { success: false, error: message };
    }
  };

  const logout = async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      setError(null);
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      register,
      logout,
      clearError,
      updateUser,
      refreshUser: checkAuthStatus,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const request = async (endpoint, options = {}) => {
  const { headers: customHeaders, body, ...rest } = options;
  const headers = new Headers(customHeaders || {});

  const hasJsonBody =
    body &&
    typeof body === 'string' &&
    !headers.has('Content-Type');

  if (hasJsonBody) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: 'include',
    ...rest,
    body,
    headers,
  });

  const contentType = response.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const error = new Error(
      (isJson && (data.error || data.message)) || response.statusText
    );
    error.status = response.status;
    error.data = isJson ? data : { message: data };
    throw error;
  }

  return data;
};

const extractErrorMessage = (err, fallback) => {
  if (err?.data?.error) {
    return err.data.error;
  }

  if (err?.data?.message) {
    return err.data.message;
  }

  if (err instanceof Response) {
    return `${fallback} (status ${err.status})`;
  }

  if (err?.message) {
    if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
      return 'Network error. Please check your connection.';
    }
    return err.message;
  }

  return fallback;
};

