import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Button from './Button/Button';

import './App.css';

const App = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Header />
      <Button text="Click Me" onClick={handleClick} />

      <div style={{ height: '2000px', paddingTop: '100px' }}>
        <h2>Scroll down to see the header stay on top</h2>
      </div>

      <Button text="With Icon" onClick={handleClick} icon="fa fa-star" variant="orange" />
      <Banner
        imageKey="banner1"
        titleText="Explore Our Properties"
        fillerText="Luxury Homes in New York"
      />
    </div>
  );
};

export default App;
