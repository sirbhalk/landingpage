import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './ProfileSummary.css';

const ProfileSummary = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const initials = user.name
    ? user.name
        .split(' ')
        .map((part) => part.charAt(0).toUpperCase())
        .join('')
        .slice(0, 2)
    : user.email?.charAt(0)?.toUpperCase() ?? 'U';

  return (
    <section className="profile-summary">
      <div className="container">
        <div className="profile-card">
          <div className="profile-avatar" aria-hidden="true">
            {initials}
          </div>
          <div className="profile-details">
            <p className="profile-label">Signed in as</p>
            <h3 className="profile-name">{user.name || 'Customer'}</h3>
            <p className="profile-email">{user.email}</p>
          <div className="profile-actions">
            <button
              type="button"
              className="theme-btn profile-cta"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;

