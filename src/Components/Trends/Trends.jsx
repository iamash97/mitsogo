import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import TrendTable from './TrendTable.jsx';

const Trends = ({ trends }) => {
  console.log(trends);
  return (
    <div className='trends'>
      <Card
        sx={{
          borderRadius: '1rem',
          boxShadow: 2,
          minWidth: '25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 0,
          marginRight: '2rem'
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{
                backgroundColor: '#3f51b5',
                width: 40,
                height: 40,
                marginRight: 1,
              }}
            >
            {trends.logo}
            </Avatar>
            <Typography variant="h6">{trends.trendName}</Typography>
          </Box>
          <TrendTable trends={trends} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Trends;
