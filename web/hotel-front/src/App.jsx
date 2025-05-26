import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
// import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner
                titleText="Best Deals For You"
                fillerText="Luxury Villa in Miami"
              />
              <HomePage />
            </>
          } />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/contact" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
