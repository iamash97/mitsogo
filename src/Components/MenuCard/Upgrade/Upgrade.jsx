import React from 'react';
import './styles.css'; // Import the CSS file for styling
import { Typography } from '@mui/material';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';

const Upgrade = () => {
  return (
    <div className="upgrade">
        <div className='upgrade-text'>
        <Typography variant='body2'>UPGRADE TO</Typography>
        <Typography variant='subtitle'>Professional Tier</Typography>
        </div>
        <PaidSharpIcon fontSize='large'/>
    </div>
  );
};

export default Upgrade;
