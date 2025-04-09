import React from 'react';
import './Header.css';

import PropertiesPage from '../PropertiesPage/PropertiesPage';

const Header = () => {
  const handlePropertiesClick = () => {
    return PropertiesPage
  }

  return (
    <header className="header-area">
      <div className="main-nav">
        <div className="logo">
          <h1>Villa Agency</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties" onClick={handlePropertiesClick}>Properties</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
