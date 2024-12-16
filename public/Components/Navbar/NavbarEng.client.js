'use client'

import React, { useState } from 'react';
import './Navbar.css';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import LanguagesButton from './LanguagesButton';

const NavbarEng = () => {
  // State to manage the toggle
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition

  // Retrieve the background color from the Redux store
  const navbarBgColor = useSelector((state) => state.color.backgroundColor);

  // Determine the appropriate styles for the navbar
  const navbarStyle = {
    backgroundColor: navbarBgColor === 'black' ? 'black' : 'white',
    borderBottom: navbarBgColor === 'white'
      ? '1px solid rgba(0, 0, 0, 0.1)'
      : '1px solid rgba(255, 255, 255, 0.1)',
  };

  const navStyle = {
    backgroundColor: navbarBgColor,
  };

  const textColor = {
    color: navbarBgColor === 'black' ? 'white' : 'black',
  };

  const textColorClass = navbarBgColor === 'black' ? 'text-white' : 'text-black';


  // Function to toggle the state
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleNavigate = (url) => {
    // Add the 'show-shadow' class to trigger the transition
    setIsTransitioning(true);

    // After 0.3s, navigate to the URL
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  };

  const logoSrc = navbarBgColor === 'black' ? '/images/logo-wb.webp' : '/images/logo-white.webp';


  return (
    <div className='navbar-main' style={navbarStyle}>
      <div className='navbar-left'>
        <img src={logoSrc} className='logo-img' alt='heros' onClick={() => handleNavigate('/en')}/>
      </div>

      <div className={`menu ${isActive ? 'active' : ''}`}>
        <LanguagesButton/>
        <button
          className="nav-tgl"
          type="button"
          aria-label="toggle menu"
          onClick={toggleMenu}
          style={{ backgroundColor: navbarBgColor }}
        >
          <span className={navbarBgColor === 'black' ? 'white-span' : 'black-span'}></span>
        </button>
        <div className="nav" style={navStyle}>
          {/* Navigation content */}
          <div className={`navigations ${isActive ? 'show-navs' : ''}`} style={navStyle}>
            <div className='navigations-wrapper'>
            <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/Plans')}>Services</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/About')}>About Us</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/About/Tjasa')}>Tjaša</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/About/Marsel')}>Marsel</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/Clients')}>Clients</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en/Blog')}>Blog</p>
              <p className={`navigation-paragraph ${textColorClass}`} onClick={() => handleNavigate('/en')}>Home</p>
             </div>
          </div>
        </div>
      </div>





      <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>


    </div>
  );
}

export default NavbarEng;