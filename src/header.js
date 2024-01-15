import React from "react";
import logo from './FullLogo.png';
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const backgroundImageStyle = {
        color: 'rgb(46, 89, 166)',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        padding: '5px 20px 20px 10px',
        backgroundImage: 'url(/bannerBackground.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1.0, // Adjust the opacity as needed
        zIndex: -1,
      };
    
      const navItemStyle = {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'rgb(46, 89, 166)',
      }; 
    
      return (
        <div className='home-page' style={{ fontFamily: 'Arial, sans-serif'}}>
            <header style={backgroundImageStyle}>
              <Link to='/'>
                <img src={logo} alt="San Novus Trademark Logo" style={{ height: '50px' }} />
              </Link>
              
              <nav>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  padding: '0px 0px 10px 20px',
                  marginBottom: 10, 
                }}>
                  <li className='dropdown'>
                    <a href='/services' style={navItemStyle}>Services</a>
                      <div className='dropdown-content'>
                          <a href='/trademark-searches'>Trademark Searches</a>
                          <a href='/trademark-registration-applications'>Trademark Registration Applications</a>
                          <a href='/trademark-oar'>Trademark Office Action Responses</a>
                          <a href='/trademark-sou'>Trademark Statements of Use</a>
                          <a href='/trademark-renewals'>Trademark Registration Renewals</a>
                          <a href='/international-trademarks'>International Trademark Applications</a>
                      </div>
                  </li>
                  <li><a href='about'style={navItemStyle}>About</a></li>
                  <li><a href='why-us'style={navItemStyle}>Why Us?</a></li>
                  <li><a href='faq'style={navItemStyle}>FAQ</a></li>
                  <li><a href='pricing'style={navItemStyle}>Pricing</a></li>
                  <li><a href='contact'style={navItemStyle}>Contact Us</a></li>
                </ul>
            </nav>
            </header>
        </div>
    );
};

export default Header;
