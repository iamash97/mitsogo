import React, { useEffect, useState } from 'react';
import './styles.css'; 
import { Grid2 } from '@mui/material';
import NavigationBar from '../NavBar/NavBar';
import SignupCard from '../SignupCard/SignupCard';

const HEADING_MAP = {
  'markets': 'MARKETS',
  '': 'MARKETS',
  'watchlist': 'WATCHLIST',
  'bots': 'BOTS',
  'wallet': 'WALLET',
  'guides': 'GUIDES',
  'community': 'COMMUNITY',
  'support': 'SUPPORT'
};

const Header = () => {
  const [heading, setHeading] = useState('');
  useEffect(() => {
    const url = window.location.href;
    const parsedUrl = new URL(url);

    const path = parsedUrl.pathname.substring(1);
    setHeading(HEADING_MAP[path]);
  }, []);

  return (
    <div className="header">
        <Grid2 container spacing={0}>
            <Grid2 size={{ xs: 12, md: 12 }}>
                <NavigationBar heading={ heading} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12 }} >
                <SignupCard />
            </Grid2>
        </Grid2>
    </div>
  );
};

export default Header;
