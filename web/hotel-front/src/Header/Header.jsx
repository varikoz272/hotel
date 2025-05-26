import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-area">
      <div className="main-nav">
        <div className="logo">
          <Link to="/">
            <h1>Villa Agency</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
