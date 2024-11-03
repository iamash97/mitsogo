import * as React from 'react';
import Card from '@mui/material/Card';
import AppDetails from './AppDetails/AppDetails';
import UserProfile from './UserProfile/UserProfile';
import Menu from './Menu/Menu';
import Upgrade from './Upgrade/Upgrade';
import './styles.css';


export default function MenuCard() {
  const user = {
    name: 'John Doe',
    photo: 'pp.jpg',
    balance: 15453.05,
    pl: '+9.34%'
  };

  return (
    <Card sx={{ width: 1/5, minHeight: '90%', m: 1, boxShadow: 4, borderRadius: '1rem' }} className='menu-card'>
      <div>
        <AppDetails />
        <UserProfile user={user} />
        <Menu />
      </div>
      <Upgrade />
    </Card>
  );
}
