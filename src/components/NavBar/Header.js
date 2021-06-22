import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import "./Header.css";
import logo from "./logo.png"

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <header className="header">
      <nav className="navbar">
      <Link className="nav-logo" to="/"><img src={logo} style={{width: "250px"}} alt="Logo" /></Link>
            <SearchBar />
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