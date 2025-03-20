import React from 'react';
import './Banner.css'

import banner1 from '../images/banner-01.jpg'
import banner2 from '../images/banner-02.jpg'

const images = {
  banner1,
  banner2,
};

const Banner = ({ imageKey, titleText, fillerText }) => {
  return (
    <div className="main-banner" style={{ backgroundImage: `url(${images[imageKey]})` }}>
      <div className="item">
        <span className="category">{fillerText}</span>
        <h2>{titleText}</h2>
      </div>
    </div>
  );
};
export default Banner;
