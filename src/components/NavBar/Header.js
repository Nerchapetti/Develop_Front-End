import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <header className="header">
      <nav className="navbar">
      <Link className="nav-logo" to="/">Nerchapetti</Link>
            <input autoFocus className="search" type="search" placeholder="search.." />
        <ul className={click ? 'nav-menu active': "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
          <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      </nav>
    </header>
  );
};

export default Header;