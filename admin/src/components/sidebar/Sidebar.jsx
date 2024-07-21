import React from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <div className='sidebar-option'>
          <img src={assets.add_icon} alt='' />
          <p>Add Items</p>
        </div>

        {/* 2 */}
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt='' />
          <p>List Items</p>
        </div>

        {/* 3 */}
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt='' />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
