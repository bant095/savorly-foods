import React from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <h2 className='logo'>Savorly.</h2>
        <p>Admin Panel</p>
      </div>

      {/* <img className='logo' src={assets.logo} alt='' /> */}
      <img className='profile' src={assets.profile_image} alt='' />
    </div>
  );
};

export default Navbar;
