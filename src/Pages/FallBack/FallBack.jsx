import React from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

function FallBack() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        bgcolor: '#f3f4f6',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        marginTop: '2rem'
      }}
    >
      <ConstructionIcon sx={{ fontSize: 80, color: '#ff9800', mb: 2 }} />
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Work in Progress
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        This feature is currently under development. We're working hard to bring it to you soon!
      </Typography>
      <CircularProgress color="primary" sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Refresh Page
      </Button>
    </Box>
  );
}

export default FallBack;
