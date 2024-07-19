import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/explore-menu/ExploreMenu';
import FoodDisplay from '../../components/food-display/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
