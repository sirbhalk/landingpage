import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import FooterS3 from '../../components/footerS3/FooterS3';
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const { login, error, clearError, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const from = location.state?.from ?? '/';

  useEffect(() => {
    if (!loading && user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    if (!email.trim() || !password.trim()) {
      setFormError('Email and password are required.');
      return;
    }

    setSubmitting(true);
    const result = await login(email.trim(), password.trim());
    setSubmitting(false);

    if (result.success) {
      clearError();
      navigate(from, { replace: true });
    } else if (result.error) {
      setFormError(result.error);
    }
  };

  return (
    <>
      <NavbarS3 hclass={'header-section'} />
      <section className="auth-page">
        <div className="container">
          <div className="auth-grid">
            <div className="auth-card">
              <div className="auth-header">
                <h2>Welcome back</h2>
                <p>Sign in to access your configurator dashboard.</p>
              </div>
              {(formError || error) && (
                <div className="auth-alert">
                  {formError || error}
                </div>
              )}
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="auth-field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="theme-btn auth-submit"
                  disabled={submitting}
                >
                  {submitting ? 'Signing in...' : 'Sign in'}
                </button>
              </form>
              <div className="auth-footer">
                <p>
                  Don&apos;t have an account?{' '}
                  <a
                    className="auth-link"
                    href="https://3d-mock-app.vercel.app/register"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Create one
                  </a>
                </p>
              </div>
            </div>
            <div className="auth-side">
              <div className="auth-side-content">
                <span className="auth-badge">Team access</span>
                <h3>Collaborate in real-time</h3>
                <p>
                  Invite your teammates to create, review and publish product visuals
                  together. Fast, secure and effortless.
                </p>
                <div className="auth-stats">
                  <div>
                    <strong>24/7</strong>
                    <span>Cloud access</span>
                  </div>
                  <div>
                    <strong>99.9%</strong>
                    <span>Uptime guaranteed</span>
                  </div>
                  <div>
                    <strong>5k+</strong>
                    <span>Design teams onboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterS3 />
    </>
  );
};

export default LoginPage;

