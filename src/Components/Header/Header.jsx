import React from 'react';
import './styles.css'; 
import { Grid2 } from '@mui/material';
import NavigationBar from '../NavBar/NavBar';
import SignupCard from '../SignupCard/SignupCard';

const Header = () => {
  return (
    <div className="header">
        <Grid2 container spacing={0}>
            <Grid2 size={{ xs: 12, md: 12 }}>
                <NavigationBar />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} >
                <SignupCard />
            </Grid2>
        </Grid2>
    </div>
  );
};

export default Header;
