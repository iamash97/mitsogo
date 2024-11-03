import React from 'react';
import { Grid2 } from '@mui/material';
import Trends from '../../Components/Trends/Trends';
import CryptoOverview from '../../Components/Crypto/Crypto';
import AllTokensHeader from '../../Components/AllTokensHeader/AllTokensHeader';
import { TRENDS } from '../../utils/constants';
import './styles.css'; 

function Market() {
  return (
    <div className="market">
        <Grid2 container spacing={0}>
            <Grid2 size={{ xs: 12, md: 12 }} sx={{display: 'flex'}}>
              { TRENDS && TRENDS.map((trend) => <Trends trends={trend} /> )}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} >
              <AllTokensHeader />
              <CryptoOverview />
            </Grid2>
        </Grid2>
    </div>
  );
};

export default Market;
