import React from 'react';
import './Button.css';

const Button = ({ text, onClick, icon, variant = 'black' }) => {
  const buttonClass = variant === 'orange' ? 'main-button orange' : 'main-button';

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
};

export default Button;
