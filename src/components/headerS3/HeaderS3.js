import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu';


const HeaderS3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

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

    return (
        <header className={props.hclass}>
            {/* <HeaderTopbarS3 /> */}
            <div id="header-sticky" className={isSticky ? 'header-1 style-2 sticky' : 'header-1 style-2'}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/" className="header-logo">
                                        <img src={'https://pub-899e12361f7c46aa85cc1abaf674bd3a.r2.dev/logo.png'} alt="3DMock logo" style={{height:'40px'}}/>
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
                                                {/* <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb">
                                                                    <img src={Home1} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} to="/home" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 01
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src={Home2} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} to="/home-2" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 02
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src={Home3} alt="img" />
                                                                    <div className="demo-button">
                                                                        <Link onClick={ClickHandler} to="/home-3" className="theme-btn">
                                                                            Demo Page
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 03
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <Link onClick={ClickHandler} to="/team" className="border-none">
                                                    3D Model Configurator
                                                </Link>
                                                {/* <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/home">Home 01</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home-2">Home 02</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home-3">Home 03</Link></li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/about">Products </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Pricing 
                                                </Link>
                                                {/* <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-details/Sticker-printing">Service Details</Link></li>
                                                </ul> */}
                                            </li>
                                            <li className="has-dropdown">
                                                <Link onClick={ClickHandler} to="#">
                                                    Become an affiliate
                                                </Link>
                                                {/* <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/project">Projects</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-details/3d-Genareted-Cate">Project Details</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">404 Page</Link></li>
                                                </ul> */}
                                            </li>
                                            {/* <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Shop
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/shop">Shop Page</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-details/Calendar-printing-design">Shop Details</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-cart">Shop Cart</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="#">
                                                    Blog
                                                </Link>
                                                <ul className="submenu">
                                                    <li><Link onClick={ClickHandler} to="/news">Blog</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food">Blog Details</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li>
                                                <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                {/* <div className="menu-cart">
                                    <Link onClick={ClickHandler} to="/shop-cart" className="cart-icon">
                                        <i className="far fa-shopping-basket"></i>
                                        <span>{carts.length}</span>
                                    </Link>
                                </div>
                                <div className="content">
                                    <p>HOTLINE</p>
                                    <h5><a onClick={ClickHandler} to="del:00190081889">00190081889</a></h5>
                                </div> */}
                                <div className="header-button">
                                    <Link onClick={ClickHandler} to="/contact" className="theme-btn"> Login / Sign Up</Link>
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
    )
}
export default HeaderS3;









