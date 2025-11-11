import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useAuth } from '../../context/AuthContext';

const HeaderS3 = (props) => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const userInitials = user?.name
        ? user.name
              .split(' ')
              .map((part) => part.charAt(0).toUpperCase())
              .join('')
              .slice(0, 2)
        : user?.email?.charAt(0)?.toUpperCase() ?? '';

    return (
        <header className={props.hclass}>
            <div id="header-sticky" className={isSticky ? 'header-1 style-2 sticky' : 'header-1 style-2'}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/" className="header-logo">
                                        <img
                                            src={'https://pub-899e12361f7c46aa85cc1abaf674bd3a.r2.dev/logo.png'}
                                            alt="3DMock logo"
                                            style={{ height: '40px' }}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown active menu-thumb">
                                                <a onClick={ClickHandler} href="https://3d-mock-app.vercel.app/">
                                                    3D Model Configurator
                                                </a>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <Link onClick={ClickHandler} to="/team" className="border-none">
                                                    3D Model Configurator
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/about">
                                                    Products
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Pricing
                                                </Link>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link onClick={ClickHandler} to="#">
                                                    Become an affiliate
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="header-button">
                                    {user ? (
                                        <div className="d-flex gap-2 align-items-center">
                                            <div
                                                className="header-user-avatar"
                                                style={{
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    fontWeight: 600,
                                                    fontSize: 14
                                                }}
                                            >
                                                {userInitials || 'U'}
                                            </div>
                                            <div className="header-user-info">
                                                <span
                                                    className="header-user-name"
                                                    style={{ fontWeight: 600, color: '#0f172a' }}
                                                >
                                                    {user.name || user.email}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="theme-btn ms-2"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            onClick={ClickHandler}
                                            href="https://3d-mock-app.vercel.app/login"
                                            className="theme-btn"
                                        >
                                            Login / Sign Up
                                        </a>
                                    )}
                                </div>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle">
                                        <MobileMenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default HeaderS3;









