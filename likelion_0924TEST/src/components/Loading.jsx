import React from 'react';
import '../assets/scss/section/_loading.scss';
import logo from '../assets/img/icon/Logo.svg';  // Import the logo SVG

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
