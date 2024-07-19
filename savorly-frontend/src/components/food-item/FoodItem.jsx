import React, { useContext } from 'react';
import './fooditem.css';
// import { assets } from '../../assets/assets';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

const FoodItem = ({ id, name, price, description, image }) => {
  //rating
  const value = 4.5;

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt='' />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=''
            onClick={() => addToCart(id)}
            className='add'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=''
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=''
            />
          </div>
        )}
      </div>

      {/* ITEMS RATING */}
      <div className='food-item-info'>
        <div className='food-item-rating'>
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt='' /> */}
          <Box
            sx={{
              width: 90,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name='text-feedback'
              value={value}
              size='small'
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
              }
            />
            {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
          </Box>
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
