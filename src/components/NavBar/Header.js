import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" class="nav-logo">Nerchapetti</a>
            <input autofocus class="search" type="search" placeholder="search.." />
        <ul className={click ? 'nav-menu active': "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
        </ul>
          <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
      </nav>
    </header>
  );
};

export default Header;