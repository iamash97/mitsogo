import React from 'react';
import { Box, Typography, TextField, IconButton, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';

function AllTokensHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ color: '#334155' }}>
        All Tokens
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          variant="outlined"
          placeholder="Search by token name or tag"
          size="small"
          sx={{
            bgcolor: '#fff',
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
              borderColor: '#e0e7ff',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            },
          }}
          InputProps={{
            endAdornment: (
              <IconButton edge="end" size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        
        <Button
          variant="outlined"
          startIcon={<ViewColumnIcon />}
          sx={{
            color: '#334155',
            borderColor: '#cbd5e1',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Columns
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            color: '#334155',
            borderColor: '#cbd5e1',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Filters
        </Button>
      </Stack>
    </Box>
  );
}

export default AllTokensHeader;