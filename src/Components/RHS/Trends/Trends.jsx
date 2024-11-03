import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import { Grid2 } from '@mui/material'; // Importing Grid2

const Trends = () => {
  return (
    <Card
      sx={{
        borderRadius: '1rem',
        boxShadow: 2, // Slight box shadow
        padding: '1rem',
        maxWidth: 400, // Set a max width for the card
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensure content is spaced
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
            <Typography variant="h6" color="white">I</Typography>
          </Avatar>
          <Typography variant="h6">My Token Card</Typography>
        </Box>
        <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
          <Grid2 item xs={6} sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" fontWeight="bold">TOKENS</Typography>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
                <Typography variant="body2" color="white">T</Typography>
              </Avatar>
              <Box>
                <Typography variant="body2">Token Name 1</Typography>
                <Typography variant="body2">Token Name 2</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>
                <Typography variant="body2" color="white">T</Typography>
              </Avatar>
              <Box>
                <Typography variant="body2">Token Name 3</Typography>
                <Typography variant="body2">Token Name 4</Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 item xs={6} sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" fontWeight="bold">INTERACTIONS</Typography>
            <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Box
                sx={{
                  backgroundColor: 'grey.300',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'black',
                    fontSize: '0.75rem',
                    margin: 0, // No margin
                    padding: 0, // No padding
                  }}
                >
                  7d
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 1 }}> {/* Adjust margin for spacing */}
                <Typography variant="body2" sx={{ display: 'block' }}>
                  64
                </Typography>
                <Typography variant="body2" sx={{ display: 'block' }}>
                  +12.22%
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Trends;
