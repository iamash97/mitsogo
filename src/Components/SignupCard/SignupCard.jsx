import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

const SignupCard = () => {
  return (
    <Card
        sx={{
        display: 'flex',
        borderRadius: '1rem',
        background: 'linear-gradient(to right, #cef7fd, #b5d8f8, #d6f5f8, #7ac5ff, #d6f5f8, #6bbcfe, #6bbcfe)', // Gradient with different shades of blue
        width: '100%',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: '0.5rem', textAlign: 'left' }}>
          Sign Up to AI Broker Tiers and enjoy all the perks
        </Typography>
        <Typography variant="body2" sx={{ width: '60%', fontSize: '0.75rem', textAlign: 'left' }}>
          unlock exclusive access to premium content, personalized insights, and unique perks by subscribing to AI Broker Tiers now!
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'blue',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            width: '12rem',
          }}
          onClick={() => { window.location.href = '/fallback' }}
        >
          Sign Up Now
          <LaunchOutlinedIcon sx={{ marginLeft: '0.5rem' }} />
        </Button>
      </Box>
    </Card>
  );
};

export default SignupCard;
