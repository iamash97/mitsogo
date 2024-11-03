import React from 'react';
import './styles.css'; 
import { Grid2 } from '@mui/material';
import Trends from '../../Components/RHS/Trends/Trends';

const Market = () => {
  return (
    <div className="market">
        <Grid2 container spacing={0}>
            <Grid2 size={{ xs: 12, md: 12 }} sx={{height: '500px'}}>
                <Trends />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} sx={{height: '1000px'}}>
                <p>xs=6 md=8</p>
            </Grid2>
        </Grid2>
    </div>
  );
};

export default Market;
