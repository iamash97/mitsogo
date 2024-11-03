import React from 'react';
import { Typography } from '@mui/material';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import './styles.css';

const Upgrade = () => {
  const handleClick = () => {
    window.location.href = '/fallback';
  };

  return (
    <div className="upgrade" onClick={handleClick}>
        <div className='upgrade-text'>
        <Typography variant='body2'>UPGRADE TO</Typography>
        <Typography variant='subtitle'>Professional Tier</Typography>
        </div>
        <PaidSharpIcon fontSize='large' sx={{ color: '#c49f50' }} />
    </div>
  );
};

export default Upgrade;
