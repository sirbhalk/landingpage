import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink, useNavigate } from "react-router-dom";
import './style.css';
import { useAuth } from '../../context/AuthContext';

const baseMenus = [
    {
        id: 1,
        title: '3D Model Configurator ',
        link: '#',
    },
    {
        id: 2,
        title: 'Products ',
        link: '/about',
    },
    {
        id: 3,
        title: 'Pricing ',
        link: '#',
    },
    {
        id: 4,
        title: 'Become an affiliate',
        link: '#',
    },
];

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const handleAuthAction = async () => {
        setMenuState(false);
        if (user) {
            await logout();
            navigate('/');
        } else {
            window.location.href = 'https://3d-mock-app.vercel.app/login';
        }
    };

    const username = user?.name || user?.email;

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {baseMenus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        );
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        );
                    })}
                </ul>

                <div className="mobile-auth-action" style={{ padding: '0 24px 24px' }}>
                    <button
                        type="button"
                        className="theme-btn w-100"
                        onClick={handleAuthAction}
                    >
                        {user ? `Logout (${username})` : 'Login / Sign Up'}
                    </button>
                </div>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;