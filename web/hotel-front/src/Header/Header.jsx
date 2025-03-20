import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-area">
      <div className="main-nav">
        <div className="logo">
          <h1>Villa Agency</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
