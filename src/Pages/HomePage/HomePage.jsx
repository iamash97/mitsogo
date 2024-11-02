import React from 'react';
import MenuCard from '../../Components/MenuCard/MenuCard';
import RHS from '../../Components/RHS/RHS';

import './styles.css';

const HomePage = () => {
  return (
    <div className='homepage' >
        <MenuCard />
        <RHS />
    </div>
  );
};

export default HomePage;
