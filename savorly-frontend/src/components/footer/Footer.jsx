import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        {/* left */}
        <div className='footer-content-left'>
          <h2 className='logo'>Savorly.</h2>
          {/* <img src={assets.logo} alt='' /> */}
          <p>
            Savorly is your one-stop shop for delicious meals delivered right to
            your door. We offer a wide variety of cuisines to satisfy any
            craving, and our easy-to-use website makes ordering a breeze.
            Whether you're looking for a quick lunch or a family dinner, Savorly
            has you covered.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>

        {/* center */}
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right */}
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-232-456-7890</li>
            <li>contact@savorly.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        © 2024 Savorly.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
