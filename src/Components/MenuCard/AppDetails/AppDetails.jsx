import * as React from 'react';
import FlutterDashRoundedIcon from '@mui/icons-material/FlutterDashRounded';
import './styles.css';
import { Typography } from '@mui/material';

export default function AppDetails() {
    return (
        <div className='app-details'>
            <FlutterDashRoundedIcon fontSize='large' />
            <Typography variant='h5' fontWeight={'fontWeightBold'} color='text.primary'>AI BROKER</Typography>
        </div>
    );
  }