import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const [buttonDisplayed, setbuttonDisplayed] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        setbuttonDisplayed(!buttonDisplayed);
    }

    const expandedClass = expanded ? 'mobile-nav' : null;
    const buttonDisplayedClass = buttonDisplayed ? 'is-active' : null;

    return (
        <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
                <Link to="/">
                    <span id="app-brand">MILAN TV</span>
                </Link>
                <div className={`menu-toggle ${buttonDisplayedClass}`} onClick={handleClick} id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav ${expandedClass} no-search`}>
                    <li className="nav-item" onClick={handleClick}><Link to="/">Home</Link></li>
                    <li className="nav-item" onClick={handleClick}><Link to="/search">Search</Link></li>
                    <li className="nav-item" onClick={handleClick}><Link to="/about">About</Link></li>
                    <li className="nav-item" onClick={handleClick}><Link to="/account">Account</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;